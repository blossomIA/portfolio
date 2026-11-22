"use client";

import Image from "next/image";
import { useState } from "react";
import { Slot } from "@/components/case-study/Slot";

/**
 * Light & dark mode: switch between the two sets of screens. The token rows
 * under the screens follow the selected mode.
 */
const tokens = {
  light: [
    ["Background", "#1B2B1B"],
    ["Surface", "#1C2B2E"],
    ["Primary Text", "#1E1E1E"],
    ["Accent", "#5F9A61"],
  ],
  dark: [
    ["Background", "#263826"],
    ["Surface", "#1C2B2E"],
    ["Primary Text", "#FFFFFF"],
    ["Accent", "#5F9A61"],
  ],
} as const;

/** screens per mode: file and pixel size; a missing one shows a placeholder */
type Shot = { file: string; w: number; h: number };
const shots: Record<"light" | "dark", Partial<Record<string, Shot>>> = {
  light: {
    Home: { file: "mode-light-home.png", w: 281, h: 573 },
    Withdrawal: { file: "mode-light-withdrawal.png", w: 281, h: 573 },
    Markets: { file: "mode-light-markets.png", w: 281, h: 573 },
  },
  dark: {
    Home: { file: "mode-dark-home.png", w: 281, h: 573 },
    Withdrawal: { file: "mode-dark-withdrawal.png", w: 281, h: 573 },
    Markets: { file: "mode-dark-markets.png", w: 281, h: 573 },
  },
};

export function ModeSwitch() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  return (
    <div className="tn-modes">
      <div className="tn-mode-tabs" role="tablist" aria-label="Screen mode">
        {(["dark", "light"] as const).map((m) => (
          <button
            key={m}
            type="button"
            role="tab"
            aria-selected={mode === m}
            className="tn-mode-tab"
            onClick={() => setMode(m)}
          >
            {m === "dark" ? "Dark Mode" : "Light Mode"}
          </button>
        ))}
      </div>
      <div className="tn-panel">
        <div className="tn-mode-shots">
          {["Home", "Withdrawal", "Markets"].map((s) => (
            <div key={s} className="tn-card tn-mode-card">
              <span>{s}</span>
              {shots[mode][s] ? (
                <Image
                  className="tn-mode-shot"
                  src={`/images/case-studies/token-nest/${shots[mode][s].file}`}
                  alt={`${s} screen in ${mode} mode`}
                  width={shots[mode][s].w}
                  height={shots[mode][s].h}
                  unoptimized
                />
              ) : (
                <Slot name={`${s} · ${mode} mode`} ratio="9 / 16" />
              )}
            </div>
          ))}
        </div>
        <dl className="tn-tokens">
          {tokens[mode].map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
