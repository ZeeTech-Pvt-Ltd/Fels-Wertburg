import { ArrowRight, Compass, Home } from 'lucide-react';

/**
 * 404 "page not found". Rendered inside the shared Header/Footer so even an
 * error page keeps the exact same site chrome as every other page.
 */
const POPULAR = [
  { label: 'Homepage', href: '/', hint: 'Back to the start' },
  { label: 'About Us', href: '/about-us', hint: 'Who we are and what we build' },
  { label: 'FAQ', href: '/faq', hint: 'Common questions, answered' },
  { label: 'Contact Us', href: '/contact', hint: 'Reach the team directly' },
  { label: 'Risk Disclosure', href: '/risk-disclosure', hint: 'Our general information notice' },
];

export default function NotFoundPage() {
  return (
    <div className="section">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-secondary shadow-soft">
            <Compass className="h-3.5 w-3.5" aria-hidden="true" />
            Error 404
          </p>

          <p
            aria-hidden="true"
            className="mt-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-[clamp(5rem,18vw,9rem)] font-extrabold leading-none tracking-tighter text-transparent"
          >
            404
          </p>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-primary sm:text-4xl">
            This page has wandered off
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-steel">
            The link may be broken or the page may have moved. Let&rsquo;s get you back on track &mdash;
            pick a destination below or head home.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="/" className="btn-primary">
              <Home className="h-4 w-4" aria-hidden="true" />
              Back to homepage
            </a>
            <a href="/faq" className="btn-ghost">
              Browse the FAQ
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <nav aria-label="Popular pages" className="mx-auto mt-14 max-w-3xl">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-muted">
            Or try one of these
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {POPULAR.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group flex h-full flex-col justify-between gap-3 rounded-2xl border border-ink/5 bg-white p-5 text-left shadow-soft transition hover:-translate-y-0.5 hover:border-secondary/25 hover:shadow-card"
                >
                  <span className="text-sm font-bold text-primary group-hover:text-secondary">
                    {link.label}
                  </span>
                  <span className="flex items-center justify-between gap-2 text-xs text-steel">
                    {link.hint}
                    <ArrowRight
                      className="h-3.5 w-3.5 shrink-0 text-accent-dark transition group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
