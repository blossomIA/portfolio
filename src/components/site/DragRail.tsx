"use client";

import { useEffect, useRef, type ReactNode, type RefObject } from "react";

export type DragRailApi = { step: (dir: 1 | -1) => void };

/**
 * A horizontal rail you grab and throw. The track eases toward its target,
 * keeps some momentum after a flick and leans (skews) with its speed. On a
 * mouse a round "Drag" cursor follows the pointer; trackpads scroll it
 * sideways and arrow keys step it when it has focus. Vertical page scrolling
 * is left alone. Reduced motion: no lean, and moves land without easing.
 */
export function DragRail({
  label,
  children,
  apiRef,
  className = "",
}: {
  label: string;
  children: ReactNode;
  apiRef?: RefObject<DragRailApi | null>;
  className?: string;
}) {
  const rail = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = rail.current;
    const tr = track.current;
    const cur = cursor.current;
    if (!el || !tr || !cur) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let x = 0; // where the track is drawn
    let target = 0; // where it is heading
    let min = 0; // most negative offset (track end lines up with rail end)
    let raf = 0;
    let dragging = false;
    let startX = 0;
    let startTarget = 0;
    let lastX = 0;
    let lastT = 0;
    let vel = 0; // px per ms while dragging
    let moved = 0;

    const clamp = (v: number) => Math.max(min, Math.min(0, v));
    const measure = () => {
      min = Math.min(0, el.clientWidth - tr.scrollWidth);
      target = clamp(target);
      x = clamp(x);
      kick();
    };

    const frame = () => {
      const diff = target - x;
      x = still ? target : x + diff * 0.14;
      if (Math.abs(diff) < 0.1) x = target;
      tr.style.transform = `translate3d(${x.toFixed(2)}px, 0, 0)`;
      const lean = still ? 0 : Math.max(-6, Math.min(6, diff * -0.04));
      tr.style.setProperty("--rail-skew", `${lean.toFixed(2)}deg`);
      raf = x === target ? 0 : requestAnimationFrame(frame);
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };

    const cardStep = () => {
      const first = tr.firstElementChild as HTMLElement | null;
      const gap = parseFloat(getComputedStyle(tr).columnGap) || 0;
      return first ? first.offsetWidth + gap : el.clientWidth * 0.8;
    };
    if (apiRef) {
      apiRef.current = {
        step: (dir) => {
          target = clamp(target - dir * cardStep());
          kick();
        },
      };
    }

    const down = (e: PointerEvent) => {
      if (e.button !== 0) return;
      dragging = true;
      moved = 0;
      startX = lastX = e.clientX;
      startTarget = target;
      lastT = performance.now();
      vel = 0;
      el.setPointerCapture(e.pointerId);
      el.classList.add("is-dragging");
    };
    const move = (e: PointerEvent) => {
      if (e.pointerType === "mouse") {
        cur.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
      if (!dragging) return;
      const now = performance.now();
      const dx = e.clientX - startX;
      moved = Math.max(moved, Math.abs(dx));
      // a little give past either end, like pulling on elastic
      const raw = startTarget + dx;
      target = raw > 0 ? raw * 0.35 : raw < min ? min + (raw - min) * 0.35 : raw;
      vel = (e.clientX - lastX) / Math.max(1, now - lastT);
      lastX = e.clientX;
      lastT = now;
      kick();
    };
    const up = (e: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      el.classList.remove("is-dragging");
      if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
      target = clamp(target + vel * 260); // throw
      kick();
    };
    // a real drag shouldn't also count as a click on whatever is under it
    const click = (e: MouseEvent) => {
      if (moved > 6) {
        e.preventDefault();
        e.stopPropagation();
      }
    };
    const wheel = (e: WheelEvent) => {
      const dx = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.shiftKey ? e.deltaY : 0;
      if (!dx) return;
      const next = clamp(target - dx);
      if (next === target) return; // at an end: let the page have it
      e.preventDefault();
      target = next;
      kick();
    };
    const key = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault();
      target = clamp(target + (e.key === "ArrowLeft" ? 1 : -1) * cardStep());
      kick();
    };
    const enter = (e: PointerEvent) => {
      if (e.pointerType === "mouse") cur.classList.add("is-on");
    };
    const leave = () => cur.classList.remove("is-on");

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    ro.observe(tr);
    measure();

    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    el.addEventListener("pointerup", up);
    el.addEventListener("pointercancel", up);
    el.addEventListener("pointerenter", enter);
    el.addEventListener("pointerleave", leave);
    el.addEventListener("click", click, true);
    el.addEventListener("wheel", wheel, { passive: false });
    el.addEventListener("keydown", key);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerup", up);
      el.removeEventListener("pointercancel", up);
      el.removeEventListener("pointerenter", enter);
      el.removeEventListener("pointerleave", leave);
      el.removeEventListener("click", click, true);
      el.removeEventListener("wheel", wheel);
      el.removeEventListener("keydown", key);
      if (apiRef) apiRef.current = null;
    };
  }, [apiRef]);

  return (
    <div
      ref={rail}
      className={`drag-rail ${className}`.trim()}
      role="region"
      aria-label={`${label}. Drag, or use the arrow keys, to scroll`}
      tabIndex={0}
    >
      <div ref={track} className="drag-rail-track">
        {children}
      </div>
      <span ref={cursor} className="drag-rail-cursor" aria-hidden>
        Drag
      </span>
    </div>
  );
}
