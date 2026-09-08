export type StatItem = {
  value: string;
  label: string;
};

export type ImpactMetric = {
  before: string;
  after: string;
  label: string;
};

export type ScreenItem = {
  title: string;
  caption: string;
  bg: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  body: string;
};

export type CaseStudy = {
  slug: string;
  brand: string;
  meta: string;
  year: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  heroBg: string;
  heroAccent: string;
  stats: StatItem[];
  tags: string[];
  overview: {
    role: string;
    duration: string;
    team: string;
    scope: string[];
  };
  problem: {
    quote: string;
    body: string;
    insights: {
      stat: string;
      label: string;
      note: string;
    }[];
  };
  process: {
    intro: string;
    steps: ProcessStep[];
  };
  system: {
    intro: string;
    pillars: { title: string; body: string }[];
  };
  screens: {
    intro: string;
    items: ScreenItem[];
  };
  impact: {
    intro: string;
    metrics: ImpactMetric[];
    reflection: string;
  };
  next?: {
    slug: string;
    label: string;
  };
};

const babyHaven: CaseStudy = {
  slug: "baby-haven",
  brand: "BABY HAVEN",
  meta: "Baby Haven",
  year: "2025",
  eyebrow: "Baby Haven · 2025",
  title: "Baby Haven",
  subtitle:
    "A complete rethink of how new parents navigate the earliest days, one calm layer replacing six anxious tabs.",
  heroBg: "bg-gradient-to-br from-[#ffe4ec] via-[#fbe6ff] to-[#e0e7ff]",
  heroAccent: "text-accent-pink",
  stats: [
    { value: "12 wks", label: "End-to-end" },
    { value: "3 rounds", label: "of usability" },
    { value: "4.8★", label: "Concept score" },
  ],
  tags: ["UX Research", "Product Strategy", "Systems Design"],
  overview: {
    role: "Sole Product Designer",
    duration: "12 weeks · Q3 2025",
    team: "1 PM · 2 engineers · 1 clinician advisor",
    scope: [
      "Discovery research with 18 parents in the first 12 weeks",
      "Diary study across 3 sleep-tracking apps",
      "Information architecture reset",
      "Design system for a 3am-legible product",
      "High-fidelity prototype tested with parents in-home",
    ],
  },
  problem: {
    quote:
      "New parents juggle 6+ fragmented apps while running on no sleep, and still feel like they're doing it wrong.",
    body: "The category is split between clinical trackers (accurate but cold) and lifestyle journals (warm but shallow). Nobody owns both. Parents patch together spreadsheets, group chats, and reminders, then blame themselves for the gaps.",
    insights: [
      {
        stat: "23",
        label: "critical issues",
        note: "surfaced across 18 diary study participants",
      },
      {
        stat: "94%",
        label: "task completion",
        note: "in the redesigned prototype, up from 61%",
      },
      {
        stat: "6+",
        label: "apps replaced",
        note: "by a single calm home for the first year",
      },
    ],
  },
  process: {
    intro:
      "I worked in three overlapping loops: listen deeply, model the domain, then pressure-test with parents at the exact moments the product would be used, including 3am feedings.",
    steps: [
      {
        step: "01",
        title: "Research & Insights",
        body: "18 exit interviews, 3-week diary study, competitive teardowns across clinical trackers, journals, and community apps. Mapped the emotional arc of month 0 to month 12.",
      },
      {
        step: "02",
        title: "Wireframing & UX Strategy",
        body: "Rebuilt the IA around five pillars, sleep, feeding, growth, milestones, calm, with a shared timeline model instead of five disconnected feeds.",
      },
      {
        step: "03",
        title: "Prototyping & Testing",
        body: "Three fidelity rounds. Tested in participants' homes with the lights dimmed, one-handed, half-asleep. Copy, contrast, and tap targets rewritten each round.",
      },
    ],
  },
  system: {
    intro:
      "Five pillars, one coherent home. Every screen composes from the same primitives, so the app stays legible whether a parent is logged in at noon or 3am.",
    pillars: [
      {
        title: "Sleep",
        body: "One-tap sessions, gentle summaries, no guilt trip on missed logs.",
      },
      {
        title: "Feeding",
        body: "Bottle, breast, and solids share a timeline instead of splintering it.",
      },
      {
        title: "Growth",
        body: "Percentiles you can read at a glance, without the medical jargon.",
      },
      {
        title: "Milestones",
        body: "Warm, honest, celebrating range instead of a single ideal.",
      },
      {
        title: "Calm",
        body: "The layer that surfaces when it matters and disappears when it doesn't.",
      },
    ],
  },
  screens: {
    intro:
      "Designed for 3am. Beautiful at noon. The Dusk & Milk palette shifts contrast automatically at night, so tired eyes get bigger targets and a softer surface.",
    items: [
      {
        title: "Onboarding",
        caption:
          "Three questions to configure the home, no signup wall, no upsell.",
        bg: "bg-gradient-to-br from-[#fff1f5] to-[#ffe4ec]",
      },
      {
        title: "Sleep session",
        caption: "One tap to start, one to end. Zero fields to fill.",
        bg: "bg-gradient-to-br from-[#eef2ff] to-[#dbeafe]",
      },
      {
        title: "Feeding timeline",
        caption: "Everything on one thread. Cross-partner sync by default.",
        bg: "bg-gradient-to-br from-[#f3e8ff] to-[#e9d5ff]",
      },
      {
        title: "Growth chart",
        caption: "Plain-language percentiles with room for range, not fear.",
        bg: "bg-gradient-to-br from-[#ecfeff] to-[#cffafe]",
      },
    ],
  },
  impact: {
    intro:
      "The prototype went into three rounds of in-home usability testing with 12 parents. Every metric moved in the right direction, but the number that mattered most was the one we didn't set out to measure, how parents felt afterwards.",
    metrics: [
      {
        before: "61%",
        after: "94%",
        label: "task completion, logging a night feed",
      },
      { before: "6+", after: "1", label: "apps parents said they'd replace" },
      {
        before: "2.9★",
        after: "4.8★",
        label: "would-recommend score (n=12)",
      },
    ],
    reflection:
      "What I'd defend: the choice to build one timeline instead of five. What I'd trade differently: I'd invest more in the shared-partner model earlier, three of five follow-up requests were about a partner not seeing the same feed. What's next: shipping the calm, trusted layer between parents and their baby's first year.",
  },
  next: { slug: "meerge", label: "Meerge Africa" },
};

