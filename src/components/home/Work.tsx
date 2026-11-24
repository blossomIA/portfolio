import Link from "next/link";
import { projects } from "@/lib/projects";
import { Section } from "@/components/site/Section";
import { WorkStack } from "@/components/work/WorkStack";

/** The two featured case studies; the rest live on /projects. */
const featured = ["token-nest", "baby-haven"];

export function Work() {
  const items = projects.filter((p) => featured.includes(p.slug));
  return (
    <Section
      id="work"
      title="Selected work"
      desc={
        <>
          No tutorial copies here, promise. Each project is a full product
          story, not a UI showcase: real user problems, real research, and the
          decisions that got it shipped. 🚀
        </>
      }
      aside={
        <Link className="btn btn-line" href="/projects">
          All projects ({projects.length})
        </Link>
      }
    >
      <WorkStack items={items} />
    </Section>
  );
}
