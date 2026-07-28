import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08100f] px-5 py-8 text-sm text-slate-400 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>{profile.name} · {profile.role}</p>
        <p>Built with React, TypeScript, Tailwind CSS, and measured motion.</p>
      </div>
    </footer>
  );
}
