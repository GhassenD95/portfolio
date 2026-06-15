export function Footer() {
  return (
    <footer className="border-t border-dashed border-outline mt-24 py-6">
      <div className="max-w-container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
        <span>© 2026 GHASSEN DHAOUI</span>
        <div className="flex gap-4">
          <a
            href="https://github.com/GhassenD95"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-surface transition-none"
          >
            GITHUB
          </a>
          <a
            href="https://linkedin.com/in/ghassendhaoui"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-on-surface transition-none"
          >
            LINKEDIN
          </a>
          <a href="mailto:ghassen.dhaoui@email.com" className="hover:text-on-surface transition-none">
            EMAIL
          </a>
        </div>
      </div>
    </footer>
  );
}
