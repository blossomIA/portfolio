"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Chevron } from "@/components/site/Icon";

type Vars = React.CSSProperties & Record<`--${string}`, string>;

/**
 * "The human behind it all" as a little picture book.
 *
 * Three leaves sit on the right-hand page. Each leaf has a photo on both
 * sides, so turning it reveals its back on the left and the next leaf on the
 * right. Turn with a click, by dragging the page, with the arrow keys or
 * the buttons, or by tapping a highlighted phrase to jump to its photo.
 *
 * pool-bar.jpg is pool.jpg re-encoded without its EXIF (it carried GPS data).
 */

type Photo = {
  src: string;
  alt: string;
  label: string;
  w: number;
  h: number;
  /** frame colour; beach + book ship with their frame baked into the PNG */
  fc?: string;
  pos?: string;
  zoom?: number;
};

const P = {
  escape: { src: "/images/me-photos/beach-new.png", alt: "Standing by a beachfront window", label: "Next escape", w: 362, h: 696 },
  book: { src: "/images/me-photos/book.png", alt: "The Middle Daughter novel", label: "Currently reading", w: 183, h: 348 },
  food: { src: "/images/me-photos/restaurant.jpg", alt: "A plated dinner", label: "Food, photo first", w: 2268, h: 4032, fc: "var(--cyan)", pos: "center 60%" },
  cocktail: { src: "/images/me-photos/mocktail.jpg", alt: "A mojito at the bar", label: "Cocktail, photo first", w: 1206, h: 2208, fc: "var(--pink)", pos: "58% center" },
  places: { src: "/images/me-photos/pool-bar.jpg", alt: "A poolside bar at night", label: "New places", w: 1242, h: 2208, fc: "var(--purple)", pos: "center 52%" },
  book2: { src: "/images/me-photos/nine-live.jpg", alt: "Nine Lives book cover", label: "Another good book", w: 907, h: 1360, fc: "var(--cyan)", pos: "center 30%", zoom: 1.2 },
} satisfies Record<string, Photo>;

const leaves: { front: Photo; back: Photo }[] = [
  { front: P.escape, back: P.book },
  { front: P.food, back: P.cocktail },
  { front: P.places, back: P.book2 },
];
const N = leaves.length;

/** phrase → how many leaves must be turned to show its photo */
const links: Record<string, { spread: number; color: string }> = {
  book: { spread: 1, color: "var(--pink)" },
  food: { spread: 1, color: "var(--cyan)" },
  cocktail: { spread: 2, color: "var(--pink)" },
  escape: { spread: 0, color: "var(--purple)" },
  places: { spread: 2, color: "var(--purple)" },
};

type Drag = { leaf: number; forward: boolean; startX: number; width: number; angle: number; moved: boolean };

