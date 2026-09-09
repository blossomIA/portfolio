"use client";

import Image from "next/image";
import { Container } from "@/components/Container";
import { Capabilities } from "@/components/sections/Capabilities";
import { WhatICanDo } from "@/components/sections/WhatICanDo";

// Border colours for the raw (unframed) scrapbook photos. beach + book ship
// with their frames already baked into the PNG, so they carry no CSS border.
const frame = {
  cyan: "#37c6e6",
  purple: "#8b3dff",
  pink: "#ff45a8",
} as const;

type Photo = {
  src: string;
  alt: string;
  baked?: boolean;
  border?: keyof typeof frame;
  objectPosition?: string;
  // Zooms the photo inside its frame (crops the edges), e.g. to cut the
  // NINE LIVES title/author the way the design does.
  zoom?: number;
  // Baked frames keep their native aspect ratio (height is derived from it),
  // so only their left/top/width matter.
  ratio?: string;
  // Position + size as a % of the collage stage (matches scrapbook.png).
  box: { left: string; top: string; width: string; height: string };
};

// Ordered so later entries stack on top where the photos overlap.
const collage: Photo[] = [
  {
    src: "/images/me-photos/beach-new.png",
    alt: "Standing by a beachfront window",
    baked: true,
    ratio: "362 / 696",
    box: { left: "0%", top: "14%", width: "17%", height: "41%" },
  },
  {
    src: "/images/me-photos/book.png",
    alt: "The Middle Daughter novel",
    baked: true,
    ratio: "183 / 348",
    box: { left: "4%", top: "46%", width: "17.5%", height: "35.5%" },
  },
  {
    src: "/images/me-photos/restaurant.jpg",
    alt: "A plated dinner",
    border: "cyan",
    objectPosition: "center 58%",
    box: { left: "13%", top: "60%", width: "37%", height: "22%" },
  },
  {
    src: "/images/me-photos/mocktail.jpg",
    alt: "A mojito at the bar",
    border: "cyan",
    objectPosition: "58% center",
    box: { left: "79%", top: "11%", width: "18%", height: "35%" },
  },
  {
    src: "/images/me-photos/nine-live.jpg",
    alt: "Nine Lives book cover",
    border: "purple",
    objectPosition: "center 30%",
    zoom: 1.34,
    box: { left: "70%", top: "38%", width: "22%", height: "38%" },
  },
  {
    src: "/images/me-photos/pool.jpg",
    alt: "A poolside bar at night",
    border: "pink",
    objectPosition: "center 52%",
    box: { left: "44%", top: "51%", width: "35%", height: "21%" },
  },
];

// Mobile-only: an evenly framed 2-column scrapbook grid. `box` is unused here.
const mobileGrid: Photo[] = [
  { src: "/images/me-photos/beach-new.png", alt: "Standing by a beachfront window", baked: true, ratio: "3 / 4", box: { left: "", top: "", width: "", height: "" } },
  { src: "/images/me-photos/mocktail.jpg", alt: "A mojito at the bar", border: "cyan", objectPosition: "58% center", ratio: "3 / 4", box: { left: "", top: "", width: "", height: "" } },
  { src: "/images/me-photos/book.png", alt: "The Middle Daughter novel", baked: true, ratio: "3 / 4", box: { left: "", top: "", width: "", height: "" } },
  { src: "/images/me-photos/nine-live.jpg", alt: "Nine Lives book cover", border: "purple", objectPosition: "center top", ratio: "3 / 4", box: { left: "", top: "", width: "", height: "" } },
  { src: "/images/me-photos/restaurant.jpg", alt: "A plated dinner", border: "cyan", objectPosition: "center 58%", ratio: "4 / 3", box: { left: "", top: "", width: "", height: "" } },
  { src: "/images/me-photos/pool.jpg", alt: "A poolside bar at night", border: "pink", objectPosition: "center 52%", ratio: "4 / 3", box: { left: "", top: "", width: "", height: "" } },
];

