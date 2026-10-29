import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import Logo from '../../src/components/Logo.jsx';

export const metadata = {
  title: "You're all set | Fels Wertburg AI",
  description:
    'Thank you for registering with Fels Wertburg AI. Check your inbox to finish getting started.',
  // Confirmation pages must never be indexed and carry no canonical.
  robots: { index: false, follow: false },
  icons: { icon: '/favicon.svg' },
};

const STEPS = [
  'Open the confirmation email we just sent and click the link to verify your address.',
  'Log in and set up your market watchlist to start exploring the tools and learning resources.',
  'Got questions? Our team replies Monday to Friday, 9am to 5pm AEST at support@fels-wertburgai.com.',
];

export default function ThankYouPage() {
  return (
    <div
      className="grid min-h-screen place-items-center p-6"
      style={{
        background:
          'radial-gradient(720px 420px at 12% -10%, rgba(41, 182, 168, 0.12), transparent 60%), radial-gradient(760px 460px at 95% 110%, rgba(30, 111, 140, 0.12), transparent 60%), #F5F8FA',
      }}
    >
      <main
        aria-labelledby="thanks-title"
        className="w-full max-w-[560px] rounded-3xl border border-ink/10 bg-white px-6 py-10 text-center shadow-soft sm:px-11 sm:py-12"
      >
        <div className="flex justify-center">
          <Logo />
        </div>

        <span
          aria-hidden="true"
          className="mx-auto mt-10 grid h-[72px] w-[72px] place-items-center rounded-full bg-accent/15 text-accent-dark"
        >
          <Check className="h-10 w-10" strokeWidth={2.8} />
        </span>

        <h1
          id="thanks-title"
          className="mt-4 text-[clamp(1.7rem,6vw,2.3rem)] font-extrabold tracking-tight text-primary"
        >
          You&rsquo;re All Set!
        </h1>
        <p className="mx-auto mt-2 max-w-[40ch] text-[15px] leading-relaxed text-steel">
          Thanks for registering with <strong className="font-semibold text-ink">Fels Wertburg AI</strong>.
          A confirmation email is on its way to{' '}
          <strong className="font-semibold text-ink">the address you provided</strong>. Check your
          inbox to finish getting started.
        </p>

        <ol className="mt-6 grid gap-2.5 text-left" aria-label="What happens next">
          {STEPS.map((step, index) => (
            <li
              key={step}
              className="flex items-start gap-3 rounded-2xl border border-ink/5 bg-canvas px-3.5 py-3 text-[13.5px] leading-relaxed text-ink"
            >
              <span
                aria-hidden="true"
                className="mt-px grid h-[22px] w-[22px] shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-white"
              >
                {index + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <Link
          href="/"
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-br from-secondary to-accent-dark px-6 py-3.5 text-[15px] font-bold text-white shadow-card transition hover:-translate-y-px hover:shadow-lift"
        >
          Back to homepage
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>

        <p className="mt-6 text-[11px] leading-relaxed text-muted">
          <strong className="font-semibold text-steel">Risk warning:</strong> Financial markets
          involve risk. Information provided on this website is general in nature and does not
          constitute personal financial advice. Consider your circumstances and seek professional
          advice where appropriate.
        </p>
        <p className="mt-4 text-[11px] text-muted">
          &copy; 2026 Fels Wertburg AI. All rights reserved.
        </p>
      </main>
    </div>
  );
}
