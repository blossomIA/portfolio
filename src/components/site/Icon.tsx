/** Small line icons, drawn to match the 1px hairlines. Decorative only. */

type Props = { size?: number; className?: string };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  focusable: false,
});

const chevrons = {
  left: "M14.5 6l-6 6 6 6",
  right: "M9.5 6l6 6-6 6",
  down: "M6 9.5l6 6 6-6",
};

export function Chevron({ dir, size = 16, className }: Props & { dir: keyof typeof chevrons }) {
  return (
    <svg {...base(size)} className={className}>
      <path d={chevrons[dir]} />
    </svg>
  );
}

/** For links that leave the site. */
export function External({ size = 14, className }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M8 16L16 8M9.5 8H16v6.5" />
    </svg>
  );
}

export function Sun({ size = 16, className }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v1.5M12 19.5V21M3 12h1.5M19.5 12H21M5.6 5.6l1.1 1.1M17.3 17.3l1.1 1.1M5.6 18.4l1.1-1.1M17.3 6.7l1.1-1.1" />
    </svg>
  );
}

export function Moon({ size = 16, className }: Props) {
  return (
    <svg {...base(size)} className={className}>
      <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
    </svg>
  );
}
