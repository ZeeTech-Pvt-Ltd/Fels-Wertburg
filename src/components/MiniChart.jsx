import { useId } from 'react';

const W = 200;
const H = 64;
const PAD = 3;

function buildPoints(data) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const step = data.length > 1 ? (W - PAD * 2) / (data.length - 1) : 0;
  return data.map((value, i) => {
    const x = PAD + (data.length > 1 ? i * step : W / 2);
    const y = H - PAD - ((value - min) / range) * (H - PAD * 2);
    return [x, y];
  });
}

/**
 * Lightweight, dependency-free line/area chart rendered as inline SVG.
 * Purely decorative data visualisation - no chart library required.
 */
export default function MiniChart({
  data,
  className = 'h-16 w-full',
  stroke = '#29B6A8',
  fill = true,
  strokeWidth = 2.2,
}) {
  const rawId = useId();
  const gid = `grad-${rawId.replace(/[:]/g, '')}`;

  if (!data || data.length < 2) return null;

  const points = buildPoints(data);
  const line = points.map(([x, y]) => `${x},${y}`).join(' ');
  const area =
    `M ${points[0][0]} ${H} L ` + points.map(([x, y]) => `${x} ${y}`).join(' L ') + ` L ${points[points.length - 1][0]} ${H} Z`;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {fill && (
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={stroke} stopOpacity="0.3" />
            <stop offset="100%" stopColor={stroke} stopOpacity="0" />
          </linearGradient>
        </defs>
      )}
      <path d={area} fill={fill ? `url(#${gid})` : 'none'} />
      <polyline
        points={line}
        fill="none"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
