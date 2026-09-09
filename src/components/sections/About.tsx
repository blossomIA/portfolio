import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionLabel } from "@/components/SectionLabel";

const stats = [
  { value: "3+", label: "Years designing products" },
  { value: "12+", label: "Products shipped" },
  { value: "3", label: "Industries worked across" },
  { value: "∞", label: "Questions asked before Figma" },
] as const;

export function About() {
  return (
    <section
      id="about"
      className="border-t border-border-soft pt-[117px] pb-[128px]"
    >
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          <div className="max-w-[463px]">
            <SectionLabel number="02" label="About" />
            <h2 className="mt-5 text-[34px] sm:text-[44px] font-medium leading-[1.1] tracking-h2 text-ink">
              The Human behind it all.
            </h2>
            <div className="mt-10 space-y-5 text-[15px] leading-[1.78] tracking-body text-muted">
              <p>
                I transitioned into product design because I couldn&apos;t stop
                asking why and what if. Why this button. What if this moved the
                other way. Why does using this app feel boring?
              </p>
              <p>
                GoMyCode gave me the vocabulary. Real products gave me
                everything else. Since then I&apos;ve worked across startups,
                agencies, and product teams, on fintech, edtech, and consumer
                tech. What I&apos;ve learned is that the most important design
                decisions happen in research sessions and whiteboard
                conversations, not in design tools.
              </p>
              <p>
                I believe good design is invisible. It doesn&apos;t announce
                itself. It just works, clearly, calmly, without drama. I ask
                uncomfortable questions before drawing comfortable interfaces
                and interesting solutions.
              </p>
            </div>
            <blockquote className="mt-8 border-l-2 border-accent-purple pl-5 py-1 text-[15px] italic leading-[1.78] tracking-body text-ink-65">
              &ldquo;Beautiful experiences should not just look good, they
              should work effortlessly.&rdquo;
            </blockquote>
          </div>

          <div className="max-w-[463px]">
            <div className="overflow-hidden rounded-card bg-surface">
              <Image
                src="/images/about-workspace.png"
                alt="Amarachi's workspace, laptop and notebooks on a clean desk"
                width={927}
                height={696}
                className="h-auto w-full object-cover"
                sizes="(min-width: 768px) 463px, 100vw"
              />
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-stat border border-border-soft bg-white p-[21px]"
                >
                  <p className="text-[32px] font-medium leading-[32px] tracking-h2 text-ink">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[12px] leading-[16.5px] text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
