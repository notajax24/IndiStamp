'use client';

interface StatItemProps {
  value: string | number;
  label: string;
  icon?: React.ReactNode;
}

function StatItem({ value, label, icon }: StatItemProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all">
      {icon && (
        <div className="mb-3 w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
          {icon}
        </div>
      )}
      <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        {value}
      </div>
      <p className="text-sm text-muted-foreground mt-2 text-center">{label}</p>
    </div>
  );
}

interface StatsSectionProps {
  stats: StatItemProps[];
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <StatItem key={index} {...stat} />
      ))}
    </div>
  );
}
