import { Database, GraduationCap, Laptop, Zap } from 'lucide-react';

const ITEMS = [
  {
    icon: Database,
    title: 'Data-driven insights',
    text: 'Structured market information, clearly presented.',
  },
  {
    icon: Zap,
    title: 'Easy-to-use tools',
    text: 'Analytics designed around everyday research.',
  },
  {
    icon: Laptop,
    title: 'Flexible access',
    text: 'On desktop, tablet or your phone.',
  },
  {
    icon: GraduationCap,
    title: 'Educational resources',
    text: 'Build your knowledge at your own pace.',
  },
];

export default function TrustStrip() {
  return (
    <section aria-labelledby="trust-heading" className="relative border-y border-ink/5 bg-white/80">
      <h2 id="trust-heading" className="sr-only">Why people use Fels Wertburg AI</h2>
      <div className="shell grid grid-cols-1 gap-x-6 gap-y-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-3.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent-dark">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-sm font-bold text-primary">{title}</h3>
              <p className="mt-0.5 text-sm leading-relaxed text-steel">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
