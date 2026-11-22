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
          &ldquo;I promise I didn&apos;t just watch YouTube videos ;) Each project
          is a complete story. Not a UI showcase, a product story, each shaped
          by real user problems and rigorous process.&rdquo;
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
