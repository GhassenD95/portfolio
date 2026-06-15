import { useState, useEffect } from 'react';

const PX = 3;

const T = 'transparent';
const S = '#f5d6b8';
const H = '#2d1b14';
const A = '#9e0027';
const E = '#1a1a1a';
const M = '#9e0027';

const art: string[][] = [
  //0  1  2  3  4  5  6  7  8  9  10 11 12 13
  [T, T, T, T, H, H, H, H, T, T, T, T, T, T], // 0 hair
  [T, T, T, H, H, H, H, H, H, T, T, T, T, T], // 1
  [T, T, H, H, H, H, H, H, H, H, T, T, T, T], // 2
  [T, H, H, H, H, H, H, H, H, H, H, T, T, T], // 3
  [T, H, H, S, S, S, S, S, S, H, H, T, T, T], // 4
  [T, H, H, S, S, S, S, S, S, H, H, T, T, T], // 5
  [T, H, H, S, H, S, H, S, S, H, H, T, T, T], // 6 eyebrows
  [T, H, H, S, S, E, S, E, S, H, H, T, T, T], // 7 eyes
  [T, H, H, S, S, S, S, S, S, H, H, T, T, T], // 8
  [T, H, H, S, S, S, S, S, S, H, H, T, T, T], // 9
  [T, H, H, S, S, M, M, S, S, H, H, T, T, T], // 10 smile
  [T, T, H, H, S, S, S, H, H, H, T, T, T, T], // 11 chin
  [T, T, T, H, H, H, H, H, T, T, T, T, T, T], // 12 neck
  [T, T, T, A, A, A, A, A, A, T, T, T, T, T], // 13 shirt
  [T, T, A, A, A, A, A, A, A, A, T, T, T, T], // 14
  [T, T, A, A, A, A, A, A, A, A, T, T, T, T], // 15
  [T, T, T, A, A, A, A, A, A, T, T, T, T, T], // 16 shirt bottom
  [T, T, T, T, A, A, A, A, T, T, T, T, T, T], // 17
];

const message =
  "Through my studies I've been exposed to many languages and technologies. But at my core, I'm a problem solver first — the right tool for the right job.";

function PixelAvatar() {
  const h = art.length * PX;
  const w = art[0].length * PX;
  const rects: React.ReactElement[] = [];
  art.forEach((row, y) => {
    row.forEach((color, x) => {
      if (color !== T) {
        rects.push(
          <rect key={`${x}-${y}`} x={x * PX} y={y * PX} width={PX} height={PX} fill={color} />
        );
      }
    });
  });
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} shapeRendering="crispEdges" className="block">
      {rects}
    </svg>
  );
}

function Typewriter({ text, onDone }: { text: string; onDone: () => void }) {
  const [displayed, setDisplayed] = useState('');
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (idx < text.length) {
      const t = setTimeout(() => {
        setDisplayed((p) => p + text[idx]);
        setIdx((i) => i + 1);
      }, 18);
      return () => clearTimeout(t);
    } else {
      onDone();
    }
  }, [idx, text, onDone]);

  return (
    <span className="text-xs text-on-surface-variant leading-relaxed italic">
      &ldquo;{displayed}
      {idx < text.length && <span className="animate-pulse">▌</span>}
      &rdquo;
    </span>
  );
}

export function PolaroidTip() {
  const [showing, setShowing] = useState(false);
  const [typed, setTyped] = useState(false);

  const handleMouseEnter = () => {
    setShowing(true);
    setTyped(false);
  };

  const handleMouseLeave = () => {
    setShowing(false);
    setTyped(false);
  };

  return (
    <div
      className="relative inline-block mt-16 mb-4 -ml-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* paperclip */}
      <svg
        width="14" height="30" viewBox="0 0 14 30" fill="none"
        className={`absolute -top-2 -left-0.5 z-10 transition-transform duration-300 ${showing ? 'translate-y-1 -rotate-6' : '-rotate-12'}`}
      >
        <path
          d="M2 28V8a5 5 0 0 1 10 0v14a2 2 0 0 1-4 0V8.5a1.5 1.5 0 0 1 3 0V24"
          stroke="#5b4040" strokeWidth="1.5" strokeLinecap="round"
        />
      </svg>

      {/* polaroid card */}
      <div
        className={`bg-surface border border-outline/60 p-2.5 pb-3 shadow-md transition-all duration-300 w-fit ${
          showing
            ? '-translate-y-2 rotate-0 shadow-lg'
            : '-rotate-1 hover:rotate-0'
        }`}
      >
        <div className={`mb-1.5 flex justify-center transition-transform duration-300 ${showing ? 'scale-110' : ''}`}>
          <PixelAvatar />
        </div>
        <p className="text-[8px] text-on-surface-variant/40 uppercase tracking-widest text-center font-bold">
          agent
        </p>
      </div>

      {/* speech bubble on hover */}
      {showing && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 z-20 animate-fade-in">
          <div className="bg-surface border border-outline p-3 shadow-md">
            <Typewriter text={message} onDone={() => setTyped(true)} />
            {typed && (
              <div className="mt-2 text-center">
                <span className="text-[10px] text-primary font-bold uppercase tracking-wider animate-pulse">
                  ▼
                </span>
              </div>
            )}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-outline" />
          </div>
        </div>
      )}
    </div>
  );
}
