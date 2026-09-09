import { ArrowRight } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section aria-label="Get started" className="relative overflow-hidden bg-canvas pb-16 sm:pb-24">
      <div className="shell">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary via-primary-deep to-secondary px-6 py-16 text-center shadow-soft sm:px-12 sm:py-20">
          {/* Decorative shapes */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-secondary/30 blur-3xl" />
            <div className="absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-[clamp(1.9rem,4.5vw,3rem)] font-extrabold leading-tight tracking-tight text-white">
              Start Exploring Smarter Market Tools
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/80">
              Discover a simpler way to access market insights and analytics — all in one
              considered workspace.
            </p>

            <div className="mt-9">
              <a
                href="#register"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-bold text-primary-deep shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
              >
                Get Started
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>

            <p className="mt-6 text-sm text-white/60">
              Registration is free, fast and asks only for basic contact details.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
