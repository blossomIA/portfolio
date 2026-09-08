import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CaseStudyNav } from "@/components/CaseStudyNav";
import { Reveal } from "@/components/Reveal";
import { Sparkles, ArrowUpRight, ArrowLeft } from "lucide-react";

const FETCH_ORANGE = "#E8590C";
const FETCH_PEACH = "#FCE4CE";

export const metadata: Metadata = {
  title: "Fetch, Amarachi Blossom",
  description:
    "A smarter way to deliver and negotiate, a case study of a user-driven delivery platform where customers and agents negotiate prices in real time.",
};

const NAV_SECTIONS = [
  { id: "about", label: "About" },
  { id: "problem", label: "Problem" },
  { id: "process", label: "Process" },
  { id: "system", label: "System" },
  { id: "screens", label: "Screens" },
  { id: "mockups", label: "Mock Ups" },
];

const RESPONSIBILITIES = [
  "Product Design (UI/UX)",
  "User Research & Competitive Analysis",
  "Wireframing, Prototyping & High-Fidelity Design",
];

const PROCESS_STEPS = [
  { label: "Wireframing & UX Strategy", bg: "bg-[#b7a89b]", size: 168, color: "text-white" },
  { label: "Research & Insights", bg: "bg-[#E8590C]", size: 240, color: "text-white", featured: true },
  { label: "UI Design & Visual Direction", bg: "bg-white", size: 158, color: "text-ink" },
  { label: "Prototyping & User Testing", bg: "bg-[#b7a89b]", size: 158, color: "text-white" },
  { label: "Ideation & Sketching", bg: "bg-white", size: 168, color: "text-ink" },
];

const PALETTE = [
  { hex: "#E8590C", label: "#E8590C", bg: "bg-[#E8590C]", text: "text-white", big: true },
  { hex: "#FFFFFF", label: "#FFFFFF", bg: "bg-white border border-black/10", text: "text-ink" },
  { hex: "#8F8F8F", label: "#8F8F8F", bg: "bg-[#8F8F8F]", text: "text-white" },
  { hex: "#4CAF50", label: "#4CAF50", bg: "bg-[#4CAF50]", text: "text-white" },
  { hex: "#1E1E1E", label: "#1E1E1E", bg: "bg-[#1E1E1E]", text: "text-white" },
];

