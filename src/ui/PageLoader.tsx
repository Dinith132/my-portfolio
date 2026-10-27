import type { ThemeMode } from '../types/theme';

type PageLoaderProps = {
  percent: number;
  theme: ThemeMode;
  leaving: boolean;
};

export function PageLoader({ percent, theme, leaving }: PageLoaderProps) {
  const isLight = theme === 'light';
  const amount = Math.max(0, Math.min(100, percent));
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (amount / 100) * circumference;

  return (
    <div
      className={`fixed inset-0 z-[80] flex items-center justify-center px-6 transition-opacity duration-500 ${
        leaving ? 'pointer-events-none opacity-0' : 'opacity-100'
      } ${isLight ? 'bg-[#f8fafc] text-slate-950' : 'bg-[#08100f] text-white'}`}
      role="status"
      aria-live="polite"
      aria-busy={!leaving}
      aria-label={`Loading portfolio, ${amount} percent`}
    >
      <div className="flex w-full max-w-xs flex-col items-center">
        <p
          className={`text-xs font-semibold uppercase tracking-[0.28em] ${
            isLight ? 'text-slate-500' : 'text-emerald-100/80'
          }`}
        >
          Dinith Priyankara
        </p>
        <div className="relative mt-8 grid h-40 w-40 place-items-center">
          <svg className="page-loader-spin absolute h-44 w-44" viewBox="0 0 144 144" aria-hidden="true">
            <circle
              cx="72"
              cy="72"
              r="66"
              fill="none"
              strokeWidth="1"
              strokeDasharray="10 18"
              className={isLight ? 'stroke-amber-600/50' : 'stroke-emerald-300/40'}
            />
          </svg>
          <svg className="h-40 w-40 -rotate-90" viewBox="0 0 128 128" aria-hidden="true">
            <circle
              cx="64"
              cy="64"
              r={radius}
              fill="none"
              strokeWidth="3"
              className={isLight ? 'stroke-slate-950/10' : 'stroke-white/10'}
            />
            <circle
              cx="64"
              cy="64"
              r={radius}
              fill="none"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              className={isLight ? 'stroke-amber-600' : 'stroke-emerald-300'}
            />
          </svg>
          <p className="absolute text-4xl font-semibold tabular-nums tracking-tight">
            {amount}
            <span className={`ml-0.5 text-lg ${isLight ? 'text-slate-500' : 'text-emerald-100/80'}`}>%</span>
          </p>
        </div>
        <div
          className={`mt-8 h-px w-full overflow-hidden ${isLight ? 'bg-slate-950/10' : 'bg-white/10'}`}
          aria-hidden="true"
        >
          <div
            className={`h-px ${isLight ? 'bg-amber-600' : 'bg-emerald-300'}`}
            style={{ width: `${amount}%` }}
          />
        </div>
        <p
          className={`mt-4 text-xs font-semibold uppercase tracking-[0.22em] ${
            isLight ? 'text-slate-500' : 'text-slate-300'
          }`}
        >
          Loading
        </p>
      </div>
    </div>
  );
}
