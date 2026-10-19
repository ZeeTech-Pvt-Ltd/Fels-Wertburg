import { ArrowRight, Check, Clock, Compass, Route, ShieldCheck } from 'lucide-react';
import { STEPS } from './components/HowItWorks.jsx';
import Eyebrow from './components/Eyebrow.jsx';
import MiniChart from './components/MiniChart.jsx';
import PageHeader from './components/PageHeader.jsx';
import Reveal from './components/Reveal.jsx';

const FIRST_SESSION = [
  'A market overview that shows what moved since your last visit.',
  'A watchlist you can build and change at any time.',
  'Charts you can read without a finance degree.',
  'Guides that explain the terms as you meet them.',
];

const PACE_POINTS = [
  {
    icon: Clock,
    title: 'Learn In Short Sessions',
    text: 'You don’t need a spare afternoon. Read one guide or check one chart, then come back when it suits you.',
  },
  {
    icon: ShieldCheck,
    title: 'No Pressure',
    text: 'There are no countdowns and no pressure tactics. You decide when to explore and when to step away.',
  },
  {
    icon: Compass,
    title: 'Support When You Need It',
    text: 'Our team answers email during Australian business hours, Monday to Friday.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <div className="section pb-10">
        <div className="shell">
          <PageHeader icon={Route} eyebrow="How It Works" title="How Fels Wertburg AI Works">
            A clear path from your first sign up to a research routine you can trust. Here is what
            happens at each step, in plain English.
          </PageHeader>
        </div>
      </div>

      {/* The three steps, expanded from the same data the homepage uses */}
      <section aria-labelledby="steps-heading" className="pb-16 sm:pb-20 lg:pb-24">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow center>The Path</Eyebrow>
            <h2
              id="steps-heading"
              className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary"
            >
              Three Steps, Start To Finish
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              Each step builds on the one before it, so you are never left wondering what to do next.
            </p>
          </div>

          <ol className="mt-14 grid gap-6 lg:grid-cols-3">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.number}>
                  <Reveal className="h-full" delay={index * 110}>
                    <article className="flex h-full flex-col rounded-2xl border border-ink/5 bg-white p-7 shadow-card">
                      <div className="flex items-center justify-between">
                        <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary">
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <span aria-hidden="true" className="font-display text-3xl font-extrabold text-ink/10">
                          {step.number}
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-bold text-primary">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-steel">{step.text}</p>
                      <ul className="mt-5 space-y-2.5 border-t border-ink/5 pt-5">
                        {step.points.map((point) => (
                          <li key={point} className="flex items-start gap-2.5">
                            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-dark">
                              <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                            </span>
                            <span className="text-sm leading-relaxed text-steel">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* First session: copy beside a preview panel */}
      <section aria-labelledby="session-heading" className="relative overflow-hidden bg-canvas py-16 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="shell relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Eyebrow>Your First Session</Eyebrow>
            <h2
              id="session-heading"
              className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary"
            >
              What You Will See When You Sign In
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-steel">
              The workspace brings the tools you need together on one screen. Nothing is hidden
              behind a maze of menus, and every panel has a clear job.
            </p>
            <ul className="mt-7 space-y-3.5">
              {FIRST_SESSION.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-dark">
                    <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-[1.75rem] bg-gradient-to-br from-primary via-primary-deep to-secondary p-5 shadow-soft sm:p-7">
              <div className="rounded-2xl bg-white p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                  Market Overview
                </p>
                <MiniChart
                  data={[18, 22, 20, 26, 25, 30, 28, 36, 34, 40]}
                  className="mt-4 h-28 w-full"
                />
                <div className="mt-5 flex items-center justify-between border-t border-ink/5 pt-4">
                  <span className="text-sm font-medium text-ink">Your watchlist</span>
                  <span className="text-sm text-steel">Ready to build</span>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-ink/5 pt-4">
                  <span className="text-sm font-medium text-ink">Learning guides</span>
                  <span className="text-sm text-steel">Open at your pace</span>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-ink/5 pt-4">
                  <span className="text-sm font-medium text-ink">Price alerts</span>
                  <span className="text-sm text-steel">Set your own</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pace */}
      <section aria-labelledby="pace-heading" className="section bg-white">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow center>Your Pace</Eyebrow>
            <h2
              id="pace-heading"
              className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary"
            >
              Built Around Your Schedule
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              You can use the platform for five minutes or fifty. The pace is yours to set.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {PACE_POINTS.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} className="h-full" delay={index * 100}>
                <article className="h-full rounded-2xl border border-ink/5 bg-canvas/70 p-7 shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary">
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

      <section className="relative overflow-hidden bg-canvas pb-16 pt-10 sm:pb-24">
        <div className="shell">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary-deep to-secondary px-6 py-14 text-center shadow-soft sm:px-12 sm:py-16">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
            </div>
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-[clamp(1.9rem,4.5vw,3rem)] font-extrabold leading-tight tracking-tight text-white">
                Ready To Take The First Step?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
                Create your free account and explore the tools when it suits you. No credit card is
                needed to get started.
              </p>
              <div className="mt-9">
                <a
                  href="/#register"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-primary-deep shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Create Your Account
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
