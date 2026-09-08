"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  as?: "div" | "section" | "article" | "header" | "figure";
  className?: string;
};

export function Reveal({
  children,
  delay = 0,
  as = "div",
  className,
}: RevealProps) {
  const shouldReduce = useReducedMotion();
  const MotionTag = motion[as];

  const variants: Variants = shouldReduce
    ? {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0 },
      }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.2, 0.65, 0.3, 1], delay },
        },
      };

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px 0px" }}
      variants={variants}
    >
      {children}
    </MotionTag>
  );
}
