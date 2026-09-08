import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CaseStudyNav } from "@/components/CaseStudyNav";
import { Reveal } from "@/components/Reveal";
import {
  X,
  Check,
  Timer,
  Moon,
  Star,
  Sun,
  Heart,
  Camera,
  User,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";

const ROSE = "#c93b5e";

export const metadata: Metadata = {
  title: "Baby Haven, Amarachi Blossom",
  description:
    "Designing newborn care, an end-to-end case study of a mobile app that helps parents confidently navigate the earliest weeks of parenthood.",
};

const NAV_SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "system", label: "System" },
  { id: "screens", label: "Screens" },
  { id: "impact", label: "Impact" },
  { id: "reflection", label: "Reflection" },
];

/* ─────────────  DATA  ───────────── */

const HERO_STATS = [
  { n: "01", value: "12 wks", label: "From discovery to delivery" },
  { n: "02", value: "3 rounds", label: "Of usability testing" },
  { n: "03", value: "4.8★", label: "App Store rating at launch" },
];

const PROBLEM_CARDS = [
  {
    stat: "6+",
    title: "Apps to manage daily",
    body: "No single source of truth for feeding, sleep, diapers, vaccines, caregivers, and milestones.",
  },
  {
    stat: "83%",
    title: "Reported high anxiety",
    body: "Parents couldn't tell if patterns were healthy. They needed context, not just data.",
  },
  {
    stat: "2.4h",
    title: "Lost daily to coordination",
    body: "Caregiver handoffs, manual logging, and searching across tools consumed precious time.",
  },
];

const PERSONAS = [
  {
    quote:
      "I need to know if this is normal. At 3am, I just need someone to tell me everything is okay.",
    tags: ["Anxious Tracker", "Data-Driven", "Night Owl"],
    pain: [
      "Can't tell if feeding volume is normal",
      "Exhausted managing 7 apps",
    ],
    needs: [
      "Clear WHO benchmarks in plain language",
      "Expert answers without Googling",
    ],
  },
  {
    quote:
      "We need the nanny to see the same data we see. Right now it's in different places.",
    tags: ["Caregiver-Reliant", "Coordination-Focused"],
    pain: ["Caregiver handoffs are chaotic", "Aisha has no postpartum support"],
    needs: [
      "Shared visibility for caregivers",
      "Maternal wellness check-ins",
    ],
  },
];

const INSIGHTS = [
  { n: "I-1", title: "Context over data" },
  { n: "I-2", title: "3am is the moment" },
  { n: "I-3", title: "Design for both parents" },
  { n: "I-4", title: "Journals are emotional" },
];

const V1_ITEMS = [
  "Volume field",
  "Type dropdown (6 options)",
  "Side selector",
  "Time picker",
  "Notes (free text)",
  "Pain indicator (1–5)",
  "Save button + confirmation modal",
];
const V3_ITEMS = [
  "Log type (Feed / Sleep / Diaper)",
  "Smart volume pre-fill based on history",
  "Auto-timestamp (tap to adjust)",
  "Advanced options collapsed in accordion",
];

const PRINCIPLES = [
  {
    title: "3-tap maximum",
    body: "No core action, feeding, diaper, sleep requires more than 3 taps. Validated against real one-handed, sleep-deprived usage.",
    icon: Timer,
  },
  {
    title: "Dark mode first",
    body: "Designed for 2am before 2pm. High-contrast, low-stimulation dark mode protects parental night vision and reduces cognitive load.",
    icon: Moon,
  },
  {
    title: "Context over data",
    body: "Numbers always appear with a WHO benchmark. Not '97ml', '97ml · within range for 6 weeks'. Anxiety reduction, not data logging.",
    icon: Star,
  },
];

const COMPETITORS = [
  {
    name: "Huckleberry",
    strength: "Sleep prediction algorithm, strong data science",
    gap: "No medical or caregiver layer; feels like a lab tool",
    positioning: "Data-first tracker",
  },
  {
    name: "BabyCenter",
    strength: "Deep content library, huge community",
    gap: "Content overwhelms the core tracking task",
    positioning: "Content & community",
  },
  {
    name: "Glow Baby",
    strength: "Polished onboarding, pretty milestone cards",
    gap: "Shallow medical credibility, no caregiver tools",
    positioning: "Lifestyle journal",
  },
  {
    name: "Peanut",
    strength: "Strong parent-to-parent social graph",
    gap: "Social-first, weak day-to-day tracking",
    positioning: "Community network",
  },
  {
    name: "Baby Haven (redesign)",
    strength: "Unifies clinical tracking, credible medical support, and caregiving in one calm system",
    gap: "-",
    positioning: "The trusted operating system for the first year",
    highlight: true,
  },
];

const JOURNEY_STAGES = [
  "Discovery",
  "Onboarding",
  "Daily Use",
  "Crisis Moment",
  "Milestone",
];

