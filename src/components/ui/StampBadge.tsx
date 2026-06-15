interface StampBadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
}

export function StampBadge({ children, variant = 'primary' }: StampBadgeProps) {
  const base = "inline-block text-[10px] uppercase font-bold px-2 py-0.5 -rotate-1";
  if (variant === 'outline') {
    return (
      <span className={`${base} border border-on-surface text-on-surface`}>
        {children}
      </span>
    );
  }
  return (
    <span className={`${base} text-primary border-2 border-primary bg-primary-fixed/10`}>
      {children}
    </span>
  );
}
