import {
  Activity,
  BookOpen,
  LayoutDashboard,
  ShieldCheck,
  Smartphone,
  Sparkles,
} from 'lucide-react';
import Eyebrow from './Eyebrow.jsx';
import Reveal from './Reveal.jsx';

const FEATURES = [
  {
    icon: Sparkles,
    title: 'Intelligent Market Insights',
    text: 'Understand market movements with structured data and clear visualisation — organised so the signal is easy to find.',
  },
  {
    icon: LayoutDashboard,
    title: 'Simple Interface',
    text: 'Access important information without unnecessary complexity. Everything you research most lives a click away.',
  },
  {
    icon: Activity,
    title: 'Real-Time Awareness',
    text: 'Stay informed with regularly updated market information, so your research reflects the latest available data.',
  },
  {
    icon: Smartphone,
    title: 'Multi-Device Access',
    text: 'Use the platform across desktop, tablet and mobile, and pick up your research wherever you left off.',
  },
  {
    icon: BookOpen,
    title: 'Learning Resources',
    text: 'Build your market knowledge through accessible educational content designed for every experience level.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Experience',
    text: 'We follow modern security and privacy practices, and keep your personal information protected.',
  },
];

export default function Features() {
  return (
    <section id="features" className="section relative overflow-hidden bg-canvas">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      <div className="shell relative">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow center index={3}>
            Core Features
          </Eyebrow>
          <h2 className="mt-5 text-[clamp(1.9rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight text-primary">
            Designed to make market research clearer
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-steel">
            Every feature exists for one reason: to help you access, understand and use market
            information with less effort.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} className="h-full" delay={(index % 3) * 90}>
              <article className="group flex h-full flex-col rounded-2xl border border-ink/5 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary/5 text-primary transition duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-secondary group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-primary">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-steel">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
