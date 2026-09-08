"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import {
  Search,
  Compass,
  LayoutTemplate,
  Layers,
  PlayCircle,
  Box,
  Plus,
  Minus,
} from "lucide-react";

const skills = [
  { key: "ai-ux", eyebrow: "AI-RESEARCH", label: "Ai Powered UX Research", icon: Search, body: "Turning transcripts, chat logs, and diary studies into shipping-grade insight, faster than a spreadsheet allows." },
  { key: "ux-research", eyebrow: "RESEARCH", label: "UX Research & Discovery", icon: Compass, body: "Framing the problem before the pixels. Interviews, diary studies, competitive teardowns, journey maps." },
  { key: "product-design", eyebrow: "DESIGN", label: "Product Design", icon: LayoutTemplate, body: "End-to-end product work, from information architecture to high-fidelity, opinionated interfaces." },
  { key: "design-systems", eyebrow: "SYSTEMS", label: "Design Systems", icon: Layers, body: "Tokens, components, docs, treated as a product with its own release cadence, not a Figma library." },
  { key: "prototyping", eyebrow: "PROTOTYPING", label: "Prototyping & Testing", icon: PlayCircle, body: "Interactive prototypes that pressure-test the idea before engineering touches it." },
  { key: "3d", eyebrow: "ANIMATION", label: "3D Modelling", icon: Box, body: "Cinema 4D + Spline for brand systems, product marketing renders, and motion pieces.", comingSoon: true },
];

const capabilities = [
  { heading: "Research", items: ["User Interviews", "Competitive Analysis", "Journey Mapping", "Personas", "Usability Testing"] },
  { heading: "UX", items: ["Information Architecture", "User Flows", "Wireframing", "Accessibility Audits"] },
  { heading: "UI", items: ["Visual Design", "Design Systems", "Responsive Design", "Prototyping", "Motion Design"] },
  { heading: "Tools", items: ["Figma", "FigJam", "Framer", "Miro", "Notion", "Slack", "Claude", "Adobe Creative Suite"] },
];

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-label-lg leading-[15px]">
      <span className="text-accent-purple">{n}</span>
      <span aria-hidden className="block h-px w-8 bg-border-soft" />
      <span className="text-muted">{label}</span>
    </div>
  );
}

