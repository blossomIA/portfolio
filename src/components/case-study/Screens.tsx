"use client";

import Image from "next/image";
import { useRef } from "react";
import { Chevron } from "@/components/site/Icon";

export type Screen = {
  title: string;
  stat?: string;
  body: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Horizontal rail of screens: native scroll with snap, plus arrow buttons. */
export function ScreensRail({ screens }: { screens: Screen[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const step = (dir: 1 | -1) => {
    const el = ref.current;
    const card = el?.firstElementChild as HTMLElement | null;
    if (el && card) el.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: "smooth" });
  };

  return (
    <>
      <div className="wrap" style={{ display: "flex", justifyContent: "flex-end", marginBottom: 18 }}>
        <div className="arrows">
          <button className="round-btn" onClick={() => step(-1)} aria-label="Previous screen">
            <Chevron dir="left" />
          </button>
          <button className="round-btn" onClick={() => step(1)} aria-label="Next screen">
            <Chevron dir="right" />
          </button>
        </div>
      </div>
      <div className="cs-shots" ref={ref} tabIndex={0} aria-label="Screens, scroll sideways">
        {screens.map((s) => (
          <article className="cs-scr" key={s.title}>
            <figure>
              <Image src={s.src} alt={s.alt} width={s.width} height={s.height} sizes="(min-width: 900px) 860px, 86vw" />
            </figure>
            <div className="cap">
              <h3 className="d">{s.title}</h3>
              {s.stat && <span className="stat">{s.stat}</span>}
            </div>
            <p>{s.body}</p>
          </article>
        ))}
      </div>
    </>
  );
}
