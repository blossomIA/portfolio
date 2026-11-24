"use client";

import { useRef, useState } from "react";
import { Section } from "@/components/site/Section";
import { Chevron } from "@/components/site/Icon";
import { Box } from "lucide-react";
import { toolMarks, type ToolKey } from "@/lib/tool-marks";

type Vars = React.CSSProperties & Record<`--${string}`, string>;

/**
 * "What I can do for you" as a notebook with index tabs. Each tab opens
 * its page; a small dot carries the service's colour. Tabs follow the
 * ARIA tabs pattern, so the arrow keys move between them.
 */

/** Short names for the tool chips (the marks carry the full name). */
const toolNames: Partial<Record<ToolKey, string>> = { mcp: "MCP", claude: "Claude Code" };

type Tool = ToolKey | "spline";

const services: {
  tab: string;
  eyebrow: string;
  label: string;
  body: string;
  dot: string;
  tools: Tool[];
  soon?: boolean;
}[] = [
  {
    tab: "AI research",
    eyebrow: "AI-RESEARCH",
    label: "AI-Powered UX Research",
    body: "Turning transcripts, chat logs, and diary studies into shipping-grade insight, faster than a spreadsheet allows.",
    dot: "var(--pink)",
    tools: ["claude", "notion", "miro"],
  },
  {
    tab: "Research",
    eyebrow: "RESEARCH",
    label: "UX Research & Discovery",
    body: "Framing the problem before the pixels. Interviews, diary studies, competitive teardowns, journey maps.",
    dot: "var(--purple)",
    tools: ["miro", "notion", "figma"],
  },
  {
    tab: "Design",
    eyebrow: "DESIGN",
    label: "Product Design",
    body: "End-to-end product work, from information architecture to high-fidelity, opinionated interfaces.",
    dot: "var(--cyan)",
    tools: ["figma", "framer"],
  },
  {
    tab: "Systems",
    eyebrow: "SYSTEMS",
    label: "Design Systems",
    body: "Tokens, components, docs, treated as a product with its own release cadence, not a Figma library.",
    dot: "var(--pink)",
    tools: ["figma", "notion", "github"],
  },
  {
    tab: "Prototyping",
    eyebrow: "PROTOTYPING",
    label: "Prototyping & Testing",
    body: "Interactive prototypes that pressure-test the idea before engineering touches it.",
    dot: "var(--purple)",
    tools: ["figma", "framer"],
  },
  {
    tab: "Build",
    eyebrow: "BUILD",
    label: "Design to Code",
    body: "Taking designs out of Figma and into working product: real components and real data, built with AI and MCP, then shipped.",
    dot: "var(--cyan)",
    tools: ["claude", "cursor", "mcp", "react", "nextjs", "github", "vercel"],
  },
  {
    tab: "3D",
    eyebrow: "ANIMATION",
    label: "3D Modelling",
    body: "Cinema 4D + Spline for brand systems, product marketing renders, and motion pieces.",
    dot: "var(--pink)",
    tools: ["cinema4d", "spline"],
    soon: true,
  },
];

const stats = [
  {
    value: "3+",
    label: "Years designing",
    note: "Crafting interfaces across mobile, web, and emerging platforms, always led by user intent.",
    rot: "-3deg",
  },
  {
    value: "1",
    label: "Constant goal",
    note: "From zero-to-one launches to scaled redesigns, each one shipped with care and conviction.",
    rot: "2.5deg",
  },
];

const pad = (n: number) => String(n).padStart(2, "0");

export function MeServices() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const s = services[active];

  const select = (i: number, focus = false) => {
    const n = (i + services.length) % services.length;
    setActive(n);
    if (focus) tabs.current[n]?.focus();
  };

  const onKey = (e: React.KeyboardEvent) => {
    const map: Record<string, number> = {
      ArrowRight: active + 1,
      ArrowLeft: active - 1,
      Home: 0,
      End: services.length - 1,
    };
    if (!(e.key in map)) return;
    e.preventDefault();
    select(map[e.key], true);
  };

  return (
    <Section
      id="me-svc"
      className="me-svc-sec"
      title="What I can do for you"
      desc="Pick a tab to open its page."
    >
        <div className="me-nb">
          <div className="me-tabs" role="tablist" aria-label="Services" onKeyDown={onKey}>
            {services.map((t, i) => (
              <button
                key={t.tab}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`svc-tab-${i}`}
                aria-selected={active === i}
                aria-controls="svc-panel"
                tabIndex={active === i ? 0 : -1}
                className="me-tab"
                style={{ "--dot": t.dot } as Vars}
                onClick={() => select(i)}
              >
                <span className="me-tab-no">{pad(i + 1)}</span>
                {t.tab}
              </button>
            ))}
          </div>

          <div
            className="me-page"
            role="tabpanel"
            id="svc-panel"
            aria-labelledby={`svc-tab-${active}`}
            style={{ "--dot": s.dot } as Vars}
          >
            <div className="me-page-in" key={active}>
              <div className="me-page-top">
                <span className="d me-page-no">{pad(active + 1)}</span>
                <span className="lab">{s.eyebrow}</span>
                {s.soon && <span className="lab me-soon">Coming soon</span>}
              </div>
              <h3 className="d me-page-h">{s.label}</h3>
              <p className="me-page-body">{s.body}</p>
              <div className="me-tools">
                <span className="lab">Tools</span>
                <ul>
                  {s.tools.map((t) => (
                    <li key={t}>
                      {t === "spline" ? (
                        <Box size={16} strokeWidth={1.8} aria-hidden />
                      ) : (
                        <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden>
                          <path d={toolMarks[t].path} fill="currentColor" />
                        </svg>
                      )}
                      {t === "spline" ? "Spline" : (toolNames[t] ?? toolMarks[t].title)}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="me-page-side">
              {stats.map((st) => (
                <div key={st.label} className="me-stat" style={{ "--rot": st.rot } as Vars}>
                  <b className="d">{st.value}</b>
                  <span className="lab">{st.label}</span>
                  <p>{st.note}</p>
                </div>
              ))}
            </div>

            <div className="me-page-nav">
              <button
                type="button"
                className="round-btn"
                aria-label="Previous service"
                onClick={() => select(active - 1)}
              >
                <Chevron dir="left" />
              </button>
              <span className="lab">
                {pad(active + 1)} / {pad(services.length)}
              </span>
              <button
                type="button"
                className="round-btn"
                aria-label="Next service"
                onClick={() => select(active + 1)}
              >
                <Chevron dir="right" />
              </button>
            </div>
          </div>
        </div>
    </Section>
  );
}
