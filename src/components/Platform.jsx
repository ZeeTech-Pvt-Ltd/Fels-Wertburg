import { useRef, useState } from 'react';
import { Check, ChevronDown, ChevronUp, Globe2, Layers, ListChecks, TrendingUp } from 'lucide-react';
import MiniChart from './MiniChart.jsx';
import Eyebrow from './Eyebrow.jsx';
import Reveal from './Reveal.jsx';

const TABS = [
  {
    key: 'overview',
    label: 'Market Overview',
    icon: Globe2,
    heading: 'See the shape of the whole market at a glance',
    body: 'A single view that organises coins, sectors and market themes so you can quickly orient yourself before digging deeper.',
    points: ['Major coins & segments in one place', 'Price and momentum summaries', 'Simple colour-coded layout'],
    visual: 'overview',
  },
  {
    key: 'performance',
    label: 'Performance',
    icon: TrendingUp,
    heading: 'Compare how different areas have moved',
    body: 'Follow the relative movement of sectors and instruments over time with consistent, easy-to-read charts.',
    points: ['Adjustable time ranges', 'Side-by-side comparisons', 'Clear trend readouts'],
    visual: 'performance',
  },
  {
    key: 'trends',
    label: 'Market Trends',
    icon: ChevronUp,
    heading: 'Spot emerging patterns in your own research',
    body: 'Trend views summarise recent direction across the areas you care about — helping you ask better questions.',
    points: ['Direction summaries per sector', 'Relevant macro context', 'Notebook-ready exports'],
    visual: 'trends',
  },
  {
    key: 'watchlist',
    label: 'Watchlist',
    icon: ListChecks,
    heading: 'Keep an eye on the areas that matter to you',
    body: 'Pin sectors, companies or themes you are researching and follow them from one organised list.',
    points: ['Unlimited saved items', 'Follow companies & themes', 'Instant-access references'],
    visual: 'watchlist',
  },
];

const WATCHLIST_ROWS = [
  { name: 'Bitcoin (BTC)', change: '+1.4%', data: [10, 12, 14, 13, 16, 18, 19, 22] },
  { name: 'Ethereum (ETH)', change: '+0.6%', data: [15, 14, 15, 17, 16, 17, 18, 19] },
  { name: 'Solana (SOL)', change: '-0.4%', data: [20, 19, 21, 20, 18, 19, 18, 17] },
];

const TREND_ROWS = [
  { name: 'Layer-1 networks', dir: 'Up', data: [8, 10, 9, 12, 13, 15, 16] },
  { name: 'Major stablecoins', dir: 'Sideways', data: [12, 12, 13, 12, 12, 13, 12] },
  { name: 'Meme tokens', dir: 'Down', data: [18, 17, 16, 17, 15, 14, 13] },
];

