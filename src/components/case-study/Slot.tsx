import type { CSSProperties } from "react";

/**
 * Placeholder for an image the owner is going to supply. Shows what goes
 * there and keeps the layout at the right proportions until it arrives.
 */
export function Slot({
  name,
  ratio = "16 / 10",
  round,
  className = "",
}: {
  name: string;
  ratio?: string;
  round?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`slot${round ? " slot-round" : ""} ${className}`.trim()}
      style={{ aspectRatio: ratio } as CSSProperties}
      role="img"
      aria-label={`Image coming: ${name}`}
    >
      <span className="slot-tag">Image needed</span>
      <span className="slot-name">{name}</span>
    </div>
  );
}