const JOURNEY_STEPS = [
  { emoji: "😰", note: "Downloads app in the hospital parking lot after recommendation" },
  { emoji: "😅", note: "Sets up baby profile, connects partner, imports medical records" },
  { emoji: "😊", note: "Logs feeds, diapers, sleep, builds weekly routine" },
  { emoji: "😱", note: "Baby won't settle, checks symptoms, books telehealth call", highlight: true },
  { emoji: "🥹", note: "Baby turns 3 months, saves first laugh video to journal" },
];

const JOURNEY_FEELS = [
  "Optimistic but overwhelmed. Wants a fast setup, not a 12-screen onboarding quiz.",
  "Anxious, low-light. The old five-tap logging flow was the single biggest drop-off point",
  "Excited to finally have a routine that works",
  "Fearful. Needs a credible, sourced answer in seconds, not a forum thread.",
  "Relieved and happy at Baby's Progress",
];

const PILLARS = [
  {
    title: "Today",
    icon: Sun,
    color: "#F5B36B",
    items: ["Quick Log", "Dashboard", "Reminders", "Timeline"],
  },
  {
    title: "Health",
    icon: Heart,
    color: ROSE,
    items: ["Feeding", "Sleep", "Diapers", "Vaccines", "Growth", "Doctor Chat"],
  },
  {
    title: "Journal",
    icon: Camera,
    color: ROSE,
    items: ["Milestones", "Photos", "Notes", "Share"],
  },
  {
    title: "Care",
    icon: User,
    color: ROSE,
    items: ["Find Caregiver", "Schedule", "Profiles", "Ratings"],
  },
  {
    title: "Wellness",
    icon: Heart,
    color: ROSE,
    items: ["Mom Check-in", "Resources", "Community", "Partner"],
  },
];

const MOSCOW = [
  {
    label: "Must have",
    color: "#F5B36B",
    items: [
      "Unified quick-log (feed / sleep / diaper)",
      "Vaccination schedule with reminders",
      "Growth chart against WHO percentiles",
      "Shared caregiver access & permissions",
    ],
  },
  {
    label: "Should have",
    color: "#8FA88B",
    items: [
      "Milestone & memory journal",
      "Async doctor consultation booking",
      "Postpartum mood check-ins",
    ],
  },
  {
    label: "Could have",
    color: "#C9A9C4",
    items: [
      "Caregiver marketplace (night nurses, lactation)",
      "Weekly AI-drafted recap for family group chat",
    ],
  },
  {
    label: "Won't have (V1)",
    color: "#9AA5B1",
    items: ["Public social feed / community forum", "Multi-baby household dashboards"],
  },
];

const REQS = [
  ["Quick-log dial", "One-tap logging for feed, sleep, diaper from any screen", "Must", "Time-to-log < 10s"],
  ["Vaccination schedule", "CDC/WHO-aligned schedule with proactive reminders", "Must", "Reminder completion > 75%"],
  ["Growth charts", "Weight/length/head circumference vs. percentile curves", "Must", "Weekly chart views per user"],
  ["Shared caregiver access", "Role-based permissions for partners, family, paid caregivers", "Must", "% households with 2+ active members"],
  ["Doctor consults", "Async messaging + scheduled video with pediatric advisors", "Should", "Median response time < 2h"],
  ["Caregiver marketplace", "Vetted night nurse & lactation consultant booking", "Could", "Bookings per 1,000 MAU"],
];

const PALETTE = [
  { name: "Navy", hex: "#1F2A44", bg: "bg-[#1F2A44]", ink: "text-white" },
  { name: "Apricot", hex: "#E8A672", bg: "bg-[#E8A672]", ink: "text-ink" },
  { name: "Sage", hex: "#8FA88B", bg: "bg-[#8FA88B]", ink: "text-ink" },
  { name: "Dusk", hex: "#C9A9C4", bg: "bg-[#C9A9C4]", ink: "text-ink" },
  { name: "Paper", hex: "#EFF1EE", bg: "bg-[#EFF1EE]", ink: "text-ink" },
];

const A11Y = [
  {
    title: "AA+ contrast, everywhere",
    body: "Every text/background pair validated at 4.5:1 minimum, 7:1 for primary logging actions used at night.",
  },
  {
    title: "One-handed reach zones",
    body: "Primary actions sit within the bottom 60% of the screen; the quick-log dial is thumb-reachable on all supported device sizes.",
  },
  {
    title: "Dynamic type & voice logging",
    body: "Full support up to 200% text scaling, plus a voice-log fallback for hands-full moments.",
  },
];

const REFLECTION_ITEMS = [
  {
    label: "Trade-off",
    body: "We shipped the caregiver marketplace with a smaller vetted supply than planned, prioritizing trust over breadth of choice at launch.",
  },
  {
    label: "Challenge",
    body: "Aligning clinical accuracy with a calm tone required weekly review cycles with our pediatric advisor, slower, but non-negotiable for medical content.",
  },
  {
    label: "Roadmap",
    body: "Next up is a partner-facing 'shift handoff' summary and expanding postpartum wellness screening with licensed counseling referrals.",
  },
  {
    label: "Lesson",
    body: "Designing for a 3am, one-handed, half-asleep user forced a discipline that made the daytime experience better too, constraints from the hardest moment improved the whole product.",
  },
];

