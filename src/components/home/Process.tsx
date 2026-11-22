import { Section } from "@/components/site/Section";

const notes = [
  {
    title: "Research",
    paper: "#fff3b8",
    tape: "rgba(244, 114, 182, 0.55)",
    rot: "-2.5deg",
    items: ["User Interviews", "Competitive Analysis", "Journey Mapping", "Personas", "Usability Testing"],
  },
  {
    title: "UX",
    paper: "#ffd6e7",
    tape: "rgba(103, 216, 232, 0.6)",
    rot: "1.8deg",
    items: ["Information Architecture", "User Flows", "Wireframing", "Accessibility Audits"],
  },
  {
    title: "UI",
    paper: "#e4d9ff",
    tape: "rgba(255, 243, 184, 0.75)",
    rot: "-1deg",
    items: ["Visual Design", "Design Systems", "Responsive Design", "Prototyping", "Motion Design"],
  },
  {
    title: "Tools",
    paper: "#d4f1f6",
    tape: "rgba(183, 148, 246, 0.6)",
    rot: "2.4deg",
    items: ["Figma · FigJam", "Framer · Miro", "Notion · Slack", "Claude", "Adobe Creative Suite"],
  },
];

export function Process() {
  return (
    <Section id="process" title="How I turn chaos into clarity" desc="The methods and tools behind the work.">
      <div className="notes">
        {notes.map((n) => (
          <div
            key={n.title}
            className="note"
            style={{ "--paper": n.paper, "--tape": n.tape, "--tilt": n.rot } as React.CSSProperties}
          >
            <h3>{n.title}</h3>
            <ul>
              {n.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
