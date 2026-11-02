import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';

/**
 * The shared compact hero used by interior pages. It keeps the dark gradient,
 * eyebrow, type scale, CTA styles and glass panel identical across routes.
 */
export default function CompactHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  points = [],
  children,
}) {
  return (
    <section
      aria-labelledby="page-hero-title"
      className="relative overflow-hidden bg-gradient-to-br from-primary-deep via-primary to-secondary"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 20%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 20%, black, transparent)',
          }}
        />
      </div>

      <div className="shell relative grid items-center gap-8 py-10 sm:py-14 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <p className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            <span aria-hidden="true" className="h-px w-6 bg-accent/60" />
            {eyebrow}
          </p>
          <h1
            id="page-hero-title"
            className="mt-4 text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-tight tracking-tight text-white"
          >
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            {description}
          </p>

          {primaryCta || secondaryCta ? (
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              {primaryCta ? (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-primary-deep shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
                >
                  {primaryCta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              ) : null}
              {secondaryCta ? (
                <Link
                  href={secondaryCta.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10"
                >
                  {secondaryCta.label}
                </Link>
              ) : null}
            </div>
          ) : null}

          {points.length > 0 ? (
            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-white/80">
              {points.map((point) => (
                <li key={point} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-white/10 text-accent">
                    <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="lg:col-span-6">{children}</div>
      </div>
    </section>
  );
}

export function HeroPanel({ title, badge, children }) {
  return (
    <div className="relative">
      <div aria-hidden="true" className="absolute -inset-2 rounded-[2rem] bg-accent/10 blur-xl" />
      <div className="relative rounded-3xl border border-white/15 bg-primary-deep/50 p-5 shadow-soft backdrop-blur-sm sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
            {title}
          </p>
          {badge ? (
            <span className="rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-semibold text-white">
              {badge}
            </span>
          ) : null}
        </div>
        {children}
      </div>
    </div>
  );
}
