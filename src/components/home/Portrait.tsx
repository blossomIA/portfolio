"use client";

import Image from "next/image";
import { useRef } from "react";

/**
 * Her portrait as a print you're holding: it turns gently toward the cursor
 * and a soft sheen follows it. Writes CSS variables directly (no re-renders);
 * reduced-motion users get a still photo.
 */
export function Portrait() {
  const ref = useRef<HTMLDivElement>(null);

  const move = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || e.pointerType === "touch") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width; // 0..1
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--ry", `${(x - 0.5) * 12}deg`);
    el.style.setProperty("--rx", `${(0.5 - y) * 10}deg`);
    el.style.setProperty("--gx", `${x * 100}%`);
    el.style.setProperty("--gy", `${y * 100}%`);
    el.dataset.active = "true";
  };
  const leave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
    delete el.dataset.active;
  };

  return (
    <div className="print-stage" onPointerMove={move} onPointerLeave={leave}>
      <div className="print" ref={ref}>
        <Image
          src="/images/portrait.png"
          alt="Amarachi Blossom, Product Designer and 3D Animator"
          width={739}
          height={1033}
          priority
          sizes="(min-width: 900px) 400px, 72vw"
          draggable={false}
        />
        <span className="print-sheen" aria-hidden />
      </div>
    </div>
  );
}