export default function FetchPage() {
  return (
    <>
      <CaseStudyNav brand="Fetch, case study" sections={NAV_SECTIONS} />

      {/* HERO */}
      <section id="about" className="relative">
        <Image
          src="/images/case-studies/fetch/hero.png"
          alt="Fetch, A Smarter Way to Deliver & Negotiate"
          width={2880}
          height={1750}
          className="block h-auto w-full"
          priority
          unoptimized
        />
      </section>

      {/* Description */}
      <section className="bg-[#f6f9fb]">
        <Container>
          <div className="py-20 max-w-[900px] mx-auto">
            <p className="text-[17px] leading-[1.85] text-ink">
              Fetch is a dynamic, user-driven delivery platform that allows
              customers and delivery agents to negotiate prices in real time
              designed specifically for courier and delivery services. Whether
              you need to send a package across town or deliver an urgent
              document, Fetch lets you set your price and choose from competing
              offers from nearby agents.
            </p>
            <p className="mt-6 text-[17px] leading-[1.85] text-ink">
              By giving users and agents control over pricing, Fetch creates a
              fair, transparent, and cost-effective delivery experience for
              both sides.
            </p>
          </div>
        </Container>
      </section>

      {/* Role & Responsibilities */}
      <section className="bg-white">
        <Container>
          <div className="py-16">
            <h2 className="text-center font-display text-[22px] font-medium text-ink">
              Role &amp; Responsibilities
            </h2>
          </div>
        </Container>
        <div className={`bg-[${FETCH_PEACH}]`} style={{ background: FETCH_PEACH }}>
          <Container>
            <ul className="py-16 space-y-8 max-w-[860px] mx-auto">
              {RESPONSIBILITIES.map((r) => (
                <li key={r} className="flex items-center gap-6">
                  <Sparkles
                    className="size-8 shrink-0"
                    strokeWidth={1.8}
                    style={{ color: FETCH_ORANGE }}
                  />
                  <span className="text-[20px] leading-[1.4] text-ink">{r}</span>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem" className="bg-white pt-16">
        <Container>
          <div className="mx-auto max-w-[900px] rounded-[16px] border border-black/10 bg-white p-10">
            <h3 className="text-[24px] font-medium" style={{ color: FETCH_ORANGE }}>
              Problem Statement
            </h3>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-center">
              <p className="text-[15px] leading-[1.75] text-ink/80">
                Traditional delivery platforms use fixed pricing models,
                resulting in high costs from surge pricing, limited control
                over payments for users and agents, and a lack of transparency
                in the delivery process.
              </p>
              <div
                aria-hidden
                className="flex items-end gap-2 justify-end"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                <span className="text-[80px] font-black leading-none text-[#4CAF50]">?</span>
                <span className="text-[110px] font-black leading-none" style={{ color: FETCH_ORANGE }}>?</span>
                <span className="text-[70px] font-black leading-none text-[#E8A672]">?</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Fetch's Solution */}
      <section className="bg-white pt-8 pb-16">
        <Container>
          <div className="mx-auto max-w-[900px] rounded-[16px] border border-black/10 bg-white p-10">
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-center">
              <div
                aria-hidden
                className="flex items-end justify-center h-24 w-24 md:h-32 md:w-32"
              >
                {/* small courier / package illustration */}
                <div className="relative">
                  <div className="size-16 rounded-full bg-[#E8590C]/20" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 text-3xl">🛵</div>
                </div>
              </div>
              <div>
                <h3 className="text-[24px] font-medium" style={{ color: FETCH_ORANGE }}>
                  Fetch&apos;s Solution
                </h3>
                <p className="mt-6 text-[15px] leading-[1.75] text-ink/80">
                  Fetch offers a flexible price negotiation system, empowering
                  users to find the best delivery rates while allowing agents
                  to choose the most profitable jobs. It ensures negotiable
                  terms and transparency in the delivery process.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Design Process */}
      <section id="process" className="bg-white">
        <Container>
          <div className="py-12 text-center">
            <h2 className="font-display text-[22px] font-medium text-ink">
              Design Process
            </h2>
          </div>
        </Container>
        <div style={{ background: FETCH_PEACH }}>
          <Container>
            <div className="py-16 mx-auto max-w-[1000px]">
              <p className="text-[16px] leading-[1.75] text-ink text-center max-w-[880px] mx-auto">
                The design process for Fetch focused on creating a seamless
                bargain-based delivery experience with flexible pricing and
                transparency. An intuitive bidding system, clean UI, and
                user-friendly interactions ensure smooth negotiations, easy
                navigation, and reliable deliveries.
              </p>

              <div className="relative mt-16 flex items-center justify-center min-h-[440px]">
                {/* Circle diagram */}
                {/* Central Research & Insights (big orange) */}
                <div className="relative flex items-center justify-center">
                  <div
                    className="flex items-center justify-center rounded-full text-center text-white font-medium"
                    style={{ background: FETCH_ORANGE, width: 260, height: 260 }}
                  >
                    <span className="text-[22px] leading-[1.15]">
                      Research
                      <br />&amp;
                      <br />Insights
                    </span>
                  </div>

                  {/* Wireframing top-left */}
                  <div
                    className="absolute -left-[220px] -top-[10px] flex items-center justify-center rounded-full bg-[#b7a89b] text-white text-center text-[13px] leading-[1.15] p-6"
                    style={{ width: 160, height: 160 }}
                  >
                    Wireframing
                    <br />&amp;
                    <br />UX Strategy
                  </div>
                  {/* UI Design top-right */}
                  <div
                    className="absolute -right-[220px] -top-[10px] flex items-center justify-center rounded-full bg-white border border-black/10 text-ink text-center text-[13px] leading-[1.15] p-6"
                    style={{ width: 160, height: 160 }}
                  >
                    UI Design
                    <br />&amp;
                    <br />Visual Direction
                  </div>
                  {/* Prototyping bottom-left */}
                  <div
                    className="absolute -left-[210px] top-[190px] flex items-center justify-center rounded-full bg-[#b7a89b] text-white text-center text-[13px] leading-[1.15] p-6"
                    style={{ width: 150, height: 150 }}
                  >
                    Prototyping
                    <br />&amp;
                    <br />User Testing
                  </div>
                  {/* Ideation bottom-right */}
                  <div
                    className="absolute -right-[210px] top-[190px] flex items-center justify-center rounded-full bg-white border border-black/10 text-ink text-center text-[13px] leading-[1.15] p-6"
                    style={{ width: 150, height: 150 }}
                  >
                    Ideation
                    <br />&amp;
                    <br />Sketching
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Typography & Colour */}
      <section id="system" className="bg-white">
        <Container>
          <div className="py-12 text-center">
            <h2 className="font-display text-[22px] font-medium text-ink">
              Typography and Colour
            </h2>
          </div>
        </Container>

        <div style={{ background: FETCH_PEACH }}>
          <Container>
            <div className="py-20">
              {/* Colour */}
              <div className="flex items-center gap-4">
                <span className="block h-8 w-1" style={{ background: FETCH_ORANGE }} />
                <h3 className="text-[24px] font-medium text-ink">Colour</h3>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-center">
                {/* Palette */}
                <div>
                  <div className="grid grid-cols-3 gap-4 max-w-[560px]">
                    {/* Big orange spans row 1 col 1 & row 2 col 1 */}
                    <div
                      className={`${PALETTE[0].bg} ${PALETTE[0].text} col-span-1 row-span-2 rounded-md p-6 flex items-center justify-center text-[16px] font-medium`}
                      style={{ minHeight: 250 }}
                    >
                      {PALETTE[0].label}
                    </div>
                    {PALETTE.slice(1).map((c) => (
                      <div
                        key={c.label}
                        className={`${c.bg} ${c.text} rounded-md p-6 flex items-center justify-center text-[15px] font-medium`}
                        style={{ minHeight: 115 }}
                      >
                        {c.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Character illustration placeholder */}
                <div className="flex items-end justify-center">
                  <div
                    className="relative flex items-end justify-center overflow-hidden"
                    style={{ height: 280 }}
                  >
                    <Image
                      src="/images/case-studies/fetch/character.png"
                      alt="Fetch courier character"
                      width={1000}
                      height={1800}
                      className="h-full w-auto object-contain"
                      unoptimized
                    />
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div className="mt-16 flex items-center gap-4">
                <span className="block h-8 w-1" style={{ background: FETCH_ORANGE }} />
                <h3 className="text-[24px] font-medium text-ink">Typography</h3>
              </div>

              <div
                className="mt-10 rounded-md p-8 flex flex-col md:flex-row items-center justify-between gap-6"
                style={{ background: FETCH_ORANGE }}
              >
                <div className="flex items-baseline gap-8 text-white">
                  <span className="text-[52px] font-bold leading-none">Aa</span>
                  <span className="text-[52px] font-medium leading-none">Bb</span>
                  <span className="text-[52px] leading-none">Cc</span>
                </div>
                <div className="text-white text-center md:text-right">
                  <p className="text-[36px] font-bold leading-none">Poppins</p>
                  <div className="mt-4 flex flex-wrap justify-center md:justify-end items-baseline gap-4 text-[15px]">
                    <span>Regular</span>
                    <span>Medium</span>
                    <span className="font-semibold">Semi-bold</span>
                    <span className="font-bold">Bold</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Key Screens & Features */}
      <section id="screens" className="bg-white">
        <Container>
          <div className="py-16 text-center">
            <h2 className="font-display text-[22px] font-medium text-ink">
              Key Screens &amp; Features
            </h2>
          </div>

          {/* Row 1: Request a Delivery */}
          <div className="pb-16">
            <h3 className="text-[28px] font-semibold text-ink">Request a Delivery</h3>
            <p className="mt-3 text-[15px] leading-[1.55] text-ink/70">
              Users views delivery options given and selects their preferred
              service
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {["rq-1", "rq-2", "rq-3"].map((k) => (
                <Reveal key={k}>
                  <Image
                    src={`/images/case-studies/fetch/${k}.png`}
                    alt="Fetch, request a delivery"
                    width={500}
                    height={1630}
                    className="block h-auto w-full rounded-lg"
                    unoptimized
                  />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Row 2: Vehicle type */}
          <div className="pb-16">
            <p className="text-[16px] leading-[1.55] text-ink/80">
              Users select preferred vehicle type, delivery details and set
              their initial price
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {["vh-1", "vh-2", "vh-3"].map((k) => (
                <Reveal key={k}>
                  <Image
                    src={`/images/case-studies/fetch/${k}.png`}
                    alt="Fetch, vehicle type & details"
                    width={500}
                    height={1400}
                    className="block h-auto w-full rounded-lg"
                    unoptimized
                  />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Row 3: Negotiation & Live Tracking */}
          <div className="pb-16">
            <h3 className="text-[28px] font-semibold text-ink">
              Real-Time Negotiation &amp; Live Tracking
            </h3>
            <p className="mt-3 text-[15px] leading-[1.55] text-ink/70">
              Agents bid on deliveries, and users review offers, Counter-offers
              enable dynamic pricing discussions. Live tracking builds trust and
              ensures a smooth and reliable experience.
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {["ng-1", "ng-2", "ng-3"].map((k) => (
                <Reveal key={k}>
                  <Image
                    src={`/images/case-studies/fetch/${k}.png`}
                    alt="Fetch, negotiation and tracking"
                    width={500}
                    height={1150}
                    className="block h-auto w-full rounded-lg"
                    unoptimized
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Mock Ups */}
      <section id="mockups" className="bg-white">
        <Container>
          <div className="py-12 text-center">
            <h2 className="font-display text-[22px] font-medium text-ink">
              Mock Ups
            </h2>
          </div>
        </Container>
        <div style={{ background: FETCH_PEACH }} className="pt-16 pb-24">
          <Container>
            <Image
              src="/images/case-studies/fetch/mockups.png"
              alt="Fetch mock ups, splash, order and tracking screens"
              width={2740}
              height={2900}
              className="block h-auto w-full"
              unoptimized
            />
          </Container>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-white pt-16 pb-24 text-center">
        <Container>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 rounded-full border border-black/15 px-6 py-3 text-[14px] font-medium text-ink transition-colors hover:bg-black/5"
          >
            <ArrowLeft className="size-4" />
            Back Home
          </Link>
          <Link
            href="/work/baby-haven"
            className="ml-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
            style={{ background: FETCH_ORANGE }}
          >
            View next project <ArrowUpRight className="size-4" />
          </Link>
        </Container>
      </section>
    </>
  );
}
