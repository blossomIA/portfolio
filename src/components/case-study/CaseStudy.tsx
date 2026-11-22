import Image from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { getProject, nextProject, projectNumber } from "@/lib/projects";
import { ChapterBar } from "./ChapterBar";

/* ──────────────────────────────────────────────────────────────────────────
   Case-study building blocks. A page is:

   <CaseStudy slug="token-nest" aInk="#1E7B3A" aSoft="#E6F6E4" chapters={[...]}>
     <CaseHero … />            (rendered for you from props)
     <Chapter id no title intro> …blocks… </Chapter>
   </CaseStudy>                (renders the chapter bar and "next project")

   Colours come from the project's theme in lib/projects.ts.
   ────────────────────────────────────────────────────────────────────────── */

type Chapter = { id: string; label: string };

export function CaseStudy({
  slug,
  aInk,
  aSoft,
  chapters,
  hero,
  end,
  children,
}: {
  slug: string;
  /** accent light enough for text on the charcoal page (deepened automatically in light mode) */
  aInk: string;
  /** dark tint of the accent for tinted cards (a light tint is derived in light mode) */
  aSoft: string;
  chapters: Chapter[];
  hero: ReactNode;
  /** replaces the default next-project card at the bottom */
  end?: ReactNode;
  children: ReactNode;
}) {
  const p = getProject(slug);
  if (!p) throw new Error(`Unknown project: ${slug}`);
  const next = nextProject(slug);

  return (
    <article
      className="cs"
      style={
        {
          "--p": p.theme.panel,
          "--on": p.theme.on,
          "--a": p.theme.accent,
          // Raw accent; case-study.css derives --a-ink / --a-soft per theme.
          "--a-base": aInk,
          "--a-soft-dark": aSoft,
        } as CSSProperties
      }
    >
      {hero}
      <ChapterBar chapters={chapters} />
      {children}

      {end ?? (
      <Link
        className="cs-next"
        href={next.href}
        style={
          {
            "--np": next.theme.panel,
            "--non": next.theme.on,
            "--na": next.theme.accent,
          } as CSSProperties
        }
      >
        <div>
          <span className="lab">Next · {projectNumber(next.slug)} · {next.name}</span>
          <h2 className="d">{next.title}</h2>
          <span className="go">
            {next.cta}
          </span>
        </div>
        <figure className="crop">
          <Image src={next.image} alt={`${next.name} app screens`} fill sizes="(min-width: 800px) 600px, 90vw" />
        </figure>
      </Link>
      )}
    </article>
  );
}