function CollagePhoto({ photo }: { photo: Photo }) {
  return (
    <div
      className="absolute overflow-hidden rounded-[14px]"
      style={{
        left: photo.box.left,
        top: photo.box.top,
        width: photo.box.width,
        ...(photo.baked
          ? { aspectRatio: photo.ratio }
          : { height: photo.box.height, border: `3px solid ${frame[photo.border!]}` }),
      }}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 1180px) 300px, 45vw"
        className="object-cover"
        style={
          photo.baked
            ? undefined
            : {
                objectPosition: photo.objectPosition,
                ...(photo.zoom ? { transform: `scale(${photo.zoom})` } : {}),
              }
        }
        unoptimized
      />
    </div>
  );
}

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
  return (
    <>
      {/* 1, What I can do for you (shared with the home page). On /me we drop
          the CTA into itself, use the workspace photo, and tighten the bottom
          gap so it reads as one "about" group with the section below. */}
      <WhatICanDo
        showExploreCta={false}
        portraitSrc="/images/about-workspace.png"
        portraitRatio="1024 / 963"
        className="pb-10"
      />

      {/* 2, I design products people understand */}
      <section className="pt-6 pb-32 rule-bottom">
        <Container>
          <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:grid-cols-[1.05fr_0.95fr]">
            {/* Left: heading + body + quote */}
            <div>
              <h2 className="italic font-medium leading-[1.05] tracking-h2 text-ink text-[32px] sm:text-[44px] md:text-[56px]">
                I design products
                <br />
                people understand
                <br />
                before they notice.
              </h2>
              <div className="mt-8 max-w-[540px] space-y-6 text-[17px] leading-[1.75] tracking-body text-muted">
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
                <blockquote className="border-l-2 border-accent-purple pl-4 italic text-[16px] leading-[1.7] text-ink-65">
                  &ldquo;Beautiful experiences should not just look good, they
                  should work effortlessly.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Right: three stacked LudoGate cards, spread to align the last
                card with the closing quote. */}
            <div className="flex flex-col items-start gap-6 md:h-full md:justify-between md:gap-0">
              <div className="hidden md:block w-full md:w-[56%] overflow-hidden rounded-[16px]">
                <Image
                  src="/images/ludogate-logo.png"
                  alt="LudoGate logo"
                  width={420}
                  height={300}
                  className="block h-auto w-full"
                  unoptimized
                />
              </div>
              <div className="w-full overflow-hidden rounded-[16px]">
                <Image
                  src="/images/ludogate-hero.png"
                  alt="LudoGate"
                  width={800}
                  height={650}
                  className="block h-auto w-full"
                  unoptimized
                />
              </div>
              <div className="hidden md:block w-full md:w-[56%] overflow-hidden rounded-[16px]">
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
          </div>
        </Container>
      </section>

      {/* 3, How I turn Chaos into Clarity */}
      <Capabilities />

      {/* 4, Things that make me Interesting */}
      <section className="rule-top bg-white pt-24 pb-32 overflow-hidden">
        {/* Mobile: stacked copy, then a 2-column scrapbook grid. */}
        <div className="md:hidden">
          <Container>
            <SectionLabel n="03" label="About" />
            <h2 className="mt-6 whitespace-nowrap text-[22px] font-medium leading-[1.06] tracking-h2 text-ink">
              The human behind it all.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.7] tracking-body text-muted">
              When I&apos;m not designing, you&apos;ll probably find me buried in
              a good book, chasing the perfect food or cocktail photo before
              taking the first bite, or planning my next escape, whether it&apos;s
              across the city or across the map. I love discovering new places,
              food, collecting little moments, and finding inspiration in
              everyday experiences. Turns out, my curiosity is round the clock.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-4">
              {mobileGrid.map((p, i) => (
                <div
                  key={p.src}
                  className="relative w-full overflow-hidden rounded-[16px]"
                  style={{
                    aspectRatio: p.ratio,
                    transform: `rotate(${i % 2 === 0 ? -1.5 : 1.5}deg)`,
                    ...(p.baked ? {} : { border: `3px solid ${frame[p.border!]}` }),
                  }}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    sizes="45vw"
                    className="object-cover"
                    style={p.baked ? undefined : { objectPosition: p.objectPosition }}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </Container>
        </div>

        {/* Desktop: photos positioned around the empty gap, aligned to the same
            container width the other sections use. overflow-hidden lets the
            NINE LIVES card bleed off the right edge like the design. */}
        <Container className="hidden md:block">
          <div className="relative aspect-[2142/1838] w-full overflow-hidden">
            {collage.map((p) => (
              <CollagePhoto key={p.src} photo={p} />
            ))}
          <div
            className="absolute z-10"
            style={{ left: "26.5%", top: "10%", width: "45%" }}
          >
            <SectionLabel n="03" label="About" />
            <h2 className="mt-6 whitespace-nowrap text-[clamp(22px,2.6vw,36px)] font-medium leading-[1.05] tracking-h2 text-ink">
              The human behind it all.
            </h2>
            <p className="mt-5 text-[clamp(14px,1.2vw,16px)] leading-[1.7] tracking-body text-muted">
              When I&apos;m not designing, you&apos;ll probably find me buried in
              a good book, chasing the perfect food or cocktail photo before
              taking the first bite, or planning my next escape, whether it&apos;s
              across the city or across the map. I love discovering new places,
              food, collecting little moments, and finding inspiration in
              everyday experiences. Turns out, my curiosity is round the clock.
            </p>
          </div>
          </div>
        </Container>
      </section>
    </>
  );
}
