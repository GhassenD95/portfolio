import { useTypewriter } from '../../hooks/useTypewriter';
import { BlinkingCursor } from '../ui/BlinkingCursor';

export function Hero() {
  const { displayed, done } = useTypewriter("AI Systems Engineer", 60);

  return (
    <section id="hero" className="pt-8 md:pt-16 pb-16 animate-fade-in">
      <div className="mb-4">
        <span className="text-xs text-on-surface-variant uppercase tracking-widest">
          DOSSIER-V.1 // IDENTITY
        </span>
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight leading-tight mb-2">
        Ghassen
        <br />
        Dhaoui
      </h1>
      <div className="text-xl md:text-2xl text-on-surface-variant h-8 mb-6">
        {displayed}
        {!done && <BlinkingCursor />}
      </div>
      <p className="text-base md:text-lg text-on-surface-variant max-w-xl leading-relaxed">
        Building production AI systems that go beyond chatbots.
        Focused on asynchronous pipelines, LLM integration,
        and event-driven architectures.
      </p>
      <div className="flex gap-6 mt-8">
        <a
          href="https://github.com/GhassenD95"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm uppercase tracking-wider border-b border-dashed border-outline hover:text-primary hover:border-primary transition-none"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/ghassendhaoui"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm uppercase tracking-wider border-b border-dashed border-outline hover:text-primary hover:border-primary transition-none"
        >
          LinkedIn
        </a>
        <a
          href="mailto:ghassen.dhaoui@email.com"
          className="text-sm uppercase tracking-wider border-b border-dashed border-outline hover:text-primary hover:border-primary transition-none"
        >
          Email
        </a>
      </div>
    </section>
  );
}
