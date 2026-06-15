interface BlinkingCursorProps {
  className?: string;
}

export function BlinkingCursor({ className = '' }: BlinkingCursorProps) {
  return (
    <span className={`inline-block w-[6px] h-[1.1em] bg-on-surface animate-blink align-middle ${className}`} />
  );
}
