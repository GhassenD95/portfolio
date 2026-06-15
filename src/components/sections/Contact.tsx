import { useState, useCallback } from 'react';
import { useTranslation } from '../../i18n/LanguageContext';
import { SectionHeader } from '../ui/SectionHeader';

export function Contact() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyEmail = useCallback(() => {
    navigator.clipboard.writeText('ghassendhaoui.eng@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  const channels = [
    {
      label: 'EMAIL',
      href: 'mailto:ghassendhaoui.eng@gmail.com',
      value: 'ghassendhaoui.eng@gmail.com',
      external: false,
      onClick: copyEmail,
    },
    {
      label: 'GITHUB',
      href: 'https://github.com/GhassenD95',
      value: 'github.com/GhassenD95',
      external: true,
    },
    {
      label: 'LINKEDIN',
      href: 'https://www.linkedin.com/in/ghassen-dhaoui-83369a318/',
      value: 'linkedin.com/in/ghassen-dhaoui-83369a318',
      external: true,
    },
  ];

  return (
    <section id="contact" className="pt-16 pb-8">
      <SectionHeader subtitle={t.contact.subtitle}>
        {t.contact.title}
      </SectionHeader>
      <p className="text-base text-on-surface-variant mb-8 max-w-lg">
        {t.about.status}
      </p>
      <div className="flex animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="w-1.5 shrink-0 bg-primary" />
        <div className="flex-1 border border-outline/40 border-l-0 px-5 py-5">
          <div className="space-y-4">
            {channels.map((ch) => (
              <div key={ch.label} className="group flex items-baseline gap-4">
                <span className="text-xs uppercase tracking-wider text-primary/70 w-16 shrink-0">
                  {ch.label}
                </span>
                <div className="relative">
                  <a
                    href={ch.href}
                    target={ch.external ? '_blank' : undefined}
                    rel={ch.external ? 'noopener noreferrer' : undefined}
                    onClick={ch.onClick}
                    className="text-base text-on-surface-variant border-b border-dashed border-outline/40 hover:text-primary hover:border-primary transition-colors duration-200"
                  >
                    {ch.value}
                  </a>
                  {ch.label === 'EMAIL' && (
                    <span
                      className={`absolute -right-14 top-0 text-[10px] uppercase tracking-wider transition-opacity duration-200 ${
                        copied ? 'opacity-100 text-primary' : 'opacity-0'
                      }`}
                    >
                      copied
                    </span>
                  )}
                </div>
                {ch.external && (
                  <span className="text-xs text-on-surface-variant/30 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-primary/50">
                    ↗
                  </span>
                )}
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-dashed border-outline/20 flex justify-between text-[10px] text-on-surface-variant/30 uppercase tracking-wider">
            <span>PAGE 1/1</span>
            <span>UNCLASSIFIED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