/* ─────────────  SMALL PARTIALS  ───────────── */

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em]">
      <span className="text-[color:var(--rose)]" style={{ color: ROSE }}>{n}</span>
      <span aria-hidden className="block h-px w-8 bg-black/15" />
      <span className="text-black/60">{label}</span>
    </div>
  );
}

function PillNav({ items }: { items: readonly string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((s) => (
        <span
          key={s}
          className={`rounded-full px-5 py-2.5 text-[13px] font-medium tracking-[0.06em] ${
            s === "Crisis Moment"
              ? "bg-[#c93b5e] text-white"
              : "border border-black/15 bg-white text-ink"
          }`}
        >
          {s.toUpperCase()}
        </span>
      ))}
    </div>
  );
}

/* ─────────────  PAGE  ───────────── */

export default function BabyHavenPage() {
  return (
    <>
      <CaseStudyNav brand="Baby Haven, case study" sections={NAV_SECTIONS} />

      {/* HERO */}
      <section
        id="overview"
        className="relative overflow-hidden bg-gradient-to-br from-[#f5f5f7] via-[#fbeef1] to-[#e9eef5]"
      >
        <Container>
          <div className="grid grid-cols-1 items-center gap-16 pt-20 pb-24 md:grid-cols-[1fr_1fr] md:gap-20">
            <div>
              <div className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-ink/70">
                <span aria-hidden className="inline-block size-2 rounded-full bg-accent-purple" />
                3:47 AM
                <span className="text-ink/30">·</span>
                <span>Feed logged</span>
              </div>

              <h1 className="mt-8 font-display font-medium leading-[0.95] tracking-display text-ink">
                <span className="block text-[88px] md:text-[132px]">Baby</span>
                <span className="block text-[88px] md:text-[132px]" style={{ color: ROSE }}>
                  Haven
                </span>
              </h1>

              <p className="mt-10 max-w-[520px] text-[19px] leading-[1.55] text-ink/70 md:text-[20px]">
                Designing newborn care, an end-to-end case study of a mobile
                app that helps parents confidently navigate the earliest weeks
                of parenthood.
              </p>

              <div className="mt-12 h-px w-full bg-ink/10" />

              <div className="mt-10 grid grid-cols-3 gap-y-10 gap-x-8 max-w-[560px]">
                <Meta label="Role" value="Product Designer" />
                <Meta label="Duration" value="12 Weeks" />
                <Meta label="Team" value="1 Designer · 1 PM · 3 Eng" />
                <Meta label="Tools" value="Figma · Maze · Notion" />
                <Meta label="Platform" value="iOS & Android" />
                <Meta label="Outcome" value="4.8★ · 48K+ DAU" />
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-6">
                <a
                  href="#problem"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-4 text-[15px] font-medium leading-5 text-white transition-opacity hover:opacity-90"
                  style={{ background: ROSE }}
                >
                  View Case Study <span aria-hidden>→</span>
                </a>
                <a
                  href="#screens"
                  className="inline-flex items-center gap-2 text-[15px] font-medium leading-5 text-ink transition-colors hover:text-[color:var(--rose)]"
                  style={{ ["--rose" as string]: ROSE }}
                >
                  Jump to Screens <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[560px]">
              <Image
                src="/images/case-studies/baby-haven-phone.png"
                alt="Baby Haven onboarding, 4.8★ App Store, 48K+ Daily Active"
                width={850}
                height={1260}
                className="block h-auto w-full"
                priority
                unoptimized
              />
            </div>
          </div>
        </Container>
      </section>

      {/* STATS BAND */}
      <section className="bg-[#e9eef5]">
        <Container>
          <div className="grid grid-cols-1 gap-10 py-24 md:grid-cols-3">
            {HERO_STATS.map((s) => (
              <div key={s.n}>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: ROSE }}>
                  {s.n}
                </p>
                <p className="mt-6 font-display text-[64px] leading-none text-ink">
                  {s.value}
                </p>
                <p className="mt-3 text-[14px] leading-5 text-ink/70">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* OVERVIEW */}
      <section className="bg-[#e9eef5]">
        <Container>
          <div className="grid grid-cols-1 gap-14 pb-24 md:grid-cols-[1.1fr_1fr]">
            <div>
              <SectionLabel n="00" label="Overview" />
              <h2 className="mt-6 font-display text-[44px] leading-[1.1] tracking-h2 text-ink md:text-[56px]">
                A complete rethink of how parents navigate the earliest days.
              </h2>
            </div>
            <p className="text-[16px] leading-[1.72] pt-14 md:pt-24" style={{ color: ROSE }}>
              Baby Haven was conceived as a single-destination platform for new
              parents, one that collapses fragmented apps, spreadsheets, and
              word-of-mouth into a unified, intelligent companion. Over 12
              weeks, we redesigned the experience from the ground up: new
              information architecture, a cohesive design system, and features
              informed by 25 parent interviews. The result: a product that
              parents described as &ldquo;the first app that actually understands what
              it&apos;s like to have a newborn.&rdquo;
            </p>
          </div>
        </Container>
      </section>

      {/* PROBLEM */}
      <section id="problem" className="bg-[#faf7f2]">
        <Container>
          <div className="pt-24 pb-16">
            <SectionLabel n="01" label="Problem" />
            <blockquote
              className="mt-10 max-w-[1100px] border-l-[3px] pl-8 font-display text-[32px] leading-[1.2] tracking-h2 text-ink md:text-[44px]"
              style={{ borderColor: ROSE }}
            >
              &ldquo;New parents juggle 6+ fragmented apps while running on no
              sleep, and still feel like they&apos;re doing it wrong.&rdquo;
            </blockquote>

            <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
              {PROBLEM_CARDS.map((c) => (
                <div key={c.title} className="rounded-[20px] bg-[#a2b5c8] p-8 text-white">
                  <p className="font-display text-[56px] leading-none" style={{ color: ROSE }}>
                    {c.stat}
                  </p>
                  <p className="mt-4 text-[15px] font-medium">{c.title}</p>
                  <p className="mt-3 text-[13px] leading-[1.55] text-white/85">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* RESEARCH */}
      <section className="bg-[#faf7f2]">
        <Container>
          <div className="pb-16">
            <SectionLabel n="02" label="Research · 25 Interviews" />
            <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-2">
              {PERSONAS.map((p, i) => (
                <div key={i}>
                  <blockquote
                    className="border-l-[2px] pl-6 text-[15px] leading-[1.72] italic text-ink/80"
                    style={{ borderColor: ROSE }}
                  >
                    &ldquo;{p.quote}&rdquo;
                  </blockquote>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-8 text-[13px] leading-[1.65]">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: ROSE }}>
                        Pain points
                      </p>
                      <ul className="mt-3 space-y-2 text-ink/80">
                        {p.pain.map((x) => (
                          <li key={x} className="flex items-start gap-2">
                            <X className="mt-0.5 size-3.5 shrink-0" style={{ color: ROSE }} />
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60">Needs</p>
                      <ul className="mt-3 space-y-2 text-ink/80">
                        {p.needs.map((x) => (
                          <li key={x} className="flex items-start gap-2">
                            <Check className="mt-0.5 size-3.5 shrink-0 text-emerald-600" />
                            <span>{x}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* INSIGHTS ROW */}
      <section className="bg-[#faf7f2]">
        <Container>
          <div className="grid grid-cols-2 gap-8 pb-24 md:grid-cols-4">
            {INSIGHTS.map((i) => (
              <div key={i.n}>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: ROSE }}>
                  {i.n}
                </p>
                <p className="mt-3 text-[15px] font-medium text-ink">{i.title}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* DESIGN PROCESS */}
      <section className="bg-[#e9eef5]">
        <Container>
          <div className="pt-24 pb-16">
            <SectionLabel n="03" label="Design Process" />
            <h2 className="mt-6 max-w-[820px] font-display text-[40px] leading-[1.15] tracking-h2 text-ink md:text-[52px]">
              From 23 critical issues to 94% task completion.
            </h2>
            <p className="mt-6 max-w-[720px] text-[16px] leading-[1.72] text-ink/70">
              Three rounds of moderated usability testing with 36 parents, each
              followed by a focused sprint. The most important iteration: the
              Quick Log.
            </p>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* V1 */}
              <div className="rounded-[20px] border-2 border-[#ffd2d9] bg-white p-8">
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-[#ffd2d9]">
                    <X className="size-4" style={{ color: ROSE }} />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em]" style={{ color: ROSE }}>
                      V1 · Before
                    </p>
                    <p className="text-[16px] font-medium text-ink">9-field logging form</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-[13px] leading-6 text-ink/80">
                  {V1_ITEMS.map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <span className="mt-2 block size-1 rounded-full" style={{ background: ROSE }} />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-[10px] bg-[#ffe4e8] p-4">
                  <p className="text-[13px] font-medium" style={{ color: ROSE }}>
                    47 sec avg completion · 63% drop-off
                  </p>
                  <p className="mt-1 text-[12px] text-ink/60">Round 1: 23 critical issues flagged</p>
                </div>
              </div>

              {/* V3 */}
              <div className="rounded-[20px] border-2 border-emerald-200 bg-white p-8">
                <div className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-emerald-100">
                    <Check className="size-4 text-emerald-600" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald-700">
                      V3 · After
                    </p>
                    <p className="text-[16px] font-medium text-ink">2-step smart log</p>
                  </div>
                </div>
                <ul className="mt-6 space-y-2 text-[13px] leading-6 text-ink/80">
                  {V3_ITEMS.map((x) => (
                    <li key={x} className="flex items-start gap-2">
                      <span className="mt-2 block size-1 rounded-full bg-emerald-500" />
                      <span>{x}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 rounded-[10px] bg-emerald-50 p-4">
                  <p className="text-[13px] font-medium text-emerald-700">
                    4 sec avg completion · 94% completion rate
                  </p>
                  <p className="mt-1 text-[12px] text-ink/60">Round 3: 4 minor issues · shipped</p>
                </div>
              </div>
            </div>

            <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/60">
              3 non-negotiable design principles
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
              {PRINCIPLES.map((p) => (
                <div key={p.title} className="rounded-[20px] bg-white p-8 shadow-[0_1px_2px_rgba(0,0,0,0.03)]">
                  <p.icon className="size-5" style={{ color: ROSE }} />
                  <p className="mt-4 text-[16px] font-medium text-ink">{p.title}</p>
                  <p className="mt-3 text-[13px] leading-[1.65] text-ink/70">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* COMPETITIVE ANALYSIS */}
      <section className="bg-[#e9eef5]">
        <Container>
          <div className="pt-16 pb-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: ROSE }}>
             , Competitive Analysis
            </p>
            <h2 className="mt-6 max-w-[900px] font-display text-[32px] leading-[1.2] tracking-h2 text-ink md:text-[44px]">
              The category was split between clinical trackers and lifestyle
              journals, nobody owned both.
            </h2>

            <div className="mt-14 overflow-hidden">
              <div className="grid grid-cols-[1fr_1.4fr_1.4fr_1.4fr] gap-6 border-b border-ink/15 pb-3 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/60">
                <div>Product</div>
                <div>Strength</div>
                <div>Gap</div>
                <div>Positioning</div>
              </div>
              {COMPETITORS.map((c) => (
                <div
                  key={c.name}
                  className={`grid grid-cols-[1fr_1.4fr_1.4fr_1.4fr] gap-6 border-b border-ink/10 py-6 text-[14px] leading-[1.55] ${
                    c.highlight ? "" : "text-ink/80"
                  }`}
                >
                  <div className={c.highlight ? "font-medium" : "font-medium text-ink"} style={c.highlight ? { color: ROSE } : {}}>
                    {c.name}
                  </div>
                  <div>{c.strength}</div>
                  <div>{c.gap}</div>
                  <div className={c.highlight ? "font-medium" : ""} style={c.highlight ? { color: ROSE } : {}}>
                    {c.positioning}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* USER JOURNEY */}
      <section className="bg-[#e9eef5]">
        <Container>
          <div className="pb-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: ROSE }}>
             , User Journey Map
            </p>
            <h2 className="mt-6 font-display text-[36px] leading-[1.15] tracking-h2 text-ink md:text-[48px]">
              The emotional arc of early parenthood.
            </h2>
            <p className="mt-6 max-w-[720px] text-[15px] leading-[1.72] text-ink/70">
              We mapped the full experience from hospital discharge to
              three-month milestone, tracking emotions, actions, and design
              opportunities at every touchpoint.
            </p>

            <div className="mt-10">
              <PillNav items={JOURNEY_STAGES} />
            </div>

            <div className="mt-12 rounded-[16px] bg-white p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink/60">Emotional valence</p>
              <div className="relative mt-8 h-40">
                <svg viewBox="0 0 1000 160" preserveAspectRatio="none" className="h-full w-full">
                  {[0, 40, 80, 120].map((y) => (
                    <line key={y} x1={0} y1={y} x2={1000} y2={y} stroke="#d1d9e2" strokeWidth={1} />
                  ))}
                  <path
                    d="M 40 40 L 240 90 L 460 60 L 700 130 L 940 30"
                    fill="none"
                    stroke={ROSE}
                    strokeWidth={2}
                  />
                  {[40, 240, 460, 700, 940].map((x, i) => (
                    <g key={x}>
                      <circle cx={x} cy={[40, 90, 60, 130, 30][i]} r={4} fill={ROSE} />
                      <line
                        x1={x}
                        y1={[40, 90, 60, 130, 30][i]}
                        x2={x}
                        y2={160}
                        stroke={i === 3 ? ROSE : "#c7d0da"}
                        strokeWidth={i === 3 ? 2 : 1}
                      />
                    </g>
                  ))}
                </svg>
              </div>
              <div className="mt-6 grid grid-cols-5 gap-3">
                {JOURNEY_STEPS.map((s, i) => (
                  <div
                    key={i}
                    className={`rounded-[10px] p-3 text-[11px] leading-[1.4] ${
                      s.highlight
                        ? "bg-white text-[color:var(--r)]"
                        : "bg-white text-ink/80"
                    }`}
                    style={s.highlight ? ({ ["--r" as string]: ROSE, color: ROSE } as React.CSSProperties) : {}}
                  >
                    <span className="text-[16px]">{s.emoji}</span>
                    <p className="mt-2">{s.note}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-5 gap-3">
                {JOURNEY_FEELS.map((f, i) => (
                  <div key={i} className="rounded-[10px] bg-[#c7d0da] p-3 text-[11px] leading-[1.4] text-ink/80">
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* INFORMATION ARCHITECTURE */}
      <section id="system" className="bg-[#e9eef5]">
        <Container>
          <div className="pb-24">
            <div className="rounded-[24px] bg-[#1a1a1a] p-10 text-white md:p-16">
              <SectionLabelDark n="-" label="Information Architecture" />
              <h2 className="mt-6 font-display text-[36px] leading-[1.15] tracking-h2 md:text-[48px]">
                Five pillars. One coherent home.
              </h2>
              <p className="mt-6 max-w-[720px] text-[15px] leading-[1.72] text-white/70">
                We restructured the navigation from 11 disconnected sections
                into 5 intuitive pillars, each representing a distinct mental
                model of new parenthood.
              </p>

              {/* Tree */}
              <div className="mt-14">
                <div className="mx-auto w-fit">
                  <span
                    className="inline-flex items-center rounded-full px-5 py-2 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
                    style={{ background: ROSE }}
                  >
                    Baby Haven
                  </span>
                </div>

                {/* connector lines */}
                <div className="mt-8 h-6 relative">
                  <div className="absolute left-1/2 top-0 h-6 w-px -translate-x-1/2 bg-white/30" />
                  <div className="absolute left-[10%] right-[10%] top-6 h-px bg-white/30" />
                </div>

                <div className="grid grid-cols-5 gap-3">
                  {PILLARS.map((p) => (
                    <div key={p.title} className="flex flex-col items-center">
                      <div className="h-6 w-px bg-white/30" />
                      <div className="w-full rounded-[10px] bg-[#2b2b2b] p-4 text-center">
                        <p.icon className="mx-auto size-4" style={{ color: p.color }} />
                        <p className="mt-2 text-[13px] font-medium">{p.title}</p>
                      </div>
                      <div className="mt-3 flex flex-col items-center gap-1.5 w-full">
                        {p.items.map((it) => (
                          <span
                            key={it}
                            className="w-full rounded-[6px] border border-white/10 py-1 text-center font-mono text-[9px] uppercase tracking-[0.14em] text-white/60"
                          >
                            {it}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MOSCOW */}
      <section className="bg-[#faf7f2]">
        <Container>
          <div className="pt-24 pb-16">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: ROSE }}>
              Feature Prioritization
            </p>
            <h2 className="mt-6 max-w-[820px] font-display text-[30px] leading-[1.2] tracking-h2 text-ink md:text-[40px]">
              A MoSCoW pass against the 16-week timeline kept scope honest.
            </h2>

            <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
              {MOSCOW.map((q) => (
                <div key={q.label} className="rounded-[16px] bg-[#eef2f6] p-8">
                  <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70">
                    <span className="block size-2 rounded-full" style={{ background: q.color }} />
                    {q.label}
                  </div>
                  <ul className="mt-6 space-y-2.5 text-[13px] leading-6 text-ink/80">
                    {q.items.map((x) => (
                      <li key={x} className="flex items-start gap-2">
                        <span className="text-ink/40">-</span>
                        <span>{x}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-16 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: ROSE }}>
              Product Requirements Summary
            </p>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-[13px] leading-5 text-ink/80">
                <thead className="border-b border-ink/15 font-mono text-[11px] uppercase tracking-[0.16em] text-ink/60">
                  <tr>
                    <th className="py-3 pr-4 font-normal">Feature</th>
                    <th className="py-3 pr-4 font-normal">Description</th>
                    <th className="py-3 pr-4 font-normal">Priority</th>
                    <th className="py-3 pr-4 font-normal">Success metric</th>
                  </tr>
                </thead>
                <tbody>
                  {REQS.map((r) => (
                    <tr key={r[0]} className="border-b border-ink/10">
                      <td className="py-4 pr-4 font-medium text-ink">{r[0]}</td>
                      <td className="py-4 pr-4">{r[1]}</td>
                      <td className="py-4 pr-4">{r[2]}</td>
                      <td className="py-4 pr-4">{r[3]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Container>
      </section>

      {/* DESIGN SYSTEM, DUSK & MILK */}
      <section className="bg-[#e9eef5]">
        <Container>
          <div className="pt-24 pb-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: ROSE }}>
              Design System
            </p>
            <h2 className="mt-6 max-w-[900px] font-display text-[36px] leading-[1.15] tracking-h2 text-ink md:text-[52px]">
              Dusk &amp; Milk, a system built to be legible at 3am and credible
              in a pediatrician&apos;s office.
            </h2>
            <p className="mt-6 max-w-[560px] text-[15px] leading-[1.72] text-ink/70">
              Every token was stress-tested under one constraint: a parent using
              the app one-handed, in low light, without their glasses.
            </p>

            <p className="mt-14 text-[15px] font-medium text-ink">Color</p>
            <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-5">
              {PALETTE.map((c) => (
                <div key={c.name} className={`rounded-[10px] ${c.bg} h-24 p-4 ${c.ink}`}>
                  <p className="text-[13px] font-medium">{c.name}</p>
                  <p className="mt-1 font-mono text-[10px] opacity-75">{c.hex}</p>
                </div>
              ))}
            </div>

            <p className="mt-14 text-[15px] font-medium text-ink">Typography</p>
            <div className="mt-4 divide-y divide-ink/10 border-y border-ink/10">
              <TypeRow label="Display / Fraunces" sample="Sleep, logged." size="text-[32px] font-display" />
              <TypeRow label="Heading / Fraunces" sample="Vaccination due in 12 days" size="text-[22px] font-display" />
              <TypeRow label="Body / Inter" sample="Feed logged at 3:47 AM · 90 mL · left side" size="text-[15px]" />
              <TypeRow label="Data / Plex Mono" sample="62ND PERCENTILE · +180g THIS WEEK" size="text-[13px] font-mono uppercase tracking-[0.14em]" />
            </div>

            <p className="mt-14 text-[15px] font-medium text-ink">Spacing, 4pt base grid</p>
            <div className="mt-4 flex items-end gap-3">
              {[4, 8, 16, 24, 32, 48, 64].map((n, i) => (
                <div key={n} className="text-center">
                  <div
                    className="rounded-t-md"
                    style={{ width: 24, height: 6 + i * 8, background: "#E8A672" }}
                  />
                  <p className="mt-2 font-mono text-[10px] text-ink/60">{n}</p>
                </div>
              ))}
            </div>

            <p className="mt-14 text-[15px] font-medium text-ink">Iconography, 2px rounded stroke, no sharp terminals</p>
            <div className="mt-4 flex gap-3">
              {[Heart, Moon, Timer, User, Camera, MessageSquare].map((I, i) => (
                <span key={i} className="inline-flex size-10 items-center justify-center rounded-md border border-ink/15 bg-white">
                  <I className="size-4 text-ink/70" strokeWidth={2} />
                </span>
              ))}
            </div>

            <p className="mt-14 text-[15px] font-medium text-ink">Components</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-ink px-5 py-2 text-[13px] font-medium text-white">Log feed</span>
              <span className="inline-flex items-center rounded-full border border-ink/20 bg-white px-5 py-2 text-[13px] font-medium text-ink">Book consult</span>
              <span className="inline-flex items-center rounded-full border border-ink/20 bg-white px-5 py-2 text-[12px] text-ink/60">Weight (kg)</span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[12px] text-ink/70 border border-ink/10">
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-emerald-500 p-1"><span className="block size-2 rounded-full bg-white" /></span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f5f2e8] px-4 py-1.5 text-[12px] text-ink">🌙 Night mode</span>
              <span className="inline-flex items-center rounded-full bg-[#e6e6e6] px-4 py-1.5 text-[11px] font-mono uppercase tracking-[0.14em] text-ink/60">Vaccine due</span>
            </div>

            <p className="mt-14 text-[15px] font-medium text-ink">Accessibility commitments</p>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
              {A11Y.map((a) => (
                <div key={a.title} className="rounded-[12px] border border-ink/10 bg-white p-6">
                  <p className="text-[14px] font-medium text-ink">{a.title}</p>
                  <p className="mt-3 text-[12px] leading-[1.65] text-ink/70">{a.body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* FINAL SCREENS */}
      <section id="screens" className="bg-[#faf7f2]">
        <Container>
          <div className="pt-24 pb-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: ROSE }}>
              05, Final Screens
            </p>
            <h2 className="mt-6 font-display text-[40px] leading-[1.15] tracking-h2 text-ink md:text-[52px]">
              Designed for 3am. Beautiful at noon.
            </h2>
            <p className="mt-6 max-w-[720px] text-[15px] leading-[1.72] text-ink/70">
              Five core screens from the old design to the new final deliverable,
              each one validated across 3 rounds of usability testing with real
              new parents.
            </p>

            {/* Rows, small phones on the left, larger paired phone on the right, scattered/centered layout */}
            <ScreenRow
              small={{
                src: "/images/case-studies/baby-haven-screens/splash-small.png",
                alt: "Splash screen, BABY HAVEN",
                w: 630,
                h: 1360,
              }}
              large={{
                src: "/images/case-studies/baby-haven-screens/splash-large.png",
                alt: "Baby Haven, your gentle parenting companion",
                w: 840,
                h: 1530,
              }}
            />
            <ScreenRow
              small={{
                src: "/images/case-studies/baby-haven-screens/babys-info.png",
                alt: "Baby's Info form",
                w: 590,
                h: 1430,
              }}
              large={{
                src: "/images/case-studies/baby-haven-screens/get-set-up.png",
                alt: "Let's get set up, parent onboarding",
                w: 830,
                h: 1490,
              }}
            />
            <ScreenRow
              small={{
                src: "/images/case-studies/baby-haven-screens/thursday.png",
                alt: "Thursday morning, notifications + newsletter",
                w: 590,
                h: 1260,
              }}
              large={{
                src: "/images/case-studies/baby-haven-screens/good-morning.png",
                alt: "Home dashboard, Good morning",
                w: 860,
                h: 1580,
              }}
            />
            <ScreenRow
              small={{
                src: "/images/case-studies/baby-haven-screens/routine.png",
                alt: "Routine, quick actions",
                w: 590,
                h: 1280,
              }}
              large={{
                src: "/images/case-studies/baby-haven-screens/health.png",
                alt: "Health tracking",
                w: 860,
                h: 1700,
              }}
            />
          </div>
        </Container>
      </section>

      {/* REFLECTION */}
      <section id="reflection" className="bg-[#e9eef5]">
        <Container>
          <div className="pt-24 pb-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: ROSE }}>
             , Reflection
            </p>
            <h2 className="mt-6 font-display text-[36px] leading-[1.2] tracking-h2 text-ink md:text-[48px]">
              What I&apos;d defend, what I&apos;d trade differently, and
              what&apos;s next.
            </h2>

            <div className="mt-14 grid grid-cols-1 gap-16 md:grid-cols-[1fr_1.4fr]">
              <div>
                <h3 className="font-display text-[22px] leading-[1.3] text-ink">
                  The hardest call was cutting customization to gain speed.
                </h3>
                <p className="mt-6 text-[14px] leading-[1.72] text-ink/70">
                  Removing the configurable dial felt like a step backward for
                  power users. The data proved otherwise, but I&apos;d push for
                  a progressive-disclosure version in v2, adding customization
                  only after a parent&apos;s first 10 logs.
                </p>
              </div>
              <div className="divide-y divide-ink/10">
                {REFLECTION_ITEMS.map((r) => (
                  <div key={r.label} className="py-6">
                    <p className="text-[14px] leading-[1.72] text-ink/80">
                      <span className="font-semibold text-ink">{r.label}:</span>{" "}
                      {r.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* IMPACT / CLOSING BAND */}
      <section id="impact" className="bg-[#1a1a1a] text-white">
        <Container>
          <div className="pt-24 pb-14">
            <h2 className="max-w-[900px] font-display text-[40px] leading-[1.2] md:text-[64px]">
              Building the calm,
              <br />
              trusted layer
              <br />
              between parents and
              <br />
              their baby&apos;s first year.
            </h2>

            <div className="mt-16 flex flex-wrap items-center gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-[14px] font-medium text-white transition-colors hover:bg-white/10"
              >
                📎 Back home
              </Link>
              <Link
                href="/work/meerge"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-medium text-white transition-opacity hover:opacity-90"
                style={{ background: ROSE }}
              >
                View next project ↗
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-6 text-[12px] text-white/60">
              <div className="flex flex-wrap items-center gap-8">
                <span>Amara Blossom, Product Designer</span>
                <span>Copy my Email</span>
                <span>Figma prototype available on request</span>
              </div>
              <span>© 2026</span>
            </div>
            <p className="mt-3 text-[11px] text-white/40">
              Baby Haven is a concept redesign created for portfolio purposes.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[11px] uppercase tracking-[0.2em]" style={{ color: ROSE }}>
        {label}
      </p>
      <p className="mt-3 text-[15px] leading-[1.4] text-ink">{value}</p>
    </div>
  );
}

function SectionLabelDark({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em]">
      <span style={{ color: ROSE }}>{n}</span>
      <span aria-hidden className="block h-px w-8 bg-white/25" />
      <span className="text-white/60">{label}</span>
    </div>
  );
}

function TypeRow({
  label,
  sample,
  size,
}: {
  label: string;
  sample: string;
  size: string;
}) {
  return (
    <div className="grid grid-cols-[140px_1fr] items-baseline gap-6 py-5">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-ink/60">{label}</p>
      <p className={`${size} text-ink`}>{sample}</p>
    </div>
  );
}

function ScreenRow({
  small,
  large,
}: {
  small: { src: string; alt: string; w: number; h: number };
  large: { src: string; alt: string; w: number; h: number };
}) {
  const softShadow = {
    filter:
      "drop-shadow(0 12px 20px rgba(60, 60, 90, 0.06)) drop-shadow(0 4px 8px rgba(60, 60, 90, 0.04))",
  } as React.CSSProperties;
  return (
    <div className="my-16 flex justify-center">
      <div className="flex items-end gap-6 md:gap-10">
        <Image
          src={small.src}
          alt={small.alt}
          width={small.w}
          height={small.h}
          className="block h-auto w-[130px] md:w-[160px]"
          style={softShadow}
          unoptimized
        />
        <Image
          src={large.src}
          alt={large.alt}
          width={large.w}
          height={large.h}
          className="block h-auto w-[190px] md:w-[230px]"
          style={softShadow}
          unoptimized
        />
      </div>
    </div>
  );
}
