import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, MessageCircle, ShieldCheck, Star, X } from 'lucide-react';
import { TESTIMONIALS, TestimonialCard } from './components/Testimonials.jsx';
import CompactHero, { HeroPanel } from './components/CompactHero.jsx';
import Eyebrow from './components/Eyebrow.jsx';
import Reveal from './components/Reveal.jsx';

const FEEDBACK_POINTS = [
  {
    icon: Check,
    title: 'Clear Context',
    text: 'We keep the purpose of each page clear, so you know what you are reading and how to use it.',
  },
  {
    icon: ShieldCheck,
    title: 'No Paid Endorsements',
    text: 'We don’t present paid praise as independent feedback. Trust is worth more to us than a borrowed quote.',
  },
  {
    icon: MessageCircle,
    title: 'A Direct Line',
    text: 'Questions about something you read here? Email support and ask us directly. A real person will reply.',
  },
];

const REVIEW_CAN = [
  'Show how one person experienced the tools.',
  'Point to a feature you might have missed.',
  'Start a conversation about what you need.',
];

const REVIEW_CANNOT = [
  'Tell you what will happen in the market.',
  'Replace your own research and judgment.',
  'Guarantee the same result for you.',
];

export default function ReviewsPage() {
  return (
    <>
      <CompactHero
        eyebrow="Reviews"
        title="Reviews And What Users Value"
        description="A look at the experience we are working to deliver, and the feedback we hope it earns."
        primaryCta={{ href: '/#register', label: 'Create Your Account' }}
        secondaryCta={{ href: '/features', label: 'See The Features' }}
        points={['Clear star ratings', 'Locations shown']}
      >
        <HeroPanel title="Review Snapshot" badge={`${TESTIMONIALS.length} Reviews`}>
          <ul className="mt-4 space-y-2.5">
            {TESTIMONIALS.map((item) => (
              <li
                key={item.name}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3"
              >
                <Image
                  src={item.image}
                  alt=""
                  width={36}
                  height={36}
                  sizes="36px"
                  className="h-9 w-9 shrink-0 rounded-full object-cover ring-2 ring-accent/30"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-white">{item.name}</p>
                  <p className="truncate text-[10px] text-white/70">{item.location}</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1 text-xs font-bold text-white">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                  {item.rating}
                </span>
              </li>
            ))}
          </ul>
        </HeroPanel>
      </CompactHero>

      {/* Example feedback, shared with the homepage testimonials section */}
      <section aria-labelledby="reviews-heading" className="py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow center>Example Feedback</Eyebrow>
            <h2
              id="reviews-heading"
              className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary"
            >
              The Experience We Aim For
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              Three qualities sit at the heart of the platform.
            </p>
          </div>

          <div className="mt-14 grid items-stretch gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((item, index) => (
              <Reveal key={item.name} className="h-full" delay={index * 120}>
                <TestimonialCard item={item} featured={index === 1} />
              </Reveal>
            ))}
          </div>

        </div>
      </section>

      {/* Feedback policy */}
      <section aria-labelledby="feedback-heading" className="relative overflow-hidden bg-canvas py-16 sm:py-20 lg:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        </div>
        <div className="shell relative">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow center>Our Approach</Eyebrow>
            <h2
              id="feedback-heading"
              className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary"
            >
              How We Handle Feedback
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              Reviews are useful when they are honest. These three rules keep this page that way.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {FEEDBACK_POINTS.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} className="h-full" delay={index * 100}>
                <article className="h-full rounded-2xl border border-ink/5 bg-white p-7 shadow-card">
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

      {/* What a review can and cannot tell you */}
      <section aria-labelledby="limits-heading" className="section bg-white">
        <div className="shell">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow center>The Limits</Eyebrow>
            <h2
              id="limits-heading"
              className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary"
            >
              What A Review Can And Cannot Tell You
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-steel">
              Feedback describes a person’s experience. It is not market data and it is not advice.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal className="h-full">
              <div className="h-full rounded-2xl border border-accent/20 bg-accent/5 p-7 sm:p-8">
                <h3 className="flex items-center gap-3 text-lg font-bold text-primary">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-accent/20 text-accent-dark">
                    <Check className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
                  </span>
                  What It Can Do
                </h3>
                <ul className="mt-5 space-y-3">
                  {REVIEW_CAN.map((item) => (
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
                  What It Cannot Do
                </h3>
                <ul className="mt-5 space-y-3">
                  {REVIEW_CANNOT.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-steel">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-ink/5 bg-white p-6 text-center shadow-soft sm:p-8">
            <h3 className="text-lg font-bold text-primary">Share Your Experience</h3>
            <p className="mx-auto mt-2 max-w-lg text-sm leading-relaxed text-steel">
              If you use the platform and want to share feedback, we would like to hear it. Email us
              and a real person will read your message.
            </p>
            <a
              href="mailto:support@fels-wertburgai.com"
              className="btn-primary mt-5"
            >
              Email Support
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-canvas py-16 sm:py-24">
        <div className="shell">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary-deep to-secondary px-6 py-14 text-center shadow-soft sm:px-12 sm:py-16">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
              <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
            </div>
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-[clamp(1.9rem,4.5vw,3rem)] font-extrabold leading-tight tracking-tight text-white">
                Start Your Own Research
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
                Create a free account and form your own view. Registration asks for basic contact
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
