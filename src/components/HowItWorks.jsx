import { ArrowRight, Compass, Lightbulb, UserPlus } from 'lucide-react';
import Eyebrow from './Eyebrow.jsx';
import Reveal from './Reveal.jsx';

// Shared by the homepage section and the dedicated How It Works page, so the
// steps, wording and order can never drift between the two.
export const STEPS = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Create Your Account',
    text: 'Complete the simple registration process with just a few basic details. It takes minutes.',
    points: [
      'Fill in your name, email and phone number.',
      'Choose your country from the picker beside the phone field.',
      'Review the Privacy Policy and Terms before you agree.',
    ],
  },
  {
    number: '02',
    icon: Compass,
    title: 'Explore Market Tools',
    text: 'Access market insights, charts, watchlists and educational resources from one organised workspace.',
    points: [
      'Open the market scanner to see what moved and where.',
      'Build a watchlist for the assets you follow closely.',
      'Read the guides in your own time and at your own pace.',
    ],
  },
  {
    number: '03',
    icon: Lightbulb,
    title: 'Make Informed Decisions',
    text: 'Use the available information to support your own research and decisions, at your own pace.',
    points: [
      'Compare the data with your own research and goals.',
      'Set alerts for the moves that matter to you.',
      'Keep a record of what you learn and why it mattered.',
    ],
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section overflow-hidden bg-white">
      <div className="shell">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center>
            How It Works
          </Eyebrow>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary">
            Up And Running In Three Simple Steps
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-steel">
            No steep learning curve, just a clear path from sign up to smarter research.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Desktop connector line */}
          <div
            aria-hidden="true"
            className="absolute left-[5%] right-[28%] top-7 hidden border-t-2 border-dashed border-ink/15 lg:block"
          />

          <ol className="relative grid gap-12 lg:grid-cols-3 lg:gap-8">
            {STEPS.map((step, index) => (
              <li key={step.number} className="relative text-center lg:text-left">
                <Reveal delay={index * 110}>
                  {/* Number bubble */}
                  <div className="relative z-10 mx-auto grid h-14 w-14 place-items-center rounded-full border-2 border-accent/30 bg-white shadow-card lg:mx-0">
                    <span className="font-display text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-secondary to-accent">
                      {step.number}
                    </span>
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-primary">{step.title}</h3>
                    <p className="mx-auto mt-2 max-w-sm text-[15px] leading-relaxed text-steel lg:mx-0">
                      {step.text}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-14 text-center">
          <a href="#register" className="btn-primary">
            Get Started Today
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
