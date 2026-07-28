import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Moon, Sun } from 'lucide-react';
import { profile, profileLinks } from '../data/profile';
import type { ThemeMode } from '../types/theme';

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

type NavigationProps = {
  theme: ThemeMode;
  onToggleTheme: () => void;
};

export function Navigation({ theme, onToggleTheme }: NavigationProps) {
  const shouldReduceMotion = useReducedMotion();
  const isLight = theme === 'light';

  return (
    <motion.header
      initial={shouldReduceMotion ? false : { y: -72, opacity: 0 }}
      animate={shouldReduceMotion ? undefined : { y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl ${
        isLight
          ? 'border-slate-950/10 bg-slate-50/82'
          : 'border-white/10 bg-[#08100f]/85'
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        <a
          href="#home"
          className={`group flex items-center gap-3 font-semibold ${
            isLight ? 'text-slate-950' : 'text-white'
          }`}
          aria-label={`${profile.name} home`}
        >
          <span className="grid h-9 w-9 place-items-center border border-amber-400/60 bg-amber-300 text-sm font-black text-[#07110f]">
            DP
          </span>
          <span className="hidden tracking-wide sm:inline">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs font-bold uppercase tracking-[0.13em] transition-colors ${
                isLight
                  ? 'text-slate-700 hover:text-slate-950'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className={`grid h-10 w-10 place-items-center border transition ${
              isLight
                ? 'border-slate-950/10 text-slate-700 hover:border-amber-500/60 hover:text-slate-950'
                : 'border-white/10 text-slate-300 hover:border-amber-300/60 hover:text-amber-100'
            }`}
            aria-label={`Switch to ${isLight ? 'dark' : 'light'} theme`}
          >
            {isLight ? <Moon size={18} aria-hidden="true" /> : <Sun size={18} aria-hidden="true" />}
          </button>
          {github && (
            <a
              href={github.href}
              target="_blank"
              rel="noreferrer"
              className={`grid h-10 w-10 place-items-center border transition ${
                isLight
                  ? 'border-slate-950/10 text-slate-700 hover:border-emerald-600/60 hover:text-slate-950'
                  : 'border-white/10 text-slate-300 hover:border-emerald-300/60 hover:text-emerald-200'
              }`}
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
              className={`grid h-10 w-10 place-items-center border transition ${
                isLight
                  ? 'border-slate-950/10 text-slate-700 hover:border-sky-600/60 hover:text-slate-950'
                  : 'border-white/10 text-slate-300 hover:border-sky-300/60 hover:text-sky-200'
              }`}
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