const meerge: CaseStudy = {
  slug: "meerge",
  brand: "MEERGE",
  meta: "Meerge Africa",
  year: "2025, 2026",
  eyebrow: "Meerge · 2025 → 2026",
  title: "Rebuilding supplier discovery for pan-African trade",
  subtitle:
    "A B2B marketplace where discovery, verification, and negotiation live on one thread instead of three broken ones.",
  heroBg: "bg-gradient-to-br from-[#ede9fe] via-[#f5f3ff] to-[#e0e7ff]",
  heroAccent: "text-accent-purple",
  stats: [
    { value: "18", label: "Merchant interviews" },
    { value: "42%", label: "Faster time-to-first-order" },
    { value: "4 mkts", label: "Rolled out across" },
  ],
  tags: ["UX Research", "Product Strategy", "Systems Design"],
  overview: {
    role: "Senior Product Designer",
    duration: "9 months · Q1 2025 → Q1 2026",
    team: "2 PMs · 4 engineers · 1 growth lead",
    scope: [
      "Merchant discovery research across Nigeria, Kenya, Ghana, Egypt",
      "Reset of the search + verification IA",
      "Component library for the merchant app",
      "Negotiation thread, messaging + offer built into one surface",
    ],
  },
  problem: {
    quote:
      "Discovery, verification, and negotiation lived in three different apps, each one leaking trust at every handoff.",
    body: "Buyers were finding suppliers on Instagram, verifying them on WhatsApp, and negotiating on paper. Every gap between those tools was a chance to drop the order, and to blame the platform when it went wrong.",
    insights: [
      {
        stat: "3 apps",
        label: "average per order",
        note: "before Meerge, Instagram → WhatsApp → Paper",
      },
      {
        stat: "42%",
        label: "faster to first order",
        note: "in the redesigned flow",
      },
      {
        stat: "18",
        label: "merchant interviews",
        note: "across four markets",
      },
    ],
  },
  process: {
    intro:
      "Discovery in four markets. Each one is a different set of assumptions about trust. The design had to hold all four without flattening them.",
    steps: [
      {
        step: "01",
        title: "Field research",
        body: "Two weeks per market, shadowing buyers in Lagos, Nairobi, Accra, and Cairo. Mapped how trust actually got established.",
      },
      {
        step: "02",
        title: "IA reset",
        body: "Rebuilt search + verification as one flow. Verification is a state on a supplier, not a separate app.",
      },
      {
        step: "03",
        title: "Component system",
        body: "Merchant components share a design language with the buyer app but ship at a different rhythm. Tokens keep them in sync.",
      },
    ],
  },
  system: {
    intro:
      "One negotiation thread. Every offer, message, and document lives on the same timeline, nothing lost between tools.",
    pillars: [
      { title: "Discover", body: "Search that respects local trust signals." },
      { title: "Verify", body: "A single state on the supplier profile." },
      { title: "Negotiate", body: "Offers as messages, messages as offers." },
      { title: "Fulfil", body: "Handoff to logistics without leaving the thread." },
    ],
  },
  screens: {
    intro:
      "Screens designed to look native in every market. Type scale, currency, and copy adapt without a redesign per country.",
    items: [
      { title: "Supplier profile", caption: "Verification as a first-class state.", bg: "bg-gradient-to-br from-[#ede9fe] to-[#c7d2fe]" },
      { title: "Negotiation thread", caption: "Offers live inside the messages.", bg: "bg-gradient-to-br from-[#f5f3ff] to-[#e0e7ff]" },
      { title: "Search", caption: "Local trust signals in the primary hit.", bg: "bg-gradient-to-br from-[#faf5ff] to-[#f3e8ff]" },
      { title: "Order thread", caption: "One place to see everything, always.", bg: "bg-gradient-to-br from-[#eef2ff] to-[#c7d2fe]" },
    ],
  },
  impact: {
    intro:
      "Rolled out across four markets over three quarters. The number that moved fastest was time-to-first-order, the moment a buyer stopped feeling like they were on their own.",
    metrics: [
      { before: "3.1d", after: "1.8d", label: "median time to first order" },
      { before: "48%", after: "71%", label: "verified-supplier reach rate" },
      { before: "2.4x", after: "1.0x", label: "app switches per order" },
    ],
    reflection:
      "What I'd defend: putting negotiation on the same thread as messages. What I'd trade differently: I'd start with the seller side, not the buyer, the seller's story is what actually moves the metric. What's next: taking the same thread model to logistics.",
  },
  next: { slug: "landbridge", label: "LandBridge Consulting" },
};

