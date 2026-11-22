import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Image from "next/image";
import Link from "next/link";
import { Fraunces } from "next/font/google";
import {
  BookHeart,
  Camera,
  ChevronLeft,
  CircleCheck,
  CircleX,
  Contrast,
  Hand,
  Heart,
  HeartPulse,
  MessageSquare,
  Moon,
  MousePointerClick,
  Star,
  Sun,
  Timer,
  Type,
  User,
  Users,
} from "lucide-react";
import { CaseStudy, Chapter } from "@/components/case-study/CaseStudy";
import { Slot } from "@/components/case-study/Slot";
import { Journey, type Stage } from "./_journey";
import "@/styles/cs-baby-haven.css";

export const metadata: Metadata = pageMeta({ title: "Baby Haven", description: "Designing newborn care, an end-to-end case study of a mobile app that helps parents confidently navigate the earliest weeks of parenthood.", path: "/work/baby-haven" });

// The app's display face, shown only in the design-system typography specimen.
const serif = Fraunces({ subsets: ["latin"], weight: ["400", "500", "600"], display: "swap" });

const facts = [
  ["Role", "Product Designer"],
  ["Duration", "12 Weeks"],
  ["Team", "1 Designer · 1 PM · 3 Eng"],
  ["Tools", "Figma · Maze · Notion"],
  ["Platform", "iOS & Android"],
  ["Outcome", "4.8★ · 48K+ DAU"],
];

const personas = [
  {
    quote: "I need to know if this is normal. At 3am, I just need someone to tell me everything is okay.",
    tags: ["Anxious Tracker", "Data-Driven", "Night Owl"],
    pain: ["Can't tell if feeding volume is normal", "Exhausted managing 7 apps"],
    needs: ["Clear WHO benchmarks in plain language", "Expert answers without Googling"],
  },
  {
    quote: "We need the nanny to see the same data we see. Right now it's in different places.",
    tags: ["Caregiver-Reliant", "Coordination-Focused"],
    pain: ["Caregiver handoffs are chaotic", "Aisha has no postpartum support"],
    needs: ["Shared visibility for caregivers", "Maternal wellness check-ins"],
  },
];

const competitors = [
  ["Huckleberry", "Sleep prediction algorithm, strong data science", "No medical or caregiver layer; feels like a lab tool", "Data-first tracker"],
  ["BabyCenter", "Deep content library, huge community", "Content overwhelms the core tracking task", "Content & community"],
  ["Glow Baby", "Polished onboarding, pretty milestone cards", "Shallow medical credibility, no caregiver tools", "Lifestyle journal"],
  ["Peanut", "Strong parent-to-parent social graph", "Social-first, weak day-to-day tracking", "Community network"],
];

const journey: Stage[] = [
  { stage: "Discovery", emoji: "😰", mood: 62, note: "Downloads app in the hospital parking lot after recommendation", feel: "Optimistic but overwhelmed. Wants a fast setup, not a 12-screen onboarding quiz." },
  { stage: "Onboarding", emoji: "😅", mood: 42, note: "Sets up baby profile, connects partner, imports medical records", feel: "Anxious, low-light. The old five-tap logging flow was the single biggest drop-off point." },
  { stage: "Daily Use", emoji: "😊", mood: 72, note: "Logs feeds, diapers, sleep, builds weekly routine", feel: "Excited to finally have a routine that works." },
  { stage: "Crisis Moment", emoji: "😱", mood: 22, note: "Baby won't settle, checks symptoms, books telehealth call", feel: "Fearful. Needs a credible, sourced answer in seconds, not a forum thread." },
  { stage: "Milestone", emoji: "🥹", mood: 92, note: "Baby turns 3 months, saves first laugh video to journal", feel: "Relieved and happy at Baby's progress." },
];

