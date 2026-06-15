import { useState } from 'react';

export function PinNote() {
  const [clicked, setClicked] = useState(false);
  const [done, setDone] = useState(false);

  const handleClick = () => {
    if (clicked) return;
    setClicked(true);
    setTimeout(() => setDone(true), 1200);
  };

  return (
    <div className="flex justify-center mt-16 mb-4 select-none">
      <div className="relative" style={{ width: 260, minHeight: 130 }}>
        {/* Pin */}
        <div
          onClick={handleClick}
          className={`absolute left-1/2 -translate-x-1/2 cursor-pointer z-10 transition-all duration-[1s] ${
            clicked
              ? 'translate-y-[300px] opacity-0 rotate-12'
              : 'hover:scale-110'
          }`}
          style={{
            top: 0,
            transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
            pointerEvents: clicked ? 'none' : 'auto',
          }}
        >
          <svg width="28" height="40" viewBox="0 0 28 40" fill="none">
            {/* Head */}
            <circle cx="14" cy="8" r="8" fill="#9e0027" stroke="#7a001f" strokeWidth="1" />
            <circle cx="14" cy="8" r="3" fill="rgba(255,255,255,0.2)" />
            {/* Body */}
            <rect x="12.5" y="15" width="3" height="18" rx="1" fill="#8a8a8a" />
            {/* Tip */}
            <path d="M14 33 L10 38 L18 38 Z" fill="#5a5a5a" />
          </svg>
        </div>

        {/* Message (appears after pin falls) */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            done ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <p
            className="text-sm leading-relaxed text-center max-w-[240px] -rotate-1"
            style={{ fontFamily: "'Caveat', cursive", color: '#5b4040' }}
          >
            Through my studies I've been exposed to many languages &amp; technologies.
            But at my core, I'm a problem solver first — the right tool for the right job.
          </p>
        </div>

        {/* Initial hint text */}
        {!clicked && (
          <p className="absolute text-[10px] text-on-surface-variant/30 uppercase tracking-widest text-center w-full" style={{ top: 48 }}>
            click the pin
          </p>
        )}
      </div>
    </div>
  );
}
