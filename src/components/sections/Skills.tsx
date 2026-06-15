import { skillCategories } from '../../data/skills';
import { SectionHeader } from '../ui/SectionHeader';

export function Skills() {
  return (
    <section id="skills" className="pt-16 pb-8">
      <SectionHeader subtitle="// TECHNICAL ASSET INVENTORY">
        SKILLS
      </SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category) => (
          <div key={category.title}>
            <h3 className="text-lg font-bold uppercase mb-3 border-b border-on-surface pb-1">
              {category.title}
            </h3>
            <ul className="space-y-1.5">
              {category.items.map((skill) => (
                <li key={skill} className="flex items-start gap-3 text-sm text-on-surface-variant">
                  <span className="text-primary font-bold mt-0.5">*</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
