import { Container } from "@/components/Container";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

type StickyNote = {
  heading: string;
  items: string[];
  paper: string;
  tape: string;
  rotate: string;
};

const notes: StickyNote[] = [
  {
    heading: "Research",
    items: [
      "User Interviews",
      "Competitive Analysis",
      "Journey Mapping",
      "Personas",
      "Usability Testing",
    ],
    paper: "bg-[#fff7d6]",
    tape: "bg-accent-pink",
    rotate: "-rotate-[1.2deg]",
  },
  {
    heading: "UX",
    items: [
      "Information Architecture",
      "User Flows",
      "Wireframing",
      "Accessibility Audits",
    ],
    paper: "bg-[#efe3ff]",
    tape: "bg-accent-purple",
    rotate: "rotate-[1.4deg]",
  },
  {
    heading: "UI",
    items: [
      "Visual Design",
      "Design Systems",
      "Responsive Design",
      "Prototyping",
      "Motion Design",
    ],
    paper: "bg-[#e5edff]",
    tape: "bg-accent-purple",
    rotate: "-rotate-[0.6deg]",
  },
  {
    heading: "Tools",
    items: [
      "Figma",
      "FigJam",
      "Framer",
      "Miro",
      "Notion",
      "Slack",
      "Claude",
      "Adobe Creative Suite",
    ],
    paper: "bg-[#ffe3ec]",
    tape: "bg-accent-pink",
    rotate: "rotate-[1deg]",
  },
];

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="rule-top pt-[129px] pb-[128px]"
    >
      <Container>
        <SectionLabel number="04" label="Capabilities" />
        <h2 className="mt-5 text-[34px] sm:text-[44px] md:text-[56px] font-medium leading-[1.05] tracking-h2 text-ink">
          How I turn chaos into clarity
        </h2>

        <div className="mt-20 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {notes.map((n, i) => (
            <Reveal key={n.heading} delay={i * 0.06} className="relative pt-6">
              <div
                className={`relative ${n.paper} ${n.rotate} rounded-[6px] px-6 pt-8 pb-8 shadow-[0_18px_36px_-14px_rgba(0,0,0,0.18)]`}
              >
                {/* Tape */}
                <span
                  aria-hidden
                  className={`absolute -top-4 left-1/2 h-6 w-16 -translate-x-1/2 ${n.tape} rounded-[3px] opacity-80`}
                />
                <h3 className="font-mono text-[11px] uppercase leading-[16.5px] tracking-[1.76px] text-ink">
                  {n.heading}
                </h3>
                <ul className="mt-5 space-y-3">
                  {n.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span
                        aria-hidden
                        className="mt-[7px] size-1.5 shrink-0 rounded-full bg-accent-purple"
                      />
                      <span className="text-[14px] leading-5 tracking-button text-ink/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
