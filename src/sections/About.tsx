import { Cpu, Layers3, Network, Workflow } from 'lucide-react';

const systemNotes = [
  {
    label: 'Software depth',
    text: 'Backend applications, asynchronous workflows, APIs, and database-backed systems.',
    icon: Layers3,
  },
  {
    label: 'Physical systems',
    text: 'Microcontrollers, sensors, communication modules, motors, PCB workflows, and control loops.',
    icon: Cpu,
  },
  {
    label: 'Intelligence',
    text: 'Applied AI, LSTM behaviour analysis, explainability, and model-interpretation workflows.',
    icon: Network,
  },
  {
    label: 'Automation',
    text: 'Practical engineering workflows that connect software services with repeatable operations.',
    icon: Workflow,
  },
];

export function About() {
  return (
    <section id="about" className="bg-[#f4f1ea] py-24 text-[#101614] sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-800">
              About
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
              Engineering across code, signals, and hardware.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-stone-700">
            <p>
              I am a Computer Engineer interested in building reliable systems
              across both software and hardware.
            </p>
            <p>
              My work includes backend applications, automation workflows,
              machine-learning research, and embedded projects using
              microcontrollers, sensors, communication modules, motors, and
              control systems.
            </p>
            <p>
              I enjoy understanding how systems work beneath the surface, from
              application architecture and asynchronous processing to model
              behaviour and hardware control. My long-term direction is toward
              embedded software and systems engineering, supported by practical
              software-development experience.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {systemNotes.map(({ label, text, icon: Icon }) => (
            <article
              key={label}
              className="border border-[#101614]/10 bg-white p-6 shadow-sm"
            >
              <Icon className="h-6 w-6 text-emerald-700" aria-hidden="true" />
              <h3 className="mt-5 text-lg font-black">{label}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
