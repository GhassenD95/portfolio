import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BlinkingCursor } from '../ui/BlinkingCursor';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { useTranslation } from '../../i18n/LanguageContext';

const navSections = [
  { path: '/identity', tKey: 'identity' as const },
  { path: '/projects', tKey: 'projects' as const },
  { path: '/skills', tKey: 'skills' as const },
  { path: '/contact', tKey: 'contact' as const },
] as const;

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const activeSection = location.pathname.split('/')[1] || 'identity';

  const handleNav = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-surface/95 border-b border-on-surface z-40">
      <div className="max-w-container mx-auto px-4 md:px-6 h-14 flex items-center justify-between">
        <button
          onClick={() => navigate('/identity')}
          className="text-lg font-bold uppercase tracking-tight text-primary cursor-pointer"
        >
          {t.site.badge}
        </button>
        <div className="flex items-center gap-4">
          <nav className="hidden md:flex gap-6">
            {navSections.map(({ path, tKey }) => {
              const isActive = activeSection === tKey;
              return (
                <button
                  key={path}
                  onClick={() => navigate(path)}
                  className={`text-sm uppercase tracking-wider transition-none cursor-pointer ${
                    isActive
                      ? 'text-primary font-bold bg-secondary-container px-2 py-0.5'
                      : 'text-on-surface-variant hover:bg-secondary-container hover:text-on-secondary-container px-2 py-0.5'
                  }`}
                >
                  {t.nav[tKey]}
                  {isActive && <BlinkingCursor className="ml-1" />}
                </button>
              );
            })}
          </nav>
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1 p-2 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-on-surface transition-none ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-5 h-0.5 bg-on-surface transition-none ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-on-surface transition-none ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-on-surface bg-surface/95">
          <div className="flex flex-col py-2">
            {navSections.map(({ path, tKey }) => {
              const isActive = activeSection === tKey;
              return (
                <button
                  key={path}
                  onClick={() => handleNav(path)}
                  className={`text-left px-6 py-3 text-sm uppercase tracking-wider cursor-pointer ${
                    isActive
                      ? 'text-primary font-bold bg-secondary-container'
                      : 'text-on-surface-variant hover:bg-secondary-container'
                  }`}
                >
                  {t.nav[tKey]}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
