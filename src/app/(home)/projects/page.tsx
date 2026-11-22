import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { projects } from "@/lib/projects";
import { WorkStack } from "@/components/work/WorkStack";

export const metadata: Metadata = pageMeta({ title: "Projects", description: "Case studies and explorations. Each project is a complete story, shaped by real user problems and rigorous process.", path: "/projects" });

export default function ProjectsPage() {
  return (
    <section className="sec projects-page" aria-labelledby="projects-title">
      <div className="wrap">
        <header className="projects-head">
          <h1 id="projects-title" className="hero-name">
            Projects <span>{String(projects.length).padStart(2, "0")}</span>
          </h1>
          <p className="hero-line">
            Not a UI showcase. <b>Product stories</b>, each shaped by{" "}
            <b>real user problems</b> and rigorous process.
          </p>
        </header>
        <WorkStack items={projects} />
      </div>
    </section>
  );
}
