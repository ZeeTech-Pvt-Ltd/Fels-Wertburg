/**
 * Fels Wertburg AI logo - a lightweight SVG wordmark + geometric tile mark.
 * `tone`: 'light' renders on a light page; 'dark' renders on a dark (navy) background.
 */
export function LogoMark({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M3 16.5 9.5 6l3.4 4.9L16.8 5 21 16.5"
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 13.5 21 16.5l-6.6 0Z" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

export default function Logo({ tone = 'light' }) {
  const onDark = tone === 'dark';
  const textColor = onDark ? 'text-white' : 'text-ink';
  return (
    <a
      href="/"
      className="group inline-flex items-center gap-2.5 rounded-md"
      aria-label="Fels Wertburg AI, back to homepage"
    >
      <span
        className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white shadow-card ${
          onDark
            ? 'bg-gradient-to-br from-accent to-secondary'
            : 'bg-gradient-to-br from-primary to-secondary'
        }`}
      >
        <LogoMark className="h-[18px] w-[18px]" />
      </span>
      <span className={`font-display text-lg font-extrabold tracking-tight ${textColor}`}>
        Fels Wertburg{' '}
        <span className={onDark ? 'text-accent' : 'text-secondary'}>AI</span>
      </span>
    </a>
  );
}
