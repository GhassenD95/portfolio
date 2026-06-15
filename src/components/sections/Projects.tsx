import { projects } from '../../data/projects';
import { SectionHeader } from '../ui/SectionHeader';
import { ProjectCard } from '../ui/ProjectCard';

export function Projects() {
  return (
    <section id="projects" className="pt-16 pb-8">
      <SectionHeader subtitle="// ARCHIVE_RECORDS">
        PROJECTS
      </SectionHeader>
      <div className="space-y-2">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
