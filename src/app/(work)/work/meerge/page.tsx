"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Orientation = "mobile" | "wide";

type Slide = {
  key: string;
  category: string;
  kind: string;
  title: string;
  accent: string;
  src: string;
  orientation: Orientation;
  /** width / height of the source artwork */
  aspect: number;
};

const SLIDES: Slide[] = [
  {
    key: "food",
    category: "Product",
    kind: "Detail",
    title: "Grilled Chicken Wrap",
    accent: "text-orange-400",
    src: "/images/carousel/food.png",
    orientation: "mobile",
    aspect: 687 / 1469,
  },
  {
    key: "face-id",
    category: "Component",
    kind: "Motion",
    title: "Face Verification",
    accent: "text-emerald-400",
    src: "/images/carousel/face-id.png",
    orientation: "mobile",
    aspect: 860 / 1864,
  },
  {
    key: "music",
    category: "Illustration",
    kind: "Now Playing",
    title: "Music Player",
    accent: "text-fuchsia-400",
    src: "/images/carousel/music.png",
    orientation: "mobile",
    aspect: 860 / 1864,
  },
  {
    key: "pricing",
    category: "Onboarding",
    kind: "Flow",
    title: "Pricing Plans",
    accent: "text-[#3b82f6]",
    src: "/images/carousel/pricing.png",
    orientation: "wide",
    aspect: 949 / 651,
  },
  {
    key: "dark-card",
    category: "Marketing",
    kind: "Metrics",
    title: "Built To Feel Real",
    accent: "text-white/70",
    src: "/images/carousel/dark-card.png",
    orientation: "wide",
    aspect: 960 / 540,
  },
  {
    key: "donut",
    category: "Marketing",
    kind: "Hero",
    title: "Susie's Donut",
    accent: "text-rose-400",
    src: "/images/carousel/donut.png",
    orientation: "wide",
    aspect: 2880 / 2048,
  },
];

const AUTOPLAY_MS = 4200;

// Envelope sizes (px) for the centered card.
const MOBILE_W = 300;
const MOBILE_H = 620;
const WIDE_W = 780;

function frameSize(s: Slide): { w: number; h: number } {
  if (s.orientation === "mobile") return { w: MOBILE_W, h: MOBILE_H };
  return { w: WIDE_W, h: Math.round(WIDE_W / s.aspect) };
}

// Depth treatment by absolute distance from the active slide.
const DEPTH = [
  { scale: 1, opacity: 1, blur: 0, z: 50 }, // 0 — active
  { scale: 0.82, opacity: 0.42, blur: 4, z: 30 }, // ±1
  { scale: 0.66, opacity: 0.18, blur: 8, z: 12 }, // ±2
];

// Horizontal peek tuning.
const PEEK_1 = 44;
const PEEK_2 = 150;

/** Circular signed distance in range (-total/2, total/2]. */
function signedDelta(i: number, active: number, total: number): number {
  let d = ((i - active) % total + total) % total; // 0..total-1
  if (d > total / 2) d -= total;
  return d;
}

