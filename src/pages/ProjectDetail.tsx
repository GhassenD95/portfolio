import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from '../i18n/LanguageContext';
import { projects } from '../data/projects';
import { StampBadge } from '../components/ui/StampBadge';
import { ArchitectureDiagram } from '../components/ui/ArchitectureDiagram';

const iconSlugs: Record<string, string> = {
  'Java 21': 'openjdk',
  'Spring Boot 4': 'springboot',
  'Spring Data JPA': 'spring',
  'Spring AMQP': 'spring',
  RabbitMQ: 'rabbitmq',
  'Tesseract OCR 5': '',
  'Groq API (Llama 3.1 8B)': '',
  'PostgreSQL 16': 'postgresql',
  'React 19': 'react',
  TypeScript: 'typescript',
  'Tailwind CSS v4': 'tailwindcss',
  Docker: 'docker',
  'Docker Compose': 'docker',
  Nginx: 'nginx',
};

const specGroups = [
  { category: 'Backend', items: ['Java 21', 'Spring Boot 4', 'Spring Data JPA', 'Spring AMQP', 'RabbitMQ', 'PostgreSQL 16'] },
  { category: 'AI & Data', items: ['Tesseract OCR 5', 'Groq API (Llama 3.1 8B)'] },
  { category: 'Frontend', items: ['React 19', 'TypeScript', 'Tailwind CSS v4'] },
  { category: 'DevOps', items: ['Docker', 'Docker Compose', 'Nginx'] },
];

function SpecGroup({ items: rawItems }: { items: string[] }) {
  const groups = new Map<string, string[]>();
  const noIcon: string[] = [];

  for (const item of rawItems) {
    const slug = iconSlugs[item];
    if (slug) {
      const existing = groups.get(slug) || [];
      existing.push(item);
      groups.set(slug, existing);
    } else {
      noIcon.push(item);
    }
  }

  return (
    <div className="flex flex-wrap gap-1.5">
      {Array.from(groups.entries()).map(([slug, names]) => (
        <span
          key={slug}
          className="inline-flex items-center justify-center border border-outline-variant px-1.5 py-1"
          title={names.join(', ')}
        >
          <img
            src={`https://cdn.simpleicons.org/${slug}/5b4040`}
            alt={names.join(', ')}
            className="w-4 h-4"
            loading="lazy"
          />
        </span>
      ))}
      {noIcon.map((name) => (
        <span
          key={name}
          className="inline-flex items-center gap-1.5 border border-outline-variant px-2 py-0.5 text-xs text-on-surface-variant"
        >
          <span className="text-[8px] text-outline">◆</span>
          {name}
        </span>
      ))}
    </div>
  );
}

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-16 text-center">
        <p className="text-lg text-on-surface-variant">Project not found.</p>
        <Link to="/projects" className="text-primary hover:underline mt-4 inline-block">
          ← {t.projects.title}
        </Link>
      </div>
    );
  }

  const isComingSoon = project.status === 'COMING_SOON';
  const statusLabel = isComingSoon ? t.projects.coming_soon : project.status;
  const description = t.projects.items[project.id] || project.description;

  const links = project.links || (project.github ? [{ label: 'GitHub', url: project.github }] : []);

  return (
    <div className="page-enter">
      <Helmet>
        <title>{project.title} | Ghassen Dhaoui</title>
      </Helmet>

      <Link
        to="/projects"
        className="text-sm text-on-surface-variant hover:text-primary uppercase tracking-wider transition-none mb-8 inline-block"
      >
        ← {t.projects.title}
      </Link>

      <div className="flex justify-between items-baseline mt-4 mb-4">
        <h1 className="text-3xl md:text-4xl font-bold uppercase">{project.title}</h1>
        <StampBadge variant={isComingSoon ? 'outline' : 'primary'}>{statusLabel}</StampBadge>
      </div>

      <p className="text-sm text-on-surface-variant leading-relaxed max-w-2xl mb-4">
        {description}
      </p>

      {links.length > 0 && (
        <div className="flex flex-wrap gap-6 mb-6">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary text-primary px-4 py-2 text-sm font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-colors duration-200"
            >
              <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
              Launch Live Demo ↗
            </a>
          )}
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="dash-link text-sm text-primary font-bold uppercase tracking-wider"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}

      {isComingSoon ? (
        <div className="border border-dashed border-outline p-8 text-center text-on-surface-variant text-sm">
          {t.projects.coming_soon}
        </div>
      ) : (
        <div className="flex flex-col md:flex-row gap-8 mt-8">
          <div className="flex-1 min-w-0">
            <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">// ARCHITECTURE</h2>
            <ArchitectureDiagram />
          </div>
          <div className="md:w-56 shrink-0">
            <div className="sticky top-20 border border-outline-variant bg-surface p-4">
              <h2 className="text-[10px] uppercase tracking-widest text-primary font-bold mb-3">// TECH SPECS</h2>
              <div className="space-y-3">
                {specGroups.map(({ category, items }) => (
                  <div key={category}>
                    <p className="text-[9px] uppercase tracking-wider text-on-surface-variant/60 mb-1">{category}</p>
                    <SpecGroup items={items} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
