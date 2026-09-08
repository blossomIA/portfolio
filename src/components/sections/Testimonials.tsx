"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/Container";
import { SectionLabel } from "@/components/SectionLabel";
import { Quote, Star } from "lucide-react";

type AvatarKey = "cheeka" | "drb" | "ayomide" | "ee";

type Testimonial = {
  quote: string;
  preview: string;
  name: string;
  roleFull: string;
  roleShort: string;
  roleColor: string;
  avatar: AvatarKey;
};

const AVATARS: Record<AvatarKey, string> = {
  cheeka: "/images/testimonials/cheeka.png",
  drb: "/images/testimonials/drb.png",
  ayomide: "/images/testimonials/ayomide.png",
  ee: "/images/testimonials/ee.png",
};

// Index into TESTIMONIALS: 0 = Cheeka, 1 = Ayomide, 2 = Dr. B, 3 = E.E
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Accessibility-first thinking, Incredible attention to detail, and she advocates for users even when it's uncomfortable. That's rare. She made our product genuinely usable for people with visual impairments and the whole team grew from it.",
    preview:
      "Accessibility-first thinking, incredible attention to detail. She advocates for users even when it's un…",
    name: "Cheeka Nwosu",
    roleFull: "Head of Product, Megadel Africa",
    roleShort: "Head of Product, Megadel Africa",
    roleColor: "text-accent-purple",
    avatar: "cheeka",
  },
  {
    quote:
      "The 3D brand animations Amara created for our launch were absolutely cinematic. Our investors kept asking who did our motion work. That kind of upstream visual thinking is rare.",
    preview:
      "The 3D brand animations Amara created for our launch were absolutely cinematic. Our inve…",
    name: "Ayomide Phillips",
    roleFull: "Growth Lead, Eye Level",
    roleShort: "Growth Lead, Eye Level",
    roleColor: "text-accent-pink",
    avatar: "ayomide",
  },
  {
    quote:
      "Amarachi doesn't just design screens, she designs outcomes. She identified problems we hadn't articulated yet and moved the metrics we did care about.",
    preview:
      "Amarachi doesn't just design screens, she designs outcomes. She identified problems in …",
    name: "Dr. B",
    roleFull: "CEO Seashells Lab / LinkBridge Consulting",
    roleShort: "CEO Seashells Lab / LinkBridge Consulting",
    roleColor: "text-accent-cyan",
    avatar: "drb",
  },
  {
    quote:
      "What sets Amarachi apart is the strategic clarity behind every visual decision. She presents work with the confidence of a director.",
    preview:
      "What sets Amarachi apart is the strategic clarity behind every visual decision. She pres…",
    name: "E.E",
    roleFull: "FM Co.",
    roleShort: "FM Co.",
    roleColor: "text-blue-400",
    avatar: "ee",
  },
];

function Avatar({ kind, size = 40 }: { kind: AvatarKey; size?: number }) {
  return (
    <Image
      src={AVATARS[kind]}
      alt=""
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="shrink-0 select-none rounded-full object-cover"
      unoptimized
    />
  );
}

// slots[0] is the featured testimonial index; slots[1..3] are the three small cards left→right.
const INITIAL_SLOTS: [number, number, number, number] = [0, 2, 1, 3];

