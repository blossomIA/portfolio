import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";
import { ChevronLeft, MousePointerClick } from "lucide-react";
import { CaseStudy, Chapter } from "@/components/case-study/CaseStudy";
import "@/styles/cs-fetch.css";

export const metadata: Metadata = {
  title: "Fetch",
  description:
    "A smarter way to deliver and negotiate, a case study of a user-driven delivery platform where customers and agents negotiate prices in real time.",
};

// The app's typeface, shown only in the typography specimen.
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"], display: "swap" });

const img = (f: string) => `/images/case-studies/fetch/${f}.webp`;

const RESPONSIBILITIES = [
  "Product Design (UI/UX)",
  "User Research & Competitive Analysis",
  "Wireframing, Prototyping & High-Fidelity Design",
];

/** the design-process bubbles: Research & Insights in the middle, the other stages around it */
const STAGES = [
  { label: "Wireframing & UX Strategy", pos: "a" },
  { label: "UI Design & Visual Direction", pos: "b" },
  { label: "Ideation & Sketching", pos: "c" },
  { label: "Prototyping & User Testing", pos: "d" },
];

const SCREENS: { title?: string; body: string; shots: [file: string, alt: string][] }[] = [
  {
    title: "Request a Delivery",
    body: "Users view the delivery options given and select their preferred service.",
    shots: [["send-1", "Send item: map and vehicle options"], ["send-2", "Send item: service menu open"], ["send-3", "Send item: Receive item selected"]],
  },
  {
    body: "Users select their preferred vehicle type, delivery details and set their initial price.",
    shots: [["receive-1", "Receive item: motorbike selected"], ["receive-2", "Set delivery route with keyboard"], ["receive-3", "Offer your fee"]],
  },
  {
    title: "Real-Time Negotiation & Live Tracking",
    body: "Agents bid on deliveries and users review offers. Counter-offers enable dynamic pricing discussions. Live tracking builds trust and ensures a smooth and reliable experience.",
    shots: [["negotiate-1", "Offer your fee: payment method"], ["negotiate-2", "Delivery: incoming offers from agents"], ["negotiate-3", "Tracking delivery: live map and progress"]],
  },
];

const COLORS = [
  { hex: "#E8590C", ink: "#FFFFFF" },
  { hex: "#FFFFFF", ink: "#0A0A0A" },
  { hex: "#8F8F8F", ink: "#0A0A0A" },
  { hex: "#4CAF50", ink: "#0A0A0A" },
  { hex: "#1E1E1E", ink: "#FFFFFF" },
];

