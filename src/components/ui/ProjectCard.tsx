import type { Project } from '../../data/projects';
import { StampBadge } from '../ui/StampBadge';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const statusLabel = project.status === 'COMING_SOON' ? 'COMING SOON' : project.status;
  const statusVariant = project.status === 'COMING_SOON' ? 'outline' : 'primary';

  return (
    <article className="group cursor-pointer animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
      <div className="flex justify-between items-baseline mb-2">
        <h3 className="text-xl md:text-2xl font-bold uppercase group-hover:text-primary transition-colors duration-0">
          {project.title}
        </h3>
        <StampBadge variant={statusVariant}>{statusLabel}</StampBadge>
      </div>
      <p className="text-base text-on-surface-variant pl-4 border-l-2 border-outline-variant leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-3 pl-4">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs text-on-surface-variant/60 uppercase tracking-wider">
            {tag}
          </span>
        ))}
      </div>
      {project.github && (
        <div className="mt-3 pl-4 flex gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-primary hover:underline"
          >
            GitHub →
          </a>
        </div>
      )}
      <div className="my-6 border-t border-dashed border-outline/50" />
    </article>
  );
}
