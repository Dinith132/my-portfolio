import { ArrowDown, Github, Linkedin, MapPin } from 'lucide-react';
import { profile, profileLinks } from '../data/profile';

const github = profileLinks.find((link) => link.name === 'github');
const linkedin = profileLinks.find((link) => link.name === 'linkedin');
const email = profileLinks.find((link) => link.name === 'email');
const cv = profileLinks.find((link) => link.name === 'cv');

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#08100f] pt-28 text-white"
    >
      <div className="absolute inset-0 -z-10 opacity-80">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(45,212,191,0.18),transparent_34%),linear-gradient(245deg,rgba(251,191,36,0.14),transparent_28%)]" />
        <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
        <div className="absolute bottom-16 left-0 right-0 h-px bg-white/10" />
      </div>

      <div className="mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-end gap-12 px-5 pb-12 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:pb-16">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 border border-emerald-300/30 px-3 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-100">
            <span className="h-2 w-2 bg-emerald-300" />
            {profile.role}
          </p>
          <h1 className="max-w-5xl text-5xl font-black leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            {profile.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {profile.focusAreas.map((area) => (
              <span
                key={area}
                className="border border-white/12 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-100"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 bg-emerald-300 px-6 py-4 font-bold text-[#06110f] transition hover:bg-emerald-200"
            >
              Explore My Work
              <ArrowDown size={18} aria-hidden="true" />
            </a>
            {github && (
              <a
                href={github.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-white/15 px-6 py-4 font-bold text-white transition hover:border-white/40 hover:bg-white/10"
              >
                <Github size={18} aria-hidden="true" />
                View GitHub
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-sky-200/25 px-6 py-4 font-bold text-sky-100 transition hover:border-sky-200/60 hover:bg-sky-200/10"
              >
                <Linkedin size={18} aria-hidden="true" />
                Contact Me
              </a>
            )}
          </div>
        </div>

        <aside className="grid gap-5 lg:justify-self-end" aria-label="Profile summary">
          <div className="relative max-w-md border border-white/12 bg-white/[0.04] p-4 shadow-2xl shadow-black/30">
            <img
              src={profile.image.src}
              alt={profile.image.alt}
              className="aspect-[4/5] w-full object-cover"
            />
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
          </div>

          <dl className="grid gap-3 border border-white/10 bg-[#0c1715] p-5 text-sm">
            <div className="flex items-start justify-between gap-4">
              <dt className="text-slate-500">Email</dt>
              <dd className="text-right text-slate-200">{email?.value}</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="text-slate-500">CV</dt>
              <dd className="text-right text-amber-200">{cv?.value}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
