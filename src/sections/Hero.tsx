import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, Github, Linkedin, MapPin } from 'lucide-react';
import { profile, profileLinks } from '../data/profile';

const github = profileLinks.find((link) => link.name === 'github');
const linkedin = profileLinks.find((link) => link.name === 'linkedin');
const email = profileLinks.find((link) => link.name === 'email');
const cv = profileLinks.find((link) => link.name === 'cv');

const headingLines = [
  'I build',
  'software that',
  'connects',
  'intelligence,',
  'systems, and',
  'the physical',
  'world.',
];

const lineVariants = {
  hidden: { y: '112%', rotate: 2 },
  visible: { y: '0%', rotate: 0 },
};

const tickerItems = [
  'Embedded Systems',
  'Backend APIs',
  'AI Workflows',
  'Automation',
  'Control Systems',
  'Robotics',
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const portraitY = useTransform(scrollYProgress, [0, 0.28], [0, -70]);
  const gridY = useTransform(scrollYProgress, [0, 0.28], [0, 90]);

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#08100f] pt-24 text-white"
    >
      <div className="absolute inset-0 -z-10 opacity-80">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(45,212,191,0.18),transparent_34%),linear-gradient(245deg,rgba(251,191,36,0.14),transparent_28%)]" />
        <motion.div
          style={shouldReduceMotion ? undefined : { y: gridY }}
          className="motion-grid absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:140px_140px]"
        />
        <div
          aria-hidden="true"
          className="scan-beam absolute -left-12 right-0 top-0 h-32 rotate-[-6deg] bg-gradient-to-b from-transparent via-emerald-200/20 to-transparent blur-sm"
        />
        <motion.div
          initial={shouldReduceMotion ? false : { scaleX: 0 }}
          animate={shouldReduceMotion ? undefined : { scaleX: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
          className="absolute inset-x-0 top-24 h-px origin-left bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent"
        />
        <motion.div
          initial={shouldReduceMotion ? false : { scaleY: 0 }}
          animate={shouldReduceMotion ? undefined : { scaleY: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="absolute left-1/2 top-0 h-full w-px origin-top bg-white/10"
        />
        <motion.div
          aria-hidden="true"
          animate={shouldReduceMotion ? undefined : { x: ['-18%', '12%', '-18%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 left-1/2 h-48 w-[42rem] -translate-x-1/2 bg-emerald-300/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="transition-ribbon absolute bottom-10 left-0 h-px w-full bg-gradient-to-r from-transparent via-amber-200/50 to-transparent"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 overflow-hidden border-y border-white/10 bg-[#06110f]/85 py-3 backdrop-blur"
        aria-hidden="true"
      >
        <div className="ticker-track flex w-max items-center gap-4 whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <span
              key={`hero-rail-${item}-${index}`}
              className="inline-flex items-center gap-4 text-sm font-black uppercase tracking-[0.18em] text-slate-200"
            >
              <span className="h-2 w-2 bg-emerald-300" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 py-10 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:py-14">
        <div>
          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="mb-5 inline-flex items-center gap-2 border border-emerald-300/30 px-3 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-100"
          >
            <span className="h-2 w-2 bg-emerald-300" />
            {profile.role}
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
            className="mb-6 max-w-xl overflow-hidden border-y border-white/10 bg-white/[0.035] py-2"
            aria-hidden="true"
          >
            <div className="ticker-track flex w-max items-center gap-4 whitespace-nowrap">
              {[...tickerItems, ...tickerItems].map((item, index) => (
                <span
                  key={`intro-rail-${item}-${index}`}
                  className="inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.18em] text-slate-200"
                >
                  <span className="h-2 w-2 bg-emerald-300" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <h1
            aria-label={profile.headline}
            className="max-w-5xl text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-7xl 2xl:text-8xl"
          >
            {headingLines.map((line, index) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  aria-hidden="true"
                  variants={lineVariants}
                  initial={shouldReduceMotion ? false : 'hidden'}
                  animate={shouldReduceMotion ? undefined : 'visible'}
                  transition={{
                    duration: 0.9,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.38 + index * 0.075,
                  }}
                  className="block will-change-transform"
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 28 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 1.05 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={shouldReduceMotion ? false : 'hidden'}
            animate={shouldReduceMotion ? undefined : 'visible'}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.08, delayChildren: 1.18 },
              },
            }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {profile.focusAreas.map((area) => (
              <motion.span
                key={area}
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-100"
              >
                {area}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 1.38 }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <motion.a
              href="#work"
              whileHover={shouldReduceMotion ? undefined : { y: -4 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 bg-emerald-300 px-6 py-4 font-bold text-[#06110f] transition hover:bg-emerald-200"
            >
              Explore My Work
              <motion.span
                animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown size={18} aria-hidden="true" />
              </motion.span>
            </motion.a>
            {github && (
              <motion.a
                href={github.href}
                target="_blank"
                rel="noreferrer"
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 py-4 font-bold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                <Github size={18} aria-hidden="true" />
                View GitHub
              </motion.a>
            )}
            {linkedin && (
              <motion.a
                href={linkedin.href}
                target="_blank"
                rel="noreferrer"
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 border border-sky-200/25 px-6 py-4 font-bold text-sky-100 transition hover:border-sky-200/60 hover:bg-sky-200/10"
              >
                <Linkedin size={18} aria-hidden="true" />
                Contact Me
              </motion.a>
            )}
          </motion.div>
        </div>

        <motion.aside
          initial={shouldReduceMotion ? false : { x: 70, rotate: 1.5 }}
          animate={shouldReduceMotion ? undefined : { x: 0, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
          style={shouldReduceMotion ? undefined : { y: portraitY }}
          className="grid gap-5 lg:justify-self-end"
          aria-label="Profile summary"
        >
          <motion.div
            whileHover={shouldReduceMotion ? undefined : { y: -10, rotate: -0.6 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="portrait-halo relative max-w-md border border-white/12 bg-white/[0.04] p-4 shadow-2xl shadow-black/30"
          >
            <div className="pointer-events-none absolute -inset-8 -z-10">
              <span className="pulse-ring absolute inset-4 border border-emerald-300/35" />
              <span className="pulse-ring absolute inset-0 border border-amber-200/25 [animation-delay:0.7s]" />
            </div>
            <div className="portrait-float overflow-hidden">
              <motion.img
                src={profile.image.src}
                alt={profile.image.alt}
                initial={shouldReduceMotion ? false : { scale: 1.12 }}
                animate={shouldReduceMotion ? undefined : { scale: 1 }}
                transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1], delay: 0.95 }}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 left-4 right-4 border border-emerald-300/30 bg-[#0d1815]/95 p-4 backdrop-blur">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-200">
                <MapPin size={16} aria-hidden="true" />
                {profile.location}
              </div>
              <p className="mt-2 text-sm text-slate-400">
                Open to embedded software, backend engineering, systems
                development, and automation opportunities.
              </p>
            </div>
            <div
              aria-hidden="true"
              className="absolute right-6 top-6 grid h-16 w-20 grid-cols-5 items-end gap-1 border border-white/15 bg-[#06110f]/75 p-2 backdrop-blur"
            >
              {[44, 62, 36, 82, 54].map((height) => (
                <span
                  key={height}
                  className="signal-bar block bg-emerald-300"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
          </motion.div>

          <motion.dl
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 1.3 }}
            className="grid gap-3 border border-white/10 bg-[#0c1715] p-5 text-sm"
          >
            <div
              className="mb-1 flex items-center gap-2 border-b border-white/10 pb-3 text-xs font-black uppercase tracking-[0.18em] text-emerald-200"
              aria-hidden="true"
            >
              <span className="spark-dot h-2 w-2 bg-emerald-300" />
              <span className="spark-dot h-2 w-2 bg-amber-200" />
              <span className="spark-dot h-2 w-2 bg-sky-200" />
              Live build signal
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-slate-500">Email</dt>
              <dd className="text-right text-slate-200">{email?.value}</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-slate-500">CV</dt>
              <dd className="text-right text-amber-200">{cv?.value}</dd>
            </div>
          </motion.dl>
        </motion.aside>
      </div>
    </section>
  );
}
