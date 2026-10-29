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
    <section aria-labelledby="trust-heading" className="relative border-y border-white/10 bg-primary-deep">
      <h2 id="trust-heading" className="sr-only">Why people use Fels Wertburg AI</h2>
      <div className="shell grid grid-cols-1 gap-x-6 gap-y-6 py-4 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ icon: Icon, title }) => (
          <div key={title} className="flex items-center gap-3.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/15 bg-white/10 text-accent">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="text-sm font-bold text-white">{title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
