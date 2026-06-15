import { useTranslation } from '../../i18n/LanguageContext';
import { projects } from '../../data/projects';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectCard } from '../ui/ProjectCard';

export function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="pt-16 pb-8">
      <SectionHeader subtitle={t.projects.subtitle}>
        {t.projects.title}
      </SectionHeader>
      <div className="space-y-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
