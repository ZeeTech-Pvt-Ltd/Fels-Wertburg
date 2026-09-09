import { FileQuestion, LifeBuoy, Mail } from 'lucide-react';
import RegistrationForm from './components/RegistrationForm.jsx';
import { CONTACT_DETAILS } from './components/Footer.jsx';

/**
 * The dedicated Contact Us page.
 *
 * The lead-capture form on the right is the exact same <RegistrationForm />
 * the homepage renders (see src/components/Register.jsx), so the two can never
 * drift apart. Contact details are shared with the footer via CONTACT_DETAILS.
 * Rendered inside the shared Header/Footer (see src/contact-us.jsx).
 */
export default function ContactPage() {
  // Organisation structured data so search engines can surface the site's
  // official support contact.
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fels Wertburg AI',
    url: 'https://www.fels-wertburgai.com/',
    email: 'support@fels-wertburgai.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sydney',
      addressRegion: 'NSW',
      addressCountry: 'AU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'support@fels-wertburgai.com',
      areaServed: 'AU',
      availableLanguage: 'en',
    },
  };

  return (
    <div className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd).replace(/</g, '\\u003c') }}
      />
      <div className="shell">
        {/* Page header */}
        <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-deep to-primary px-6 py-10 text-white shadow-card sm:px-10 sm:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-14 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
          />
          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              <Mail className="h-3.5 w-3.5" aria-hidden="true" />
              Contact us
            </p>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">
              We&rsquo;re here to help
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
              Questions about the platform, your account or our research tools? Our team is available
              during Australian business hours and happy to point you in the right direction.
            </p>
          </div>
        </header>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Contact details column */}
          <div className="lg:col-span-5">
            <h2 className="text-xl font-extrabold tracking-tight text-primary">Reach us directly</h2>
            <p className="mt-2 text-sm leading-relaxed text-steel">
              Choose whichever channel suits you. For account or platform questions, the quick form on
              this page is the fastest way to get started.
            </p>

            <ul className="mt-6 space-y-3">
              {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary/10 text-secondary">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs font-semibold uppercase tracking-wider text-muted">
                        {label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm font-medium text-ink">{value}</span>
                    </span>
                  </>
                );
                const classes =
                  'flex items-center gap-4 rounded-2xl border border-ink/5 bg-white px-5 py-4 shadow-soft transition hover:border-secondary/25';
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} className={classes}>
                        {inner}
                      </a>
                    ) : (
                      <div className={classes}>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="mt-5 rounded-2xl border border-ink/5 bg-canvas/70 p-4">
              <p className="text-sm leading-relaxed text-steel">
                We reply to messages during Australian business hours (Mon&ndash;Fri, 9am&ndash;5pm
                AEST). If you&rsquo;re after a quick answer, our{' '}
                <a href="/faq" className="font-medium text-secondary underline decoration-secondary/40 underline-offset-2 hover:decoration-secondary">
                  FAQ page
                </a>{' '}
                covers the most common questions.
              </p>
            </div>

            <div className="mt-4 space-y-3">
              <a
                href="/faq"
                className="flex items-center gap-4 rounded-2xl border border-ink/5 bg-white px-5 py-4 shadow-soft transition hover:border-secondary/25"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-dark">
                  <LifeBuoy className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-primary">Browse the FAQ</span>
                  <span className="block text-sm text-steel">Answers to common questions</span>
                </span>
              </a>

              <a
                href="/risk-disclosure"
                className="flex items-center gap-4 rounded-2xl border border-ink/5 bg-white px-5 py-4 shadow-soft transition hover:border-secondary/25"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/5 text-primary">
                  <FileQuestion className="h-5 w-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-sm font-bold text-primary">Risk disclosure</span>
                  <span className="block text-sm text-steel">Our general information notice</span>
                </span>
              </a>
            </div>
          </div>

          {/* Form column — same RegistrationForm as the homepage */}
          <div className="lg:col-span-7">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