function PanelVisual({ kind }) {
  if (kind === 'overview') {
    return (
      <div className="mt-5">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Sectors covered', value: '12' },
            { label: 'Data points', value: '40+' },
            { label: 'Time frames', value: '6' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-ink/5 bg-canvas/60 p-3 text-center">
              <p className="font-display text-lg font-bold text-primary">{stat.value}</p>
              <p className="text-[11px] text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-xl border border-ink/5 bg-canvas/40 p-3">
          <p className="mb-1 text-xs font-medium text-muted">Example composite view</p>
          <MiniChart data={[20, 26, 24, 30, 28, 34, 40, 38, 44]} stroke="#29B6A8" className="h-20 w-full" />
        </div>
      </div>
    );
  }
  if (kind === 'performance') {
    return (
      <div className="mt-5 space-y-3">
        {[
          { label: 'Example series 1', color: '#1E6F8C', data: [10, 13, 12, 16, 15, 19, 18, 23] },
          { label: 'Example series 2', color: '#29B6A8', data: [16, 15, 17, 16, 18, 17, 19, 18] },
        ].map((series) => (
          <div key={series.label} className="rounded-xl border border-ink/5 bg-canvas/40 p-3">
            <p className="mb-1 text-xs font-medium text-muted">{series.label} · illustrative</p>
            <MiniChart data={series.data} stroke={series.color} className="h-16 w-full" />
          </div>
        ))}
      </div>
    );
  }
  if (kind === 'trends') {
    return (
      <ul className="mt-5 space-y-2.5">
        {TREND_ROWS.map((row) => (
          <li
            key={row.name}
            className="flex items-center justify-between gap-4 rounded-xl border border-ink/5 bg-canvas/40 px-4 py-3"
          >
            <div>
              <p className="text-sm font-semibold text-ink">{row.name}</p>
              <p className="text-xs text-muted">Direction: {row.dir}</p>
            </div>
            <MiniChart data={row.data} stroke="#29B6A8" className="h-8 w-24 shrink-0" />
          </li>
        ))}
      </ul>
    );
  }
  return (
    <ul className="mt-5 space-y-2.5">
      {WATCHLIST_ROWS.map((row) => (
        <li
          key={row.name}
          className="flex items-center justify-between gap-4 rounded-xl border border-ink/5 bg-canvas/40 px-4 py-3"
        >
          <p className="text-sm font-semibold text-ink">{row.name}</p>
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-accent-dark">{row.change}</span>
            <MiniChart data={row.data} stroke="#1E6F8C" className="h-8 w-20 shrink-0" />
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function Platform() {
  const [activeKey, setActiveKey] = useState('overview');
  const tabRefs = useRef([]);
  const active = TABS.find((tab) => tab.key === activeKey);
  const activeIndex = TABS.findIndex((tab) => tab.key === activeKey);

  const focusTab = (index) => {
    const next = (index + TABS.length) % TABS.length;
    setActiveKey(TABS[next].key);
    tabRefs.current[next]?.focus();
  };

  const onTabKeyDown = (event, index) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        focusTab(index + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        focusTab(index - 1);
        break;
      case 'Home':
        event.preventDefault();
        focusTab(0);
        break;
      case 'End':
        event.preventDefault();
        focusTab(TABS.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <section id="platform" className="section overflow-hidden bg-white">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Copy */}
        <Reveal className="lg:col-span-5">
          <Eyebrow index={2}>The Platform</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary">
            Everything You Need to Research Crypto Markets
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-steel">
            Fels Wertburg AI brings crypto market data, AI-assisted analysis and charting into one
            accessible interface — so you can stop juggling scattered exchanges, news feeds and
            spreadsheets.
          </p>

          <ul className="mt-6 space-y-3">
            {[
              'Regularly updated market information',
              'Clear visualisations, no clutter',
              'One organised workspace for research',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[15px] text-ink">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-dark">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <a href="#register" className="btn-ghost">
              Explore it yourself
            </a>
          </div>
        </Reveal>

        {/* Interactive dashboard mock */}
        <Reveal className="lg:col-span-7" delay={150}>
          <div className="relative">
            <div aria-hidden="true" className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-primary/5 to-accent/10 blur-lg" />
            <div className="relative overflow-hidden rounded-3xl border border-ink/5 bg-white shadow-soft">
              {/* Tab strip */}
              <div role="tablist" aria-label="Platform views" className="flex gap-1 overflow-x-auto border-b border-ink/5 bg-canvas/70 p-2.5">
                {TABS.map((tab, index) => {
                  const Icon = tab.icon;
                  const selected = tab.key === activeKey;
                  return (
                    <button
                      key={tab.key}
                      ref={(node) => {
                        tabRefs.current[index] = node;
                      }}
                      type="button"
                      role="tab"
                      id={`platform-tab-${tab.key}`}
                      aria-selected={selected}
                      aria-controls={`platform-panel-${tab.key}`}
                      tabIndex={selected ? 0 : -1}
                      onClick={() => setActiveKey(tab.key)}
                      onKeyDown={(event) => onTabKeyDown(event, index)}
                      className={`inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                        selected
                          ? 'bg-white text-primary shadow-card'
                          : 'text-steel hover:bg-white/60 hover:text-primary'
                      }`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Active panel */}
              <div
                role="tabpanel"
                id={`platform-panel-${active.key}`}
                aria-labelledby={`platform-tab-${active.key}`}
                className="p-5 sm:p-6"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-2.5 py-1 text-[11px] font-semibold text-accent-dark">
                    <Layers className="h-3 w-3" aria-hidden="true" />
                    Illustrative sample
                  </span>
                </div>

                <h3 className="mt-3 text-lg font-bold text-primary">{active.heading}</h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-steel">{active.body}</p>

                <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-2">
                  {active.points.map((point) => (
                    <li key={point} className="flex items-center gap-2 text-[13px] text-ink">
                      <Check className="h-4 w-4 text-accent-dark" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>

                <PanelVisual kind={active.visual} />
              </div>
            </div>

            {/* Floating hint */}
            <div aria-hidden="true" className="absolute -right-3 -top-5 hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold text-white shadow-lift md:block">
              <ChevronDown className="mr-1 inline h-3.5 w-3.5" />
              Pick a view
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
