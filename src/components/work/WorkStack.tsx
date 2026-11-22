import Image from "next/image";
import Link from "next/link";
import { projects, type Project } from "@/lib/projects";

/**
 * Project cards that stack over each other as you scroll (CSS sticky only).
 * Numbers follow the project's place in the full list, so they match the
 * case-study pages wherever the stack is shown.
 */
export function WorkStack({ items }: { items: Project[] }) {
  return (
    <div className="works">
      {items.map((p, i) => (
        <Link
          key={p.slug}
          href={p.href}
          className="work"
          style={{ "--dot": p.theme.accent, "--i": i } as React.CSSProperties}
        >
          <div className="work-head">
            <span className="work-no">
              {String(projects.indexOf(p) + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="work-title">{p.title}</h3>
              {p.blurb && <p className="work-blurb">{p.blurb}</p>}
            </div>
            <div className="work-meta">
              <span className="work-kind">{p.kind}</span>
              <span className="work-tags">{p.tags.join(" · ")}</span>
            </div>
          </div>
          <figure className="work-shot">
            <Image src={p.image} alt={`${p.name} app screens`} fill sizes="(min-width: 900px) 620px, 92vw" />
            <span className="work-open">{p.cta}</span>
          </figure>
        </Link>
      ))}
    </div>
  );
}
