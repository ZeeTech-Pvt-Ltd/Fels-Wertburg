import { ShieldAlert } from 'lucide-react';

/**
 * Compact risk band for interior pages. The homepage keeps its own fuller risk
 * section; this carries the same warning before any call to action.
 */
export default function RiskNote() {
  return (
    <section aria-labelledby="risk-note-heading" className="pb-4">
      <div className="shell">
        <div className="flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5 sm:p-6">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-700">
            <ShieldAlert className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h2 id="risk-note-heading" className="text-base font-bold text-primary">
              Risk Warning
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-steel">
              Crypto markets are volatile and you can lose money. Everything on this site is general
              information, not personal financial advice. Consider your circumstances and seek
              professional advice where appropriate. Read the full{' '}
              <a
                href="/risk-disclosure"
                className="font-semibold text-secondary underline decoration-secondary/40 underline-offset-2 hover:decoration-secondary"
              >
                Risk Disclosure
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
