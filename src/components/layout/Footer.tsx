import { useTranslation } from '../../i18n/LanguageContext';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-dashed border-outline mt-24 py-6">
      <div className="max-w-container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
        <span>{t.footer.copyright}</span>
        <div className="flex gap-4">
          <a
            href="https://github.com/GhassenD95"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-surface transition-none"
          >
            {t.footer.github}
          </a>
          <a
            href="https://www.linkedin.com/in/ghassen-dhaoui-83369a318/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-surface transition-none"
          >
            {t.footer.linkedin}
          </a>
          <a href="mailto:ghassendhaoui.eng@gmail.com" className="hover:text-on-surface transition-none">
            {t.footer.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
