import { Briefcase, GraduationCap } from 'lucide-react';
import { education, experience } from '../data/experience';
import { Reveal } from '../ui/Reveal';

export function Experience() {
  return (
    <section id="experience" className="bg-[#0c1715] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-200">
            Experience
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
            Practical software work, grounded by computer engineering study.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {experience.map((item) => (
            <Reveal key={item.id} className="border border-white/10 bg-white/[0.04] p-7 sm:p-9">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <Briefcase className="h-7 w-7 text-emerald-200" aria-hidden="true" />
                  <h3 className="mt-5 text-3xl font-black">{item.role}</h3>
                  <p className="mt-2 text-lg font-semibold text-slate-300">
                    {item.company} · {item.location}
                  </p>
                </div>
                <span className="border border-amber-200/30 px-4 py-2 text-sm font-bold text-amber-100">
                  {item.dates}
                </span>
              </div>

              <p className="mt-7 max-w-3xl text-base leading-7 text-slate-300">
                {item.summary}
              </p>

              <div className="mt-7 grid gap-6 md:grid-cols-2">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">
                    Work areas
                  </h4>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {item.workAreas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-[0.18em] text-sky-200">
                    Potential technologies
                  </h4>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="border border-white/10 px-3 py-1 text-sm text-slate-200"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <p className="mt-7 border-t border-white/10 pt-5 text-sm text-slate-400">
                {item.verificationNote}
              </p>
            </Reveal>
          ))}

          <div className="grid gap-6">
            {education.map((item) => (
              <Reveal key={item.institution} delay={0.08} className="border border-white/10 bg-white/[0.04] p-7">
                <GraduationCap className="h-7 w-7 text-amber-200" aria-hidden="true" />
                <h3 className="mt-5 text-2xl font-black">{item.area}</h3>
                <p className="mt-2 font-semibold text-slate-300">
                  {item.institution}
                </p>
                <p className="mt-1 text-sm text-slate-500">{item.location}</p>
                <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-300">
                  {item.details.map((detail) => (
                    <li key={detail} className="border-l border-amber-200/40 pl-4">
                      {detail}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
