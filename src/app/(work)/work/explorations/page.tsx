import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { CaseStudy, Chapter } from "@/components/case-study/CaseStudy";
import { Reel, type Slide } from "./_parts";

export const metadata: Metadata = pageMeta({ title: "Explorations", description: "A rotating reel of product shots, components, flows, and motion explorations from client work and personal experiments.", path: "/work/explorations" });

const img = (f: string) => `/images/carousel/${f}`;

const slides: Slide[] = [
  { key: "food", category: "Product", kind: "Detail", title: "Grilled Chicken Wrap", src: img("food.png"), width: 687, height: 1469, orientation: "mobile" },
  { key: "face-id", category: "Component", kind: "Motion", title: "Face Verification", src: img("face-id.png"), width: 860, height: 1864, orientation: "mobile" },
  { key: "music", category: "Illustration", kind: "Now Playing", title: "Music Player", src: img("music.png"), width: 860, height: 1864, orientation: "mobile" },
  { key: "pricing", category: "Onboarding", kind: "Flow", title: "Pricing Plans", src: img("pricing.png"), width: 949, height: 651, orientation: "wide" },
  { key: "dark-card", category: "Marketing", kind: "Metrics", title: "Built To Feel Real", src: img("dark-card.png"), width: 960, height: 540, orientation: "wide" },
  { key: "donut", category: "Marketing", kind: "Hero", title: "Susie's Donut", src: img("donut.png"), width: 2880, height: 2048, orientation: "wide",
    embed: "https://embed.figma.com/proto/gGQLHN3WXK62HnHMla7ehP/Donut-Prototype?node-id=4-12&starting-point-node-id=4-12&page-id=0%3A1&scaling=min-zoom&content-scaling=fixed&embed-host=share&hide-ui=1&footer=false&viewport-controls=false&hotspot-hints=0&theme=dark",
  },
];

export default function Explorations() {
  return (
    <CaseStudy
      slug="explorations"
      aInk="#67D8E8"
      aSoft="#142124"
      chapters={[{ id: "reel", label: "Reel" }]}
      hero={
        <header className="ex-hero">
          <div className="wrap ex-hero-in">
            <Link className="ex-back lab" href="/projects">
              <ChevronLeft size={14} aria-hidden /> All projects
            </Link>
            <div className="ex-hero-copy">
              <span className="lab ex-year">Ongoing · Side projects</span>
              <h1 className="ex-word">Explorations</h1>
              <p className="ex-kicker">Interactions, in motion.</p>
              <p className="ex-sub">
                A rotating reel of product shots, components, flows, and motion explorations from client work and
                personal experiments.
              </p>
              <ul className="ex-tools" aria-label="Tools">
                <li>Figma</li>
                <li>Prototyping</li>
                <li>Motion</li>
              </ul>
            </div>
            <div className="ex-hero-art" aria-hidden>
              <Image className="ex-art-wide" src={img("donut.png")} alt="" width={2880} height={2048} priority sizes="(min-width: 900px) 560px, 80vw" />
              <Image className="ex-art-phone" src={img("music.png")} alt="" width={860} height={1864} priority sizes="(min-width: 900px) 170px, 30vw" />
            </div>
          </div>
        </header>
      }
    >
      <Chapter id="reel" no="01" title="Explorations · Side projects" wide={<Reel slides={slides} />} />
    </CaseStudy>
  );
}