export default function CarouselPage() {
  const total = SLIDES.length;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  const next = useCallback(() => setActive((i) => (i + 1) % total), [total]);
  const prev = useCallback(
    () => setActive((i) => (i - 1 + total) % total),
    [total],
  );

  // Respect reduced-motion.
  useEffect(() => {
    const m = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(m.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    m.addEventListener("change", onChange);
    return () => m.removeEventListener("change", onChange);
  }, []);

  // Autoplay — re-armed after every change, paused on hover/focus.
  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setTimeout(next, AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [active, paused, reduced, next]);

  // Keyboard arrows.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Pointer swipe.
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

  const current = SLIDES[active];
  const centerHalf = frameSize(SLIDES[active]).w / 2;

  function slotX(d: number): number {
    const dir = Math.sign(d);
    const ad = Math.abs(d);
    if (ad === 0) return 0;
    if (ad === 1) return dir * (centerHalf + PEEK_1);
    if (ad === 2) return dir * (centerHalf + PEEK_1 + PEEK_2);
    return dir * (centerHalf + PEEK_1 + PEEK_2 + 220); // hidden
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0a0a0b] text-white">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 38%, rgba(59,130,246,0.12) 0%, rgba(10,10,11,0) 60%)",
        }}
      />

      {/* Hero (unchanged) */}
      <section className="relative z-10 px-4 pt-24 pb-10 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/50">
          Explorations · Side projects
        </p>
        <h1 className="mt-8 font-display font-medium leading-[0.96] tracking-[-0.02em] text-[64px] md:text-[104px]">
          <span className="block">Interactions,</span>
          <span className="block text-[#3b82f6]">in motion.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-[560px] text-[15px] leading-[1.72] text-white/55">
          A rotating reel of product shots, components, flows, and motion
          explorations from client work and personal experiments.
        </p>
      </section>

      {/* Stage */}
      <section
        className="relative z-10 select-none pt-8 pb-24 md:pt-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
        <div className="relative mx-auto max-w-[1500px] px-4">
          <div
            className="relative h-[660px] cursor-grab touch-pan-y active:cursor-grabbing"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            role="group"
            aria-roledescription="carousel"
            aria-label="Explorations reel"
          >
            {SLIDES.map((s, i) => {
              const d = signedDelta(i, active, total);
              const ad = Math.abs(d);
              const hidden = ad > 2;
              const depth = DEPTH[Math.min(ad, 2)];
              const { w, h } = frameSize(s);
              const isCenter = d === 0;

              return (
                <motion.div
                  key={s.key}
                  className="absolute top-1/2 left-1/2 will-change-transform"
                  style={{ width: w, height: h, zIndex: hidden ? 1 : depth.z }}
                  initial={false}
                  animate={{
                    x: slotX(d) - w / 2,
                    y: -h / 2,
                    scale: hidden ? 0.6 : depth.scale,
                    opacity: hidden ? 0 : depth.opacity,
                    filter: `blur(${hidden ? 12 : depth.blur}px)`,
                  }}
                  transition={
                    hidden || reduced
                      ? { duration: 0 }
                      : {
                          x: { type: "spring", stiffness: 210, damping: 30 },
                          scale: { type: "spring", stiffness: 210, damping: 30 },
                          opacity: { duration: 0.45, ease: "easeOut" },
                          filter: { duration: 0.45, ease: "easeOut" },
                        }
                  }
                  onClick={() => !isCenter && !hidden && setActive(i)}
                  aria-hidden={!isCenter}
                >
                  <div
                    className={
                      isCenter ? "" : "pointer-events-auto cursor-pointer"
                    }
                    style={{ width: w, height: h }}
                  >
                    {s.orientation === "mobile" ? (
                      <PhoneFrame slide={s} isCenter={isCenter} />
                    ) : (
                      <WideCard slide={s} isCenter={isCenter} />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Arrow controls */}
          <div className="pointer-events-none absolute inset-0 z-[60] flex items-center justify-between px-1 md:px-6">
            <button
              onClick={prev}
              aria-label="Previous"
              className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/70 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
            >
              <ChevronLeft className="size-4" strokeWidth={1.6} />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.04] text-white/70 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
            >
              <ChevronRight className="size-4" strokeWidth={1.6} />
            </button>
          </div>
        </div>

        {/* Meta */}
        <div className="relative mt-16 flex flex-col items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={`meta-${current.key}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col items-center gap-4 text-center"
            >
              <p
                className={`font-mono text-[11px] uppercase tracking-[0.34em] ${current.accent}`}
              >
                {current.category}
                <span className="mx-2 text-white/25">/</span>
                {current.kind}
              </p>
              <p className="font-display text-[26px] font-medium uppercase leading-none tracking-[0.16em] text-white md:text-[32px]">
                {current.title}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          <div className="mt-8 flex justify-center gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setActive(i)}
                aria-label={`Show ${s.title}`}
                aria-current={active === i}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  active === i
                    ? "w-8 bg-white"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.3em] text-white/30">
            {String(active + 1).padStart(2, "0")} —{" "}
            {String(total).padStart(2, "0")}
          </p>
        </div>
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function PhoneFrame({ slide, isCenter }: { slide: Slide; isCenter: boolean }) {
  return (
    <div
      className="relative h-full w-full rounded-[46px] bg-gradient-to-b from-neutral-800 to-neutral-950 p-[9px] ring-1 ring-white/12"
      style={{
        boxShadow: isCenter
          ? "0 50px 90px -24px rgba(0,0,0,0.75), 0 18px 40px -18px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.14)"
          : "0 30px 60px -28px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.1)",
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[38px] bg-black">
        <Image
          src={slide.src}
          alt={slide.title}
          fill
          sizes="300px"
          className="object-cover"
          unoptimized
          priority={isCenter}
          draggable={false}
        />
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-[11px] h-[22px] w-[84px] -translate-x-1/2 rounded-full bg-black/85 ring-1 ring-white/5" />
      </div>
    </div>
  );
}

function WideCard({ slide, isCenter }: { slide: Slide; isCenter: boolean }) {
  return (
    <div
      className="relative h-full w-full overflow-hidden rounded-[22px] bg-neutral-950 ring-1 ring-white/12"
      style={{
        boxShadow: isCenter
          ? "0 50px 90px -24px rgba(0,0,0,0.75), 0 18px 40px -18px rgba(0,0,0,0.55)"
          : "0 30px 60px -28px rgba(0,0,0,0.6)",
      }}
    >
      <Image
        src={slide.src}
        alt={slide.title}
        fill
        sizes="780px"
        className="object-cover"
        unoptimized
        priority={isCenter}
        draggable={false}
      />
    </div>
  );
}
