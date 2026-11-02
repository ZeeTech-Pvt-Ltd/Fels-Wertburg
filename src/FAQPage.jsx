import Link from 'next/link';
import { ArrowRight, HelpCircle, MessageCircle, Sparkles } from 'lucide-react';
import { FaqAccordion } from './components/FAQ.jsx';
import CompactHero, { HeroPanel } from './components/CompactHero.jsx';
import { FAQS } from './data/faqs.js';

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, '\\u003c') }}
      />

      <CompactHero
        eyebrow="Help Centre"
        title="Frequently Asked Questions"
        description="Straight answers about Fels Wertburg AI: what the platform is, who it’s for, how registration works and how we look after your information."
        primaryCta={{ href: '/#register', label: 'Create Your Account' }}
        secondaryCta={{ href: '/contact', label: 'Contact Support' }}
        points={[`${FAQS.length} straight answers`, 'Plain English']}
      >
        <HeroPanel title="Common Questions" badge={`${FAQS.length} Answers`}>
          <ul className="mt-4 space-y-2.5">
            {FAQS.slice(0, 4).map((item) => (
              <li
                key={item.q}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-3"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-accent text-primary-deep">
                  <HelpCircle className="h-4 w-4" aria-hidden="true" />
                </span>
                <p className="min-w-0 truncate text-xs font-semibold text-white">{item.q}</p>
              </li>
            ))}
          </ul>
        </HeroPanel>
      </CompactHero>

      <div id="answers" className="py-16 sm:py-20 lg:py-24">
        <div className="shell">
          {/* Accordion + sidebar */}
          <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-8">
              {/* h1 -> h2 keeps the heading hierarchy sequential on this page */}
              <FaqAccordion headingLevel="h2" />
            </div>

            <aside className="space-y-5 lg:col-span-4" aria-label="More help">
              <div className="rounded-3xl border border-ink/5 bg-white p-6 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary/10 text-secondary">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-primary">Can&rsquo;t Find Your Answer?</h2>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  Send us a message and our team will get back to you during Australian business
                  hours (Mon&ndash;Fri, 9am&ndash;5pm AEST). We&rsquo;re happy to help.
                </p>
                <div className="mt-5 space-y-2.5">
                  <a href="mailto:support@fels-wertburgai.com" className="btn-primary w-full">
                    Email Support
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                  <Link href="/contact" className="btn-ghost w-full">
                    Go To The Contact Page
                  </Link>
                </div>
              </div>

              <div className="rounded-3xl border border-ink/5 bg-white p-6 shadow-soft">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent/10 text-accent-dark">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </span>
                <h2 className="mt-4 text-lg font-bold text-primary">Just Getting Started?</h2>
                <p className="mt-2 text-sm leading-relaxed text-steel">
                  Create your free account on the homepage: all we need are basic contact details,
                  and you can explore the platform right away.
                </p>
                <Link href="/#register" className="btn-primary mt-5 w-full">
                  Get Started
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
