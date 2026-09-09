"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionLabel } from "@/components/SectionLabel";
import { cn } from "@/lib/cn";
import {
  Search,
  Compass,
  LayoutTemplate,
  Layers,
  PlayCircle,
  Box,
  Plus,
  Minus,
  ArrowRight,
} from "lucide-react";

type Skill = {
  key: string;
  eyebrow: string;
  label: string;
  icon: typeof Search;
  body: string;
  comingSoon?: boolean;
};

const skills: Skill[] = [
  {
    key: "ai-ux",
    eyebrow: "AI-RESEARCH",
    label: "Ai Powered UX Research",
    icon: Search,
    body: "Turning transcripts, chat logs, and diary studies into shipping-grade insight, faster than a spreadsheet allows.",
  },
  {
    key: "ux-research",
    eyebrow: "RESEARCH",
    label: "UX Research & Discovery",
    icon: Compass,
    body: "Framing the problem before the pixels. Interviews, diary studies, competitive teardowns, journey maps.",
  },
  {
    key: "product-design",
    eyebrow: "DESIGN",
    label: "Product Design",
    icon: LayoutTemplate,
    body: "End-to-end product work, from information architecture to high-fidelity, opinionated interfaces.",
  },
  {
    key: "design-systems",
    eyebrow: "SYSTEMS",
    label: "Design Systems",
    icon: Layers,
    body: "Tokens, components, docs, treated as a product with its own release cadence, not a Figma library.",
  },
  {
    key: "prototyping",
    eyebrow: "PROTOTYPING",
    label: "Prototyping & Testing",
    icon: PlayCircle,
    body: "Interactive prototypes that pressure-test the idea before engineering touches it.",
  },
  {
    key: "3d",
    eyebrow: "ANIMATION",
    label: "3D Modelling",
    icon: Box,
    body: "Cinema 4D + Spline for brand systems, product marketing renders, and motion pieces.",
    comingSoon: true,
  },
];

const stats = [
  {
    value: "3+",
    label: "YEARS DESIGNING",
    note: "Crafting interfaces across mobile, web, and emerging platforms, always led by user intent.",
  },
  {
    value: "1",
    label: "CONSTANT GOAL",
    note: "From zero-to-one launches to scaled redesigns, each one shipped with care and conviction.",
  },
];

type WhatICanDoProps = {
  /** The home page shows a CTA into /me; the /me page hides it. */
  showExploreCta?: boolean;
  portraitSrc?: string;
  portraitRatio?: string;
  className?: string;
};

export function WhatICanDo({
  showExploreCta = true,
  portraitSrc = "/images/about-portrait.png",
  portraitRatio = "928 / 956",
  className,
}: WhatICanDoProps = {}) {
  const [openKey, setOpenKey] = useState<string>("");

  return (
    <section
      id="me"
      className={cn("rule-top pt-[117px] pb-[128px]", className)}
    >
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">
          <div>
            <SectionLabel number="03" label="About" />
            <h2 className="mt-6 text-[34px] sm:text-[44px] md:text-[56px] font-medium leading-[1.05] tracking-h2 text-ink">
              What I can do for you
            </h2>
            <p className="mt-6 max-w-[520px] text-[16px] leading-[1.62] tracking-body text-muted">
              I believe good design is invisible. It doesn&apos;t announce
              itself. It just works, clearly, calmly, without drama. I ask
              uncomfortable questions before drawing comfortable interfaces
              and interesting solutions.
            </p>

            {/* Accordion */}
            <ul className="mt-10 divide-y divide-border-soft">
              {skills.map((s) => {
                const open = openKey === s.key;
                return (
                  <li key={s.key}>
                    <button
                      type="button"
                      onClick={() => setOpenKey(open ? "" : s.key)}
                      className="group flex w-full items-center gap-5 py-5 text-left"
                      aria-expanded={open}
                    >
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-purple/10 text-accent-purple">
                        <s.icon className="size-5" strokeWidth={2} />
                      </span>
                      <span className="flex-1">
                        <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-accent-purple">
                          {s.eyebrow}
                        </span>
                        <span className="mt-1 block text-[19px] font-medium leading-6 text-ink">
                          {s.label}
                        </span>
                      </span>
                      {s.comingSoon && (
                        <span className="rounded-full bg-accent-pink/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-accent-pink">
                          Coming soon
                        </span>
                      )}
                      <span
                        aria-hidden
                        className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                          open
                            ? "border-accent-purple bg-accent-purple text-white"
                            : "border-border-soft text-muted"
                        }`}
                      >
                        {open ? (
                          <Minus className="size-3.5" />
                        ) : (
                          <Plus className="size-3.5" />
                        )}
                      </span>
                    </button>
                    <div
                      className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${
                        open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="pb-5 pl-[64px] pr-4 text-[14px] leading-[1.72] text-muted">
                          {s.body}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            {showExploreCta && (
              <div className="mt-10">
                <Link
                  href="/me"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium leading-5 text-white tracking-button transition-opacity hover:opacity-90"
                >
                  Explore more about me
                  <ArrowRight className="size-4" strokeWidth={2.2} />
                </Link>
              </div>
            )}
          </div>

          {/* Portrait + stats */}
          <div>
            <div
              className="relative w-full overflow-hidden rounded-[28px] bg-surface"
              style={{ aspectRatio: portraitRatio }}
            >
              <Image
                src={portraitSrc}
                alt="Amarachi Blossom"
                fill
                className="object-cover object-center"
                sizes="(min-width: 768px) 520px, 100vw"
                unoptimized
              />
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-[20px] border border-border-soft bg-white p-6"
                >
                  <p className="text-[36px] font-medium leading-none tracking-h2 text-ink">
                    {s.value}
                  </p>
                  <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-accent-purple">
                    {s.label}
                  </p>
                  <p className="mt-3 text-[13px] leading-[1.62] text-muted">
                    {s.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
