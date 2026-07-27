import { Navigation } from './layout/Navigation';
import { About } from './sections/About';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { Hero } from './sections/Hero';

function App() {
  return (
    <div className="min-h-screen bg-[#08100f]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <FeaturedProjects />
      </main>
    </div>
  );
}

export default App;
