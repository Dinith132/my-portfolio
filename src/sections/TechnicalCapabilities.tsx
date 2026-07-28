import { Cpu, Database, FlaskConical, PenTool, Wrench } from 'lucide-react';
import { skillGroups } from '../data/skills';
import { Reveal } from '../ui/Reveal';

const icons = [Cpu, Database, FlaskConical, Wrench, PenTool];

export function TechnicalCapabilities() {
  return (
    <section id="skills" className="bg-[#f4f1ea] py-24 text-[#101614] sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-800">
              Technical capabilities
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
              Skills grouped by engineering purpose, not fake percentages.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-stone-700">
            Each group is labelled by confidence level so the page shows where
            the work is strongest and where skills come from academic or project
            exposure.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {skillGroups.map((group, index) => {
            const Icon = icons[index] ?? Cpu;

            return (
              <Reveal
                key={group.id}
                delay={index * 0.05}
                className="border border-[#101614]/10 bg-white p-6"
              >
                <Icon className="h-6 w-6 text-emerald-700" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-black">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {group.purpose}
                </p>
                <p className="mt-5 inline-flex bg-[#101614] px-3 py-2 text-xs font-bold text-emerald-100">
                  {group.level}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="border border-[#101614]/10 px-2.5 py-1.5 text-xs font-semibold text-stone-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
