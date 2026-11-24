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
  /** A screen recording of the prototype, played in the viewer instead of the still. */
  video?: string;
};

/** Width the Figma frames were designed at. */
const FRAME_W = 1440;

/** Pieces that open as a prototype (live or recorded) get a "Prototype" tag. */
const isProto = (s: Slide) => Boolean(s.embed || s.video);

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

  // Grid shows everything at once; reel shows one piece at a time as you scroll.
  const [view, setView] = useState<"grid" | "reel">("grid");

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
      </div>
      {view === "reel" ? (
        <Scroller slides={slides} onOpen={open} />
      ) : (
      <ul className="ex-grid" aria-label="Explorations">
        {slides.map((sl, i) => (
          <li key={sl.key} className={`ex-item ${sl.orientation}`}>
            <button type="button" className="ex-tile" onClick={(e) => open(i, e.currentTarget)} aria-haspopup="dialog">
              <span className="ex-media">
                {isProto(sl) && <span className="ex-badge">Prototype</span>}
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
      )}

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
                {isProto(s) && <span className="ex-badge">Prototype</span>}
              </span>
              <button type="button" className="ex-btn" onClick={close} aria-label="Close">
                ×
              </button>
            </div>

            <div className={`ex-stage ${s.orientation}`} onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
              {s.embed ? (
                <Prototype key={s.key} slide={s} />
              ) : s.video ? (
                <video
                  key={s.key}
                  className={`ex-video ${s.orientation}`}
                  src={s.video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label={`${s.title}, prototype recording`}
                />
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
 * Reel: the section pins while you scroll through it and shows one piece at a
 * time; each stretch of scroll moves to the next. Dots and arrows jump too.
 */
function Scroller({ slides, onOpen }: { slides: Slide[]; onOpen: (i: number, el: HTMLButtonElement) => void }) {
  const total = slides.length;
  const track = useRef<HTMLDivElement>(null);
  const [cur, setCur] = useState(0);

  useEffect(() => {
    let raf = 0;
    const read = () => {
      raf = 0;
      const el = track.current;
      if (!el) return;
      const run = el.offsetHeight - el.firstElementChild!.clientHeight;
      const p = -el.getBoundingClientRect().top / Math.max(run, 1);
      setCur(Math.min(total - 1, Math.max(0, Math.floor(p * total))));
    };
    const on = () => {
      if (!raf) raf = requestAnimationFrame(read);
    };
    read();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", on);
      window.removeEventListener("resize", on);
    };
  }, [total]);

  // Scroll the page to the middle of a piece's stretch, so scrolling and the
  // controls always agree on which piece is showing.
  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const n = Math.min(total - 1, Math.max(0, i));
    const run = el.offsetHeight - el.firstElementChild!.clientHeight;
    const top = el.getBoundingClientRect().top + window.scrollY + (run * (n + 0.5)) / total;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top, behavior: still ? "auto" : "smooth" });
  };

  const s = slides[cur];

  return (
    <div ref={track} className="ex-reel" style={{ height: `calc(${total} * 70vh + 100dvh - var(--pin))` }}>
      <div className="ex-reel-pin">
        <div className="ex-reel-stage">
          {slides.map((sl, i) => (
            <button
              key={sl.key}
              type="button"
              className={`ex-reel-item ${sl.orientation}`}
              data-on={i === cur || undefined}
              data-dir={i < cur ? "past" : i > cur ? "next" : undefined}
              tabIndex={i === cur ? 0 : -1}
              aria-hidden={i !== cur}
              aria-haspopup="dialog"
              aria-label={`Open ${sl.title}`}
              onClick={(e) => onOpen(i, e.currentTarget)}
            >
              {isProto(sl) && <span className="ex-badge">Prototype</span>}
              <Image
                src={sl.src}
                alt={sl.title}
                width={sl.width}
                height={sl.height}
                sizes={sl.orientation === "mobile" ? "(min-width: 900px) 320px, 50vw" : "(min-width: 1100px) 1000px, 92vw"}
                loading={i <= 1 ? "eager" : "lazy"}
                draggable={false}
              />
            </button>
          ))}
        </div>

        <div className="ex-reel-bot">
          <div className="ex-reel-cap" aria-live="polite">
            <span className="lab">
              {s.category} <span aria-hidden>/</span> {s.kind}
            </span>
            <span className="d ex-title">{s.title}</span>
          </div>
          <div className="ex-reel-dots ex-dots">
            {slides.map((d, i) => (
              <button
                key={d.key}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to ${d.title}`}
                aria-current={cur === i}
              />
            ))}
          </div>
          <div className="ex-reel-nav">
            <span className="lab ex-no">
              {pad(cur + 1)} — {pad(total)}
            </span>
            <button type="button" className="ex-btn" onClick={() => go(cur - 1)} disabled={cur === 0} aria-label="Previous piece">
              <Chevron dir="left" />
            </button>
            <button type="button" className="ex-btn" onClick={() => go(cur + 1)} disabled={cur === total - 1} aria-label="Next piece">
              <Chevron dir="right" />
            </button>
          </div>
        </div>
      </div>
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
