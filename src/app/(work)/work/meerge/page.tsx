"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = {
  key: string;
  category: string;
  kind: string;
  title: string;
  accent: string;
  src: string;
};

const SLIDES: Slide[] = [
  {
    key: "food",
    category: "Product",
    kind: "Detail",
    title: "GRILLED CHICKEN WRAP",
    accent: "text-orange-400",
    src: "/images/carousel/food.png",
  },
  {
    key: "face-align",
    category: "Component",
    kind: "Motion",
    title: "SHARE SHEET",
    accent: "text-[#3b82f6]",
    src: "/images/carousel/face-align.png",
  },
  {
    key: "music",
    category: "Illustration",
    kind: "Now Playing",
    title: "MUSIC PLAYER",
    accent: "text-fuchsia-400",
    src: "/images/carousel/music.png",
  },
  {
    key: "dark-card",
    category: "Marketing",
    kind: "Metrics",
    title: "BUILT TO FEEL REAL",
    accent: "text-white/80",
    src: "/images/carousel/dark-card.png",
  },
  {
    key: "face-id",
    category: "Component",
    kind: "Verification",
    title: "FACE ID",
    accent: "text-[#3b82f6]",
    src: "/images/carousel/face-id.png",
  },
  {
    key: "pricing",
    category: "Onboarding",
    kind: "Flow",
    title: "PRICING PLANS",
    accent: "text-[#3b82f6]",
    src: "/images/carousel/pricing.png",
  },
];

// Cleaner depth model, 3 layers visible on each side + center
type Layer = { x: number; scale: number; opacity: number; blur: number; z: number };
const LAYERS: Record<number, Layer> = {
  0: { x: 0, scale: 1, opacity: 1, blur: 0, z: 40 },
  1: { x: 260, scale: 0.86, opacity: 0.5, blur: 1, z: 30 },
  "-1": { x: -260, scale: 0.86, opacity: 0.5, blur: 1, z: 30 } as unknown as Layer,
  2: { x: 440, scale: 0.72, opacity: 0.22, blur: 2, z: 20 },
  "-2": { x: -440, scale: 0.72, opacity: 0.22, blur: 2, z: 20 } as unknown as Layer,
};

function relIdx(total: number, delta: number, active: number): number {
  return (active + delta + total) % total;
}

export default function CarouselPage() {
  const [active, setActive] = useState(1);
  const total = SLIDES.length;
  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  const current = SLIDES[active];

  // Render outer to inner so center sits on top
  const depths: number[] = [-2, 2, -1, 1, 0];

  return (
    <div className="relative min-h-screen bg-[#0a0a0b] text-white">
      {/* Subtle radial vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at 50% 42%, rgba(59,130,246,0.10) 0%, rgba(0,0,0,0) 55%)",
        }}
      />

      {/* Hero */}
      <section className="relative pt-24 pb-12 text-center px-4">
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
      <section className="relative pb-24">
        <div className="relative mx-auto max-w-[1600px] px-4">
          {/* Stage frame */}
          <div className="relative h-[720px]">
            {depths.map((d) => {
              const layer = LAYERS[d];
              if (!layer) return null;
              const s = SLIDES[relIdx(total, d, active)];
              const isCenter = d === 0;
              return (
                <motion.div
                  key={`${d}`}
                  className="absolute top-1/2 left-1/2 pointer-events-none"
                  initial={false}
                  animate={{
                    x: layer.x - 210 * layer.scale,
                    y: "-50%",
                    scale: layer.scale,
                    opacity: layer.opacity,
                    filter: `blur(${layer.blur}px)`,
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.22, 0.72, 0.28, 1],
                  }}
                  style={{ zIndex: layer.z, width: 420 }}
                >
                  <div
                    style={{
                      filter: isCenter
                        ? "drop-shadow(0 40px 60px rgba(0,0,0,0.55)) drop-shadow(0 12px 24px rgba(0,0,0,0.35))"
                        : "drop-shadow(0 24px 40px rgba(0,0,0,0.4))",
                    }}
                  >
                    <div className="relative w-full">
                      <Image
                        src={s.src}
                        alt={s.title}
                        width={800}
                        height={1600}
                        className="block h-auto w-full"
                        unoptimized
                        priority={isCenter}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Arrow controls */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2 md:px-8">
            <button
              onClick={prev}
              aria-label="Previous"
              className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
            >
              <ChevronLeft className="size-4" strokeWidth={1.6} />
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="pointer-events-auto inline-flex size-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
            >
              <ChevronRight className="size-4" strokeWidth={1.6} />
            </button>
          </div>
        </div>

        {/* Meta */}
        <div className="relative mt-6 flex flex-col items-center gap-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={`meta-${current.key}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <p
                className={`font-mono text-[10px] uppercase tracking-[0.32em] ${current.accent}`}
              >
                {current.category} · {current.kind}
              </p>
              <p className="font-display text-[22px] font-medium tracking-[0.14em] text-white md:text-[28px]">
                {current.title}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          <div className="mt-6 flex justify-center gap-1.5">
            {SLIDES.map((s, i) => (
              <button
                key={s.key}
                onClick={() => setActive(i)}
                aria-label={`Show ${s.title}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  active === i
                    ? "w-7 bg-white"
                    : "w-1.5 bg-white/20 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Slide index */}
          <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.28em] text-white/30">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
        </div>
      </section>
    </div>
  );
}
