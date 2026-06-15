interface SectionHeaderProps {
  children: React.ReactNode;
  subtitle?: string;
}

export function SectionHeader({ children, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-tight">
        {children}
        <span className="text-primary ml-1">_</span>
      </h2>
      {subtitle && (
        <p className="text-sm text-on-surface-variant/70 uppercase tracking-widest mt-1">
          {subtitle}
        </p>
      )}
      <div className="h-1 bg-primary w-16 mt-3" />
    </div>
  );
}