const landbridge: CaseStudy = {
  slug: "landbridge",
  brand: "LANDBRIDGE",
  meta: "LandBridge Consulting",
  year: "2025",
  eyebrow: "LandBridge · 2025",
  title: "Building a design system from the ground up",
  subtitle:
    "One shared vocabulary across three product squads, tokens, components, and documentation that engineering could actually trust.",
  heroBg: "bg-gradient-to-br from-[#fce7f3] via-[#fbcfe8] to-[#f9a8d4]",
  heroAccent: "text-accent-pink",
  stats: [
    { value: "3", label: "Squads unified" },
    { value: "168", label: "Components" },
    { value: "70%", label: "Design-review time cut" },
  ],
  tags: ["Design Systems", "Component Library", "Interaction Design"],
  overview: {
    role: "Design System Lead",
    duration: "6 months",
    team: "3 designers · 6 engineers · 1 tech writer",
    scope: [
      "Token architecture with mode-aware color + type ramps",
      "168-component library, Figma + React",
      "Contribution model + review rota",
      "Docs site with live examples and copy-paste snippets",
    ],
  },
  problem: {
    quote:
      "Three squads. Three interpretations of the same button. Zero shared source of truth.",
    body: "Reviews were negotiations. Engineers were reverse-engineering Figma to guess intent. The design system existed on paper and nowhere in the codebase.",
    insights: [
      {
        stat: "12",
        label: "button variants",
        note: "consolidated to 3",
      },
      {
        stat: "70%",
        label: "design-review time",
        note: "cut across squads",
      },
      {
        stat: "168",
        label: "components shipped",
        note: "in Figma + React, paired",
      },
    ],
  },
  process: {
    intro:
      "Tokens first. Components second. Documentation as the layer that made the other two stick.",
    steps: [
      { step: "01", title: "Token architecture", body: "Colour, type, spacing, radius, elevation, each with intent-based names that survive rebrands." },
      { step: "02", title: "Component library", body: "Paired Figma + React from day one. Every prop in one had to have a variant in the other." },
      { step: "03", title: "Contribution model", body: "A weekly review rota, a template for proposals, and a public changelog. The system stopped being mine and started being ours." },
    ],
  },
  system: {
    intro:
      "The system is the product. Everything else composes from it.",
    pillars: [
      { title: "Tokens", body: "Intent-based names, semantic before literal." },
      { title: "Components", body: "Figma + React always paired, never one without the other." },
      { title: "Documentation", body: "Docs are code, examples are live, not screenshots." },
      { title: "Contribution", body: "A repeatable path to add or change anything." },
    ],
  },
  screens: {
    intro:
      "Screens rebuilt from the system, top to bottom. Every one composes from primitives that have a name, a token, and a place in the docs.",
    items: [
      { title: "Docs, Token page", body: "", caption: "Live examples, copy-paste, semantic names.", bg: "bg-gradient-to-br from-[#fce7f3] to-[#fbcfe8]" },
      { title: "Docs, Component page", body: "", caption: "Figma spec on the left, React on the right.", bg: "bg-gradient-to-br from-[#fdf2f8] to-[#fce7f3]" },
      { title: "Squad rollout", body: "", caption: "Migration guides squad by squad.", bg: "bg-gradient-to-br from-[#fff1f2] to-[#ffe4e6]" },
      { title: "Contribution flow", body: "", caption: "Proposal → prototype → review → merge.", bg: "bg-gradient-to-br from-[#fce7f3] to-[#f9a8d4]" },
    ].map(({ title, caption, bg }) => ({ title, caption, bg })),
  },
  impact: {
    intro:
      "Six months in, the system was doing the work three squads used to argue about. The number I care about most: how much design review shrank.",
    metrics: [
      { before: "60min", after: "18min", label: "avg design-review time" },
      { before: "12", after: "3", label: "button variants" },
      { before: "2 wk", after: "3 days", label: "time to onboard a new squad" },
    ],
    reflection:
      "What I'd defend: pairing Figma and React from day one. What I'd trade differently: I'd invest more in documentation ergonomics earlier, the docs are what made the system spread. What's next: adding motion and interaction tokens.",
  },
  next: { slug: "eye-level", label: "Eye Level" },
};

