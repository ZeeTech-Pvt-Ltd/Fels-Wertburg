/**
 * Editorial section kicker: a short accent rule and an uppercase label.
 * The rule is decorative (aria-hidden).
 */
export default function Eyebrow({ children, center = false }) {
  return (
    <p className={`eyebrow ${center ? 'justify-center' : ''}`}>
      <span aria-hidden="true" className="h-px w-6 bg-accent/60" />
      <span>{children}</span>
    </p>
  );
}