export default function MePage() {
  const [openKey, setOpenKey] = useState<string>("");

  return (
    <>
      {/* 1, What I can do for You */}
      <section className="pt-24 pb-32 border-b border-border-soft">
        <Container>
          <div className="grid grid-cols-1 gap-x-24 gap-y-14 md:grid-cols-2">
            <div>
              <SectionLabel n="03" label="About" />
              <h1 className="mt-8 text-[44px] font-medium leading-[1.05] tracking-h2 text-ink md:text-[52px]">
                What i can do for You
              </h1>
              <p className="mt-6 max-w-[440px] text-[14px] leading-[1.72] tracking-body text-muted">
                I believe good design is invisible. It doesn&apos;t announce
                itself. It just works, clearly, calmly, without drama. I ask
                uncomfortable questions before drawing comfortable interfaces
                and interesting solutions.
              </p>

              <ul className="mt-12 divide-y divide-border-soft">
                {skills.map((s) => {
                  const open = openKey === s.key;
                  return (
                    <li key={s.key}>
                      <button
                        type="button"
                        onClick={() => setOpenKey(open ? "" : s.key)}
                        className="group flex w-full items-center gap-4 py-4 text-left"
                        aria-expanded={open}
                      >
                        <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-purple/10 text-accent-purple">
                          <s.icon className="size-4" strokeWidth={2} />
                        </span>
                        <span className="flex-1">
                          <span className="block font-mono text-[9px] uppercase tracking-[0.18em] text-accent-purple">
                            {s.eyebrow}
                          </span>
                          <span className="mt-0.5 block text-[15px] font-medium leading-5 text-ink">
                            {s.label}
                          </span>
                        </span>
                        {s.comingSoon && (
                          <span className="rounded-full bg-accent-pink/15 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-accent-pink">
                            Coming soon
                          </span>
                        )}
                        <span
                          aria-hidden
                          className={`inline-flex size-7 shrink-0 items-center justify-center rounded-full border transition-colors ${
                            open ? "border-accent-purple bg-accent-purple text-white" : "border-border-soft text-muted"
                          }`}
                        >
                          {open ? <Minus className="size-3" /> : <Plus className="size-3" />}
                        </span>
                      </button>
                      <div className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                        <div className="min-h-0 overflow-hidden">
                          <p className="pb-4 pl-[52px] pr-4 text-[13px] leading-[1.7] text-muted">
                            {s.body}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <div className="relative aspect-[928/720] w-full overflow-hidden rounded-[16px] bg-surface">
                <Image
                  src="/images/about-portrait.png"
                  alt="Amarachi Blossom"
                  fill
                  className="object-cover object-center"
                  sizes="(min-width: 768px) 480px, 100vw"
                  unoptimized
                  priority
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-[14px] border border-border-soft bg-white p-5">
                  <p className="text-[28px] font-medium leading-none tracking-h2 text-ink">3+</p>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-purple">
                    Years Designing
                  </p>
                  <p className="mt-2 text-[12px] leading-[1.55] text-muted">
                    Crafting interfaces across mobile, web, and emerging
                    platforms, always led by user intent.
                  </p>
                </div>
                <div className="rounded-[14px] border border-border-soft bg-white p-5">
                  <p className="text-[28px] font-medium leading-none tracking-h2 text-ink">1</p>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-accent-purple">
                    Constant Goal
                  </p>
                  <p className="mt-2 text-[12px] leading-[1.55] text-muted">
                    From zero-to-one launches to scaled redesigns, each one
                    shipped with care and conviction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2, I design products people understand */}
      <section className="pt-24 pb-32 border-b border-border-soft">
        <Container>
          <div className="grid grid-cols-1 gap-x-24 gap-y-14 md:grid-cols-2 items-start">
            <div>
              <h2 className="font-display italic font-normal leading-[1.05] tracking-[-0.02em] text-ink text-[44px] md:text-[64px]">
                I design products
                <br />
                people understand
                <br />
                before they notice.
              </h2>
            </div>
            <div className="space-y-6 text-[14px] leading-[1.85] tracking-body text-muted max-w-[460px]">
              <p>
                I transitioned into product design because I couldn&apos;t stop
                asking why and what if. Why this button. What if this moved the
                other way. Why does using this app feel boring?
              </p>
              <p>
                GoMyCode gave me the vocabulary. Real products gave me
                everything else. Since then I&apos;ve worked across startups,
                agencies, and product teams, on fintech, edtech, and consumer
                tech. What I&apos;ve learned is that the most important design
                decisions happen in research sessions and whiteboard
                conversations, not in design tools.
              </p>
              <p>
                I believe good design is invisible. It doesn&apos;t announce
                itself. It just works, clearly, calmly, without drama. I ask
                uncomfortable questions before drawing comfortable interfaces
                and interesting solutions.
              </p>
              <blockquote className="border-l-2 border-accent-purple pl-4 italic text-[13px] leading-[1.7] text-ink-65">
                &ldquo;Beautiful experiences should not just look good, they
                should work effortlessly.&rdquo;
              </blockquote>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-[2fr_1fr] items-start">
            <div className="overflow-hidden rounded-[16px]">
              <Image
                src="/images/ludogate-hero.png"
                alt="LudoGate"
                width={800}
                height={650}
                className="block h-auto w-full"
                unoptimized
              />
            </div>
            <div className="overflow-hidden rounded-[14px] w-[200px]">
              <Image
                src="/images/ludogate-logo.png"
                alt="LudoGate logo"
                width={420}
                height={300}
                className="block h-auto w-full"
                unoptimized
              />
            </div>
          </div>
        </Container>
      </section>

      {/* 3, How I turn Chaos into Clarity */}
      <section className="pt-24 pb-32 border-b border-border-soft">
        <Container>
          <h2 className="text-[44px] font-medium leading-[1.05] tracking-h2 text-ink md:text-[52px]">
            How i turn Chaos into Clarity
          </h2>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
            {capabilities.map((c) => (
              <div key={c.heading}>
                <h3 className="font-mono text-[10px] uppercase leading-[16.5px] tracking-[1.76px] text-ink">
                  {c.heading}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {c.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span aria-hidden className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent-purple" />
                      <span className="text-[13px] leading-5 tracking-button text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4, Things that make me Interesting */}
      {/*
        Composition is a single pre-composed scrapbook image so overlaps and
        white-space between the photos read exactly like the reference.
        The heading + body copy are live text overlaid at the position that
        matches the wiped region inside the source (the wipe covers the
        rasterized heading in the reference PNG).
      */}
      <section className="pt-24 pb-32 bg-white overflow-hidden">
        <div className="relative mx-auto w-full max-w-[1400px] aspect-[2142/1838]">
          {/* Heading + copy centered on the stage, sitting behind the scrapbook
              layer so every colored border stays fully visible on top. */}
          <div
            className="absolute z-0 text-center left-1/2 -translate-x-1/2"
            style={{ top: "13.5%", width: "60%" }}
          >
            <h2 className="text-[4vw] max-[900px]:text-[34px] font-medium leading-[1.05] tracking-h2 text-ink">
              Things that make me
              <br />
              Interesting.
            </h2>
            <p className="mx-auto mt-6 max-w-[720px] text-[1.1vw] max-[900px]:text-[14px] leading-[1.75] tracking-body text-muted">
              When I&apos;m not designing, you&apos;ll probably find me buried
              in a good book, chasing the perfect food or cocktail photo before
              taking the first bite, or planning my next escape, whether it&apos;s
              across the city or across the map. I love discovering new places,
              food, collecting little moments, and finding inspiration in
              everyday experiences. Turns out, my curiosity is round the clock.
            </p>
          </div>

          {/* Scrapbook photos on top, overlap the copy where they naturally sit */}
          <Image
            src="/images/me-photos/scrapbook.png"
            alt="A collage of things that make me interesting"
            fill
            sizes="(min-width: 1400px) 1400px, 100vw"
            className="object-contain select-none pointer-events-none z-10"
            unoptimized
          />
        </div>
      </section>
    </>
  );
}
