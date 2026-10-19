/**
 * Shared hero band for interior pages (Features, How It Works, Reviews).
 * Keeps the gradient panel, eyebrow pill and type scale identical across
 * pages so new routes look like part of the same site by construction.
 */
export default function PageHeader({ icon: Icon, eyebrow, title, children }) {
  return (
    <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-deep to-primary px-6 py-10 text-white shadow-card sm:px-10 sm:py-12">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-14 h-48 w-48 rounded-full bg-accent/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-secondary/30 blur-3xl"
      />
      <div className="relative">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
          {Icon ? <Icon className="h-3.5 w-3.5" aria-hidden="true" /> : null}
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
          {children}
        </p>
      </div>
    </header>
  );
}
