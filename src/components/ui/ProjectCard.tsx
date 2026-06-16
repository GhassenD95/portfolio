import { Link } from 'react-router-dom';
import type { Project } from '../../data/projects';
import { useTranslation } from '../../i18n/LanguageContext';

const iconSlugs: Record<string, string> = {
  Java: 'openjdk',
  'Spring Boot': 'springboot',
  React: 'react',
  RabbitMQ: 'rabbitmq',
  Tesseract: '',
  Groq: '',
  Docker: 'docker',
};

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useTranslation();
  const isComingSoon = project.status === 'COMING_SOON';
  const description = t.projects.items[project.id] || project.description;

  const caseNum = String(index + 1).padStart(3, '0');
  const links = project.links || (project.github ? [{ label: 'GitHub', url: project.github }] : []);

  return (
    <article
      className="group cursor-pointer animate-fade-in"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="flex">
        <div className="w-10 shrink-0 relative">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary group-hover:opacity-60 transition-opacity duration-200" />
          <span className="block text-[10px] uppercase text-primary font-bold tracking-wider pt-1 pl-3 [writing-mode:vertical-lr] group-hover:opacity-40 transition-opacity duration-200">
            {t.projects.case_label}-{caseNum}
          </span>
        </div>
        <div className="flex-1 pl-5 pb-6 border-b border-dashed border-outline/50 group-hover:border-primary/30 transition-colors duration-200">
          <div className="flex justify-between items-baseline mb-2 gap-3">
            <Link
              to={`/projects/${project.id}`}
              className="text-xl md:text-2xl font-bold uppercase group-hover:text-primary transition-colors duration-200"
            >
              {project.title}
            </Link>
            {project.demo && (
              <span className="shrink-0 flex items-center gap-1 text-[10px] uppercase text-green-700 font-bold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                LIVE
              </span>
            )}
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed group-hover:text-on-surface transition-colors duration-200">
            {description}
          </p>
          <div className="flex flex-wrap gap-1.5 mt-3">
            {project.tags.map((tag) => {
              const slug = iconSlugs[tag];
              if (!slug) return null;
              return (
                  <span
                    key={tag}
                    className="inline-flex items-center justify-center border border-outline-variant px-1.5 py-1 group-hover:border-primary/30 transition-colors duration-200"
                    title={tag}
                  >
                    <img
                      src={`https://cdn.simpleicons.org/${slug}/5b4040`}
                      alt={tag}
                      className="w-3.5 h-3.5"
                      loading="lazy"
                    />
                  </span>
                );
              })}
          </div>
          <div className="mt-4 flex gap-4">
            {isComingSoon ? (
              <span className="text-xs uppercase text-primary font-bold border border-primary px-2 py-0.5 -rotate-1">
                {t.projects.coming_soon}
              </span>
            ) : (
              <>
                {links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dash-link text-xs text-primary font-bold uppercase tracking-wider"
                  >
                    {link.label} ↗
                  </a>
                ))}
                <Link
                  to={`/projects/${project.id}`}
                  className="text-xs text-on-surface-variant hover:text-primary uppercase tracking-wider transition-colors duration-200"
                >
                  {t.projects.detail_link}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
