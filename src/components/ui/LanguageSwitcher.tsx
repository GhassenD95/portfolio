import { useTranslation } from '../../i18n/LanguageContext';
import type { Language } from '../../i18n/translations';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'de', label: 'DE' },
];

export function LanguageSwitcher() {
  const { lang, setLang } = useTranslation();

  return (
    <div className="flex gap-1 text-xs uppercase tracking-wider">
      {languages.map(({ code, label }) => {
        const isActive = lang === code;
        return (
          <button
            key={code}
            onClick={() => setLang(code)}
            className={`px-2 py-0.5 border transition-none cursor-pointer ${
              isActive
                ? 'text-primary border-primary bg-primary-fixed/10 font-bold'
                : 'text-on-surface-variant border-transparent hover:border-outline'
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
