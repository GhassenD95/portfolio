import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import type { SkillDetail } from '../../data/skill-details';
import { useTranslation } from '../../i18n/LanguageContext';

interface SkillModalProps {
  name: string;
  detail: SkillDetail;
  onClose: () => void;
}

export function SkillModal({ name, detail, onClose }: SkillModalProps) {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('keydown', keyHandler);
    return () => {
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('keydown', keyHandler);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm">
      <div
        ref={ref}
        className="bg-surface border border-outline max-w-md w-full mx-4 p-5 animate-fade-in shadow-lg"
      >
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-sm font-bold uppercase tracking-wider">{name}</h3>
          <button
            onClick={onClose}
            className="text-on-surface-variant hover:text-primary text-sm cursor-pointer"
          >
            ✕
          </button>
        </div>
        <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
          {detail.summary}
        </p>
        {detail.projects.length > 0 && (
          <div>
            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant/60 mb-1">
              {t.projects.title}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {detail.projects.map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  onClick={onClose}
                  className="text-xs border border-primary text-primary px-2 py-0.5 hover:bg-primary-fixed/10 transition-none"
                >
                  {project.title} ↗
                </Link>
              ))}
            </div>
          </div>
        )}
        <button
          onClick={onClose}
          className="mt-4 text-xs text-on-surface-variant/60 hover:text-on-surface transition-none uppercase tracking-wider cursor-pointer"
        >
          [ close ]
        </button>
      </div>
    </div>
  );
}