const pillars = [
  { head: "Today", icon: Sun, items: ["Quick Log", "Dashboard", "Reminders", "Timeline"] },
  { head: "Health", icon: HeartPulse, items: ["Feeding", "Sleep", "Diapers", "Vaccines", "Growth", "Doctor Chat"] },
  { head: "Journal", icon: BookHeart, items: ["Milestones", "Photos", "Notes", "Share"] },
  { head: "Care", icon: Users, items: ["Find Caregiver", "Schedule", "Profiles", "Ratings"] },
  { head: "Wellness", icon: Heart, items: ["Mom Check-in", "Resources", "Community", "Partner"] },
];

const moscow = [
  { label: "Must have", items: ["Unified quick-log (feed / sleep / diaper)", "Vaccination schedule with reminders", "Growth chart against WHO percentiles", "Shared caregiver access & permissions"] },
  { label: "Should have", items: ["Milestone & memory journal", "Async doctor consultation booking", "Postpartum mood check-ins"] },
  { label: "Could have", items: ["Caregiver marketplace (night nurses, lactation)", "Weekly AI-drafted recap for family group chat"] },
  { label: "Won't have (V1)", items: ["Public social feed / community forum", "Multi-baby household dashboards"] },
];

const reqs = [
  ["Quick-log dial", "One-tap logging for feed, sleep, diaper from any screen", "Must", "Time-to-log < 10s"],
  ["Vaccination schedule", "CDC/WHO-aligned schedule with proactive reminders", "Must", "Reminder completion > 75%"],
  ["Growth charts", "Weight/length/head circumference vs. percentile curves", "Must", "Weekly chart views per user"],
  ["Shared caregiver access", "Role-based permissions for partners, family, paid caregivers", "Must", "% households with 2+ active members"],
  ["Doctor consults", "Async messaging + scheduled video with pediatric advisors", "Should", "Median response time < 2h"],
  ["Caregiver marketplace", "Vetted night nurse & lactation consultant booking", "Could", "Bookings per 1,000 MAU"],
];

const colors = [
  { name: "Navy", hex: "#1F2A44", ink: "#fff" },
  { name: "Apricot", hex: "#E8A672", ink: "#1F2A44" },
  { name: "Sage", hex: "#8FA88B", ink: "#1F2A44" },
  { name: "Dusk", hex: "#C9A9C4", ink: "#1F2A44" },
  { name: "Paper", hex: "#EFF1EE", ink: "#1F2A44" },
];

const img = (f: string) => `/images/case-studies/baby-haven/${f}.webp`;

/** before/after pairs: the old screen (small, labelled) beside the new one; a file of null is still to come */
const pairs: { old: string; oldFile: string; now: string; newFile: string | null }[] = [
  { old: "Splash", oldFile: "old-splash", now: "Splash, Baby Haven · your gentle parenting companion", newFile: "new-splash" },
  { old: "Baby's info", oldFile: "old-info", now: "Let's get set up, parent onboarding", newFile: "new-setup" },
  { old: "Home", oldFile: "old-home", now: "Today: Good morning, quick log and timeline", newFile: "new-today" },
  { old: "Routine", oldFile: "old-routine", now: "Health: Emma's daily tracking", newFile: "new-health" },
];

const reflection = [
  ["Trade-off", "We shipped the caregiver marketplace with a smaller vetted supply than planned, prioritizing trust over breadth of choice at launch."],
  ["Challenge", "Aligning clinical accuracy with a calm tone required weekly review cycles with our pediatric advisor, slower, but non-negotiable for medical content."],
  ["Roadmap", "Next up is a partner-facing 'shift handoff' summary and expanding postpartum wellness screening with licensed counseling referrals."],
  ["Lesson", "Designing for a 3am, one-handed, half-asleep user forced a discipline that made the daytime experience better too, constraints from the hardest moment improved the whole product."],
];

