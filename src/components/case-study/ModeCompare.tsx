"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";

type Shot = { label: string; dark: string; light: string };

/** Three phones that flip between dark and light designs. */
export function ModeCompare({ kicker, title, shots }: { kicker: string; title: ReactNode; shots: Shot[] }) {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  return (
    <div>
      <div className="cs-modes">
        <div>
          <span className="lab muted">{kicker}</span>
          <h3 className="d">{title}</h3>
        </div>
        <div className="cs-switch" role="group" aria-label="Colour mode">
          {(["dark", "light"] as const).map((m) => (
            <button key={m} aria-pressed={mode === m} onClick={() => setMode(m)}>
              {m === "dark" ? "Dark" : "Light"}
            </button>
          ))}
        </div>
      </div>
      <div className="cs-phones">
        {shots.map((s) => (
          <figure key={s.label}>
            <div className="cs-phone">
              <Image src={s.dark} alt={`${s.label}, dark mode`} fill sizes="230px" style={{ opacity: mode === "dark" ? 1 : 0 }} />
              <Image src={s.light} alt={`${s.label}, light mode`} fill sizes="230px" style={{ opacity: mode === "light" ? 1 : 0 }} />
            </div>
            <figcaption className="lab">{s.label}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
