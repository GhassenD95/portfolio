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

  const activeSection = location.pathname.split('/')[1] || 'identity';

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
        </div>
        <button
          onClick={() => navigate('/contact')}
          className="md:hidden text-sm border border-primary text-primary px-3 py-1 hover:bg-secondary-container transition-none cursor-pointer"
        >
          {t.contact_button}
        </button>
      </div>
    </header>
  );
}
