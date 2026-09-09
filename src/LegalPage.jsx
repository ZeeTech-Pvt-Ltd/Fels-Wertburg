import { ArrowLeft, ArrowRight, FileText } from 'lucide-react';
import { LEGAL_DOCS, LEGAL_LINKS } from './components/LegalModal.jsx';

/**
 * Renders one legal document (Privacy / Cookie / Terms / Risk / Disclaimer)
 * as a full standalone page, sharing the site Header/Footer. Content comes
 * from the same LEGAL_DOCS source as the quick-view dialog, and the sibling
 * nav from LEGAL_LINKS, so the pages and dialog can never drift apart.
 */
export default function LegalPage({ docKey }) {
  const doc = LEGAL_DOCS[docKey];

  const siblings = LEGAL_LINKS;
  const idx = siblings.findIndex((s) => s.key === docKey);
  const prev = siblings[idx - 1];
  const next = siblings[idx + 1];

  return (
    <div className="section">
      <div className="shell mx-auto max-w-3xl">
        {/* Intro card */}
        <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-deep to-primary px-6 py-10 text-white shadow-card sm:px-10 sm:py-12">
          <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-14 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
          <div className="relative">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
              <FileText className="h-3.5 w-3.5" aria-hidden="true" />
              Legal
            </p>
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">{doc.title}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">{doc.intro}</p>
          </div>
        </header>

        {/* Body */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-ink/10 bg-white shadow-soft">
          {doc.sections.map((section, i) => (
            <section
              key={section.heading}
              className={`px-6 py-8 sm:px-10 ${i !== doc.sections.length - 1 ? 'border-b border-ink/10' : ''}`}
            >
              <h2 className="flex items-baseline gap-3 text-xl font-bold text-primary">
                <span className="text-sm font-extrabold text-accent" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                {section.heading}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-steel">{section.body}</p>
            </section>
          ))}
        </div>

        {/* Prev / next + home */}
        <nav aria-label="Legal documents" className="mt-8 grid gap-3 sm:grid-cols-2">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-semibold text-primary transition hover:border-primary/50 hover:bg-white"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to homepage
          </a>
          {next ? (
            <a
              href={next.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              {next.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          ) : prev ? (
            <a
              href={prev.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-3 text-sm font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:shadow-lift"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {prev.label}
            </a>
          ) : null}
        </nav>
      </div>
    </div>
  );
}
