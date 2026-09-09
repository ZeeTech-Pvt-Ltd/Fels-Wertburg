import { ArrowRight, Check } from 'lucide-react';
import Eyebrow from './Eyebrow.jsx';
import Reveal from './Reveal.jsx';

const BENEFITS = [
  { label: 'Clear market information', text: 'Structured data, minimal jargon.' },
  { label: 'Simple navigation', text: 'Find what you need quickly.' },
  { label: 'Responsive experience', text: 'Great on any screen size.' },
  { label: 'Educational resources', text: 'Learn at your own pace.' },
  { label: 'Modern analytics', text: 'Thoughtful, readable charts.' },
  { label: 'Accessible interface', text: 'Designed with everyone in mind.' },
];

export default function Benefits() {
  return (
    <section className="section overflow-hidden bg-white">
      <div className="shell grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        {/* Left copy */}
        <Reveal>
          <Eyebrow>Why Fels Wertburg AI</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary">
            Built for Clarity, Not Complexity
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-steel">
            Financial markets are full of noise. We focus on presenting information in a way that is
            easy to scan, simple to understand and genuinely useful for your own research — without
            jargon, pressure or promises.
          </p>
          <p className="mt-4 text-base leading-relaxed text-steel">
            Whether you&rsquo;re new to markets or refining an existing routine, the goal is the same:
            a calmer, more informed way to explore market information.
          </p>

          <div className="mt-8">
            <a href="#register" className="btn-primary">
              Get Started
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        {/* Right benefit list */}
        <div className="grid gap-4 sm:grid-cols-2">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={benefit.label} className="h-full" delay={(index % 2) * 90}>
              <div className="group flex h-full flex-col rounded-2xl border border-ink/5 bg-canvas/60 p-5 transition hover:-translate-y-0.5 hover:border-accent/25 hover:bg-canvas">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-accent/15 text-accent-dark transition group-hover:bg-accent group-hover:text-white">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                </span>
                <h3 className="mt-3 font-bold text-primary">{benefit.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-steel">{benefit.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
