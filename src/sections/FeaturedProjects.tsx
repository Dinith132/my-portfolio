import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { featuredProjects } from '../data/projects';
import type { FeaturedProject } from '../types/portfolio';
import { Reveal } from '../ui/Reveal';

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

        <div className="mt-16 grid gap-6">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 70,
                      rotateX: index % 2 === 0 ? 5 : -5,
                    }
              }
              whileInView={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 1, y: 0, rotateX: 0 }
              }
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              viewport={{ once: true, margin: '-130px' }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="grid overflow-hidden border border-white/10 bg-white/[0.035] lg:grid-cols-[0.9fr_1.1fr]"
            >
              <ProjectVisual project={project} />

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
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.18em] text-sky-200">
                      Approach
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {project.approach}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                      Result
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      {project.results}
                    </p>
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
                  <p className="text-sm font-semibold text-slate-400">
                    {project.status}
                  </p>
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
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
