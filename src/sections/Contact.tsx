import { Github, Linkedin, Mail, MapPin, FileText } from 'lucide-react';
import { profile, profileLinks } from '../data/profile';
import { Reveal } from '../ui/Reveal';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  email: Mail,
  cv: FileText,
};

export function Contact() {
  return (
    <section id="contact" className="bg-[#f4f1ea] py-24 text-[#101614] sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-800">
              Contact
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-6xl">
              Open to systems-minded engineering work.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
              Open to opportunities in embedded software, backend engineering,
              systems development, and automation.
            </p>
          </div>

          <div className="border border-[#101614]/10 bg-white p-7">
            <div className="flex items-center gap-3 text-sm font-bold text-stone-700">
              <MapPin className="h-5 w-5 text-emerald-700" aria-hidden="true" />
              {profile.location}
            </div>
            <div className="mt-6 grid gap-3">
              {profileLinks.map((link) => {
                const Icon = iconMap[link.name];
                const content = (
                  <>
                    <Icon className="h-5 w-5" aria-hidden="true" />
                    <span className="font-black">{link.label}</span>
                    <span className="ml-auto text-right text-sm text-stone-600">
                      {link.value}
                    </span>
                  </>
                );

                if (link.isDisabled) {
                  return (
                    <div
                      key={link.name}
                      className="flex items-center gap-3 border border-[#101614]/10 px-4 py-4 text-stone-500"
                    >
                      {content}
                    </div>
                  );
                }

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-3 border border-[#101614]/10 px-4 py-4 text-[#101614] transition hover:border-emerald-700 hover:bg-emerald-50"
                  >
                    {content}
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
