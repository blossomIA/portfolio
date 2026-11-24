import Image from "next/image";

type Vars = React.CSSProperties & Record<`--${string}`, string>;

/** Me hero: headline and her opening line beside a framed photo, then the rest of her story. */
export function MeHero() {
  return (
    <section className="wrap me-hero" aria-labelledby="me-title">
      <div className="me-hero-grid">
        <div className="me-hero-copy">
          <span className="tag lab c-pink">Me</span>
          <h1 id="me-title" className="d me-h1">
            I design products <span className="c-pink">people understand</span>{" "}
            before they notice.
          </h1>
          <p className="me-lede">
            I transitioned into product design because I couldn&apos;t stop
            asking <b>why</b> and <b>what if</b>. Why this button. What if this
            moved the other way. Why does using this app feel boring?
          </p>
        </div>

        <div className="me-hero-art">
          <figure
            className="me-frame me-hero-ph"
            style={{ "--fc": "var(--pink)", "--rot": "-2deg" } as Vars}
          >
            <Image
              src="/images/me-desk.webp"
              alt="Amarachi smiling at her laptop"
              width={980}
              height={1080}
              priority
              sizes="(min-width: 1000px) 520px, 88vw"
            />
          </figure>
        </div>
      </div>

      <div className="me-story">
        <div className="me-story-text">
          <p>
            <a
              className="mark"
              style={{ "--hl": "var(--pink)" } as Vars}
              href="https://gomycode.com"
              target="_blank"
              rel="noreferrer"
            >
              GoMyCode
            </a>{" "}
            gave me the vocabulary.{" "}
            <Mark c="var(--cyan)">Real products gave me everything else.</Mark>{" "}
            Since then I&apos;ve worked across startups, agencies, and product
            teams, on fintech, edtech, and consumer tech. What I&apos;ve learned is
            that the most important design decisions happen in{" "}
            <Mark c="var(--purple)">research sessions and whiteboard conversations</Mark>,
            not in design tools.
          </p>
          <p>
            I believe <Mark c="var(--pink)">good design is invisible</Mark>. It
            doesn&apos;t announce itself. It just works, clearly, calmly, without
            drama. I ask <Mark c="var(--cyan)">uncomfortable questions</Mark>{" "}
            before drawing comfortable interfaces and interesting solutions.
          </p>
        </div>
        <blockquote className="me-quote">
          &ldquo;Beautiful experiences should not just look good, they should{" "}
          <span>work effortlessly.</span>&rdquo;
        </blockquote>
      </div>
    </section>
  );
}

/** A phrase underlined in one of her colours; the line fills on hover. */
function Mark({ c, children }: { c: string; children: React.ReactNode }) {
  return (
    <span className="mark" style={{ "--hl": c } as Vars}>
      {children}
    </span>
  );
}