export default function BabyHaven() {
  return (
    <CaseStudy
      slug="baby-haven"
      aInk="#F58CC4"
      aSoft="#241A20"
      chapters={[
        { id: "overview", label: "Overview" },
        { id: "problem", label: "Problem" },
        { id: "research", label: "Research" },
        { id: "process", label: "Process" },
        { id: "journey", label: "Journey" },
        { id: "architecture", label: "Architecture" },
        { id: "system", label: "Design system" },
        { id: "screens", label: "Screens" },
        { id: "reflection", label: "Reflection" },
      ]}
      hero={
        <header className="bh-hero">
          <div className="wrap bh-hero-in">
            <Link className="bh-back lab" href="/projects">
              <ChevronLeft size={14} aria-hidden /> All projects
            </Link>
            <div className="bh-hero-copy">
              <span className="lab bh-kicker">
                <i aria-hidden /> Case study · Parenting
              </span>
              <h1 className="bh-word">
                Baby <span>Haven</span>
              </h1>
              <p className="bh-sub">
                Designing newborn care, an end-to-end case study of a mobile app that helps parents confidently navigate
                the earliest weeks of parenthood.
              </p>
              <dl className="bh-facts">
                {facts.map(([k, v]) => (
                  <div key={k}>
                    <dt className="lab">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <div className="bh-ctas">
                <a className="btn btn-solid" href="#overview">
                  View case study
                </a>
                <a className="btn btn-line" href="#screens">
                  Skip to screens
                </a>
              </div>
            </div>
            <div className="bh-hero-art">
              <Image
                className="bh-hero-phone"
                src={img("new-splash")}
                alt="Baby Haven splash screen: your gentle parenting companion"
                width={1160}
                height={2000}
                priority
                sizes="(min-width: 900px) 340px, 70vw"
              />
              <span className="bh-badge bh-badge-a">
                <Star size={18} aria-hidden />
                <span>
                  <b>4.8★</b>
                  <small>App Store</small>
                </span>
              </span>
              <span className="bh-badge bh-badge-b">
                <Users size={18} aria-hidden />
                <span>
                  <b>48K+</b>
                  <small>Daily active</small>
                </span>
              </span>
            </div>
          </div>
        </header>
      }
    >
      {/* stats row, then overview: title left, story right */}
      <section className="cs-sec bh-first" id="overview">
        <div className="wrap">
          <dl className="bh-stats">
            {[
              ["12 wks", "From discovery to delivery"],
              ["3 rounds", "Of usability testing"],
              ["4.8★", "App Store rating at launch"],
            ].map(([v, l], i) => (
              <div key={v}>
                <span className="lab">{String(i + 1).padStart(2, "0")}</span>
                <dt>{v}</dt>
                <dd>{l}</dd>
              </div>
            ))}
          </dl>
          <div className="bh-split">
            <div>
              <span className="cs-no">01 · Overview</span>
              <h2 className="bh-h">A complete rethink of how parents navigate the earliest days.</h2>
            </div>
            <p className="bh-lede">
              Baby Haven was conceived as a single-destination platform for new parents, one that collapses fragmented
              apps, spreadsheets, and word-of-mouth into a unified, intelligent companion. Over 12 weeks, we redesigned the
              experience from the ground up: new information architecture, a cohesive design system, and features informed
              by 25 parent interviews. The result: a product that parents described as &ldquo;the first app that actually
              understands what it&apos;s like to have a newborn.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <Chapter
        id="problem"
        no="02"
        title={
          <span className="bh-pull">
            &ldquo;New parents juggle 6+ fragmented apps while running on no sleep, and still feel like they&apos;re
            doing it wrong.&rdquo;
          </span>
        }
      >
        <div className="bh-three">
          {[
            ["6+", "Apps to manage daily", "No single source of truth for feeding, sleep, diapers, vaccines, caregivers, and milestones."],
            ["83%", "Reported high anxiety", "Parents couldn't tell if patterns were healthy. They needed context, not just data."],
            ["2.4h", "Lost daily to coordination", "Caregiver handoffs, manual logging, and searching across tools consumed precious time."],
          ].map(([s, t, b]) => (
            <div className="bh-slate" key={t}>
              <b>{s}</b>
              <h3>{t}</h3>
              <p>{b}</p>
            </div>
          ))}
        </div>
      </Chapter>

      <Chapter id="research" no="03" title={<span className="bh-h">Research, 25 parent interviews.</span>}>
        <div className="bh-two">
          {personas.map((p) => (
            <div className="bh-persona" key={p.quote}>
              <blockquote>&ldquo;{p.quote}&rdquo;</blockquote>
              <ul className="bh-tags">
                {p.tags.map((t) => (
                  <li key={t} className="lab">
                    {t}
                  </li>
                ))}
              </ul>
              <div className="bh-pn">
                <div>
                  <span className="lab bh-bad">Pain points</span>
                  <ul>
                    {p.pain.map((x) => (
                      <li key={x}>
                        <CircleX size={14} aria-hidden className="bh-bad" /> {x}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span className="lab bh-good">Needs</span>
                  <ul>
                    {p.needs.map((x) => (
                      <li key={x}>
                        <CircleCheck size={14} aria-hidden className="bh-good" /> {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <ol className="bh-insights">
          {["Context over data", "3am is the moment", "Design for both parents", "Journals are emotional"].map((t, i) => (
            <li key={t}>
              <span className="lab">I-{i + 1}</span>
              <b>{t}</b>
            </li>
          ))}
        </ol>
      </Chapter>

      <Chapter
        id="process"
        no="04"
        title={<span className="bh-h">From 23 critical issues to 94% task completion.</span>}
        intro="Three rounds of moderated usability testing with 36 parents, each followed by a focused sprint. The most important iteration: the Quick Log."
      >
        <div className="bh-two">
          <div className="bh-iter">
            <div className="bh-iter-h">
              <span className="bh-ico bh-ico-bad">
                <CircleX size={16} aria-hidden />
              </span>
              <div>
                <span className="lab">V1 · Before</span>
                <h3>9-field logging form</h3>
              </div>
            </div>
            <ul>
              {["Volume field", "Type dropdown (6 options)", "Side selector", "Time picker", "Notes (free text)", "Pain indicator (1–5)", "Save button + confirmation modal"].map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="bh-result bad">
              <b>47 sec avg completion · 63% drop-off</b>
              <p>Round 1: 23 critical issues flagged</p>
            </div>
          </div>
          <div className="bh-iter">
            <div className="bh-iter-h">
              <span className="bh-ico bh-ico-good">
                <CircleCheck size={16} aria-hidden />
              </span>
              <div>
                <span className="lab">V3 · After</span>
                <h3>2-step smart log</h3>
              </div>
            </div>
            <ul>
              {["Log type (Feed / Sleep / Diaper)", "Smart volume pre-fill based on history", "Auto-timestamp (tap to adjust)", "Advanced options collapsed in accordion"].map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
            <div className="bh-result good">
              <b>4 sec avg completion · 94% completion rate</b>
              <p>Round 3: 4 minor issues · shipped</p>
            </div>
          </div>
        </div>

        <p className="lab bh-label">3 non-negotiable design principles</p>
        <div className="bh-three">
          {[
            [MousePointerClick, "3-tap maximum", "No core action, feeding, diaper, sleep requires more than 3 taps. Validated against real one-handed, sleep-deprived usage."],
            [Moon, "Dark mode first", "Designed for 2am before 2pm. High-contrast, low-stimulation dark mode protects parental night vision and reduces cognitive load."],
            [HeartPulse, "Context over data", "Numbers always appear with a WHO benchmark. Not '97ml', '97ml · within range for 6 weeks'. Anxiety reduction, not data logging."],
          ].map(([I, t, b]) => {
            const Icon = I as typeof Moon;
            return (
              <div className="bh-card" key={t as string}>
                <span className="bh-ico">
                  <Icon size={16} aria-hidden />
                </span>
                <h3>{t as string}</h3>
                <p>{b as string}</p>
              </div>
            );
          })}
        </div>

        <p className="lab bh-label">Competitive analysis</p>
        <h3 className="bh-h3">
          The category was split between clinical trackers and lifestyle journals, nobody owned both.
        </h3>
        <Table
          head={["Product", "Strength", "Gap", "Positioning"]}
          rows={[
            ...competitors.map((c) => ({ cells: c })),
            {
              hi: true,
              cells: [
                "Baby Haven (redesign)",
                "Unifies clinical tracking, credible medical support, and caregiving in one calm system",
                "–",
                "The trusted operating system for the first year",
              ],
            },
          ]}
        />
      </Chapter>

      <Chapter
        id="journey"
        no="05"
        title={<span className="bh-h">The emotional arc of early parenthood.</span>}
        intro="We mapped the full experience from hospital discharge to three-month milestone, tracking emotions, actions, and design opportunities at every touchpoint."
      >
        <Journey stages={journey} start={3} />
      </Chapter>

      <section className="cs-sec" id="architecture">
        <div className="wrap">
          <div className="bh-ia">
            <span className="cs-no">06 · Information architecture</span>
            <h2 className="bh-h">Five pillars. One coherent home.</h2>
            <p>
              We restructured the navigation from 11 disconnected sections into 5 intuitive pillars, each representing a
              distinct mental model of new parenthood.
            </p>
            <span className="bh-ia-root lab">Baby Haven</span>
            <div className="bh-ia-cols">
              {pillars.map(({ head, icon: Icon, items }) => (
                <div key={head}>
                  <span className="bh-ia-head">
                    <Icon size={16} aria-hidden />
                    {head}
                  </span>
                  <ul>
                    {items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Chapter
        no="07"
        title={<span className="bh-h">A MoSCoW pass against the 16-week timeline kept scope honest.</span>}
      >
        <div className="bh-moscow">
          {moscow.map((q, i) => (
            <div key={q.label} className={i === 0 ? "must" : undefined}>
              <span className="lab">
                <i aria-hidden /> {q.label}
              </span>
              <ul>
                {q.items.map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="lab bh-label">Product requirements summary</p>
        <Table
          head={["Feature", "Description", "Priority", "Success metric"]}
          rows={reqs.map(([f, d, p, m]) => ({
            cells: [f, d, <span key="p" className={`bh-prio${p === "Must" ? " must" : ""}`}>{p}</span>, m],
          }))}
        />
      </Chapter>

      <Chapter
        id="system"
        no="08"
        title={
          <span className="bh-h">
            Dusk &amp; Milk, a system built to be legible at 3am and credible in a pediatrician&apos;s office.
          </span>
        }
        intro="Every token was stress-tested under one constraint: a parent using the app one-handed, in low light, without their glasses."
      >
        <p className="lab bh-label">Color</p>
        <div className="bh-swatches">
          {colors.map((c) => (
            <div key={c.hex} style={{ background: c.hex, color: c.ink }}>
              <b>{c.name}</b>
              <span>{c.hex}</span>
            </div>
          ))}
        </div>

        <p className="lab bh-label">Typography</p>
        <dl className="bh-type">
          <div>
            <dt className="lab">Display / Fraunces</dt>
            <dd className={serif.className} style={{ fontSize: "clamp(24px, 2.6vw, 34px)" }}>
              Sleep, logged.
            </dd>
          </div>
          <div>
            <dt className="lab">Heading / Fraunces</dt>
            <dd className={serif.className} style={{ fontSize: 21, fontWeight: 500 }}>
              Vaccination due in 12 days
            </dd>
          </div>
          <div>
            <dt className="lab">Body / Inter</dt>
            <dd style={{ fontSize: 15 }}>Feed logged at 3:47 AM · 90 mL · left side</dd>
          </div>
          <div>
            <dt className="lab">Data / Plex Mono</dt>
            <dd className="bh-mono">62ND PERCENTILE · +180g THIS WEEK</dd>
          </div>
        </dl>

        <p className="lab bh-label">Spacing, 4pt base grid</p>
        <div className="bh-space">
          {[4, 8, 16, 24, 32, 48, 64].map((n) => (
            <div key={n}>
              <i style={{ height: n }} />
              <span>{n}</span>
            </div>
          ))}
        </div>

        <p className="lab bh-label">Iconography, 2px rounded stroke, no sharp terminals</p>
        <div className="bh-icons">
          {[Heart, Moon, Timer, User, Camera, MessageSquare].map((I, i) => (
            <span key={i}>
              <I size={18} strokeWidth={2} aria-hidden />
            </span>
          ))}
        </div>

        <p className="lab bh-label">Components</p>
        <div className="bh-chips">
          <span className="solid">Log feed</span>
          <span className="ghost">Book consult</span>
          <span className="field">Weight (kg)</span>
          <span className="toggle" role="img" aria-label="Toggle, on">
            <i />
          </span>
          <span className="soft">
            <Moon size={13} aria-hidden /> Night mode
          </span>
          <span className="due">Vaccine due</span>
        </div>

        <p className="lab bh-label">Accessibility commitments</p>
        <div className="bh-three">
          {[
            [Contrast, "AA+ contrast, everywhere", "Every text/background pair validated at 4.5:1 minimum, 7:1 for primary logging actions used at night."],
            [Hand, "One-handed reach zones", "Primary actions sit within the bottom 60% of the screen; the quick-log dial is thumb-reachable on all supported device sizes."],
            [Type, "Dynamic type & voice logging", "Full support up to 200% text scaling, plus a voice-log fallback for hands-full moments."],
          ].map(([I, t, b]) => {
            const Icon = I as typeof Moon;
            return (
              <div className="bh-card" key={t as string}>
                <span className="bh-ico">
                  <Icon size={16} aria-hidden />
                </span>
                <h3>{t as string}</h3>
                <p>{b as string}</p>
              </div>
            );
          })}
        </div>
      </Chapter>

      <section className="cs-sec" id="screens">
        <div className="wrap">
          <div className="bh-screens">
            <span className="cs-no">09 · Final screens</span>
            <h2 className="bh-h">
              Designed for 3am.
              <br />
              Beautiful at noon.
            </h2>
            <p>
              Core screens from the old design to the new final deliverable, each one validated across 3 rounds of
              usability testing with real new parents.
            </p>
            <div className="bh-pairs">
              {pairs.map((p) => (
                <figure className="bh-pair" key={p.old}>
                  <div className="bh-pair-old">
                    <Image
                      src={img(p.oldFile)}
                      alt={`Old design: ${p.old}`}
                      width={1008}
                      height={1636}
                      sizes="(min-width: 700px) 170px, 34vw"
                    />
                    <figcaption className="lab">{p.old}</figcaption>
                  </div>
                  {p.newFile ? (
                    <Image
                      className="bh-pair-new"
                      src={img(p.newFile)}
                      alt={`New design: ${p.now}`}
                      width={1160}
                      height={2000}
                      sizes="(min-width: 700px) 290px, 50vw"
                    />
                  ) : (
                    <Slot name={`New: ${p.now}`} ratio="9 / 19" className="bh-pair-new" />
                  )}
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cs-sec" id="reflection">
        <div className="wrap">
          <span className="cs-no">10 · Reflection</span>
          <h2 className="bh-h">What I&apos;d defend, what I&apos;d trade differently, and what&apos;s next.</h2>
          <div className="bh-reflect">
            <div>
              <h3>The hardest call was cutting customization to gain speed.</h3>
              <p>
                Removing the configurable dial felt like a step backward for power users. The data proved otherwise, but
                I&apos;d push for a progressive-disclosure version in v2, adding customization only after a parent&apos;s
                first 10 logs.
              </p>
            </div>
            <ul>
              {reflection.map(([k, v]) => (
                <li key={k}>
                  <b>{k}:</b> {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

    </CaseStudy>
  );
}

/** Ruled table. The first column is bold; `hi` marks the highlighted row. Scrolls sideways on phones. */
function Table({ head, rows }: { head: string[]; rows: { cells: React.ReactNode[]; hi?: boolean }[] }) {
  return (
    <div className="bh-table-wrap" tabIndex={0} role="region" aria-label={`${head[0]} table`}>
      <table className="bh-table">
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} className="lab">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className={r.hi ? "hi" : undefined}>
              {r.cells.map((c, j) => (
                <td key={j} data-label={head[j]}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
