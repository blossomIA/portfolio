"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./Container";

type SectionAnchor = {
  id: string;
  label: string;
};

type CaseStudyNavProps = {
  brand: string;
  sections: SectionAnchor[];
};

export function CaseStudyNav({ brand, sections }: CaseStudyNavProps) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: [0, 0.5, 1] }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <header className="sticky top-0 z-40 border-b border-border-soft bg-white/90 backdrop-blur-md">
      <Container>
        <div className="flex h-[70px] items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-[20px] font-medium tracking-[-0.02em] text-ink">
              {brand}
            </span>
            <span className="hidden md:inline text-[13px] leading-[18px] text-muted">
             , Amarachi Blossom
            </span>
          </Link>

          <nav aria-label="Case study sections" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {sections.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`text-[14px] leading-5 tracking-button transition-colors ${
                      active === id ? "text-ink" : "text-muted hover:text-ink"
                    }`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Link
            href="/#contact"
            className="inline-flex items-center gap-1 rounded-full border border-border-soft px-4 py-2 text-[14px] font-medium leading-5 text-ink tracking-button transition-colors hover:bg-surface"
          >
            <span aria-hidden>↑</span> Talk to me
          </Link>
        </div>
      </Container>
    </header>
  );
}
