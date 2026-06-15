import { SectionHeader } from '../ui/SectionHeader';

export function Contact() {
  return (
    <section id="contact" className="pt-16 pb-8">
      <SectionHeader subtitle="// SIGNAL_CHANNEL">
        CONTACT
      </SectionHeader>
      <div className="space-y-4 text-base">
        <p className="text-on-surface-variant">
          Open to internship and junior developer opportunities.
        </p>
        <div className="flex flex-col gap-2">
          <a
            href="mailto:ghassen.dhaoui@email.com"
            className="text-primary hover:underline text-lg font-bold"
          >
            ghassen.dhaoui@email.com
          </a>
          <div className="flex gap-4 text-sm">
            <a
              href="https://github.com/GhassenD95"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-on-surface transition-none"
            >
              github.com/GhassenD95
            </a>
            <span className="text-outline">|</span>
            <a
              href="https://linkedin.com/in/ghassendhaoui"
              target="_blank"
              rel="noopener noreferrer"
              className="text-on-surface-variant hover:text-on-surface transition-none"
            >
              linkedin.com/in/ghassendhaoui
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
