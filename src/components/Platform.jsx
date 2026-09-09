import { Check } from 'lucide-react';
import Eyebrow from './Eyebrow.jsx';
import Reveal from './Reveal.jsx';

const FEATURES = [
  'Regularly updated market information',
  'Clear visualisations, no clutter',
  'One organised workspace for research',
];

export default function Platform() {
  return (
    <section id="platform" className="section overflow-hidden bg-white">
      <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Copy */}
        <Reveal className="lg:col-span-5">
          <Eyebrow>The Platform</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary">
            Everything You Need to Research Crypto Markets
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-steel">
            Fels Wertburg AI brings crypto market data, AI-assisted analysis and charting into one
            accessible interface — so you can stop juggling scattered exchanges, news feeds and
            spreadsheets.
          </p>

          <ul className="mt-6 space-y-3">
            {FEATURES.map((item) => (
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

        {/* Platform visual */}
        <Reveal className="lg:col-span-7" delay={150}>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-primary/5 to-accent/10 blur-lg"
            />
            <div className="relative overflow-hidden rounded-3xl border border-ink/5 bg-white p-2 shadow-soft">
              <img
                src="/the-platform.webp"
                alt="Fels Wertburg AI research platform — illustrative interface preview"
                width={1287}
                height={1222}
                loading="lazy"
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
