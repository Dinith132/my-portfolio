import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08100f] px-5 py-8 text-sm text-slate-400 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>{profile.name} · {profile.role}</p>
        <div className="flex flex-col gap-2 sm:items-end">
          <p>Built with React, TypeScript, Tailwind CSS, and measured motion.</p>
          <p>
            Computer model by{' '}
            <a
              href="https://sketchfab.com/3d-models/computer-d1b532d54a4e4a34b780777ced24f24c"
              className="underline decoration-white/30 underline-offset-4 hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              Cybertron B-127
            </a>
            ,{' '}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              className="underline decoration-white/30 underline-offset-4 hover:text-white"
              target="_blank"
              rel="noreferrer"
            >
              CC BY 4.0
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