export default function FetchPage() {
  return (
    <CaseStudy
      slug="fetch"
      aInk="#FF8A45"
      aSoft="#26190F"
      chapters={[
        { id: "about", label: "About" },
        { id: "role", label: "Role" },
        { id: "problem", label: "Problem" },
        { id: "process", label: "Process" },
        { id: "system", label: "Type & colour" },
        { id: "screens", label: "Screens" },
        { id: "mockups", label: "Mock ups" },
      ]}
      hero={
        <header className="fx-hero">
          <div className="wrap fx-hero-in">
            <Link className="fx-back lab" href="/projects">
              <ChevronLeft size={14} aria-hidden /> All projects
            </Link>
            <div className="fx-hero-copy">
              <span className="lab fx-year">2025 · Logistics</span>
              <h1 className="fx-word">Fetch</h1>
              <p className="fx-kicker">A Smarter Way to Deliver &amp; Negotiate</p>
              <ul className="fx-tools" aria-label="Tools">
                <li>Illustrator</li>
                <li>Figma</li>
              </ul>
            </div>
            <Image
              className="fx-hero-art"
              src={img("hero")}
              alt="Fetch splash and onboarding screens on two phones"
              width={2000}
              height={1422}
              priority
              sizes="(min-width: 900px) 620px, 92vw"
            />
          </div>
        </header>
      }
    >
      <Chapter id="about" no="01" title="About">
        <div className="fx-about">
          <p>
            Fetch is a dynamic, user-driven delivery platform that allows customers and delivery agents to negotiate
            prices in real time, designed specifically for courier and delivery services. Whether you need to send a
            package across town or deliver an urgent document, Fetch lets you set your price and choose from competing
            offers from nearby agents.
          </p>
          <p>
            By giving users and agents control over pricing, Fetch creates a fair, transparent, and cost-effective
            delivery experience for both sides.
          </p>
        </div>
        <div className="fx-panel fx-trio">
          <Image
            src={img("about-splash")}
            alt="Splash: Fetch, on time every time"
            width={1031}
            height={1948}
            sizes="(min-width: 700px) 190px, 30vw"
          />
          <Image
            src={img("about-onboarding")}
            alt="Onboarding: Ready for your first order?"
            width={936}
            height={2000}
            sizes="(min-width: 700px) 190px, 30vw"
          />
          <Image
            src={img("about-tracking")}
            alt="Tracking delivery: live map with the driver's details"
            width={1031}
            height={1944}
            sizes="(min-width: 700px) 190px, 30vw"
          />
        </div>
      </Chapter>

      <Chapter id="role" no="02" title="Role & responsibilities">
        <ul className="fx-panel fx-roles">
          {RESPONSIBILITIES.map((r) => (
            <li key={r}>
              <MousePointerClick size={20} aria-hidden />
              {r}
            </li>
          ))}
        </ul>
      </Chapter>

      <Chapter id="problem" no="03" title="Problem & solution">
        <div className="fx-ps">
          <div className="fx-card">
            <div>
              <h3>Problem Statement</h3>
              <p>
                Traditional delivery platforms use fixed pricing models, resulting in high costs from surge pricing,
                limited control over payments for users and agents, and a lack of transparency in the delivery process.
              </p>
            </div>
            <Image className="fx-illo" src={img("questions")} alt="" width={854} height={602} sizes="160px" />
          </div>
          <div className="fx-card fx-card-flip">
            <Image
              className="fx-illo"
              src={img("vehicles")}
              alt=""
              width={940}
              height={660}
              sizes="200px"
            />
            <div>
              <h3>Fetch&apos;s Solution</h3>
              <p>
                Fetch offers a flexible price negotiation system, empowering users to find the best delivery rates while
                allowing agents to choose the most profitable jobs. It ensures negotiable terms and transparency in the
                delivery process.
              </p>
            </div>
          </div>
        </div>
      </Chapter>

      <Chapter
        id="process"
        no="04"
        title="Design process"
        intro="The design process for Fetch focused on creating a seamless bargain-based delivery experience with flexible pricing and transparency. An intuitive bidding system, clean UI, and user-friendly interactions ensure smooth negotiations, easy navigation, and reliable deliveries."
      >
        <div className="fx-panel">
          <ol className="fx-bubbles" aria-label="Design process stages">
            <li className="fx-core">Research &amp; Insights</li>
            {STAGES.map((s) => (
              <li key={s.label} className={`fx-sat fx-sat-${s.pos}`}>
                {s.label}
              </li>
            ))}
          </ol>
        </div>
      </Chapter>

      <Chapter id="system" no="05" title="Typography and colour">
        <div className="fx-panel fx-system">
          <div className="fx-colour">
            <h3 className="fx-sys-h">Colour</h3>
            <div className="fx-colors">
              {COLORS.map((c, i) => (
                <div key={c.hex} className={i === 0 ? "big" : undefined} style={{ background: c.hex, color: c.ink }}>
                  {c.hex}
                </div>
              ))}
            </div>
          </div>
          <Image
            className="fx-char"
            src={img("courier")}
            alt="Fetch courier character holding boxes"
            width={893}
            height={1892}
            sizes="160px"
          />
          <div className="fx-typo">
            <h3 className="fx-sys-h">Typography</h3>
            <div className={`fx-type ${poppins.className}`}>
              <div className="glyphs" aria-hidden>
                <span>Aa Bb Cc</span>
                <Image className="fx-box" src={img("box")} alt="" width={290} height={168} sizes="64px" />
              </div>
              <div>
                <p className="name">Poppins</p>
                <p className="weights">
                  <span style={{ fontWeight: 400 }}>Regular</span>
                  <span style={{ fontWeight: 500 }}>Medium</span>
                  <span style={{ fontWeight: 600 }}>Semi-bold</span>
                  <span style={{ fontWeight: 700 }}>Bold</span>
                </p>
              </div>
              <Image className="fx-type-art" src={img("vehicles-phone")} alt="" width={430} height={304} sizes="110px" />
            </div>
          </div>
        </div>
      </Chapter>

      <Chapter id="screens" no="06" title="Key screens & features">
        {SCREENS.map((s) => (
          <div className="fx-flow" key={s.body}>
            {s.title && <h3>{s.title}</h3>}
            <p>{s.body}</p>
            <div className="fx-shots">
              {s.shots.map(([f, alt]) => (
                <Image key={f} src={img(f)} alt={alt} width={947} height={2000} sizes="(min-width: 700px) 200px, 30vw" />
              ))}
            </div>
          </div>
        ))}
      </Chapter>

      <Chapter id="mockups" no="07" title="Mock ups">
        <div className="fx-panel fx-mocks">
          {[
            ["mock-splash", "Splash: Fetch, on time every time"],
            ["mock-onboarding", "Onboarding: Ready for your first order?"],
            ["mock-send", "Send item: map and vehicle options"],
            ["mock-offers", "Delivery: incoming offers"],
            ["mock-tracking", "Tracking delivery"],
          ].map(([f, alt]) => (
            <Image key={f} src={img(f)} alt={alt} width={983} height={2000} sizes="(min-width: 700px) 200px, 45vw" />
          ))}
        </div>
      </Chapter>
    </CaseStudy>
  );
}
