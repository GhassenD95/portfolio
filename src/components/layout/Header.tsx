import { BlinkingCursor } from '../ui/BlinkingCursor';

const navItems = ['IDENTITY', 'PROJECTS', 'SKILLS', 'CONTACT'] as const;

interface HeaderProps {
  activeSection: string;
  onNavClick: (section: string) => void;
}

export function Header({ activeSection, onNavClick }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full bg-surface/95 border-b border-on-surface z-40">
      <div className="max-w-container mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); onNavClick('hero'); }}
          className="text-lg font-bold uppercase tracking-tight text-primary"
        >
          DOSSIER-V.1
        </a>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => { e.preventDefault(); onNavClick(item.toLowerCase()); }}
                className={`text-sm uppercase tracking-wider transition-none ${
                  isActive
                    ? 'text-primary font-bold bg-secondary-container px-2 py-0.5'
                    : 'text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container px-2 py-0.5'
                }`}
              >
                {item}
                {isActive && <BlinkingCursor className="ml-1" />}
              </a>
            );
          })}
        </nav>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); onNavClick('contact'); }}
          className="text-sm border border-primary text-primary px-3 py-1 hover:bg-secondary-container transition-none"
        >
          CONTACT
        </a>
      </div>
    </header>
  );
}
