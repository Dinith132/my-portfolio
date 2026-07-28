import { Navigation } from './layout/Navigation';
import { Footer } from './layout/Footer';
import { ScrollProgress } from './layout/ScrollProgress';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { Hero } from './sections/Hero';
import { Journey } from './sections/Journey';
import { Research } from './sections/Research';
import { TechnicalCapabilities } from './sections/TechnicalCapabilities';

function App() {
  return (
    <div className="min-h-screen bg-[#08100f]">
      <ScrollProgress />
      <Navigation />
      <main>
        <Hero />
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
