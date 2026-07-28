import { useEffect, useRef, useState } from 'react';
import { Navigation } from './layout/Navigation';
import { Footer } from './layout/Footer';
import { ScrollProgress } from './layout/ScrollProgress';
import { useGsapSectionTransitions } from './hooks/useGsapSectionTransitions';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { Hero } from './sections/Hero';
import { Journey } from './sections/Journey';
import { Research } from './sections/Research';
import { TechnicalCapabilities } from './sections/TechnicalCapabilities';
import type { ThemeMode } from './types/theme';

function App() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const requestedTheme = new URLSearchParams(window.location.search).get('theme');

    if (requestedTheme === 'dark' || requestedTheme === 'light') {
      return requestedTheme;
    }

    const savedTheme = window.localStorage.getItem('portfolio-theme');

    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  useGsapSectionTransitions(pageRef);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div ref={pageRef} className={`theme-${theme} min-h-screen bg-[#08100f]`}>
      <ScrollProgress />
      <Navigation theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <About />
        <FeaturedProjects />
        <Research />
        <Experience />
        <TechnicalCapabilities />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
