import { Helmet } from 'react-helmet-async';
import { Skills } from '../components/sections/Skills';

export default function SkillsPage() {
  return (
    <div>
      <Helmet>
        <title>Skills | Ghassen Dhaoui</title>
      </Helmet>
      <Skills />
    </div>
  );
}
