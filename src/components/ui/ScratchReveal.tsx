import { useRef, useState, useMemo, useCallback } from 'react';

const PX = 3;

const _ = 'transparent';
const SK = '#f5d6b8';
const HR = '#2d1b14';
const AC = '#9e0027';
const EY = '#1a1a1a';
const MO = '#9e0027';

const art: string[][] = [
  [_,_,_,_,HR,HR,HR,HR,_,_,_,_,_,_],
  [_,_,_,HR,HR,HR,HR,HR,HR,_,_,_,_,_],
  [_,_,HR,HR,HR,HR,HR,HR,HR,HR,_,_,_,_],
  [_,HR,HR,HR,HR,HR,HR,HR,HR,HR,HR,_,_,_],
  [_,HR,HR,SK,SK,SK,SK,SK,SK,HR,HR,_,_,_],
  [_,HR,HR,SK,SK,SK,SK,SK,SK,HR,HR,_,_,_],
  [_,HR,HR,SK,HR,SK,HR,SK,SK,HR,HR,_,_,_],
  [_,HR,HR,SK,SK,EY,SK,EY,SK,HR,HR,_,_,_],
  [_,HR,HR,SK,SK,SK,SK,SK,SK,HR,HR,_,_,_],
  [_,HR,HR,SK,SK,SK,SK,SK,SK,HR,HR,_,_,_],
  [_,HR,HR,SK,SK,MO,MO,SK,SK,HR,HR,_,_,_],
  [_,_,HR,HR,SK,SK,SK,HR,HR,HR,_,_,_,_],
  [_,_,_,HR,HR,HR,HR,HR,_,_,_,_,_,_],
  [_,_,_,AC,AC,AC,AC,AC,AC,_,_,_,_,_],
  [_,_,AC,AC,AC,AC,AC,AC,AC,AC,_,_,_,_],
  [_,_,AC,AC,AC,AC,AC,AC,AC,AC,_,_,_,_],
  [_,_,_,AC,AC,AC,AC,AC,AC,_,_,_,_,_],
  [_,_,_,_,AC,AC,AC,AC,_,_,_,_,_,_],
];

const W = 320;
const H = 150;
const BG = '#fcf9f8';

function PixelAvatar() {
  const h = art.length * PX;
  const w = art[0].length * PX;
  const rects: React.ReactElement[] = [];
  art.forEach((row, y) => {
    row.forEach((color, x) => {
      if (color !== _) {
        rects.push(
          <rect key={`${x}-${y}`} x={x * PX} y={y * PX} width={PX} height={PX} fill={color} />
        );
      }
    });
  });
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} shapeRendering="crispEdges" className="block shrink-0">
      {rects}
    </svg>
  );
}

export function ScratchReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tearX, setTearX] = useState(W);
  const [tearY, setTearY] = useState(H);
  const [revealed, setRevealed] = useState(false);
  const isDragging = useRef(false);
  const jitterRef = useRef<number[] | null>(null);

  if (!jitterRef.current) {
    const map: number[] = [];
    let seed = 12345;
    for (let i = 0; i < 200; i++) {
      seed = (seed * 9301 + 49297) % 233280;
      map.push(((seed / 233280) - 0.5) * 10);
    }
    jitterRef.current = map;
  }

  const buildClipPath = useCallback((tx: number, ty: number): string => {
    const cx = Math.max(0, Math.min(W, tx));
    const cy = Math.max(0, Math.min(H, ty));

    if (cx >= W && cy >= H) return `polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)`;

    const map = jitterRef.current!;

    // Points along the tear path from (W, cy) at right edge to (cx, H) at bottom edge
    const diagLen = Math.sqrt((W - cx) ** 2 + (H - cy) ** 2);
    const steps = Math.max(8, Math.floor(diagLen / 3));

    const tearPts: string[] = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const bx = W + (cx - W) * t;
      const by = cy + (H - cy) * t;
      // Perpendicular offset for jagged edge
      const perpX = -(H - cy);
      const perpY = (W - cx);
      const len = Math.sqrt(perpX * perpX + perpY * perpY) || 1;
      const j = map[i % map.length];
      tearPts.push(`${bx + (perpX / len) * j}px ${by + (perpY / len) * j}px`);
    }

    // Edges: top (left→right), right (top→tear start), then tear path, bottom (tear end→left), left
    const pts: string[] = [
      '0% 0%',
      '100% 0%',
      `100% ${cy}px`,
      ...tearPts,
      `${cx}px 100%`,
      '0% 100%',
    ];

    return `polygon(${pts.join(',')})`;
  }, []);

  const clipPath = useMemo(() => buildClipPath(tearX, tearY), [tearX, tearY, buildClipPath]);

  const getPos = (e: React.MouseEvent | React.TouchEvent): { x: number; y: number } => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return { x: W, y: H };
    if ('touches' in e) {
      return {
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      };
    }
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const update = (x: number, y: number) => {
    const clampedX = Math.max(0, Math.min(W, x));
    const clampedY = Math.max(0, Math.min(H, y));

    // Reveal if torn more than 60% of the card
    const tornArea = ((W - clampedX) * (H - clampedY)) / (W * H);
    if (tornArea > 0.5 || clampedX < 60 || clampedY < 40) {
      setRevealed(true);
      return;
    }

    setTearX(clampedX);
    setTearY(clampedY);
  };

  const handleDown = (e: React.MouseEvent | React.TouchEvent) => {
    if (revealed) return;
    isDragging.current = true;
    const pos = getPos(e);
    update(pos.x, pos.y);
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging.current || revealed) return;
    if ('touches' in e) e.preventDefault();
    const pos = getPos(e);
    update(pos.x, pos.y);
  };

  const handleUp = () => {
    isDragging.current = false;
  };

  return (
    <div className="flex justify-center mt-16 mb-4 select-none">
      <div
        ref={containerRef}
        className="relative shadow-md"
        style={{ width: W, height: H }}
      >
        {/* Revealed content (behind the paper) */}
        <div className="absolute inset-0 p-3 flex items-center gap-3 bg-surface border border-outline/60">
          <PixelAvatar />
          <p className="text-[11px] text-on-surface-variant leading-relaxed max-w-[230px]">
            &ldquo;Through my studies I&apos;ve been exposed to many languages and technologies.
            But at my core, I&apos;m a <span className="text-primary font-bold">problem solver</span> first
            &mdash; the right tool for the right job.&rdquo;
          </p>
        </div>

        {/* Paper cover */}
        {!revealed && (
          <div
            className="absolute inset-0 cursor-grab active:cursor-grabbing"
            style={{
              clipPath,
              background: BG,
              backgroundImage: `
                repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(0,0,0,0.015) 4px, rgba(0,0,0,0.015) 8px),
                repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(0,0,0,0.01) 4px, rgba(0,0,0,0.01) 8px)
              `,
            }}
            onMouseDown={handleDown}
            onMouseMove={handleMove}
            onMouseUp={handleUp}
            onMouseLeave={handleUp}
            onTouchStart={handleDown}
            onTouchMove={handleMove}
            onTouchEnd={handleUp}
          >
            {/* Folded corner hint in bottom-right */}
            <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none overflow-hidden">
              <div
                className="absolute bottom-0 right-0"
                style={{
                  width: 0, height: 0,
                  borderRight: '14px solid rgba(0,0,0,0.04)',
                  borderTop: '14px solid transparent',
                }}
              />
              <span
                className="absolute text-[7px] text-on-surface/20 uppercase tracking-widest font-bold"
                style={{ bottom: 1, right: 2, transform: 'rotate(-45deg)', transformOrigin: 'bottom right' }}
              >
                pull
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
