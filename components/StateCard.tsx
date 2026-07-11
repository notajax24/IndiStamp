'use client';

import Link from 'next/link';
import { ArrowRight, PersonStanding, Users } from 'lucide-react';

interface StateCardProps {
  state: string;
  slug: string;
  stampDutyRate: number;
  registrationRate: number;
  womenConcession?: number;
  jointOwnershipConcession?: boolean;
}

export function StateCard({
  state,
  slug,
  stampDutyRate,
  registrationRate,
  womenConcession,
  jointOwnershipConcession,
}: StateCardProps) {
  return (
    <Link href={`/stamp-duty-calculator/${slug}`}>
      <div className="group relative overflow-hidden rounded-xl border border-border bg-card hover:bg-card/80 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer p-5">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <h3 className="font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
              {state}
            </h3>
            <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300 ease-in-out group-hover:translate-x-1" />
          </div>

          {/* Rates */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Stamp Duty</span>
              <span className="font-semibold text-foreground">{stampDutyRate}%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Registration</span>
              <span className="font-semibold text-foreground">{registrationRate}%</span>
            </div>
          </div>

          {/* Badges */}
          {(womenConcession || jointOwnershipConcession) && (
            <div className="mt-4 flex flex-wrap gap-2">
              {womenConcession && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-secondary/40 text-secondary-foreground border border-secondary/60">
                  <PersonStanding className="w-3.5 h-3.5" />
                  Women Concession
                </span>
              )}
              {jointOwnershipConcession && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-accent-foreground border border-accent/40">
                  <Users className="w-3.5 h-3.5" />
                  Joint Ownership
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
