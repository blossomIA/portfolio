import type { ReactNode } from "react";

/**
 * Her section pattern: a numbered header bar across the top (number, title,
 * a short line of context, optional controls on the right), sitting on a
 * hairline, with the content full width below. `band` gives the darker
 * alternate background.
 */
export function Section({
  id,
  no,
  title,
  desc,
  aside,
  band,
  className = "",
  children,
}: {
  id?: string;
  /** two-digit index shown before the title, e.g. "01" */
  no?: string;
  title: ReactNode;
  desc?: ReactNode;
  /** controls or facts on the right of the header */
  aside?: ReactNode;
  band?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const headId = id ? `${id}-title` : undefined;
  return (
    <section
      id={id}
      className={`sec${band ? " band" : ""} ${className}`.trim()}
      aria-labelledby={headId}
    >
      <div className="wrap">
        <header className="sh">
          {no && <span className="sh-no">{no}</span>}
          <h2 id={headId} className="sh-title">
            {title}
          </h2>
          {desc && <p className="sh-desc">{desc}</p>}
          {aside && <div className="sh-aside">{aside}</div>}
        </header>
        {children}
      </div>
    </section>
  );
}
