import { useId } from "react";

/** One petal, pointing up from the blossom's centre (0, 0). */
export const PETAL = "M0,-1 C11,-8 18,-26 10,-36 C5,-42 -5,-42 -10,-36 C-18,-26 -11,-8 0,-1 Z";
export const PETAL_TURNS = [0, 72, 144, 216, 288];

/**
 * Code Bloom: her blossom held inside code brackets, a designer who builds.
 * Brackets take the text colour; the petals and heart follow the theme's
 * pink, purple and cyan, so it works in light and dark.
 */
export function LogoMark({ className }: { className?: string }) {
  const g = useId();
  return (
    <svg className={className} viewBox="0 0 128 64" aria-hidden focusable="false">
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" style={{ stopColor: "var(--pink)" }} />
          <stop offset="1" style={{ stopColor: "var(--purple)" }} />
        </linearGradient>
      </defs>
      <g fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="24,14 7,32 24,50" />
        <polyline points="104,14 121,32 104,50" />
      </g>
      <g transform="translate(64 33) scale(0.62)" fill={`url(#${g})`}>
        {PETAL_TURNS.map((r) => (
          <path key={r} d={PETAL} transform={`rotate(${r})`} />
        ))}
      </g>
      <circle cx="64" cy="33" r="4" style={{ fill: "var(--cyan)" }} />
    </svg>
  );
}

/** The mark with her name beside it. */
export function Logo() {
  return (
    <>
      <LogoMark className="logo-mark" />
      <span>Amarachi Blossom</span>
    </>
  );
}
