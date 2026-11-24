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
  /** A live Figma prototype shown in the viewer instead of the still. */
  embed?: string;
};

/** Width the Figma frames were designed at. */
const FRAME_W = 1440;

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

  // Grid shows everything at once; reel is one large row you scroll through.
  const [view, setView] = useState<"grid" | "reel">("grid");
  const list = useRef<HTMLUListElement>(null);
  const scrollReel = (dir: 1 | -1) => {
    const el = list.current;
    if (el) el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <div className="wrap">
      <div className="ex-bar">
        <div className="ex-switch" role="group" aria-label="Layout">
          {(["grid", "reel"] as const).map((v) => (
            <button key={v} type="button" aria-pressed={view === v} onClick={() => setView(v)}>
              {v === "grid" ? "Grid" : "Reel"}
            </button>
          ))}
        </div>
        {view === "reel" && (
          <div className="ex-bar-nav">
            <button type="button" className="ex-btn" onClick={() => scrollReel(-1)} aria-label="Scroll back">
              <Chevron dir="left" />
            </button>
            <button type="button" className="ex-btn" onClick={() => scrollReel(1)} aria-label="Scroll forward">
              <Chevron dir="right" />
            </button>
          </div>
        )}
      </div>
      <ul ref={list} className={`ex-grid${view === "reel" ? " is-reel" : ""}`} aria-label="Explorations">
        {slides.map((sl, i) => (
          <li key={sl.key} className={`ex-item ${sl.orientation}`}>
            <button type="button" className="ex-tile" onClick={(e) => open(i, e.currentTarget)} aria-haspopup="dialog">
              <span className="ex-media">
                {sl.embed && <span className="ex-badge">Prototype</span>}
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
                {s.embed && <span className="ex-badge">Prototype</span>}
              </span>
              <button type="button" className="ex-btn" onClick={close} aria-label="Close">
                ×
              </button>
            </div>

            <div className={`ex-stage ${s.orientation}`} onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
              {s.embed ? (
                <Prototype key={s.key} slide={s} />
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
 * The piece's own Figma prototype, live: clicks behave exactly as they do in
 * Figma. The still stays underneath until the prototype has loaded.
 */
function Prototype({ slide }: { slide: Slide }) {
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [ready, setReady] = useState(false);

  // Figma draws the frame 1:1 at its own size, so the iframe is that size and
  // scaled to fit; no letterboxing, and clicks land where they look.
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setScale(el.clientWidth / FRAME_W));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Figma sends no "ready" event without a registered app, so reveal it a
  // few seconds after the frame loads, when its own loader has finished.
  const reveal = useRef(0);
  useEffect(() => () => window.clearTimeout(reveal.current), []);
  const onLoad = () => {
    reveal.current = window.setTimeout(() => setReady(true), 5000);
  };

  return (
    <div ref={box} className="ex-proto" style={{ aspectRatio: `${slide.width} / ${slide.height}` }}>
      <Image
        src={slide.src}
        alt=""
        width={slide.width}
        height={slide.height}
        sizes="(min-width: 1100px) 1000px, 92vw"
        loading="eager"
        draggable={false}
      />
      {scale > 0 && (
        <iframe
          src={slide.embed}
          title={`${slide.title}, interactive Figma prototype`}
          allow="fullscreen"
          width={FRAME_W}
          height={Math.round((FRAME_W * slide.height) / slide.width)}
          style={{ transform: `scale(${scale})` }}
          onLoad={onLoad}
          data-ready={ready || undefined}
        />
      )}
      <span className="ex-proto-hint">{ready ? "Tap the small donut" : "Loading the prototype…"}</span>
    </div>
  );
}
