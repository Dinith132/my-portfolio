import { useCallback, useEffect, useRef, useState } from 'react';
import { Navigation } from './layout/Navigation';
import { Footer } from './layout/Footer';
import { ScrollProgress } from './layout/ScrollProgress';
import { useGsapSectionTransitions } from './hooks/useGsapSectionTransitions';
import { profile } from './data/profile';
import { downloadWithProgress, type DownloadSnapshot } from './lib/downloadWithProgress';
import { loadComputerModel, subscribeComputerProgress } from './lib/computerModel';
import { About } from './sections/About';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { FeaturedProjects } from './sections/FeaturedProjects';
import { Hero } from './sections/Hero';
import { Journey } from './sections/Journey';
import { TechnicalCapabilities } from './sections/TechnicalCapabilities';
import type { ThemeMode } from './types/theme';
import { PageLoader } from './ui/PageLoader';

const emptyDownload: DownloadSnapshot = { percent: 0, loaded: 0, total: null };

function combinedPercent(portrait: DownloadSnapshot, model: DownloadSnapshot, ready: boolean) {
  if (ready) {
    return 100;
  }

  const total = (portrait.total ?? 0) + (model.total ?? 0);

  if (total <= 0) {
    return 0;
  }

  return Math.min(99, Math.round(((portrait.loaded + model.loaded) / total) * 100));
}

function App() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const requestedTheme = new URLSearchParams(window.location.search).get('theme');

    if (requestedTheme === 'dark' || requestedTheme === 'light') {
      return requestedTheme;
    }

    const savedTheme = window.localStorage.getItem('portfolio-theme');

    return savedTheme === 'light' ? 'light' : 'dark';
  });

  const [portraitProgress, setPortraitProgress] = useState<DownloadSnapshot>(emptyDownload);
  const [modelProgress, setModelProgress] = useState<DownloadSnapshot>(emptyDownload);
  const [portraitUrl, setPortraitUrl] = useState<string | null>(null);
  const [sceneReady, setSceneReady] = useState(false);
  const [loaderPhase, setLoaderPhase] = useState<'loading' | 'leaving' | 'done'>('loading');
  const assetsReady = portraitUrl !== null && sceneReady;

  useGsapSectionTransitions(pageRef);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    let active = true;
    let objectUrl: string | null = null;

    downloadWithProgress(profile.image.src, (snapshot) => {
      if (active) {
        setPortraitProgress(snapshot);
      }
    })
      .then(async ({ buffer, contentType }) => {
        const blob = new Blob([buffer], { type: contentType || 'image/jpeg' });
        const url = URL.createObjectURL(blob);
        const image = new Image();
        image.src = url;

        try {
          await image.decode();
        } catch {
          // The blob can still be painted if decode is unsupported.
        }

        if (!active) {
          URL.revokeObjectURL(url);
          return;
        }

        objectUrl = url;
        setPortraitUrl(url);
      })
      .catch(() => {
        if (active) {
          setPortraitUrl(profile.image.src);
        }
      });

    return () => {
      active = false;

      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, []);

  useEffect(() => {
    const unsubscribe = subscribeComputerProgress(setModelProgress);

    loadComputerModel().catch(() => {
      setModelProgress({ percent: 100, loaded: 1, total: 1 });
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!assetsReady) {
      return;
    }

    setLoaderPhase('leaving');
    const delay = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 520;
    const timer = window.setTimeout(() => setLoaderPhase('done'), delay);

    return () => window.clearTimeout(timer);
  }, [assetsReady]);

  useEffect(() => {
    if (loaderPhase === 'done') {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [loaderPhase]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  };

  const handleSceneReady = useCallback(() => {
    setSceneReady(true);
  }, []);

  useEffect(() => {
    const page = pageRef.current;

    if (!page) {
      return;
    }

    if (loaderPhase === 'done') {
      page.removeAttribute('inert');
      return;
    }

    page.setAttribute('inert', '');
  }, [loaderPhase]);

  return (
    <>
      <div
        ref={pageRef}
        className={`theme-${theme} min-h-screen bg-[#08100f]`}
        aria-hidden={loaderPhase !== 'done'}
      >
        <ScrollProgress />
        <Navigation theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero theme={theme} portraitSrc={portraitUrl} onSceneReady={handleSceneReady} />
          <About />
          <FeaturedProjects />
          <Experience />
          <TechnicalCapabilities />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
      {loaderPhase !== 'done' && (
        <PageLoader
          percent={combinedPercent(portraitProgress, modelProgress, assetsReady)}
          theme={theme}
          leaving={loaderPhase === 'leaving'}
        />
      )}
    </>
  );
}

export default App;
