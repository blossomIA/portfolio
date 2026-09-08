import { Container } from "@/components/Container";
import { SectionLabel } from "@/components/SectionLabel";

type Role = {
  year: string;
  kind: string;
  title: string;
  org: string;
  body: string;
};

const roles: Role[] = [
  {
    year: "2026",
    kind: "Full-time",
    title: "Product Designer",
    org: "Seashell Labs / LinkBridge Consulting",
    body: "Led creation of a company-wide design system serving three product squads. Established component contracts, token architecture, and documentation standards, becoming the single source of truth across design and engineering.",
  },
  {
    year: "2025",
    kind: "Full-time",
    title: "Product Designer",
    org: "Meerge / Megadel Africa",
    body: "Redesigned core supplier discovery and onboarding flows for a pan-African B2B platform. Worked closely with PMs and engineers to reduce friction in the user journey, driving measurable improvements in activation and engagement.",
  },
  {
    year: "2024",
    kind: "Freelance",
    title: "Product Design Intern",
    org: "Astro Design",
    body: "Delivered UX strategy, user research, wireframes, and high-fidelity UI for early-stage startups across fintech, edtech and e-commerce. Developed a discipline of asking difficult questions before opening any design tool.",
  },
  {
    year: "2023",
    kind: "Training",
    title: "Product Design",
    org: "GoMyCode",
    body: "Completed intensive product design training with a focus on UX fundamentals, design thinking, and Figma. Graduated with a capstone that secured a first professional contract within two months.",
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-border-soft pt-[129px] pb-[128px]"
    >
      <Container>
        <SectionLabel number="03" label="Experience" />
        <h2 className="mt-5 text-[48px] font-medium leading-[1] tracking-h2 text-ink">
          A continuous thread.
        </h2>

        <div className="mt-16 divide-y divide-border-soft">
          {roles.map((r) => (
            <div
              key={`${r.year}-${r.org}`}
              className="grid grid-cols-1 gap-4 py-10 md:grid-cols-[148px_1fr] md:gap-0"
            >
              <div className="md:pr-10 md:text-right">
                <p className="font-mono text-[12px] leading-4 text-muted">
                  {r.year}
                </p>
                <p className="mt-0.5 font-mono text-[10px] leading-[15px] text-muted/50">
                  {r.kind}
                </p>
              </div>
              <div className="md:pl-10">
                <p className="text-[16px] leading-6 tracking-[-0.3125px] text-ink">
                  <span className="font-medium">{r.title}</span>
                  <span className="mx-3 text-muted/40">·</span>
                  <span className="text-[14px] text-muted">{r.org}</span>
                </p>
                <p className="mt-1.5 text-[14px] leading-[1.75] tracking-button text-muted">
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
