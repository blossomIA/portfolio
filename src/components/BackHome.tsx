"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

export function BackHome() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  // Compact after the first ~120px of scroll: pill collapses to just the arrow,
  // regains the label on hover. Keeps a light, non-intrusive presence while
  // still reachable at any scroll depth.
  const width = useTransform(scrollY, [0, 120], [148, 44]);
  const labelOpacity = useTransform(scrollY, [0, 60], [1, 0]);

  if (pathname === "/") return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: [0.22, 0.72, 0.28, 1], delay: 0.15 }}
      className="fixed left-6 top-6 z-50 md:left-8 md:top-8"
    >
      <Link
        href="/"
        aria-label="Back to home"
        className="group relative block"
      >
        <motion.span
          style={{ width }}
          className="flex h-11 items-center overflow-hidden rounded-full border border-black/10 bg-white/70 pl-3 pr-4 font-mono text-[11px] uppercase tracking-[0.18em] text-ink shadow-[0_10px_30px_-12px_rgba(0,0,0,0.25),0_2px_6px_-2px_rgba(0,0,0,0.08)] backdrop-blur-xl backdrop-saturate-150 transition-[width,background-color,color,box-shadow] duration-300 hover:!w-[148px] hover:bg-white hover:text-accent-purple hover:shadow-[0_16px_40px_-12px_rgba(147,51,234,0.35),0_4px_10px_-2px_rgba(0,0,0,0.1)]"
        >
          <ArrowLeft
            className="size-4 shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5"
            strokeWidth={2}
          />
          <motion.span
            style={{ opacity: labelOpacity }}
            className="ml-2 whitespace-nowrap transition-opacity duration-200 group-hover:!opacity-100"
          >
            Back home
          </motion.span>
        </motion.span>
      </Link>
    </motion.div>
  );
}
