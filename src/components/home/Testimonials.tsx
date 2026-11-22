"use client";

import Image from "next/image";
import { useRef } from "react";
import { Chevron } from "@/components/site/Icon";
import { Section } from "@/components/site/Section";

const quotes = [
  {
    quote:
      "Accessibility-first thinking, incredible attention to detail, and she advocates for users even when it's uncomfortable. That's rare. She made our product genuinely usable for people with visual impairments and the whole team grew from it.",
    name: "Cheeka Nwosu",
    role: "Head of Product, Megadel Africa",
    avatar: "cheeka",
  },
  {
    quote:
      "The 3D brand animations Amara created for our launch were absolutely cinematic. Our investors kept asking who did our motion work. That kind of upstream visual thinking is rare.",
    name: "Ayomide Phillips",
    role: "Growth Lead, Eye Level",
    avatar: "ayomide",
  },
  {
    quote:
      "Amarachi doesn't just design screens, she designs outcomes. She identified problems we hadn't articulated yet and moved the metrics we did care about.",
    name: "Dr. B",
    role: "CEO, Seashells Lab / LinkBridge Consulting",
    avatar: "drb",
  },
  {
    quote:
      "What sets Amarachi apart is the strategic clarity behind every visual decision. She presents work with the confidence of a director.",
    name: "E.E",
    role: "FM Co.",
    avatar: "ee",
  },
];

export function Testimonials() {
  const rail = useRef<HTMLDivElement>(null);
  const step = (dir: 1 | -1) => {
    const el = rail.current;
    const card = el?.querySelector<HTMLElement>(".tc");
    if (el && card) el.scrollBy({ left: dir * (card.offsetWidth + 12), behavior: "smooth" });
  };

  return (
    <Section
      id="words"
      title="Kind words"
      desc="From the people I've designed with."
      aside={
        <div className="arrows">
          <button className="round-btn" onClick={() => step(-1)} aria-label="Previous testimonials">
            <Chevron dir="left" />
          </button>
          <button className="round-btn" onClick={() => step(1)} aria-label="Next testimonials">
            <Chevron dir="right" />
          </button>
        </div>
      }
    >
      <div className="rail" ref={rail} tabIndex={0} aria-label="Testimonials, scroll sideways">
        {quotes.map((q) => (
          <article key={q.name} className="tc">
            <blockquote>{q.quote}</blockquote>
            <div className="tc-who">
              <Image src={`/images/testimonials/${q.avatar}.png`} alt="" width={40} height={40} />
              <div>
                <b>{q.name}</b>
                <span>{q.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
