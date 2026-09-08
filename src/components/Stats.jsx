import Reveal from './Reveal.jsx';

const STATS = [
  {
    value: '24/7',
    label: 'Access',
    text: 'Stay informed whenever it suits you, on any device.',
  },
  {
    value: '60+',
    label: 'Markets Tracked',
    text: 'Follow Bitcoin, Ethereum and other digital assets in one place.',
  },
  {
    value: '6+',
    label: 'Core Tools',
    text: 'Insights, charts, watchlists and more in one place.',
  },
  {
    value: '1',
    label: 'Unified Platform',
    text: 'One organised home for your market research.',
  },
];

export default function Stats() {
  return (
    <section aria-label="Product statistics" className="relative overflow-hidden bg-gradient-to-br from-primary via-primary-deep to-secondary py-16 sm:py-20">
      {/* Faint decorative rings */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
        <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full border border-white/5" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="shell relative">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 110}>
              <div className="text-center lg:text-left">
                <p className="font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-none tracking-tight text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-accent">
                  {stat.label}
                </p>
                <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-white/70 lg:mx-0">
                  {stat.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-12 border-t border-white/10 pt-5 text-xs leading-relaxed text-white/50">
          Figures describe the platform itself rather than trading outcomes. Market results vary and
          are never guaranteed.
        </p>
      </div>
    </section>
  );
}
