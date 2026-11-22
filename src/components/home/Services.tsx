"use client";

import { useState } from "react";
import { Section } from "@/components/site/Section";

export const services = [
  {
    title: "AI-powered UX research",
    body: "Turning transcripts, chat logs, and diary studies into shipping-grade insight, faster than a spreadsheet allows.",
  },
  {
    title: "UX research & discovery",
    body: "Framing the problem before the pixels. Interviews, diary studies, competitive teardowns, journey maps.",
  },
  {
    title: "Product design",
    body: "End-to-end product work, from information architecture to high-fidelity, opinionated interfaces.",
  },
  {
    title: "Design systems",
    body: "Tokens, components, docs, treated as a product with its own release cadence, not a Figma library.",
  },
  {
    title: "Prototyping & testing",
    body: "Interactive prototypes that pressure-test the idea before engineering touches it.",
  },
  {
    title: "3D modelling",
    body: "Cinema 4D + Spline for brand systems, product marketing renders, and motion pieces.",
    soon: true,
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * What I can do for you: an index. Point at (or tap) a service on the left and
 * its page opens on the right. On phones each service shows its line inline.
 */
export function Services({ id = "services" }: { id?: string }) {
  const [active, setActive] = useState(0);
  const s = services[active];

  return (
    <Section
      id={id}
      band
      title="What I can do for you"
      desc="From zero-to-one launches to scaled redesigns, each one shipped with care and conviction."
    >
      <div className="svx">
        <ol className="svx-list">
          {services.map((item, i) => (
            <li key={item.title}>
              <button
                type="button"
                className="svx-item"
                aria-pressed={active === i}
                aria-controls="svx-panel"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <span className="svx-no">{pad(i + 1)}</span>
                <span className="svx-name">{item.title}</span>
                {item.soon && <span className="pill">Coming soon</span>}
              </button>
              <p className="svx-inline">{item.body}</p>
            </li>
          ))}
        </ol>

        <div className="svx-panel" id="svx-panel" aria-live="polite">
          <div className="svx-panel-in" key={active}>
            <span className="svx-big">{pad(active + 1)}</span>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
          </div>
          <dl className="facts">
            <div>
              <dt>Years designing</dt>
              <dd>3+</dd>
            </div>
            <div>
              <dt>Constant goal</dt>
              <dd>1</dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
