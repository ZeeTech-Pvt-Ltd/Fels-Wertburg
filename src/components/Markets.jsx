import { Bitcoin, DollarSign, Gem, TrendingUp } from 'lucide-react';
import Eyebrow from './Eyebrow.jsx';
import Reveal from './Reveal.jsx';

const MARKETS = [
  {
    icon: Bitcoin,
    title: 'Crypto',
    text: 'Follow leading digital assets with insights built for fast, volatile price action.',
    tint: 'bg-amber-500/10 text-amber-700',
  },
  {
    icon: DollarSign,
    title: 'Forex',
    text: 'Track major currency pairs and see how global events shift exchange rates.',
    tint: 'bg-accent/10 text-accent-dark',
  },
  {
    icon: TrendingUp,
    title: 'Stocks',
    text: 'Monitor well known companies and catch changes in momentum and volume.',
    tint: 'bg-secondary/10 text-secondary',
  },
  {
    icon: Gem,
    title: 'Commodities',
    text: 'Watch metals, energy and other essentials that react to world developments.',
    tint: 'bg-primary/5 text-primary',
  },
];

export default function Markets() {
  return (
    <section id="markets" className="section relative overflow-hidden bg-canvas">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="shell relative">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center>Markets</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary">
            Trade Across Four Major Markets
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-steel">
            One workspace for the markets that move your world. Follow the assets you care about and
            see how they move together.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {MARKETS.map(({ icon: Icon, title, text, tint }, index) => (
            <Reveal key={title} className="h-full" delay={index * 80}>
              <article className="group flex h-full flex-col rounded-2xl border border-ink/5 bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className={`grid h-12 w-12 place-items-center rounded-xl ${tint}`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
