import Link from 'next/link';
import { ArrowRight, BookOpen, Check, Globe2, Lock, Sparkles, X } from 'lucide-react';
import { FEATURES } from './components/Features.jsx';
import Eyebrow from './components/Eyebrow.jsx';
import PageHeader from './components/PageHeader.jsx';
import Reveal from './components/Reveal.jsx';
import RiskNote from './components/RiskNote.jsx';

const AUDIENCE_POINTS = [
  {
    icon: Globe2,
    title: 'Australian Support Hours',
    text: 'Our team is here Monday to Friday, 9am to 5pm AEST, so help arrives in your working day.',
  },
  {
    icon: BookOpen,
    title: 'Plain English First',
    text: 'Guides explain crypto terms without jargon, so you can learn as you go instead of pretending you already know.',
  },
  {
    icon: Lock,
    title: 'Privacy By Default',
    text: 'Registration asks for basic contact details only. We don’t ask for wallet keys or card details.',
  },
];

const DOES = [
  'Organises market data in one calm workspace.',
  'Explains common terms in plain English.',
  'Keeps charts, watchlists and guides together.',
  'Works on desktop, tablet and mobile.',
];

const DOES_NOT = [
  'Give personal financial advice.',
  'Promise returns or predict the market.',
  'Ask for wallet keys at sign up.',
  'Replace your own research or judgment.',
];

export default function FeaturesPage() {
  return (
    <>
      <div className="section pb-10">
        <div className="shell">
          <PageHeader icon={Sparkles} eyebrow="Features" title="Features Built For Clearer Research">
            Every tool has one job: to help you find, understand and use market information without
            unnecessary effort.
          </PageHeader>
        </div>
      </div>

      {/* Feature deep dives, from the same data as the homepage */}
      <section aria-labelledby="features-heading" className="pb-16 sm:pb-20 lg:pb-24">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow center>Core Features</Eyebrow>
            <h2
              id="features-heading"
              className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary"
            >
              What Is Included In Your Workspace
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              Six core features, each built to remove a little friction from your research.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, text, points }, index) => (
              <Reveal key={title} className="h-full" delay={(index % 3) * 90}>
                <article className="group flex h-full flex-col rounded-2xl border border-ink/5 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary transition duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-steel">{text}</p>
                  <ul className="mt-5 space-y-2.5 border-t border-ink/5 pt-5">
                    {points.map((point) => (
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
            ))}
          </div>
        </div>
      </section>

      {/* Built for the audience */}
      <section aria-labelledby="audience-heading" className="relative overflow-hidden bg-canvas py-16 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        </div>
        <div className="shell relative">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow center>Built For Australia</Eyebrow>
            <h2
              id="audience-heading"
              className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary"
            >
              Made For Everyday Australian Investors
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              You don’t need a trading desk or a finance background. You need clear information and
              enough time to read it.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {AUDIENCE_POINTS.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} className="h-full" delay={index * 100}>
                <article className="h-full rounded-2xl border border-ink/5 bg-white p-7 shadow-card">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent-dark">
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

      {/* Honest limits: a visual does / does not comparison */}
      <section aria-labelledby="limits-heading" className="section bg-white">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow center>The Limits</Eyebrow>
            <h2
              id="limits-heading"
              className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary"
            >
              What The Platform Does And Does Not Do
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              A clear tool is honest about its edges. Here is where ours sit.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="h-full rounded-2xl border border-accent/20 bg-accent/5 p-7 sm:p-8">
                <h3 className="flex items-center gap-3 text-lg font-bold text-primary">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/20 text-accent-dark">
                    <Check className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  What It Does
                </h3>
                <ul className="mt-5 space-y-3">
                  {DOES.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-ink">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal className="h-full" delay={100}>
              <div className="h-full rounded-2xl border border-ink/10 bg-canvas p-7 sm:p-8">
                <h3 className="flex items-center gap-3 text-lg font-bold text-primary">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-ink/10 text-steel">
                    <X className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  What It Does Not Do
                </h3>
                <ul className="mt-5 space-y-3">
                  {DOES_NOT.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-steel">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <RiskNote />

      <section className="relative overflow-hidden bg-canvas py-16 sm:py-24">
        <div className="shell">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary-deep to-secondary px-6 py-14 text-center shadow-soft sm:px-12 sm:py-16">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
            </div>
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-[clamp(1.9rem,4.5vw,3rem)] font-extrabold leading-tight tracking-tight text-white">
                See The Tools For Yourself
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
                Create a free account and take a closer look. Registration asks for basic contact
                details only.
              </p>
              <div className="mt-9">
                <Link
                  href="/#register"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-primary-deep shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Get Started
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
