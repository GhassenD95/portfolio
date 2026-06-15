import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../i18n/LanguageContext';
import { skillCategories } from '../../data/skills';
import { getSkillDetail } from '../../data/skill-details';
import { projects } from '../../data/projects';
import { SectionHeader } from '../ui/SectionHeader';
import { Helmet } from 'react-helmet-async';

const iconSlugs: Record<string, string> = {
  Java: 'openjdk',
  'Spring Boot': 'springboot',
  RabbitMQ: 'rabbitmq',
  'Groq API (Llama 3.1)': '',
  'Tesseract OCR': '',
  'Prompt Engineering': '',
  PostgreSQL: 'postgresql',
  React: 'react',
  TypeScript: 'typescript',
  'Tailwind CSS': 'tailwindcss',
  Vite: 'vite',
  Docker: 'docker',
  Nginx: 'nginx',
  'Git / CI': 'git',
  Linux: 'linux',
};

const completedProjectIds = new Set(
  projects.filter((p) => p.status !== 'COMING_SOON').map((p) => p.id)
);

export function Skills() {
  const { t } = useTranslation();
  const [tooltip, setTooltip] = useState<{
    skill: string;
    top: number;
    left: number;
    above: boolean;
  } | null>(null);

  const toggleTooltip = useCallback((skill: string, badge: HTMLElement) => {
    if (tooltip && tooltip.skill === skill) {
      setTooltip(null);
      return;
    }
    const detail = getSkillDetail(skill);
    if (!detail) return;
    const rect = badge.getBoundingClientRect();
    const above = rect.top > window.innerHeight - rect.bottom;
    const tipW = 256;
    let left = rect.left + rect.width / 2 - tipW / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - tipW - 8));
    const top = above ? rect.top - 8 : rect.bottom + 8;
    setTooltip({ skill, top, left, above });
  }, [tooltip]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (tooltip && !(e.target as HTMLElement).closest('.skill-badge')) {
        setTooltip(null);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [tooltip]);

  const [phase, setPhase] = useState<'idle' | 'shaking' | 'falling' | 'revealed'>('idle');
  const [pressedKeys, setPressedKeys] = useState<Set<string>>(new Set());

  useEffect(() => {
    const down = new Set<string>();
    const revealCombo = ['shift', 'r'];
    const resetCombo = ['shift', 'x'];

    const handleKeyDown = (e: KeyboardEvent) => {
      down.add(e.key.toLowerCase());
      setPressedKeys(new Set(down));

      if (revealCombo.every(k => down.has(k)) && (phase === 'idle' || phase === 'shaking' || phase === 'falling')) {
        setPhase('shaking');
        setTimeout(() => setPhase('falling'), 600);
        setTimeout(() => setPhase('revealed'), 1400);
      }

      if (resetCombo.every(k => down.has(k)) && phase === 'revealed') {
        setPhase('idle');
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      down.delete(e.key.toLowerCase());
      setPressedKeys(new Set(down));
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [phase]);

  const contentClass =
    phase === 'shaking'
      ? 'animate-[shake_0.6s_ease-in-out]'
      : phase === 'falling'
        ? 'animate-[fall-down_0.8s_cubic-bezier(0.22,1,0.36,1)_forwards]'
        : '';

  const isShiftPressed = pressedKeys.has('shift');
  const isRPressed = pressedKeys.has('r');
  const isXPressed = pressedKeys.has('x');

  return (
    <section id="skills" className="page-enter pt-8 relative min-h-[400px]">
      <Helmet>
        <title>Skills | Ghassen Dhaoui</title>
      </Helmet>

      {phase !== 'revealed' && (
        <div className={contentClass}>
          <div className="flex items-start justify-between mb-12">
            <div>
              <SectionHeader subtitle={t.skills.subtitle}>
                {t.skills.title}
              </SectionHeader>
            </div>
            <div className="flex items-center gap-2 mt-1.5 shrink-0">
              <span
                className={`inline-flex items-center justify-center border px-3 py-2 text-xs uppercase tracking-wider font-bold transition-all duration-150 ${
                  isShiftPressed
                    ? 'bg-primary text-on-primary border-primary shadow-[0_0_14px_rgba(158,0,39,0.35)]'
                    : 'text-on-surface-variant border-outline/40 bg-surface-variant/20 animate-[glow-pulse_3s_ease-in-out_infinite]'
                }`}
              >
                Shift
              </span>
              <span className="text-sm text-on-surface-variant/50 font-bold">+</span>
              <span
                className={`inline-flex items-center justify-center border px-3 py-2 text-xs uppercase tracking-wider font-bold transition-all duration-150 ${
                  isRPressed
                    ? 'bg-primary text-on-primary border-primary shadow-[0_0_14px_rgba(158,0,39,0.35)]'
                    : 'text-on-surface-variant border-outline/40 bg-surface-variant/20 animate-[glow-pulse_3s_ease-in-out_infinite]'
                }`}
              >
                R
              </span>
              <span className="text-xs text-on-surface-variant/50 ml-1">?</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-lg font-bold uppercase mb-1">
                  {t.skills.categories[category.title] || category.title}
                </h3>
                <p className="text-xs text-on-surface-variant/60 mb-4">
                  {t.skills.context[category.title]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => {
                    const slug = iconSlugs[skill];
                    const detail = getSkillDetail(skill);
                    return (
                      <div key={skill} className="skill-badge">
                        <span
                          onClick={(e) => {
                            if (!detail) return;
                            e.stopPropagation();
                            toggleTooltip(skill, e.currentTarget);
                          }}
                          className={`inline-flex items-center gap-2 border px-2.5 py-1.5 text-xs text-on-surface-variant transition-all duration-200 select-none ${
                            detail
                              ? 'border-outline-variant hover:border-primary cursor-pointer'
                              : 'border-dashed border-outline/50'
                          }`}
                        >
                          {slug ? (
                            <img
                              src={`https://cdn.simpleicons.org/${slug}/5b4040`}
                              alt={skill}
                              className="w-4 h-4"
                              loading="lazy"
                            />
                          ) : (
                            <span className="w-4 h-4 inline-flex items-center justify-center text-[9px] text-on-surface-variant/40 font-mono">~</span>
                          )}
                          {skill}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {phase === 'revealed' && (
        <div className="flex flex-col items-center justify-center gap-8" style={{ minHeight: 400 }}>
          <div className="max-w-md text-center animate-fade-in">
            <p className="text-base leading-relaxed text-on-surface-variant">
              {t.easterEgg.line}
            </p>
          </div>
          <div className="flex items-center gap-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span
              className={`inline-flex items-center justify-center border px-3 py-2 text-xs uppercase tracking-wider font-bold transition-all duration-150 ${
                isShiftPressed
                  ? 'bg-primary text-on-primary border-primary shadow-[0_0_14px_rgba(158,0,39,0.35)]'
                  : 'text-on-surface-variant border-outline/40 bg-surface-variant/20 animate-[glow-pulse_3s_ease-in-out_infinite]'
              }`}
            >
              Shift
            </span>
            <span className="text-sm text-on-surface-variant/50 font-bold">+</span>
            <span
              className={`inline-flex items-center justify-center border px-3 py-2 text-xs uppercase tracking-wider font-bold transition-all duration-150 ${
                isXPressed
                  ? 'bg-primary text-on-primary border-primary shadow-[0_0_14px_rgba(158,0,39,0.35)]'
                  : 'text-on-surface-variant border-outline/40 bg-surface-variant/20 animate-[glow-pulse_3s_ease-in-out_infinite]'
              }`}
            >
              X
            </span>
            <span className="text-xs text-on-surface-variant/60 ml-1 tracking-wider">{t.easterEgg.reset}</span>
          </div>
        </div>
      )}

      {tooltip && createPortal(
        <div className="fixed inset-0 z-50 pointer-events-none">
          <div
            style={{ top: tooltip.top, left: tooltip.left }}
            className="absolute w-64 pointer-events-auto"
          >
            <div className="bg-surface border border-outline p-3 shadow-md text-xs text-on-surface-variant leading-relaxed">
              <p className="mb-2">{t.skillSummaries[tooltip.skill]}</p>
              {(() => {
                const detail = getSkillDetail(tooltip.skill);
                if (!detail) return null;
                const projectLinks = detail.projects.filter((p) => completedProjectIds.has(p.id));
                if (projectLinks.length === 0) return null;
                return (
                  <div className="flex flex-wrap gap-1">
                    {projectLinks.map((project) => (
                      <Link
                        key={project.id}
                        to={`/projects/${project.id}`}
                        className="text-primary hover:underline uppercase tracking-wider text-[10px]"
                      >
                        {t.projects.items[project.id] || project.title} ↗
                      </Link>
                    ))}
                  </div>
                );
              })()}
              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  ...(tooltip.above ? { bottom: -4 } : { top: -4 }),
                }}
                className={`w-0 h-0 border-l-4 border-r-4 border-transparent ${
                  tooltip.above ? 'border-t-4 border-t-outline' : 'border-b-4 border-b-outline'
                }`}
              />
            </div>
          </div>
        </div>,
        document.body
      )}

    </section>
  );
}
