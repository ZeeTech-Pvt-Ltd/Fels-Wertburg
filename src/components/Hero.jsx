import { ArrowRight, BookOpen, TrendingDown, TrendingUp } from 'lucide-react';
import MiniChart from './MiniChart.jsx';
import { LogoMark } from './Logo.jsx';

const WATCHLIST = [
  { name: 'Bitcoin (BTC)', change: '+1.4%', up: true },
  { name: 'Ethereum (ETH)', change: '+0.6%', up: true },
  { name: 'Solana (SOL)', change: '-0.3%', up: false },
];

const ASSURANCES = [
  'No credit card required',
  'Start in under 2 minutes',
  'Tools & education in one place',
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      {/* Decorative background */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-8 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-secondary/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(18,59,93,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(18,59,93,0.05) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 20%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 20%, black, transparent)',
          }}
        />
      </div>

      <div className="shell section relative grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        {/* ------------------------- Left: copy ------------------------- */}
        <div className="lg:col-span-6">
          <p className="eyebrow" style={{ letterSpacing: '1px' }}>
            <LogoMark className="h-4 w-4 text-accent-dark" />
            Smart Tools for Modern Markets
          </p>

          <h1 className="mt-6 text-[clamp(2.125rem,5.5vw,3.5rem)] font-extrabold leading-[1.08] tracking-tight text-primary">
            Make More Informed{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Market Decisions
              </span>
              <svg
                aria-hidden="true"
                viewBox="0 0 240 14"
                preserveAspectRatio="none"
                className="absolute -bottom-2.5 left-0 h-3 w-full text-accent/70"
                fill="none"
              >
                <path
                  d="M6 10 C 40 2, 70 12, 105 8 S 175 4, 234 7"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-steel">
            Fels Wertburg AI pairs AI-assisted market scanning with clear data, charts and
            educational resources, helping Australians research Bitcoin, Ethereum and 60+ other
            cryptocurrencies with more context and less guesswork.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#register" className="btn-primary">
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#platform" className="btn-ghost">
              Explore the Platform
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            {ASSURANCES.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm font-medium text-steel">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/15 text-accent-dark">
                  <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none" aria-hidden="true">
                    <path d="m5 12.5 4.5 4.5L19 7.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ------------------------- Right: dashboard visual ------------------------- */}
        <div className="lg:col-span-6">
          <div
            aria-hidden="true"
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            {/* Glow tile behind the dashboard */}
            <div className="absolute -inset-3 -rotate-1 rounded-[2rem] bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/20 blur-xl" />

            <div className="relative rounded-3xl border border-white/70 bg-white/70 p-3 shadow-soft backdrop-blur-sm sm:p-5">
              {/* Window chrome */}
              <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1.5 pb-3 sm:px-1 sm:pb-4">
                <div className="flex items-center gap-2">
                  <span className="flex gap-1.5">
                    <i className="h-2.5 w-2.5 rounded-full bg-red-300" />
                    <i className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                    <i className="h-2.5 w-2.5 rounded-full bg-accent/60" />
                  </span>
                  <span className="ml-2 text-sm font-semibold text-primary">Market dashboard</span>
                </div>
                <span className="whitespace-nowrap rounded-full bg-canvas px-2.5 py-1 text-[10px] font-medium text-muted sm:text-[11px]">
                  Illustrative example
                </span>
              </div>

              {/* Stat tiles */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div className="rounded-2xl border border-ink/5 bg-white p-3 sm:p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium text-muted">Market coverage</p>
                      <p className="mt-1 font-display text-xl font-bold text-ink sm:text-2xl">120+</p>
                      <p className="mt-0.5 text-[11px] text-muted">Assets scanned · illustrative</p>
                    </div>
                    {/* Allocation donut - decorative */}
                    <span
                      aria-hidden="true"
                      className="relative mt-0.5 hidden h-12 w-12 shrink-0 rounded-full sm:block"
                      style={{
                        background:
                          'conic-gradient(#1E6F8C 0 40%, #29B6A8 40% 72%, #123B5D 72% 100%)',
                      }}
                    >
                      <span className="absolute inset-[5px] grid place-items-center rounded-full bg-white">
                        <span className="h-2 w-2 rounded-full bg-accent" />
                      </span>
                    </span>
                  </div>
                  <div className="mt-3 flex items-center gap-2.5">
                    <span className="flex items-center gap-1 text-[10px] text-muted">
                      <i aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-secondary" />
                      BTC
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-muted">
                      <i aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                      ETH
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-muted">
                      <i aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Alts
                    </span>
                  </div>
                </div>
                <div className="rounded-2xl border border-ink/5 bg-white p-3 sm:p-4">
                  <p className="text-xs font-medium text-muted">Assets tracked</p>
                  <p className="mt-1 font-display text-xl font-bold text-ink sm:text-2xl">5</p>
                  <p className="mt-0.5 text-[11px] text-muted">Across your watchlist</p>
                  <div className="mt-3 flex -space-x-1.5">
                    {['#1E6F8C', '#29B6A8', '#123B5D', '#627D98', '#102A43'].map((c, i) => (
                      <span
                        key={c}
                        aria-hidden="true"
                        className="h-4 w-4 rounded-full border-2 border-white"
                        style={{ backgroundColor: c, zIndex: 5 - i }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Chart card */}
              <div className="mt-2 rounded-2xl border border-ink/5 bg-white p-3 sm:mt-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-ink">Market activity</p>
                    <p className="text-[11px] text-muted">7-day illustrative view</p>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent-dark">
                    <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                    7-day trend
                  </span>
                </div>
                <MiniChart
                  data={[14, 18, 16, 22, 19, 25, 31, 27, 34]}
                  stroke="#1E6F8C"
                  className="mt-3 h-24 w-full"
                />
              </div>

              {/* Watchlist */}
              <div className="mt-2 rounded-2xl border border-ink/5 bg-white p-3 sm:mt-3 sm:p-4">
                <p className="text-sm font-semibold text-ink">Watchlist</p>
                <ul className="mt-2 space-y-2">
                  {WATCHLIST.map((row) => (
                    <li key={row.name} className="flex items-center justify-between text-sm">
                      <span className="text-steel">{row.name}</span>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-semibold ${
                          row.up
                            ? 'bg-accent/10 text-accent-dark'
                            : 'bg-red-500/10 text-red-600'
                        }`}
                      >
                        {row.up ? (
                          <TrendingUp className="h-3 w-3" aria-hidden="true" />
                        ) : (
                          <TrendingDown className="h-3 w-3" aria-hidden="true" />
                        )}
                        {row.change}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Floating accent chips */}
            <div className="absolute -left-4 top-24 hidden animate-float rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-card backdrop-blur md:block">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent/15 text-accent-dark">
                  <TrendingUp className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-bold text-ink">Crypto signals</p>
                  <p className="text-[11px] text-muted">AI market round-up</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 hidden animate-float rounded-2xl border border-white/60 bg-white/90 px-4 py-3 shadow-card backdrop-blur md:block [animation-delay:1.6s]">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary/10 text-secondary">
                  <BookOpen className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-bold text-ink">Learning hub</p>
                  <p className="text-[11px] text-muted">Beginner-friendly guides</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
