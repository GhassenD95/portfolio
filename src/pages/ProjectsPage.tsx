import { Helmet } from 'react-helmet-async';
import { Projects } from '../components/sections/Projects';

export default function ProjectsPage() {
  return (
    <div className="page-enter">
      <Helmet>
        <title>Projects | Ghassen Dhaoui</title>
      </Helmet>
      <Projects />
    </div>
  );
}
