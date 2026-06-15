import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Layout } from './components/layout/Layout';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Contact } from './components/sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  const handleNavClick = (section: string) => {
    setActiveSection(section);
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header activeSection={activeSection} onNavClick={handleNavClick} />
      <Layout>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
