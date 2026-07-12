'use client';

import { useMemo, useState, useEffect, useRef } from 'react';
import { stampDutyRates } from '@/data/stampDutyRates';
import { StampDutyCalculator } from '@/components/StampDutyCalculator';
import { ChevronsUpDown, Search } from 'lucide-react';

export function HomeStampDutyCalculator() {
  // Sort states alphabetically for better UX in the dropdown
  const sortedStates = useMemo(
    () => [...stampDutyRates].sort((a, b) => a.state.localeCompare(b.state)),
    []
  );

  // Default to the first state in the list
  const [selectedStateSlug, setSelectedStateSlug] = useState(sortedStates[0].slug);
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedStateData = sortedStates.find((s) => s.slug === selectedStateSlug);

  // Sync search input with selected state
  useEffect(() => {
    if (selectedStateData) {
      setSearchQuery(selectedStateData.state);
    }
  }, [selectedStateData]);

  const filteredStates = useMemo(() => {
    // If search query is the same as the selected state, show all states
    if (searchQuery === selectedStateData?.state) {
      return sortedStates;
    }
    return sortedStates.filter((state) =>
      state.state.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedStates, selectedStateData]);

  // Handle clicks outside the component to close the dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        // Reset the input field text to the actual active state on close
        if (selectedStateData) {
          setSearchQuery(selectedStateData.state);
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef, selectedStateData]); // Added selectedStateData to dependencies

  const handleSelectState = (state: (typeof sortedStates)[0]) => {
    setSelectedStateSlug(state.slug);
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <label htmlFor="state-select" className="block text-lg font-semibold text-foreground mb-3">
          Select State/UT
        </label>
        <div className="relative" ref={wrapperRef}>
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            <input
              id="state-select"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => {
                setIsOpen(true);
                if (searchQuery === selectedStateData?.state) {
                  setSearchQuery('');
                }
              }}
              placeholder="Search for a state or UT..."
              role="combobox"
              aria-expanded={isOpen}
              aria-autocomplete="list"
              aria-controls="state-listbox"
              className="w-full pl-12 pr-10 py-4 text-base bg-background border-2 border-border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-200"
            />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground rounded-r-xl"
              aria-label="Toggle state list"
            >
              <ChevronsUpDown className="h-5 w-5" />
            </button>
          </div>
          {isOpen && (
            <ul
              id="state-listbox"
              role="listbox"
              className="absolute z-10 mt-2 w-full bg-card border border-border rounded-xl shadow-lg max-h-60 overflow-y-auto animate-in fade-in-0 zoom-in-95"
            >
              {filteredStates.map((state) => (
                <li
                  key={state.slug}
                  onClick={() => handleSelectState(state)}
                  role="option"
                  className="px-4 py-3 text-base text-foreground hover:bg-muted cursor-pointer transition-colors"
                >
                  {state.state}
                </li>
              ))}
              {filteredStates.length === 0 && <li className="px-4 py-3 text-base text-muted-foreground">No states found.</li>}
            </ul>
          )}
        </div>
      </div>

      {selectedStateData && <StampDutyCalculator stateData={selectedStateData} />}
    </div>
  );
}