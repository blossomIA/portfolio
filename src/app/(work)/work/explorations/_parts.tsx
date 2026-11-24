"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import "@/styles/cs-explorations.css";
import { Chevron } from "@/components/site/Icon";

export type Slide = {
  key: string;
  category: string;
  kind: string;
  title: string;
  src: string;
  width: number;
  height: number;
  orientation: "mobile" | "wide";
  /** Extra states of the same design; clicking it in the viewer cycles through them. */
  variants?: { name: string; src: string }[];
  /** Name of the first state (the `src` above). */
  variantName?: string;
};

const pad = (n: number) => String(n).padStart(2, "0");

/** Grid of framed pieces; clicking one opens it in a viewer with prev / next. */
export function Reel({ slides }: { slides: Slide[] }) {
  const total = slides.length;
  const [active, setActive] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);

  const next = useCallback(() => setActive((i) => (i === null ? i : (i + 1) % total)), [total]);
  const prev = useCallback(() => setActive((i) => (i === null ? i : (i - 1 + total) % total)), [total]);

  const open = (i: number, el: HTMLButtonElement) => {
    opener.current = el;
    setActive(i);
    dialog.current?.showModal();
  };
  const close = () => dialog.current?.close();

  // Arrow keys while the viewer is open (Escape is handled by <dialog>).
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, prev, next]);

  // Swipe between pieces on touch screens.
  const dragStart = useRef<number | null>(null);
  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
  };
  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStart.current === null) return;
    const dx = e.clientX - dragStart.current;
    dragStart.current = null;
    if (dx > 60) prev();
    else if (dx < -60) next();
  };

  const s = active === null ? null : slides[active];

  return (
    <div className="wrap">
      <ul className="ex-grid" aria-label="Explorations reel">
        {slides.map((sl, i) => (
          <li key={sl.key} className={`ex-item ${sl.orientation}`}>
            <button type="button" className="ex-tile" onClick={(e) => open(i, e.currentTarget)} aria-haspopup="dialog">
              <span className="ex-media">
                <Image
                  src={sl.src}
                  alt={sl.title}
                  width={sl.width}
                  height={sl.height}
                  sizes={sl.orientation === "mobile" ? "(min-width: 900px) 260px, 60vw" : "(min-width: 900px) 640px, 92vw"}
                  draggable={false}
                />
              </span>
              <span className="ex-cap">
                <span className="lab">
                  {sl.category} <span aria-hidden>/</span> {sl.kind}
                </span>
                <span className="d ex-title">{sl.title}</span>
                <span className="lab ex-no">
                  {pad(i + 1)} — {pad(total)}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className="ex-view"
        aria-label={s ? s.title : "Viewer"}
        onClose={() => {
          setActive(null);
          opener.current?.focus();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {s && active !== null && (
          <div className="ex-view-in">
            <div className="ex-view-top">
              <span className="lab">
                {s.category} <span aria-hidden>/</span> {s.kind}
              </span>
              <button type="button" className="ex-btn" onClick={close} aria-label="Close">
                ×
              </button>
            </div>

            <div className={`ex-stage ${s.orientation}`} onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
              {s.variants?.length ? (
                <Variants key={s.key} slide={s} />
              ) : (
                <Image
                  key={s.key}
                  src={s.src}
                  alt={s.title}
                  width={s.width}
                  height={s.height}
                  sizes={s.orientation === "mobile" ? "360px" : "(min-width: 1100px) 1000px, 92vw"}
                  loading="eager"
                  draggable={false}
                />
              )}
            </div>

            <div className="ex-view-bot">
              <button type="button" className="ex-btn" onClick={prev} aria-label="Previous">
                <Chevron dir="left" />
              </button>
              <div className="ex-view-meta">
                <p className="d ex-title" aria-live="polite">
                  {s.title}
                </p>
                <div className="ex-dots">
                  {slides.map((d, i) => (
                    <button
                      key={d.key}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Show ${d.title}`}
                      aria-current={active === i}
                    />
                  ))}
                </div>
                <span className="lab ex-no">
                  {pad(active + 1)} — {pad(total)}
                </span>
              </div>
              <button type="button" className="ex-btn" onClick={next} aria-label="Next">
                <Chevron dir="right" />
              </button>
            </div>
          </div>
        )}
      </dialog>
    </div>
  );
}

/**
 * A design with several states, as in its Figma prototype: click (or tap, or
 * Enter) and the next state sweeps in diagonally over the current one. All
 * states load up front so the swap never waits on the network.
 */
function Variants({ slide }: { slide: Slide }) {
  const frames = [{ name: slide.variantName ?? slide.title, src: slide.src }, ...(slide.variants ?? [])];
  const n = frames.length;
  const [cur, setCur] = useState(0);
  const [under, setUnder] = useState<number | null>(null);
  const following = frames[(cur + 1) % n];

  const advance = () => {
    setUnder(cur);
    setCur((cur + 1) % n);
  };

  return (
    <div className="ex-var">
      <button
        type="button"
        className="ex-var-hit"
        onClick={advance}
        aria-label={`${slide.title}, ${frames[cur].name}. Show the next flavour, ${following.name}`}
      >
        {frames.map((f, k) => (
          <Image
            key={f.src}
            src={f.src}
            alt=""
            width={slide.width}
            height={slide.height}
            sizes="(min-width: 1100px) 1000px, 92vw"
            loading="eager"
            draggable={false}
            className={k === cur ? (under === null ? "is-on" : "is-on is-in") : k === under ? "is-under" : ""}
          />
        ))}
      </button>
      <span className="ex-var-hint" aria-live="polite">
        <b>{frames[cur].name}</b>
        <span aria-hidden> · </span>
        {pad(cur + 1)}/{pad(n)}
        <span className="ex-var-tap"> · Tap the donut</span>
      </span>
    </div>
  );
}
