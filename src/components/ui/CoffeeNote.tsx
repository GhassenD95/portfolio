import { useState } from 'react';

export function CoffeeNote() {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex justify-center mt-16 mb-4">
      <div
        className="relative"
        style={{ width: 240, height: 120 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Coffee ring */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(
                circle at 52% 48%,
                transparent 32%,
                rgba(110, 70, 30, 0.06) 36%,
                rgba(110, 70, 30, 0.18) 40%,
                rgba(110, 70, 30, 0.12) 43%,
                rgba(110, 70, 30, 0.06) 46%,
                transparent 50%
              ),
              radial-gradient(
                circle at 48% 52%,
                transparent 34%,
                rgba(110, 70, 30, 0.03) 38%,
                transparent 44%
              )
            `,
          }}
        />

        {/* Handwritten message */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
            hovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <p
            className="text-sm leading-relaxed text-center max-w-[200px] -rotate-1"
            style={{ fontFamily: "'Caveat', cursive", color: '#5b4040' }}
          >
            Through my studies I've been exposed to many languages &amp; technologies.
            But at my core, I'm a problem solver first — the right tool for the right job.
          </p>
        </div>
      </div>
    </div>
  );
}
