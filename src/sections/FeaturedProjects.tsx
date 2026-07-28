import { useGSAP } from '@gsap/react';
import { motion, useReducedMotion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Github } from 'lucide-react';
import { useRef } from 'react';
import { featuredProjects } from '../data/projects';
import type { FeaturedProject } from '../types/portfolio';
import { Reveal } from '../ui/Reveal';

gsap.registerPlugin(ScrollTrigger, useGSAP);

function ProjectVisual({ project }: { project: FeaturedProject }) {
  const shouldReduceMotion = useReducedMotion();
  const image = project.images[0];

  if (image && !image.isPlaceholder && image.src) {
    return (
      <figure className="relative min-h-72 overflow-hidden bg-[#111a18]">
        <motion.img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          initial={shouldReduceMotion ? false : { scale: 1.12, opacity: 0.7 }}
          whileInView={shouldReduceMotion ? undefined : { scale: 1, opacity: 0.95 }}
          whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="h-full min-h-72 w-full object-cover"
        />
        <motion.div
          initial={shouldReduceMotion ? false : { scaleX: 1 }}
          whileInView={shouldReduceMotion ? undefined : { scaleX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="absolute inset-0 origin-right bg-emerald-300"
        />
        {image.caption && (
          <figcaption className="absolute bottom-3 left-3 bg-[#08100f]/85 px-3 py-2 text-xs font-semibold text-slate-200">
            {image.caption}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <div
      className="grid min-h-72 place-items-center overflow-hidden bg-[#111a18] p-8"
      aria-label={image?.alt}
    >
      <div className="w-full max-w-sm">
        <div className="mb-5 flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
          <span>{project.shortTitle}</span>
          <span>{project.status}</span>
        </div>
        <div className="grid gap-3">
          {[92, 66, 84].map((width, index) => (
            <motion.div
              key={width}
              initial={shouldReduceMotion ? false : { scaleX: 0 }}
              whileInView={shouldReduceMotion ? undefined : { scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.85,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.08,
              }}
              className="h-3 origin-left bg-emerald-300/35"
              style={{ width: `${width}%` }}
            />
          ))}
        </div>
        <div className="mt-8 grid grid-cols-3 gap-3">
          {[0, 1, 2].map((item) => (
            <motion.div
              key={item}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.18 + item * 0.08,
              }}
              className="aspect-square border border-white/15 bg-white/[0.03]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectContent({
  project,
  index,
}: {
  project: FeaturedProject;
  index: number;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="grid gap-8 p-6 sm:p-8 lg:p-10">
      <div>
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="bg-emerald-300 px-3 py-1 font-black text-[#06110f]">
            0{index + 1}
          </span>
          <span className="text-slate-400">{project.category}</span>
        </div>
        <h3 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
          {project.summary}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.18em] text-amber-200">
            Problem
          </h4>
          <p className="mt-2 text-sm leading-6 text-slate-300">{project.problem}</p>
        </div>
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.18em] text-sky-200">
            Approach
          </h4>
          <p className="mt-2 text-sm leading-6 text-slate-300">{project.approach}</p>
        </div>
        <div>
          <h4 className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
            Result
          </h4>
          <p className="mt-2 text-sm leading-6 text-slate-300">{project.results}</p>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-black uppercase tracking-[0.18em] text-slate-400">
          Technologies
        </h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((technology, techIndex) => (
            <motion.span
              key={technology}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                ease: [0.16, 1, 0.3, 1],
                delay: techIndex * 0.025,
              }}
              className="border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-200"
            >
              {technology}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-semibold text-slate-400">{project.status}</p>
        <motion.a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          whileHover={shouldReduceMotion ? undefined : { x: 4 }}
          className="inline-flex items-center justify-center gap-2 border border-white/15 px-4 py-3 text-sm font-bold text-white transition hover:border-emerald-300/70 hover:text-emerald-100"
        >
          <Github size={16} aria-hidden="true" />
          Repository
          <ArrowUpRight size={16} aria-hidden="true" />
        </motion.a>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
  className = '',
}: {
  project: FeaturedProject;
  index: number;
  className?: string;
}) {
  return (
    <article
      data-gsap-card
      className={`grid overflow-hidden border border-white/10 bg-white/[0.035] lg:grid-cols-[0.9fr_1.1fr] ${className}`}
    >
      <ProjectVisual project={project} />
      <ProjectContent project={project} index={index} />
    </article>
  );
}

function PinnedProjectStory() {
  const stageRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const stage = stageRef.current;
      const track = trackRef.current;
      const progress = progressRef.current;

      if (!stage || !track) {
        return;
      }

      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const desktop = window.matchMedia('(min-width: 1024px)');

      if (reduceMotion.matches || !desktop.matches) {
        return;
      }

      const panels = gsap.utils.toArray<HTMLElement>('.project-panel', stage);
      const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 80);

      gsap.set(panels, { transformPerspective: 1200 });
      gsap.from(panels, {
        y: 80,
        autoAlpha: 0,
        rotateY: -5,
        duration: 1,
        stagger: 0.08,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: stage,
          start: 'top 72%',
          toggleActions: 'play none none reverse',
        },
      });

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: () => `+=${distance() + window.innerHeight * 0.8}`,
          pin: true,
          scrub: 0.75,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progress) {
              progress.style.transform = `scaleX(${self.progress})`;
            }
          },
        },
      });

      panels.forEach((panel) => {
        const visual = panel.querySelector('[data-project-visual]');

        if (visual) {
          gsap.fromTo(
            visual,
            { yPercent: -8 },
            {
              yPercent: 8,
              ease: 'none',
              scrollTrigger: {
                trigger: stage,
                containerAnimation: tween,
                start: 'left right',
                end: 'right left',
                scrub: true,
              },
            },
          );
        }
      });
    },
    { scope: stageRef },
  );

  return (
    <section
      ref={stageRef}
      aria-label="Pinned horizontal featured project story"
      className="relative hidden overflow-hidden bg-[#08100f] py-12 lg:block"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent" />
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden">
        <div className="absolute left-8 top-24 z-20 text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
          Scroll to move through projects
        </div>
        <div className="absolute bottom-10 left-8 right-8 z-20 h-px origin-left bg-white/10">
          <div
            ref={progressRef}
            className="h-px origin-left bg-emerald-300"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>
        <div ref={trackRef} className="flex w-max gap-8 px-8 will-change-transform">
          {featuredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-panel w-[min(86vw,1120px)] shrink-0"
            >
              <div data-project-visual>
                <ProjectCard project={project} index={index} className="min-h-[620px]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FeaturedProjects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="work" className="bg-[#08100f] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-200">
            Featured work
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
            Project stories from embedded systems, AI, control, and backend
            software.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            The homepage is limited to six projects. Missing repository details,
            final research results, screenshots, and live demos are marked
            plainly instead of filled with guesses.
          </p>
        </Reveal>
      </div>

      {shouldReduceMotion ? null : <PinnedProjectStory />}

      <div
        className={`mx-auto mt-16 grid max-w-7xl gap-6 px-5 sm:px-8 ${
          shouldReduceMotion ? '' : 'lg:hidden'
        }`}
      >
        {featuredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
