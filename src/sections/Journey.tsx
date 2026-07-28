import { ArrowRight } from 'lucide-react';
import { journey } from '../data/journey';
import { Reveal } from '../ui/Reveal';

export function Journey() {
  return (
    <section id="journey" className="bg-[#08100f] py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-200">
            Engineering journey
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
            The direction is systems: software that can reason, communicate, and control.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-4">
          {journey.map((item, index) => (
            <Reveal
              key={item.id}
              delay={index * 0.05}
              className="grid gap-5 border border-white/10 bg-white/[0.035] p-6 sm:grid-cols-[auto_1fr_auto] sm:items-center"
            >
              <span className="grid h-12 w-12 place-items-center bg-emerald-300 font-black text-[#06110f]">
                {index + 1}
              </span>
              <div>
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-300">
                  {item.description}
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-[0.16em] text-amber-100">
                  {item.status}
                </p>
              </div>
              {index < journey.length - 1 && (
                <ArrowRight className="hidden h-6 w-6 text-slate-500 sm:block" aria-hidden="true" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
