import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { CaseHero, CaseStudy, Chapter } from "@/components/case-study/CaseStudy";
import { Reel, type Slide } from "./_parts";

export const metadata: Metadata = pageMeta({ title: "Explorations", description: "A rotating reel of product shots, components, flows, and motion explorations from client work and personal experiments.", path: "/work/explorations" });

const img = (f: string) => `/images/carousel/${f}`;

const slides: Slide[] = [
  { key: "food", category: "Product", kind: "Detail", title: "Grilled Chicken Wrap", src: img("food.png"), width: 687, height: 1469, orientation: "mobile" },
  { key: "face-id", category: "Component", kind: "Motion", title: "Face Verification", src: img("face-id.png"), width: 860, height: 1864, orientation: "mobile" },
  { key: "music", category: "Illustration", kind: "Now Playing", title: "Music Player", src: img("music.png"), width: 860, height: 1864, orientation: "mobile" },
  { key: "pricing", category: "Onboarding", kind: "Flow", title: "Pricing Plans", src: img("pricing.png"), width: 949, height: 651, orientation: "wide" },
  { key: "dark-card", category: "Marketing", kind: "Metrics", title: "Built To Feel Real", src: img("dark-card.png"), width: 960, height: 540, orientation: "wide" },
  { key: "donut", category: "Marketing", kind: "Hero", title: "Susie's Donut", src: img("donut.png"), width: 2880, height: 2048, orientation: "wide" },
];

export default function Explorations() {
  return (
    <CaseStudy
      slug="explorations"
      aInk="#67D8E8"
      aSoft="#142124"
      chapters={[{ id: "reel", label: "Reel" }]}
      hero={
        <CaseHero
          slug="explorations"
          title="Interactions,"
          accentWord="in motion."
          subtitle="A rotating reel of product shots, components, flows, and motion explorations from client work and personal experiments."
        />
      }
    >
      <Chapter id="reel" no="01" title="Explorations · Side projects" wide={<Reel slides={slides} />} />
    </CaseStudy>
  );
}