export function Testimonials() {
  const [slots, setSlots] = useState<[number, number, number, number]>(
    INITIAL_SLOTS
  );

  const featured = TESTIMONIALS[slots[0]];

  function swap(smallSlot: 1 | 2 | 3) {
    setSlots((prev) => {
      const next = [...prev] as typeof prev;
      [next[0], next[smallSlot]] = [next[smallSlot], next[0]];
      return next;
    });
  }

  return (
    <section
      id="testimonials"
      className="border-t border-border-soft pt-[129px] pb-[128px]"
    >
      <Container>
        <SectionLabel number="05" label="Testimonials" />
        <h2 className="mt-5 max-w-[1100px] text-[44px] font-medium leading-[1.05] tracking-h2 text-ink md:text-[54px]">
          Nice things people have said about my work
        </h2>

        {/* Featured card */}
        <div className="mt-16 overflow-hidden rounded-[28px] bg-ink text-white shadow-[0_40px_80px_-40px_rgba(0,0,0,0.3)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={slots[0]}
              initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -24, filter: "blur(6px)" }}
              transition={{ duration: 0.45, ease: [0.2, 0.65, 0.3, 1] }}
              className="px-8 py-16 md:px-20 md:py-24"
            >
              <div className="flex justify-center">
                <Quote
                  className="size-8 rotate-180 text-accent-purple"
                  strokeWidth={2.4}
                  fill="currentColor"
                />
              </div>
              <blockquote className="mx-auto mt-10 max-w-[900px] text-center text-[20px] leading-[1.72] text-white/90 md:text-[22px]">
                {featured.quote}
              </blockquote>
              <div className="mt-12 flex flex-col items-center justify-center gap-6 md:flex-row md:gap-10">
                <div className="flex items-center gap-4">
                  <Avatar kind={featured.avatar} size={56} />
                  <div className="text-left">
                    <p className="text-[18px] font-medium leading-6 text-white">
                      {featured.name}
                    </p>
                    <p
                      className={`text-[15px] leading-5 font-medium ${featured.roleColor}`}
                    >
                      {featured.roleFull}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-5 text-accent-pink"
                      fill="currentColor"
                      strokeWidth={0}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination dots, show which slot is currently featured */}
        <div className="mt-10 flex justify-center gap-2">
          {[0, 1, 2, 3].map((tIdx) => {
            const isActive = slots[0] === tIdx;
            const slot = slots.indexOf(tIdx);
            return (
              <button
                key={tIdx}
                onClick={() => {
                  if (slot > 0) swap(slot as 1 | 2 | 3);
                }}
                aria-label={`Show ${TESTIMONIALS[tIdx].name}'s testimonial`}
                className={`h-2.5 rounded-full transition-all ${
                  isActive
                    ? "w-8 bg-accent-purple"
                    : "w-2.5 bg-accent-purple/25 hover:bg-accent-purple/50"
                }`}
              />
            );
          })}
        </div>

        {/* Small testimonials, clickable, swap with featured */}
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((slotIdx) => {
            const testimonialIdx = slots[slotIdx];
            return (
              <SmallCard
                key={slotIdx}
                slotKey={testimonialIdx}
                testimonial={TESTIMONIALS[testimonialIdx]}
                onClick={() => swap(slotIdx as 1 | 2 | 3)}
              />
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function SmallCard({
  slotKey,
  testimonial,
  onClick,
}: {
  slotKey: number;
  testimonial: Testimonial;
  onClick: () => void;
}) {
  return (
    <AnimatePresence mode="wait">
      <motion.button
        key={slotKey}
        type="button"
        onClick={onClick}
        initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
        transition={{ duration: 0.35, ease: [0.2, 0.65, 0.3, 1] }}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.98 }}
        aria-label={`Show ${testimonial.name}'s testimonial`}
        className="group flex h-full flex-col justify-between rounded-[20px] bg-[#3a3a3a] p-6 text-left text-white outline-none transition-colors hover:bg-[#4a4a4a]"
      >
        <blockquote className="text-[14px] leading-[1.72] text-white/60 group-hover:text-white/80">
          &ldquo;{testimonial.preview}&rdquo;
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-3">
          <Avatar kind={testimonial.avatar} size={36} />
          <p className="text-[14px] font-medium leading-4 text-white">
            {testimonial.name}
            <span className={`ml-2 font-normal ${testimonial.roleColor}`}>
              {testimonial.roleShort}
            </span>
          </p>
        </figcaption>
      </motion.button>
    </AnimatePresence>
  );
}
