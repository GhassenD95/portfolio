import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center page-enter">
      <Helmet>
        <title>404 | Ghassen Dhaoui</title>
      </Helmet>
      <span className="text-6xl font-bold text-primary mb-4">404</span>
      <p className="text-on-surface-variant mb-6">File not found.</p>
      <Link
        to="/identity"
        className="text-sm uppercase tracking-wider border border-primary text-primary px-4 py-2 hover:bg-primary-fixed/10 transition-none"
      >
        ← Return to Index
      </Link>
    </div>
  );
}