export function CaseHero({
  slug,
  title,
  accentWord,
  subtitle,
  facts,
  image,
}: {
  slug: string;
  /** e.g. "Token" — rendered in the panel's text colour */
  title: string;
  /** e.g. "Nest" — rendered in the accent colour */
  accentWord?: string;
  subtitle: ReactNode;
  facts?: { label: string; value: ReactNode }[];
  image?: { src: string; alt: string; width: number; height: number };
}) {
  const p = getProject(slug)!;
  return (
    <header className={`cs-hero${image ? "" : " no-shot"}`}>
      <div className="cs-hero-top lab">
        <Link href="/projects">All projects</Link>
        <span>
          {projectNumber(slug)} · {p.kind}
        </span>
      </div>
      <h1 className="d cs-title">
        {title}
        {accentWord && (
          <>
            {" "}
            <span>{accentWord}</span>
          </>
        )}
      </h1>
      <div className="cs-hero-row">
        <p className="cs-sub">{subtitle}</p>
        {facts && (
          <div className="cs-facts">
            {facts.map((f) => (
              <div key={f.label}>
                <span className="lab">{f.label}</span>
                <p>{f.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      {image && (
        <div className="cs-shot">
          <Image src={image.src} alt={image.alt} width={image.width} height={image.height} priority sizes="(min-width: 860px) 760px, 92vw" />
        </div>
      )}
    </header>
  );
}

export function Chapter({
  id,
  no,
  title,
  intro,
  aside,
  wide,
  children,
}: {
  id?: string;
  no: string;
  title: ReactNode;
  intro?: ReactNode;
  /** something to place at the right of the heading, e.g. arrows */
  aside?: ReactNode;
  /** content that should run full-bleed under the heading (e.g. a scroll rail) */
  wide?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="cs-sec" id={id}>
      <div className="wrap">
        <div className="cs-sh">
          <span className="cs-no">{no}</span>
          <div className={aside ? "cs-sh-row" : undefined}>
            <div>
              <h2 className="d">{title}</h2>
              {intro && <p>{intro}</p>}
            </div>
            {aside}
          </div>
        </div>
      </div>
      {wide}
      {children && (
        <div className="wrap">
          <div className="cs-in">{children}</div>
        </div>
      )}
    </section>
  );
}

export function Grid({ cols = 2, children }: { cols?: number; children: ReactNode }) {
  return (
    <div className="cs-grid" style={{ "--cols": cols } as CSSProperties}>
      {children}
    </div>
  );
}

export function Card({
  title,
  kicker,
  tone,
  hover,
  children,
}: {
  title?: ReactNode;
  kicker?: ReactNode;
  tone?: "tint" | "dark";
  hover?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={["cs-card", tone, hover && "hov"].filter(Boolean).join(" ")}>
      {kicker && <span className="lab kicker">{kicker}</span>}
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}

/** Numbered problem / feature cards. */
export function Points({ items, cols = 4 }: { items: { title: string; body: ReactNode }[]; cols?: number }) {
  return (
    <Grid cols={cols}>
      {items.map((it, i) => (
        <div className="cs-card hov" key={it.title}>
          <span className="lab muted">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="gap-top">{it.title}</h3>
          <p style={{ fontSize: 14 }}>{it.body}</p>
        </div>
      ))}
    </Grid>
  );
}

export function Metrics({ items }: { items: { value: string; label: string }[] }) {
  return (
    <Grid cols={items.length}>
      {items.map((m) => (
        <div className="cs-metric" key={m.label}>
          <b>{m.value}</b>
          <p>{m.label}</p>
        </div>
      ))}
    </Grid>
  );
}

export function BigNumbers({ items }: { items: { value: string; label: string }[] }) {
  return (
    <Grid cols={items.length}>
      {items.map((m) => (
        <div className="cs-num" key={m.label}>
          <b>{m.value}</b>
          <p>{m.label}</p>
        </div>
      ))}
    </Grid>
  );
}

export function Statement({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="cs-quote">
      <span className="lab">{label}</span>
      <p className="d">{children}</p>
    </div>
  );
}

export function Bars({ title, items }: { title: string; items: { label: string; value: number }[] }) {
  const max = Math.max(...items.map((i) => i.value));
  return (
    <div className="cs-card cs-bars">
      <h3>{title}</h3>
      {items.map((b) => (
        <div className="row" key={b.label}>
          <span>{b.label}</span>
          <i style={{ "--w": `${(b.value / max) * 100}%` } as CSSProperties} />
          <span>{b.value}%</span>
        </div>
      ))}
    </div>
  );
}

export function Insights({
  title,
  note,
  items,
}: {
  title: string;
  note?: string;
  items: { value: string; text: string }[];
}) {
  return (
    <div className="cs-card">
      <h3>{title}</h3>
      {note && (
        <p className="lab muted" style={{ marginBottom: 6 }}>
          {note}
        </p>
      )}
      <ul className="cs-ins">
        {items.map((i) => (
          <li key={i.value + i.text}>
            <b>{i.value}</b>
            <span>{i.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Frame({
  src,
  alt,
  width,
  height,
  caption,
  color,
  rotate,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: ReactNode;
  /** CSS colour for the outline; defaults to the project accent */
  color?: string;
  rotate?: string;
}) {
  return (
    <figure className="cs-frame" style={{ "--fc": color, "--rot": rotate } as CSSProperties}>
      <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1000px) 900px, 92vw" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

export function Steps({ items }: { items: { title: string; body: ReactNode }[] }) {
  return (
    <div className="cs-steps" style={{ "--cols": items.length } as CSSProperties}>
      {items.map((s, i) => (
        <div className="cs-step" key={s.title}>
          <span className="lab">{String(i + 1).padStart(2, "0")}</span>
          <h3 className="d">{s.title}</h3>
          <p>{s.body}</p>
        </div>
      ))}
    </div>
  );
}

export function Learnings({ items }: { items: ReactNode[] }) {
  return (
    <ol className="cs-learn">
      {items.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ol>
  );
}

/** Information-architecture tree: a root, then one column per top-level section. */
export function Tree({ root, columns }: { root: string; columns: { head: string; items: string[] }[] }) {
  return (
    <div className="cs-tree">
      <span className="cs-tree-root lab">{root}</span>
      <div className="cs-tree-cols" style={{ "--cols": columns.length } as CSSProperties}>
        {columns.map((c) => (
          <div key={c.head}>
            <span className="cs-tree-head">{c.head}</span>
            <ul>
              {c.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Swatches({ items }: { items: { name: string; hex: string }[] }) {
  return (
    <div className="cs-swatches">
      {items.map((s) => (
        <div key={s.hex + s.name}>
          <i style={{ background: s.hex }} />
          <b>{s.name}</b>
          <span>{s.hex}</span>
        </div>
      ))}
    </div>
  );
}

/** Small survey card: a question with a bar per answer. */
export function Poll({ question, answers }: { question: string; answers: { label: string; value: number }[] }) {
  const max = Math.max(...answers.map((a) => a.value));
  return (
    <div className="cs-card cs-poll">
      <h3>{question}</h3>
      {answers.map((a) => (
        <div key={a.label} className="cs-poll-row">
          <div>
            <span>{a.label}</span>
            <b>{a.value}%</b>
          </div>
          <i style={{ "--w": `${(a.value / max) * 100}%` } as CSSProperties} />
        </div>
      ))}
    </div>
  );
}
