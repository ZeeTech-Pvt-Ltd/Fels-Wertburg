import { Database, GraduationCap, Laptop, Zap } from 'lucide-react';

const ITEMS = [
  {
    icon: Database,
    title: 'Data-driven insights',
  },
  {
    icon: Zap,
    title: 'Easy-to-use tools',
  },
  {
    icon: Laptop,
    title: 'Flexible access',
  },
  {
    icon: GraduationCap,
    title: 'Educational resources',
  },
];

export default function TrustStrip() {
  return (
    <section aria-labelledby="trust-heading" className="relative border-y border-ink/5 bg-white/80">
      <h2 id="trust-heading" className="sr-only">Why people use Fels Wertburg AI</h2>
      <div className="shell grid grid-cols-1 gap-x-6 gap-y-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, title }) => (
          <div key={title} className="flex items-center gap-3.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-accent/20 bg-accent/10 text-accent-dark">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="text-sm font-bold text-primary">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
