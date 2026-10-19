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

// Shared by the homepage section and the dedicated Features page.
export const FEATURES = [
  {
    icon: Sparkles,
    title: 'Intelligent Market Insights',
    text: 'Understand market movements with structured data and clear visualisation, organised so the signal is easy to find.',
    points: [
      'See price movement, volume and market direction in one view.',
      'Spot unusual activity without scanning every chart yourself.',
      'Read short summaries written in plain English.',
    ],
  },
  {
    icon: LayoutDashboard,
    title: 'Simple Interface',
    text: 'Access important information without unnecessary complexity. Everything you research most lives a click away.',
    points: [
      'All the main tools sit in one calm workspace.',
      'Search and filter without digging through menus.',
      'The same layout on desktop, tablet and mobile.',
    ],
  },
  {
    icon: Activity,
    title: 'Current Market Awareness',
    text: 'Stay informed with regularly updated market information, so your research reflects the latest available data.',
    points: [
      'Market information refreshes through the trading day.',
      'Alerts bring you back to the assets you follow.',
      'Summaries explain what changed and why it might matter.',
    ],
  },
  {
    icon: Smartphone,
    title: 'Access On Any Device',
    text: 'Use the platform across desktop, tablet and mobile, and pick up your research wherever you left off.',
    points: [
      'Start on your laptop and continue on your phone.',
      'Charts resize to fit the screen you are using.',
      'No extra app install needed to get started.',
    ],
  },
  {
    icon: BookOpen,
    title: 'Learning Resources',
    text: 'Build your market knowledge through accessible educational content designed for every experience level.',
    points: [
      'Guides that start with the basics and build from there.',
      'Plain language explanations of common market terms.',
      'Topics you can read in any order you choose.',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Secure Experience',
    text: 'We follow modern security and privacy practices, and keep your personal information protected.',
    points: [
      'Sign up asks for basic contact details only.',
      'No wallet keys and no card details at registration.',
      'Clear privacy information written for real people.',
    ],
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
          <Eyebrow center>
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
