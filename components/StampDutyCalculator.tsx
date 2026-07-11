'use client';

import { useState, useMemo, useEffect } from 'react';
import { ChevronsUpDown, CheckCircle, Copy, Check } from 'lucide-react';
import type { StampDutyState } from '@/data/stampDutyRates';

interface CalculatorProps {
  stateData: StampDutyState;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

function calculateStampDuty(
  propertyValue: string,
  buyerCategory: BuyerCategory,
  stateData: StampDutyState
) {
  const value = parseFloat(propertyValue) || 0;

  if (value <= 0) {
    return {
      stampDutyPercent: 0,
      stampDutyAmount: 0,
      registrationPercent: 0,
      registrationAmount: 0,
      totalAmount: 0,
      concessionApplied: '',
    };
  }

  const hasWomenConcession = stateData.womenConcession && stateData.womenConcession > 0;
  const hasJointConcession =
    stateData.jointOwnershipConcession && stateData.jointOwnershipConcession > 0;

  let stampDutyPercent = stateData.stampDutyRate;
  const registrationPercent = stateData.registrationRate;
  let concessionApplied = '';

  if (buyerCategory === 'female' && hasWomenConcession) {
    stampDutyPercent = Math.max(0, stampDutyPercent - stateData.womenConcession!);
    concessionApplied = `Women's concession applied (${stateData.womenConcession}% discount)`;
  } else if (buyerCategory === 'joint' && hasJointConcession) {
    stampDutyPercent = Math.max(0, stampDutyPercent - stateData.jointOwnershipConcession!);
    concessionApplied = `Joint ownership concession applied (${stateData.jointOwnershipConcession}% discount)`;
  }

  const stampDutyAmount = (value * stampDutyPercent) / 100;
  const registrationAmount = (value * registrationPercent) / 100;
  const totalAmount = stampDutyAmount + registrationAmount;

  return {
    stampDutyPercent,
    stampDutyAmount,
    registrationPercent,
    registrationAmount,
    totalAmount,
    concessionApplied,
  };
}

type BuyerCategory = 'male' | 'female' | 'joint';

export function StampDutyCalculator({ stateData }: CalculatorProps) {
  const [propertyValue, setPropertyValue] = useState<string>('');
  const [buyerCategory, setBuyerCategory] = useState<BuyerCategory>('male');
  const [copied, setCopied] = useState(false);

  // Reset calculator when the selected state changes for a better UX.
  useEffect(() => {
    setPropertyValue('');
    setBuyerCategory('male');
  }, [stateData]);

  const hasWomenConcession = stateData.womenConcession && stateData.womenConcession > 0;
  const hasJointConcession =
    stateData.jointOwnershipConcession && stateData.jointOwnershipConcession > 0;
  const showBuyerCategory = hasWomenConcession || hasJointConcession;

  const calculations = useMemo(() => {
    return calculateStampDuty(propertyValue, buyerCategory, stateData);
  }, [propertyValue, buyerCategory, stateData]);

  const handlePropertyValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, '');
    setPropertyValue(rawValue);
  };

  const formattedPropertyValue = useMemo(() => {
    if (!propertyValue) return '';
    const number = parseInt(propertyValue, 10);
    if (isNaN(number)) return '';
    return new Intl.NumberFormat('en-IN').format(number);
  }, [propertyValue]);

  const handleCopy = () => {
    if (!calculations.totalAmount) return;

    navigator.clipboard.writeText(calculations.totalAmount.toString()).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-card rounded-xl border border-border shadow-sm p-6 sm:p-8">
        {/* Input Section */}
        <div className="space-y-6 mb-8">
          <div>
            <label htmlFor="propertyValue" className="block text-base font-medium text-foreground mb-2">
              Property Value (₹)
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-lg text-muted-foreground">
                ₹
              </span>
              <input
                id="propertyValue"
                type="text"
                inputMode="numeric"
                value={formattedPropertyValue}
                onChange={handlePropertyValueChange}
                placeholder="e.g., 50,00,000"
                className="w-full pl-10 pr-4 py-3 text-base bg-background border-2 border-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
              />
            </div>
          </div>

          {showBuyerCategory && (
            <div>
              <label htmlFor="buyerCategory" className="block text-base font-medium text-foreground mb-2">
                Buyer Category
              </label>
              <div className="relative">
                <select
                  id="buyerCategory"
                  value={buyerCategory}
                  onChange={(e) => setBuyerCategory(e.target.value as BuyerCategory)}
                  className="appearance-none w-full px-4 py-3 text-base bg-background border-2 border-border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                >
                  <option value="male">Male Buyer</option>
                  {hasWomenConcession && <option value="female">Female Buyer</option>}
                  {hasJointConcession && <option value="joint">Joint Ownership</option>}
                </select>
                <ChevronsUpDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          )}
        </div>

        {/* Results Section */}
        {propertyValue && parseFloat(propertyValue) > 0 && (
          <div className="bg-muted/30 rounded-xl p-6 space-y-4 border border-border animate-in fade-in duration-500">
            {/* Concession Message */}
            {calculations.concessionApplied && (
              <div className="flex items-center gap-3 p-3 bg-primary/10 border border-primary/20 rounded-lg">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm text-primary font-medium">{calculations.concessionApplied}</p>
              </div>
            )}

            {/* Breakdown */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Stamp Duty ({calculations.stampDutyPercent.toFixed(2)}%)</span>
                <span className="font-semibold text-foreground">{formatCurrency(calculations.stampDutyAmount)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">Registration ({calculations.registrationPercent.toFixed(2)}%)</span>
                <span className="font-semibold text-foreground">{formatCurrency(calculations.registrationAmount)}</span>
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-border pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-foreground">Total Payable</span>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-primary">
                    {formatCurrency(calculations.totalAmount)}
                  </span>
                  <button
                    onClick={handleCopy}
                    aria-label="Copy total amount"
                    className="p-2 rounded-md hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-green-500" />
                    ) : (
                      <Copy className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-1 text-right">
                On property value of {formatCurrency(parseFloat(propertyValue) || 0)}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="max-w-lg mx-auto mt-6 px-2 text-center">
        <p className="text-xs text-muted-foreground">
          <strong>Disclaimer:</strong> This calculator provides an estimate for informational
          purposes only. Actual charges can vary based on property details and local regulations.
          Always verify with local authorities for official calculations.
        </p>
      </div>
    </div>
  );
}
