import Link from 'next/link';
import CompactHero, { HeroPanel } from './components/CompactHero.jsx';
import RegistrationForm from './components/RegistrationForm.jsx';
import { CONTACT_DETAILS } from './components/Footer.jsx';

/**
 * The dedicated Contact Us page.
 *
 * The lead-capture form on the right is the exact same <RegistrationForm />
 * the homepage renders (see src/components/Register.jsx), so the two can never
 * drift apart. Contact details are shared with the footer via CONTACT_DETAILS.
 * Rendered inside the shared Header/Footer (see app/(site)/layout.jsx).
 */
export default function ContactPage() {
  return (
    <>
      <CompactHero
        eyebrow="Contact Us"
        title="We&rsquo;re Here To Help"
        description="Questions about the platform, your account or our research tools? Our team is available during Australian business hours and happy to point you in the right direction."
        primaryCta={{ href: '#contact-form', label: 'Create Your Account' }}
        secondaryCta={{ href: '/faq', label: 'Browse The FAQ' }}
        points={['Australian support hours', 'Email support']}
      >
        <HeroPanel title="Talk To Us" badge="Mon To Fri">
          <ul className="mt-4 space-y-2.5">
            {CONTACT_DETAILS.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent text-primary-deep">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/70">
                      {label}
                    </p>
                    <p className="truncate text-xs font-semibold text-white">{value}</p>
                  </div>
                </>
              );

              return (
                <li
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-3"
                >
                  {href ? (
                    <a href={href} className="flex items-center gap-3">
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-3">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </HeroPanel>
      </CompactHero>

      <div className="py-16 sm:py-20 lg:py-24">
        <div className="shell">
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Contact details column */}
            <div className="lg:col-span-5">
              <h2 className="text-xl font-extrabold tracking-tight text-primary">Reach Us Directly</h2>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                Choose whichever channel suits you. For account or platform questions, the quick form
                on this page is the fastest way to get started.
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
                        <span className="mt-0.5 block truncate text-sm font-medium text-ink">
                          {value}
                        </span>
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
                  We reply to messages during Australian business hours (Mon&ndash;Fri,
                  9am&ndash;5pm AEST). If you&rsquo;re after a quick answer, our{' '}
                  <Link
                    href="/faq"
                    className="font-medium text-secondary underline decoration-secondary/40 underline-offset-2 hover:decoration-secondary"
                  >
                    FAQ page
                  </Link>{' '}
                  covers the most common questions.
                </p>
              </div>
            </div>

            {/* Form column - same RegistrationForm as the homepage */}
            <div id="contact-form" className="lg:col-span-7">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
