import { ArrowUpRight, ListFilter, PieChart as PieIcon, Wallet } from 'lucide-react';
import MiniChart from './MiniChart.jsx';
import Eyebrow from './Eyebrow.jsx';

const WATCHLIST = [
  { name: 'Bitcoin (BTC)', change: '+1.4%', up: true },
  { name: 'Ethereum (ETH)', change: '+0.6%', up: true },
  { name: 'Solana (SOL)', change: '-0.4%', up: false },
  { name: 'Cardano (ADA)', change: '+0.9%', up: true },
];

const SUMMARY = [
  { label: 'Bitcoin & major alts', tone: 'Positive', up: true },
  { label: 'Exchange volumes', tone: 'Mixed', up: false },
  { label: 'Market sentiment', tone: 'Volatile', up: false },
];

const ACTIVITY = [
  { text: 'Added 3 sectors to watchlist' },
  { text: 'Saved a chart view to research' },
  { text: 'Completed “Markets 101” guide' },
];

export default function DashboardPreview() {
  return (
    <section aria-labelledby="preview-heading" className="relative overflow-hidden bg-canvas pb-16 sm:pb-24">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center index={5}>
            Product Tour
          </Eyebrow>
          <h2 id="preview-heading" className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary">
            One calm workspace for your research
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-steel">
            A quick look at how market scanning, watchlists, charting and summaries sit together
            in the Fels Wertburg AI console.
          </p>
        </div>

        <div
          className="relative mt-12 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-primary via-primary-deep to-secondary p-5 shadow-soft sm:rounded-[2.5rem] sm:p-7 lg:p-9"
          role="img"
          aria-label="Illustrative preview of the Fels Wertburg AI console showing market scanning, watchlist, charting and activity panels"
        >
          {/* Decorative highlights */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-secondary/25 blur-3xl" />
          </div>

          {/* Window chrome */}
          <div className="relative flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
            <div className="flex items-center gap-3">
              <span className="flex gap-1.5" aria-hidden="true">
                <i className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <i className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <i className="h-2.5 w-2.5 rounded-full bg-accent/80" />
              </span>
              <p className="ml-1 text-sm font-semibold text-white/90">Your research workspace</p>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="hidden items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-[11px] font-medium text-white/70 sm:inline-flex">
                <ListFilter className="h-3 w-3" aria-hidden="true" />
                Illustrative sample
              </span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-accent to-secondary text-[11px] font-bold text-white">
                AU
              </span>
            </div>
          </div>

          {/* Panels */}
          <div className="relative mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-hidden="true">
            {/* Market coverage */}
            <div className="rounded-2xl bg-white/95 p-5 shadow-card">
              <div className="flex items-center gap-2 text-muted">
                <Wallet className="h-4 w-4 text-secondary" aria-hidden="true" />
                <p className="text-xs font-semibold uppercase tracking-wider">Market coverage</p>
              </div>
              <p className="mt-3 font-display text-2xl font-extrabold text-ink">120+</p>
              <p className="text-[11px] text-muted">Assets monitored · illustrative</p>
              <ul className="mt-4 space-y-1.5">
                {[
                  { label: 'Bitcoin', value: '42%' },
                  { label: 'Ethereum', value: '28%' },
                  { label: 'Altcoins', value: '30%' },
                ].map((row) => (
                  <li key={row.label} className="flex items-center justify-between text-xs">
                    <span className="text-steel">{row.label}</span>
                    <span className="font-semibold text-ink">{row.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Performance chart */}
            <div className="rounded-2xl bg-white/95 p-5 shadow-card sm:col-span-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted">
                  <PieIcon className="h-4 w-4 text-secondary" aria-hidden="true" />
                  <p className="text-xs font-semibold uppercase tracking-wider">Price chart</p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent-dark">
                  Weekly sample
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-4 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="font-display text-xl font-extrabold text-ink">+6.2%</p>
                  <p className="text-[11px] text-muted">Illustrative comparison period</p>
                </div>
                <div className="flex gap-4 text-xs text-steel">
                  <span className="flex items-center gap-1.5">
                    <i className="h-1.5 w-4 rounded-full bg-secondary" aria-hidden="true" />
                    Sample series A
                  </span>
                  <span className="flex items-center gap-1.5">
                    <i className="h-1.5 w-4 rounded-full bg-accent" aria-hidden="true" />
                    Sample series B
                  </span>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <MiniChart
                  data={[18, 22, 20, 26, 25, 30, 28, 36]}
                  stroke="#1E6F8C"
                  className="h-24 w-full"
                />
                <MiniChart
                  data={[26, 24, 27, 25, 29, 27, 31, 30]}
                  stroke="#29B6A8"
                  className="h-24 w-full"
                />
              </div>
            </div>

            {/* Watchlist */}
            <div className="rounded-2xl bg-white/95 p-5 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Watchlist</p>
              <ul className="mt-3 space-y-2.5">
                {WATCHLIST.map((row) => (
                  <li key={row.name} className="flex items-center justify-between text-sm">
                    <span className="text-steel">{row.name}</span>
                    <span
                      className={`text-xs font-semibold ${
                        row.up ? 'text-accent-dark' : 'text-red-500'
                      }`}
                    >
                      {row.up ? '▲' : '▼'} {row.change}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Market summary */}
            <div className="rounded-2xl bg-white/95 p-5 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Market summary</p>
              <ul className="mt-3 space-y-2.5">
                {SUMMARY.map((row) => (
                  <li key={row.label} className="flex items-center justify-between text-sm">
                    <span className="text-steel">{row.label}</span>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                        row.up ? 'bg-accent/10 text-accent-dark' : 'bg-amber-500/10 text-amber-700'
                      }`}
                    >
                      {row.tone}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent activity */}
            <div className="rounded-2xl bg-white/95 p-5 shadow-card">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Recent activity</p>
              <ul className="mt-3 space-y-2.5">
                {ACTIVITY.map((row) => (
                  <li key={row.text} className="flex items-start gap-2 text-sm text-steel">
                    <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {row.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="relative mt-5 text-center text-[11px] text-white/50">
            Dashboard shown is an illustrative mock-up for preview purposes — not real data or advice.
          </p>
        </div>
      </div>
    </section>
  );
}
