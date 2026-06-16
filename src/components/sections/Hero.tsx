import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../../i18n/LanguageContext';
import { useTypewriter } from '../../hooks/useTypewriter';
import { BlinkingCursor } from '../ui/BlinkingCursor';
import { StampBadge } from '../ui/StampBadge';

const keywordSets: Record<string, string[]> = {
  en: ['backend systems', 'AI-powered applications', 'real-world data', 'built to scale'],
  fr: ['systèmes backend', 'applications IA', 'données réelles', 'passer à l\'échelle'],
  de: ['Backend-Systeme', 'KI-Anwendungen', 'reale Daten', 'skalierbar'],
};

function highlightText(text: string, lang: string): React.ReactNode[] {
  const kw = keywordSets[lang] || keywordSets.en;
  const pattern = new RegExp(`(${kw.join('|')})`, 'gi');
  const parts = text.split(pattern);
  return parts.map((part, i) =>
    kw.some((k) => k.toLowerCase() === part.toLowerCase())
      ? <span key={i} className="font-bold">{part}</span>
      : part
  );
}

export function Hero() {
  const { t, lang } = useTranslation();
  const { displayed, done } = useTypewriter(t.hero.title, 60);

  const fields: { label: string; value: string }[] = [
    { label: 'LOCATION', value: t.about.location },
    { label: 'LANGUAGES', value: t.about.languages },
    { label: 'FOCUS', value: t.about.focus },
    { label: 'EDUCATION', value: t.about.education },
    { label: 'STATUS', value: t.about.status },
  ];

  return (
    <section id="hero" className="page-enter">
      <Helmet>
        <title>Ghassen Dhaoui | AI Systems Engineer</title>
      </Helmet>
      <div className="mb-4">
        <span className="text-xs text-on-surface-variant uppercase tracking-widest">
          {t.hero.label}
        </span>
      </div>
      <div className="flex flex-col md:flex-row md:items-start md:gap-12">
        <div className="flex-1">
          <div className="flex items-start gap-4 md:block">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-tight mb-2">
              Ghassen
              <br />
              Dhaoui
            </h1>
            <div aria-label="Ghassen Dhaoui" className="md:hidden shrink-0 w-20 h-20 rounded-full border-2 border-outline overflow-hidden bg-surface-container animate-fade-in bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/profile.jpeg)', backgroundPosition: 'center 30%', filter: 'saturate(0.85) contrast(1.05)', animationDelay: '0.3s' }} />
          </div>
          <div className="text-xl md:text-2xl text-on-surface-variant h-8 mb-6">
            {displayed}
            {!done && <BlinkingCursor />}
          </div>
          <p className="text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed">
            {highlightText(t.hero.description, lang)}
          </p>
          <div className="flex gap-6 mt-8">
            <a
              href="https://github.com/GhassenD95"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-sm uppercase tracking-wider border-b border-dashed border-outline hover:text-primary transition-colors duration-200"
            >
              GitHub
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ghassen-dhaoui-83369a318/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1.5 text-sm uppercase tracking-wider border-b border-dashed border-outline hover:text-primary transition-colors duration-200"
            >
              LinkedIn
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
            <a
              href="mailto:ghassendhaoui.eng@gmail.com"
              className="group flex items-center gap-1.5 text-sm uppercase tracking-wider border-b border-dashed border-outline hover:text-primary transition-colors duration-200"
            >
              Email
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </div>
        <div className="hidden md:block mt-8 md:mt-0 shrink-0">
          <div aria-label="Ghassen Dhaoui" className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-outline overflow-hidden bg-surface-container animate-fade-in bg-cover bg-no-repeat" style={{ backgroundImage: 'url(/profile.jpeg)', backgroundPosition: 'center 30%', filter: 'saturate(0.85) contrast(1.05)', animationDelay: '0.3s' }} />
        </div>
      </div>
      <div className="mt-12 max-w-xl space-y-6">
        <div
          className="flex animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="w-1.5 shrink-0 bg-primary" />
          <div className="flex-1 border border-outline/40 border-l-0 px-5 py-5">
            <div className="flex items-center justify-between mb-3">
              <span className="block text-xs uppercase text-primary font-bold tracking-wider">
                // EXPERIENCE
              </span>
              <StampBadge variant="primary">INTERNSHIP 2024</StampBadge>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs uppercase tracking-wider text-primary/70">INTERN · TALAN TUNISIE</span>
              <span className="text-base text-on-surface-variant">{t.about.experience}</span>
            </div>
          </div>
        </div>
        <div
          className="flex animate-fade-in"
          style={{ animationDelay: '0.25s' }}
        >
          <div className="w-1.5 shrink-0 bg-primary" />
          <div className="flex-1 border border-outline/40 border-l-0 px-5 py-5">
            <span className="block text-xs uppercase text-primary font-bold tracking-wider mb-5">
              // PROFILE
            </span>
            <div className="space-y-4">
              {fields.map((f) => (
                <div key={f.label} className="flex flex-col gap-0.5">
                  <span className="text-xs uppercase tracking-wider text-primary/70">{f.label}</span>
                  <span className="text-base text-on-surface-variant">{f.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
