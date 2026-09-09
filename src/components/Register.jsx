import { Check, Lock } from 'lucide-react';
import RegistrationForm from './RegistrationForm.jsx';
import Eyebrow from './Eyebrow.jsx';
import Reveal from './Reveal.jsx';

const POINTS = [
  'Free to explore the platform',
  'Only basic contact details needed — no passwords or card details at sign-up',
  'Educational resources included as you get started',
];

export default function Register() {
  return (
    <section id="register" className="section relative overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/4 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="shell relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Copy column — right on desktop (lg:order-2), above the form on mobile */}
        <Reveal className="lg:order-2" delay={120}>
          <Eyebrow>Get Started</Eyebrow>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary">
            Join Fels Wertburg AI in just a few minutes
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-steel">
            Registration is simple and secure. Tell us who you are and we&rsquo;ll help you set up a
            workspace where you can explore market insights, analytics and learning resources.
          </p>

          <ul className="mt-7 space-y-3.5">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/15 text-accent-dark">
                  <Check className="h-4 w-4" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-[15px] leading-relaxed text-ink">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-ink/5 bg-white p-4 shadow-card">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/5 text-primary">
              <Lock className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="text-sm leading-relaxed text-steel">
              <strong className="font-semibold text-ink">Your privacy matters.</strong> We collect
              only what we need to run your account and never request sensitive financial
              information during registration.
            </p>
          </div>
        </Reveal>

        {/* Form column — left on desktop (lg:order-1), below the copy on mobile */}
        <Reveal className="lg:order-1">
          <RegistrationForm />
        </Reveal>
      </div>
    </section>
  );
}