const eyeLevel: CaseStudy = {
  slug: "eye-level",
  brand: "EYE LEVEL",
  meta: "Eye Level",
  year: "2025",
  eyebrow: "Eye Level · 2025",
  title: "Improving learning outcomes through a reimagined student dashboard",
  subtitle:
    "An AI-powered dashboard that tells a student what to work on next, without ever making them feel behind.",
  heroBg: "bg-gradient-to-br from-[#cffafe] via-[#a5f3fc] to-[#67e8f9]",
  heroAccent: "text-accent-cyan",
  stats: [
    { value: "34%", label: "Weekly return lift" },
    { value: "8 wks", label: "Design to launch" },
    { value: "4 tests", label: "Usability rounds" },
  ],
  tags: ["AI Experience", "Product Design", "Prototyping"],
  overview: {
    role: "Product Designer",
    duration: "8 weeks",
    team: "1 PM · 3 engineers · 1 ML researcher",
    scope: [
      "Student research across 4 grade cohorts",
      "AI copy guidelines, never scolding, always specific",
      "Dashboard IA + adaptive next-best-action model",
      "Design + prototype + 4 rounds of usability testing",
    ],
  },
  problem: {
    quote:
      "Every dashboard tells students where they've fallen behind. None of them tell students where to start today.",
    body: "The signals were all there, quizzes, streaks, mastery, but the interface used them as scoreboards instead of a map. Students opened the app, saw red, and closed it.",
    insights: [
      {
        stat: "34%",
        label: "weekly return lift",
        note: "after switching to next-best-action framing",
      },
      {
        stat: "4",
        label: "usability rounds",
        note: "each rewriting AI voice + tone",
      },
      {
        stat: "1",
        label: "clear next step",
        note: "always in view, never a red number",
      },
    ],
  },
  process: {
    intro:
      "The AI existed. The interface didn't know how to speak for it. Most of the work was writing, copy guidelines, tone samples, failure states.",
    steps: [
      { step: "01", title: "Voice + tone", body: "Wrote a copy playbook for the AI, never scolding, always specific, always a next step." },
      { step: "02", title: "Dashboard IA", body: "Rebuilt around one primary surface, 'what to work on today', with progress relegated to a supporting role." },
      { step: "03", title: "Usability testing", body: "Four rounds. Each one rewriting how the AI framed a struggle." },
    ],
  },
  system: {
    intro:
      "One primary surface, three supporting layers. The AI speaks the same way in each of them.",
    pillars: [
      { title: "Today", body: "One clear next step. Always in view." },
      { title: "Progress", body: "Direction, not scoreboard." },
      { title: "Practice", body: "Adaptive, but never punishing." },
      { title: "Coach", body: "The AI voice, specific, human, kind." },
    ],
  },
  screens: {
    intro:
      "Screens where the AI has a voice and a role, not just a widget.",
    items: [
      { title: "Today dashboard", caption: "One next step, front and center.", bg: "bg-gradient-to-br from-[#cffafe] to-[#a5f3fc]" },
      { title: "Practice session", caption: "Adaptive, in the AI's own voice.", bg: "bg-gradient-to-br from-[#ecfeff] to-[#cffafe]" },
      { title: "Progress view", caption: "Direction, not scoreboard.", bg: "bg-gradient-to-br from-[#e0f2fe] to-[#bae6fd]" },
      { title: "Coach reply", caption: "Specific, human, kind.", bg: "bg-gradient-to-br from-[#cffafe] to-[#67e8f9]" },
    ],
  },
  impact: {
    intro:
      "Launched with a small cohort. Return-rate moved first, and stayed moved.",
    metrics: [
      { before: "48%", after: "82%", label: "weekly-return" },
      { before: "Red", after: "Next step", label: "primary surface" },
      { before: "2.1★", after: "4.5★", label: "student satisfaction (n=68)" },
    ],
    reflection:
      "What I'd defend: making the AI's voice a design decision. What I'd trade differently: I'd start the copy playbook a week earlier, everything downstream depended on it. What's next: bringing the same voice to parent + teacher views.",
  },
  next: { slug: "baby-haven", label: "Baby Haven" },
};

export const caseStudies: CaseStudy[] = [
  babyHaven,
  landbridge,
  eyeLevel,
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export const caseStudySections = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "process", label: "Design Process" },
  { id: "screens", label: "Key Screens" },
  { id: "impact", label: "Impact" },
] as const;
