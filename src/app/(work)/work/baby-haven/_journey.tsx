"use client";

import { useState, type CSSProperties } from "react";

export type Stage = {
  stage: string;
  emoji: string;
  /** how high the feeling sits, 0 (low) to 100 (high) */
  mood: number;
  note: string;
  feel: string;
};

/**
 * User journey map, as in the Figma: a row of stage tabs, an emotional-valence
 * chart (a stem per stage topped with its face), then what happens and how it
 * feels per stage. Picking a tab highlights that column; Crisis Moment is the
 * one the story starts on.
 */
export function Journey({ stages, start }: { stages: Stage[]; start: number }) {
  const [on, setOn] = useState(start);

  return (
    <div className="bh-journey" style={{ "--n": stages.length } as CSSProperties}>
      <div className="bh-j-tabs" role="tablist" aria-label="Journey stages">
        {stages.map((s, i) => (
          <button
            key={s.stage}
            role="tab"
            aria-selected={i === on}
            className={i === on ? "on" : undefined}
            onClick={() => setOn(i)}
          >
            {s.stage}
          </button>
        ))}
      </div>

      <div className="bh-j-chart">
        <span className="lab">Emotional valence</span>
        <div className="bh-j-stems">
          {stages.map((s, i) => (
            <div key={s.stage} className={i === on ? "on" : undefined}>
              <span className="bh-j-stem" style={{ "--h": `${s.mood}%` } as CSSProperties}>
                <b aria-hidden>{s.emoji}</b>
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bh-j-row">
        {stages.map((s, i) => (
          <p key={s.stage} className={`bh-j-note${i === on ? " on" : ""}`}>
            {s.note}
          </p>
        ))}
      </div>
      <div className="bh-j-row">
        {stages.map((s, i) => (
          <p key={s.stage} className={`bh-j-feel${i === on ? " on" : ""}`}>
            {s.feel}
          </p>
        ))}
      </div>
    </div>
  );
}