export function Human() {
  const [turned, setTurned] = useState(0);
  const [from, setFrom] = useState(0);
  const [drag, setDrag] = useState<Drag | null>(null);
  const bookRef = useRef<HTMLDivElement>(null);

  const go = (n: number) => {
    const next = Math.max(0, Math.min(N, n));
    setFrom(turned);
    setTurned(next);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const r = e.currentTarget.getBoundingClientRect();
    const right = e.clientX > r.left + r.width / 2;
    if (right && turned < N) {
      setDrag({ leaf: turned, forward: true, startX: e.clientX, width: r.width / 2, angle: 0, moved: false });
    } else if (!right && turned > 0) {
      setDrag({ leaf: turned - 1, forward: false, startX: e.clientX, width: r.width / 2, angle: -180, moved: false });
    } else return;
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      /* pointer already gone; the drag still works without capture */
    }
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag) return;
    const dx = e.clientX - drag.startX;
    const delta = (dx / (drag.width * 1.6)) * 180;
    const angle = Math.max(-180, Math.min(0, (drag.forward ? 0 : -180) + delta));
    setDrag({ ...drag, angle, moved: drag.moved || Math.abs(dx) > 6 });
  };

  const onPointerUp = () => {
    if (!drag) return;
    const { forward, angle, moved } = drag;
    setDrag(null);
    if (!moved) go(forward ? turned + 1 : turned - 1);
    else if (forward && angle < -60) go(turned + 1);
    else if (!forward && angle > -120) go(turned - 1);
    else setFrom(turned); // snap back
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    go(e.key === "ArrowRight" ? turned + 1 : turned - 1);
  };

  const Hl = (k: string, text: string) => (
    <button
      type="button"
      className="hl"
      aria-pressed={turned === links[k].spread}
      style={{ "--hl": links[k].color } as Vars}
      onClick={() => {
        go(links[k].spread);
        bookRef.current?.focus({ preventScroll: true });
      }}
    >
      {text}
    </button>
  );

  return (
    <section className="sec me-human" aria-labelledby="me-human-title">
      <div className="wrap me-human-grid">
        <div className="me-human-copy">
          <span className="tag lab c-cyan">About</span>
          <h2 id="me-human-title" className="d me-human-h">
            The human <span className="c-purple">behind it all.</span>
          </h2>
          <p>
            When I&apos;m not designing, you&apos;ll probably find me buried in
            a {Hl("book", "good book")}, chasing the perfect {Hl("food", "food")}{" "}
            or {Hl("cocktail", "cocktail photo")} before taking the first bite,
            or planning my {Hl("escape", "next escape")}, whether it&apos;s
            across the city or across the map. I love discovering{" "}
            {Hl("places", "new places")}, food, collecting little moments, and
            finding inspiration in everyday experiences. Turns out, my curiosity
            is round the clock.
          </p>
          <p className="lab me-hint" aria-hidden>
            Tap a highlight to jump to its page
          </p>
        </div>

        <div className="me-book-wrap">
          <div
            ref={bookRef}
            className={`me-book${drag ? " is-dragging" : ""}${turned === 0 ? " at-start" : ""}`}
            role="group"
            aria-roledescription="picture book"
            aria-label="Off the clock. Use the arrow keys to turn the pages."
            tabIndex={0}
            onKeyDown={onKey}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
          >
            {/* inside front cover, left */}
            <div className="me-pg me-pg-l me-pg-intro">
              <span className="tag lab c-pink">Off the clock</span>
              <p className="d">
                Little <span className="c-pink">moments.</span>
              </p>
              <p className="lab muted">Drag or tap the page</p>
            </div>

            {/* last page, right */}
            <div className="me-pg me-pg-r me-pg-end">
              <p className="d">
                The end. <span className="c-purple">For now.</span>
              </p>
              <button
                type="button"
                className="btn btn-line"
                onPointerDown={(e) => e.stopPropagation()}
                onClick={() => go(0)}
              >
                Start again
              </button>
            </div>

            {leaves.map((leaf, i) => {
              const isTurned = i < turned;
              const dragging = drag?.leaf === i;
              const angle = dragging ? drag.angle : isTurned ? -180 : 0;
              // When several leaves move at once, ripple them one after another.
              const step = turned >= from ? i - from : from - 1 - i;
              const d = Math.max(0, step) * 0.12;
              return (
                <div
                  key={i}
                  className={`me-leaf${dragging ? " is-drag" : ""}${i === turned ? " is-next" : ""}`}
                  style={{
                    transform: `rotateY(${angle}deg)`,
                    zIndex: dragging ? 50 : isTurned ? i + 1 : 2 * N - i,
                    transitionDelay: dragging ? "0s" : `${d}s, ${d + 0.4}s`,
                  }}
                  aria-hidden={!(i === turned || i === turned - 1)}
                >
                  <Page photo={leaf.front} n={i * 2 + 1} side="r" />
                  <Page photo={leaf.back} n={i * 2 + 2} side="l" />
                </div>
              );
            })}
          </div>

          <div className="me-book-nav">
            <button
              type="button"
              className="round-btn"
              aria-label="Previous page"
              disabled={turned === 0}
              onClick={() => go(turned - 1)}
            >
              <Chevron dir="left" />
            </button>
            <span className="lab" aria-live="polite">
              Spread {String(turned + 1).padStart(2, "0")} / {String(N + 1).padStart(2, "0")}
            </span>
            <button
              type="button"
              className="round-btn"
              aria-label="Next page"
              disabled={turned === N}
              onClick={() => go(turned + 1)}
            >
              <Chevron dir="right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Page({ photo, n, side }: { photo: Photo; n: number; side: "l" | "r" }) {
  return (
    <figure className={`me-face me-face-${side}`}>
      <div
        className={`me-shot${photo.fc ? "" : " is-baked"}`}
        style={{ "--fc": photo.fc ?? "transparent" } as Vars}
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          width={photo.w}
          height={photo.h}
          sizes="300px"
          draggable={false}
          style={{
            objectPosition: photo.pos,
            ...(photo.zoom ? { transform: `scale(${photo.zoom})` } : {}),
          }}
        />
      </div>
      <figcaption>
        <span className="lab">{photo.label}</span>
        <span className="lab muted">p. {String(n).padStart(2, "0")}</span>
      </figcaption>
    </figure>
  );
}
