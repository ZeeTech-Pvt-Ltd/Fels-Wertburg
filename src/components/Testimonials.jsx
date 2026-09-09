import { Quote } from 'lucide-react';
import Eyebrow from './Eyebrow.jsx';
import Reveal from './Reveal.jsx';

const TESTIMONIALS = [
  {
    quote: 'Simple to navigate and easy to understand.',
    theme: 'Navigation',
    note: 'Illustrative example, not a real customer.',
  },
  {
    quote: 'Having market information organised in one place makes research much easier.',
    theme: 'Organisation',
    note: 'Illustrative example, not a real customer.',
  },
  {
    quote: 'The interface feels clean and straightforward.',
    theme: 'Interface',
    note: 'Illustrative example, not a real customer.',
  },
];

export default function Testimonials() {
  return (
    <section className="section relative overflow-hidden bg-canvas">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="shell relative">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center>
            What We Aim For
          </Eyebrow>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary">
            The experience we&rsquo;re building toward
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-steel">
            Three qualities at the heart of the platform. Each one is shown as an illustrative
            example rather than a real customer&rsquo;s endorsement.
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((item, index) => {
            const featured = index === 1;
            return (
              <Reveal key={item.theme} className="h-full" delay={index * 120}>
                <figure
                  className={`relative flex h-full flex-col overflow-hidden rounded-2xl p-7 shadow-card ${
                    featured
                      ? 'bg-gradient-to-br from-primary via-primary-deep to-secondary text-white md:-translate-y-2'
                      : 'border border-ink/5 bg-white'
                  }`}
                >
                  {featured && (
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/20 blur-2xl"
                    />
                  )}
                  <span
                    className={`relative grid h-10 w-10 place-items-center rounded-xl ${
                      featured ? 'bg-white/15 text-accent' : 'bg-accent/10 text-accent-dark'
                    }`}
                  >
                    <Quote className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <blockquote
                    className={`relative mt-5 text-lg font-medium leading-relaxed ${
                      featured ? 'text-white' : 'text-ink'
                    }`}
                  >
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                  <figcaption
                    className={`relative mt-6 border-t pt-4 ${
                      featured ? 'border-white/20' : 'border-ink/5'
                    }`}
                  >
                    <p
                      className={`text-xs font-bold uppercase tracking-wider ${
                        featured ? 'text-accent' : 'text-secondary'
                      }`}
                    >
                      {item.theme}
                    </p>
                    <p className={`mt-1 text-xs ${featured ? 'text-white/70' : 'text-muted'}`}>
                      {item.note}
                    </p>
                  </figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-relaxed text-muted">
          These are illustrative examples of the kind of feedback we aim for, shown without any
          claim of a specific person&rsquo;s endorsement. We never present fictional customers as real.
        </p>
      </div>
    </section>
  );
}
