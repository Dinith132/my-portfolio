import { motion, useReducedMotion } from 'framer-motion';
import { Cloud, Database, Layers3, Workflow } from 'lucide-react';
import { Reveal } from '../ui/Reveal';

const systemNotes = [
  {
    label: 'Full-stack',
    text: 'React interfaces with NestJS, Node.js, and Spring Boot services behind them.',
    icon: Layers3,
  },
  {
    label: 'Backend',
    text: 'PostgreSQL, Redis, BullMQ, REST APIs, and gRPC contracts.',
    icon: Database,
  },
  {
    label: 'Integrations',
    text: 'Event-driven messaging, third-party channels, and workflow automation.',
    icon: Workflow,
  },
  {
    label: 'Delivery',
    text: 'Docker, GitHub Actions, Firebase, and Azure deployments.',
    icon: Cloud,
  },
];

export function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="bg-[#f4f1ea] py-24 text-[#101614] sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-800">
              About
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
              Full-stack software, from the interface to the service.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              I am a software engineer focused on full-stack products: React
              interfaces, NestJS and Node services, and the data and messaging
              around them.
            </p>
            <p>
              My recent work includes a one-year internship on a live production
              platform, plus projects in desktop tools, real-time audio and
              video, and exam systems.
            </p>
            <p>
              I like shipping features that stay reliable in production, from
              REST and gRPC services to queues, CI/CD, and third-party
              integrations.
            </p>
          </div>
        </Reveal>

        <motion.div
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={{ once: true, margin: '-120px' }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.09 } },
          }}
          className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {systemNotes.map(({ label, text, icon: Icon }) => (
            <motion.article
              key={label}
              variants={{
                hidden: { opacity: 0, y: 34, rotate: -1 },
                visible: { opacity: 1, y: 0, rotate: 0 },
              }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              whileHover={shouldReduceMotion ? undefined : { y: -8 }}
              className="border border-[#101614]/10 bg-white p-6 shadow-sm"
            >
              <Icon className="h-6 w-6 text-emerald-700" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-black">{label}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
