"use client";

import { useEffect, useState } from "react";

/** Sticky row of chapter pills; highlights the chapter in the middle of the screen. */
export function ChapterBar({ chapters }: { chapters: { id: string; label: string }[] }) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    chapters.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [chapters]);

  return (
    <nav className="cs-chap" aria-label="Chapters">
      <div className="wrap">
        {chapters.map((c) => (
          <a key={c.id} href={`#${c.id}`} aria-current={active === c.id ? "true" : undefined}>
            {c.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
