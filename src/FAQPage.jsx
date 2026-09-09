import { ArrowRight, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';
import { FAQS, FaqAccordion } from './components/FAQ.jsx';

/**
 * The dedicated FAQ page. The accordion is the exact same component the
 * homepage uses (see src/components/FAQ.jsx), so the questions, markup and
 * ids can never drift between the two. Rendered inside the shared Header/Footer.
 */
export default function FAQPage() {
  // FAQPage structured data, generated from the same FAQS used on screen so it
  // can never drift from the visible questions.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <div className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
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
              <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
              Help centre
            </p>
            <h1 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-tight sm:text-4xl">
              Frequently asked questions
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
              Straight answers about Fels Wertburg AI: what the platform is, who it&rsquo;s for,
              how registration works and how we look after your information.
            </p>
          </div>
        </header>

        {/* Accordion + sidebar */}
        <div className="mt-10 grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-8">
            {/* h1 -> h2 keeps the heading hierarchy sequential on this page */}
            <FaqAccordion headingLevel="h2" />
          </div>

          <aside className="space-y-5 lg:col-span-4" aria-label="More help">
            <div className="rounded-3xl border border-ink/5 bg-white p-6 shadow-soft">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary/10 text-secondary">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-bold text-primary">Can&rsquo;t find your answer?</h2>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                Send us a message and our team will get back to you during Australian business hours
                (Mon&ndash;Fri, 9am&ndash;5pm AEST). We&rsquo;re happy to help.
              </p>
              <div className="mt-5 space-y-2.5">
                <a href="mailto:support@fels-wertburgai.com" className="btn-primary w-full">
                  Email support
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a href="/contact" className="btn-ghost w-full">
                  Go to the contact page
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-ink/5 bg-white p-6 shadow-soft">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/10 text-accent-dark">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <h2 className="mt-4 text-lg font-bold text-primary">Just getting started?</h2>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                Create your free account on the homepage: all we need are basic contact details,
                and you can explore the platform right away.
              </p>
              <a href="/#register" className="btn-primary mt-5 w-full">
                Get Started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
