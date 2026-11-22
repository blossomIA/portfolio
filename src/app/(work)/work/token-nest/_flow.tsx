"use client";

import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

/**
 * Design-process flow, drawn like the Figma: thick dashed connectors with
 * open chevron heads. Within a row the arrow sits in the gap; at the end of a
 * row the line runs out to the right, drops into the gap between rows, runs
 * back left past the first card and drops into the next row. When the cards
 * stack (phones) the arrows simply point down.
 *
 * The SVG measures the real card positions, so the path is exact at any width.
 */
export function Flow({ children }: { children: ReactNode }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<string[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const el = wrap.current;
    if (!el) return;

    const draw = () => {
      const box = el.getBoundingClientRect();
      const cards = [...el.querySelectorAll<HTMLElement>(".tn-step")].map((c) => {
        const r = c.getBoundingClientRect();
        return {
          l: r.left - box.left,
          r: r.right - box.left,
          t: r.top - box.top,
          b: r.bottom - box.top,
          my: r.top - box.top + r.height / 2,
          mx: r.left - box.left + r.width / 2,
        };
      });
      const gapIn = 10; // keep the line off the card edges
      const out = 34; // how far the turn swings outside the cards
      const next: string[] = [];
      for (let i = 0; i < cards.length - 1; i++) {
        const a = cards[i];
        const b = cards[i + 1];
        if (Math.abs(a.t - b.t) < 4) {
          // same row: straight across the gap
          next.push(`M ${a.r + gapIn} ${a.my} H ${b.l - gapIn}`);
        } else if (b.l < a.l - 4) {
          // row wrap: out right, down into the gap, back left, down into the next row
          const midY = (a.b + b.t) / 2;
          next.push(
            `M ${a.r + gapIn} ${a.my} H ${a.r + out} V ${midY} H ${b.l - out} V ${b.t + 22}`,
          );
        } else {
          // stacked: straight down
          next.push(`M ${a.mx} ${a.b + gapIn} V ${b.t - gapIn}`);
        }
      }
      setPaths(next);
      setSize({ w: box.width, h: box.height });
    };

    draw();
    const ro = new ResizeObserver(draw);
    ro.observe(el);
    window.addEventListener("load", draw);
    return () => {
      ro.disconnect();
      window.removeEventListener("load", draw);
    };
  }, []);

  return (
    <div className="tn-flow-wrap" ref={wrap}>
      {children}
      <svg
        className="tn-flow-lines"
        width={size.w}
        height={size.h}
        viewBox={`0 0 ${size.w || 1} ${size.h || 1}`}
        aria-hidden
      >
        <defs>
          <marker
            id="tn-chev"
            viewBox="0 0 20 20"
            refX="15"
            refY="10"
            markerWidth="20"
            markerHeight="20"
            markerUnits="userSpaceOnUse"
            orient="auto"
          >
            <path d="M5 2.5 L15 10 L5 17.5" />
          </marker>
        </defs>
        {paths.map((d, i) => (
          <path key={i} d={d} markerEnd="url(#tn-chev)" />
        ))}
      </svg>
    </div>
  );
}
