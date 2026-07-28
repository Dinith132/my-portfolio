import { Brain, FileText, LineChart, Users } from 'lucide-react';
import { research } from '../data/research';
import { Reveal } from '../ui/Reveal';

const cards = [
  {
    title: 'Research question',
    text: research.researchQuestion,
    icon: Brain,
  },
  {
    title: 'Motivation',
    text: research.motivation,
    icon: LineChart,
  },
  {
    title: 'Thesis link',
    text: research.thesisLink,
    icon: FileText,
  },
  {
    title: 'Team',
    text: `${research.teamMembers.join(', ')}. ${research.supervisor}.`,
    icon: Users,
  },
];

export function Research() {
  return (
    <section id="research" className="bg-[#f4f1ea] py-24 text-[#101614] sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-800">
              Research
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
              Making recurrent model behaviour easier to inspect.
            </h2>
            <p className="mt-6 text-base font-semibold text-stone-600">
              {research.status}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map(({ title, text, icon: Icon }, index) => (
              <Reveal
                key={title}
                delay={index * 0.06}
                className="border border-[#101614]/10 bg-white p-6"
              >
                <Icon className="h-6 w-6 text-emerald-700" aria-hidden="true" />
                <h3 className="mt-5 text-lg font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">{text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal className="border border-[#101614]/10 bg-[#101614] p-7 text-white">
            <h3 className="text-xl font-black">Methodology</h3>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              {research.methodology.map((item) => (
                <li key={item} className="border-l border-emerald-300/50 pl-4">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08} className="border border-[#101614]/10 bg-white p-7">
            <h3 className="text-xl font-black">Model and XAI Stack</h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {[...research.modelArchitecture, ...research.xaiTechniques].map(
                (item) => (
                  <span
                    key={item}
                    className="border border-[#101614]/10 px-3 py-2 text-sm font-semibold text-stone-700"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </Reveal>

          <Reveal delay={0.16} className="border border-[#101614]/10 bg-white p-7">
            <h3 className="text-xl font-black">Visual Results</h3>
            <div className="mt-5 grid gap-3">
              {research.visualResults.map((item) => (
                <div key={item} className="bg-[#f4f1ea] px-4 py-3 text-sm text-stone-700">
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
