import type { CSSProperties } from "react";

export type Slice = { label: string; value: number; color: string };

/** conic-gradient stops for a set of slices that add up to 100 */
function stops(slices: Slice[]) {
  let at = 0;
  return slices
    .map((s) => {
      const from = at;
      at += s.value;
      return `${s.color} ${from}% ${at}%`;
    })
    .join(", ");
}

const summary = (slices: Slice[]) => slices.map((s) => `${s.label} ${s.value}%`).join(", ");

/** A pie with its legend beside it. */
export function Pie({ title, slices }: { title: string; slices: Slice[] }) {
  return (
    <figure className="chart">
      <figcaption className="chart-q">{title}</figcaption>
      <div className="chart-body">
        <div
          className="chart-pie"
          role="img"
          aria-label={`${title}: ${summary(slices)}`}
          style={{ "--g": `conic-gradient(${stops(slices)})` } as CSSProperties}
        />
        <ul className="chart-key">
          {slices.map((s) => (
            <li key={s.label}>
              <i style={{ background: s.color }} />
              <span>{s.label}</span>
              <b>{s.value}%</b>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}

/** A donut with its legend beside it. */
export function Donut({ slices, label }: { slices: Slice[]; label: string }) {
  return (
    <div className="chart-body">
      <div
        className="chart-donut"
        role="img"
        aria-label={`${label}: ${summary(slices)}`}
        style={{ "--g": `conic-gradient(${stops(slices)})` } as CSSProperties}
      />
      <ul className="chart-key">
        {slices.map((s) => (
          <li key={s.label}>
            <i style={{ background: s.color }} />
            <span>{s.label}</span>
            <b>{s.value}%</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
