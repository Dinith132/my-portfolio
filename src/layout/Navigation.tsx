import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { profile, profileLinks } from '../data/profile';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

const github = profileLinks.find((link) => link.name === 'github');
const linkedin = profileLinks.find((link) => link.name === 'linkedin');

export function Navigation() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { y: -72, opacity: 0 }}
      animate={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#08100f]/85 backdrop-blur-xl"
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#home"
          className="group flex items-center gap-3 font-semibold text-white"
          aria-label={`${profile.name} home`}
        >
          <span className="grid h-9 w-9 place-items-center border border-emerald-300/50 bg-emerald-300 text-sm font-black text-[#07110f]">
            DP
          </span>
          <span className="hidden tracking-wide sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-bold uppercase tracking-[0.13em] text-slate-300 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {github && (
            <a
              href={github.href}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center border border-white/10 text-slate-300 transition hover:border-emerald-300/60 hover:text-emerald-200"
              aria-label="Open GitHub profile"
            >
              <Github size={18} aria-hidden="true" />
            </a>
          )}
          {linkedin && (
            <a
              href={linkedin.href}
              target="_blank"
              rel="noreferrer"
              className="grid h-10 w-10 place-items-center border border-white/10 text-slate-300 transition hover:border-sky-300/60 hover:text-sky-200"
              aria-label="Open LinkedIn profile"
            >
              <Linkedin size={18} aria-hidden="true" />
            </a>
          )}
        </div>
      </nav>
    </motion.header>
  );
}
