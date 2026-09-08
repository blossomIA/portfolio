"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  TrendingUp,
  Star,
  Clock,
  Award,
  AlertCircle,
  ShieldOff,
  EyeOff,
  Smartphone,
  Compass,
  Lightbulb,
  Sparkles,
  Layers,
  BarChart3,
  RefreshCw,
  Check,
} from "lucide-react";

// ---------- Palette (Token Nest brand) ----------
const BRAND_GREEN = "#5F9A61";
const DARK_BG = "#0F1F1B";
const SURFACE = "#1C2B2E";
const MINT = "#A8D5A2";
const TEXT_2 = "#B3B3B3";
const SUCCESS = "#66BB6A";
const ERROR = "#E57373";
const CHART_YELLOW = "#D9F03B";
const CHART_CYAN = "#22D3EE";
const CHART_PINK = "#F472B6";
const CHART_DARKGREEN = "#2F5F44";

// ---------- Sub-nav pills ----------
const SUB_NAV = [
  { id: "overview", label: "Overview" },
  { id: "research", label: "Research" },
  { id: "process", label: "Process" },
  { id: "screens", label: "Screens" },
  { id: "contact", label: "Contact" },
];

// ---------- Pie chart util ----------
type PieSlice = { label: string; value: number; color: string };
function Pie({ slices, size = 150 }: { slices: PieSlice[]; size?: number }) {
  const r = size / 2;
  const total = slices.reduce((s, x) => s + x.value, 0);
  // Round coords to 3 decimals so SSR and client render byte-identical paths
  // (Math.cos/sin can differ by 1 ULP across JS engines, tripping hydration).
  const fmt = (n: number) => n.toFixed(3);
  let start = -Math.PI / 2;
  const paths = slices.map((s) => {
    const angle = (s.value / total) * Math.PI * 2;
    const end = start + angle;
    const largeArc = angle > Math.PI ? 1 : 0;
    const x1 = r + r * Math.cos(start);
    const y1 = r + r * Math.sin(start);
    const x2 = r + r * Math.cos(end);
    const y2 = r + r * Math.sin(end);
    const d = `M ${r} ${r} L ${fmt(x1)} ${fmt(y1)} A ${r} ${r} 0 ${largeArc} 1 ${fmt(x2)} ${fmt(y2)} Z`;
    start = end;
    return { d, color: s.color };
  });
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {paths.map((p, i) => (
        <path key={i} d={p.d} fill={p.color} />
      ))}
    </svg>
  );
}

function ChartCard({
  question,
  slices,
}: {
  question: string;
  slices: PieSlice[];
}) {
  return (
    <div>
      <p className="mb-4 text-[13px] leading-[1.5] text-white">
        <span className="text-[#66BB6A]">•</span> {question}
      </p>
      <div className="flex items-center gap-6">
        <Pie slices={slices} size={130} />
        <ul className="space-y-1.5 text-[11px]">
          {slices.map((s) => (
            <li key={s.label} className="flex items-center gap-2 text-white/85">
              <span
                className="inline-block h-2.5 w-4 rounded-sm"
                style={{ backgroundColor: s.color }}
              />
              {s.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ---------- Reusable section wrapper ----------
function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`mx-auto w-full max-w-[1200px] px-6 py-16 md:py-24 ${className}`}
    >
      {children}
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[36px] md:text-[52px] leading-[1.05] tracking-[-0.01em] text-white"
      style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
    >
      {children}
    </h2>
  );
}

// ---------- Light & Dark Mode section ----------
function ModeSection() {
  const [mode, setMode] = useState<"dark" | "light">("light");

  const isDark = mode === "dark";
  const phones = isDark
    ? [
        { title: "Home",       img: "/images/case-studies/token-nest/dm-home.png" },
        { title: "Withdrawal", img: "/images/case-studies/token-nest/dm-withdrawal.png" },
        { title: "Markets",    img: "/images/case-studies/token-nest/dm-markets.png" },
      ]
    : [
        { title: "Home",       img: "/images/case-studies/token-nest/lm-home.png" },
        { title: "Withdrawal", img: "/images/case-studies/token-nest/lm-withdrawal.png" },
        { title: "Markets",    img: "/images/case-studies/token-nest/lm-markets.png" },
      ];

  const primaryText = isDark ? "#FFFFFF" : "#1E1E1E";
  const swatches = [
    { name: "Background",   hex: "#1B2B1B" },
    { name: "Surface",      hex: "#1C2B2E" },
    { name: "Primary Text", hex: primaryText },
    { name: "Accent",       hex: "#5F9A61" },
  ];

  return (
    <Section>
      <H2>Light &amp; Dark Mode</H2>
      <p className="mt-6 max-w-[720px] text-[14px] leading-[1.7] text-white/70">
        Both modes designed from scratch, not just a color inversion. Contrast
        ratios meet WCAG AA across the entire app.
      </p>

      <div className="mt-8 flex gap-3">
        <button
          type="button"
          onClick={() => setMode("dark")}
          className="rounded-full px-6 py-2 text-[13px] font-medium transition-colors"
          style={{
            backgroundColor: isDark ? BRAND_GREEN : "transparent",
            border: isDark ? "1px solid transparent" : "1px solid rgba(255,255,255,0.25)",
            color: isDark ? "#0F1F1B" : "rgba(255,255,255,0.85)",
          }}
        >
          Dark Mode
        </button>
        <button
          type="button"
          onClick={() => setMode("light")}
          className="rounded-full px-6 py-2 text-[13px] font-medium transition-colors"
          style={{
            backgroundColor: !isDark ? BRAND_GREEN : "transparent",
            border: !isDark ? "1px solid transparent" : "1px solid rgba(255,255,255,0.25)",
            color: !isDark ? "#0F1F1B" : "rgba(255,255,255,0.85)",
          }}
        >
          Light Mode
        </button>
      </div>

      {/* Panel wrapping phones + palette rows */}
      <div
        className="mt-10 rounded-[28px] border border-white/10 p-6 md:p-8"
        style={{ backgroundColor: "#132922" }}
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {phones.map(({ title, img }) => (
            <div
              key={title}
              className="rounded-[22px] p-5 border border-white/10"
              style={{ backgroundColor: SURFACE }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[16px] text-white">{title}</span>
                <span
                  className="size-4 rounded-full"
                  style={{ backgroundColor: "#3D5A44" }}
                />
              </div>
              <div className="relative mx-auto aspect-[9/16] w-full overflow-hidden rounded-xl">
                <Image
                  src={img}
                  alt={`${title}, ${mode} mode`}
                  fill
                  sizes="(min-width:768px) 340px, 100vw"
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
          {swatches.map(({ name, hex }) => (
            <div
              key={name}
              className="flex items-center justify-between rounded-2xl border border-white/10 px-5 py-4"
              style={{ backgroundColor: "#1F2F26" }}
            >
              <span className="text-[15px] text-white/85">{name}</span>
              <span className="font-mono text-[15px] font-bold text-white">
                {hex}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

// ---------- Page ----------
export default function TokenNestPage() {
  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: DARK_BG, fontFamily: 'var(--font-sans)' }}
    >
      {/* Sub-nav */}
      <div className="sticky top-4 z-40 mx-auto mt-6 flex w-fit items-center gap-6 rounded-full border border-white/10 bg-[#111C1F]/90 px-6 py-3 backdrop-blur-xl">
        <span
          className="font-mono text-[11px] uppercase tracking-[0.24em] text-white"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Token Nest
        </span>
        <div className="flex items-center gap-1">
          {SUB_NAV.slice(0, 4).map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full px-3 py-1.5 text-[12px] text-white/70 transition-colors hover:bg-white/10 hover:text-white"
            >
              {s.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#1E3D2A] px-3 py-1.5 text-[12px] text-[#8AE28F] hover:bg-[#26522F]"
          >
            <ArrowRight className="size-3" />
            Contact
          </a>
        </div>
      </div>

      {/* --- HERO --- */}
      <Section id="overview" className="!pt-16 text-center">
        <div className="mx-auto mb-6 inline-block">
          <div
            className="text-[64px] font-bold"
            style={{ color: BRAND_GREEN, fontFamily: 'var(--font-display)' }}
          >
            KE
          </div>
        </div>
        <h1
          className="mx-auto text-[54px] md:text-[92px] font-bold leading-[1] tracking-[-0.01em]"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          TOKEN NEST
        </h1>
        <p
          className="mt-6 text-[18px]"
          style={{ color: MINT, fontFamily: 'var(--font-display)' }}
        >
          Blockchain Crypto Wallet App
        </p>
        <p className="mx-auto mt-6 max-w-[560px] text-[14px] leading-[1.7] text-white/70">
          A comprehensive UX/UI case study on designing a secure, intuitive
          cryptocurrency portfolio management app from research to
          high-fidelity screens.
        </p>
        <div className="mx-auto mt-8 flex flex-wrap justify-center gap-3">
          {["UX Research", "UI Design", "Prototyping", "Usability Testing"].map(
            (t) => (
              <span
                key={t}
                className="rounded-full border border-[#2F5F44] px-4 py-2 text-[13px]"
                style={{ color: MINT, backgroundColor: "#132922" }}
              >
                {t}
              </span>
            )
          )}
        </div>

        <div className="relative mx-auto mt-14 aspect-[1600/1199] w-full max-w-[1400px]">
          <Image
            src="/images/case-studies/token-nest/hero.png"
            alt="Token Nest wallet mockups"
            fill
            className="object-contain"
            unoptimized
            priority
          />
        </div>
      </Section>

      {/* --- PROJECT OVERVIEW --- */}
      <Section>
        <H2>Project Overview</H2>
        <p className="mt-6 max-w-[720px] text-[15px] leading-[1.75] text-white/70">
          Token Nest is a blockchain-powered crypto wallet and portfolio tracker
          designed to make decentralized finance accessible to everyday users.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              t: "The Challenge",
              b: "Cryptocurrency apps are notoriously complex. Existing solutions overwhelm new users with jargon, poor navigation, and trust-eroding UI patterns. Token Nest needed to bridge the gap between sophisticated functionality and approachable design.",
            },
            {
              t: "The Solution",
              b: "A clean, security-first mobile experience with progressive disclosure, revealing complexity only as users need it. Streamlined onboarding, real-time portfolio dashboards, and clear transaction flows built around user mental models.",
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl p-6 border border-white/10"
              style={{ backgroundColor: SURFACE }}
            >
              <h3 className="text-[17px] font-semibold text-white">{c.t}</h3>
              <p className="mt-3 text-[13.5px] leading-[1.7] text-white/70">
                {c.b}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { icon: TrendingUp, value: "40%", label: "Reduced onboarding drop-off" },
            { icon: Star, value: "4.8★", label: "Target user satisfaction score" },
            { icon: Clock, value: "2 min", label: "Average time-to-first-trade" },
            { icon: Award, value: "92%", label: "Task completion rate in testing" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-5 border border-white/10"
              style={{ backgroundColor: SURFACE }}
            >
              <div
                className="mb-4 flex size-9 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#1E3D2A", color: MINT }}
              >
                <s.icon className="size-4" strokeWidth={2} />
              </div>
              <p className="text-[24px] font-bold text-white leading-none">
                {s.value}
              </p>
              <p className="mt-3 text-[12px] leading-[1.4] text-white/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* --- PROBLEM STATEMENT --- */}
      <Section id="problem">
        <H2>Problem Statement</H2>
        <p className="mt-6 max-w-[720px] text-[14px] leading-[1.7] text-white/70">
          How might we design a crypto wallet app that earns user trust,
          reduces cognitive load, and makes blockchain technology feel
          approachable?
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {[
            {
              icon: AlertCircle,
              t: "Cognitive Overload",
              b: "Users are bombarded with charts, tickers, and jargon before they understand the basics.",
            },
            {
              icon: ShieldOff,
              t: "Trust Deficit",
              b: "Security concerns are the #1 barrier, unclear wallet authentication and opaque transaction fees erode confidence.",
            },
            {
              icon: EyeOff,
              t: "Poor Discoverability",
              b: "Key features like send/receive and swap are buried in nested menus, causing abandonment.",
            },
            {
              icon: Smartphone,
              t: "No Adaptive UI",
              b: "Most crypto apps lack light/dark mode parity and accessible contrast ratios, excluding a large user segment.",
            },
          ].map((p) => (
            <div
              key={p.t}
              className="flex gap-4 rounded-2xl p-5 border border-white/10"
              style={{ backgroundColor: SURFACE }}
            >
              <div
                className="flex size-9 shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#3E1D1D", color: ERROR }}
              >
                <p.icon className="size-4" strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-[15px] font-semibold text-white">{p.t}</h3>
                <p className="mt-1.5 text-[12.5px] leading-[1.6] text-white/65">
                  {p.b}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* HMW quote card */}
        <div
          className="mt-10 rounded-2xl p-10 text-center"
          style={{
            background:
              "linear-gradient(180deg, #1D4B32 0%, #143823 100%)",
            border: "1px solid #2F5F44",
          }}
        >
          <p
            className="font-mono text-[11px] uppercase tracking-[0.28em]"
            style={{ color: MINT }}
          >
            How might we
          </p>
          <p className="mx-auto mt-4 max-w-[820px] text-[24px] md:text-[28px] leading-[1.35] text-white">
            &ldquo;Design a crypto experience so clear and trustworthy that
            users feel confident managing real money on their first try?&rdquo;
          </p>
        </div>
      </Section>

      {/* --- RESEARCH & DISCOVERY --- */}
      <Section id="research">
        <H2>Research &amp; Discovery</H2>
        <p className="mt-6 max-w-[720px] text-[14px] leading-[1.7] text-white/70">
          Mixed-method research: 120 survey respondents + 8 in-depth user
          interviews + competitive audit of 4 leading crypto apps.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* survey card */}
          <div
            className="rounded-2xl p-6 border border-white/10"
            style={{ backgroundColor: SURFACE }}
          >
            <h3
              className="text-[18px]"
              style={{ fontFamily: 'var(--font-display)', color: MINT }}
            >
              What users prioritize in a crypto app
            </h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-white/50">
              Survey · n=120
            </p>
            <div className="mt-6 flex items-center gap-8">
              <Pie
                slices={[
                  { label: "Security", value: 38, color: BRAND_GREEN },
                  { label: "Ease of Use", value: 29, color: CHART_YELLOW },
                  { label: "Speed", value: 18, color: CHART_DARKGREEN },
                  { label: "Low Fees", value: 15, color: CHART_PINK },
                ]}
                size={160}
              />
              <ul className="flex-1 space-y-2 text-[12.5px]">
                {[
                  ["Security", "38%", BRAND_GREEN],
                  ["Ease of Use", "29%", CHART_YELLOW],
                  ["Speed", "18%", CHART_DARKGREEN],
                  ["Low Fees", "15%", CHART_PINK],
                ].map(([l, v, c]) => (
                  <li key={l as string} className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-white/85">
                      <span
                        className="inline-block h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: c as string }}
                      />
                      {l}
                    </span>
                    <span className="text-white">{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* insights card */}
          <div
            className="rounded-2xl p-6 border border-white/10"
            style={{ backgroundColor: SURFACE }}
          >
            <h3
              className="text-[18px]"
              style={{ fontFamily: 'var(--font-display)', color: MINT }}
            >
              Key Survey Insights
            </h3>
            <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-white/50">
              Interview synthesis · n=8
            </p>
            <ul className="mt-5 space-y-4 text-[13px] leading-[1.55]">
              {[
                ["76%", "of users abandoned a crypto app due to confusing onboarding"],
                ["83%", "expressed anxiety about making irreversible transaction mistakes"],
                ["61%", "check portfolio balance at least 3× per day"],
                ["54%", "prefer dark mode for extended financial app sessions"],
              ].map(([stat, note]) => (
                <li key={stat} className="flex items-start gap-4">
                  <span
                    className="text-[22px] font-bold shrink-0 w-14"
                    style={{ color: BRAND_GREEN }}
                  >
                    {stat}
                  </span>
                  <span className="text-white/75">{note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 9 pie chart grid */}
        <div
          className="mt-8 rounded-2xl p-8 border border-white/10"
          style={{ backgroundColor: SURFACE }}
        >
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            <ChartCard
              question="How often do you use crypto trading apps?"
              slices={[
                { label: "A few times a week", value: 35, color: CHART_DARKGREEN },
                { label: "Once a day", value: 25, color: CHART_YELLOW },
                { label: "Several times a day", value: 25, color: CHART_CYAN },
                { label: "Rarely", value: 15, color: CHART_PINK },
              ]}
            />
            <ChartCard
              question="What are the main reasons for using cryptocurrency trading apps?"
              slices={[
                { label: "To buy and sell cryptocurrencies", value: 34, color: CHART_DARKGREEN },
                { label: "To explore new investment opportunities", value: 26, color: CHART_YELLOW },
                { label: "To track my portfolio", value: 22, color: CHART_CYAN },
                { label: "To monitor market trends", value: 18, color: CHART_PINK },
              ]}
            />
            <ChartCard
              question="What features do you like in crypto apps?"
              slices={[
                { label: "Easy-to-use app", value: 32, color: CHART_YELLOW },
                { label: "Secure wallet storage", value: 28, color: CHART_CYAN },
                { label: "Variety of cryptocurrencies supported", value: 22, color: CHART_DARKGREEN },
                { label: "Real-time data", value: 18, color: CHART_PINK },
              ]}
            />
            <ChartCard
              question="What challenges do you face with crypto apps?"
              slices={[
                { label: "Complex user interface", value: 34, color: CHART_PINK },
                { label: "Concerns about security", value: 28, color: CHART_YELLOW },
                { label: "High transaction fees", value: 22, color: CHART_CYAN },
                { label: "Limited customer support", value: 16, color: CHART_DARKGREEN },
              ]}
            />
            <ChartCard
              question="How easy is it to use your current crypto app?"
              slices={[
                { label: "Easy", value: 45, color: CHART_CYAN },
                { label: "Difficult", value: 35, color: CHART_YELLOW },
                { label: "Neutral", value: 20, color: CHART_DARKGREEN },
              ]}
            />
            <ChartCard
              question="How can crypto app interfaces improve?"
              slices={[
                { label: "Simplify navigation", value: 32, color: CHART_CYAN },
                { label: "Provide clear instructions and guides", value: 26, color: CHART_YELLOW },
                { label: "Lessen transaction fees", value: 22, color: CHART_DARKGREEN },
                { label: "Customize settings", value: 20, color: CHART_PINK },
              ]}
            />
            <ChartCard
              question="What makes you trust a crypto app?"
              slices={[
                { label: "Strong reputation", value: 34, color: CHART_DARKGREEN },
                { label: "Positive user reviews", value: 26, color: CHART_YELLOW },
                { label: "Transparent fees", value: 22, color: CHART_CYAN },
                { label: "Popularity", value: 18, color: CHART_PINK },
              ]}
            />
            <ChartCard
              question="Are you satisfied with your current crypto app customer support"
              slices={[
                { label: "Satisfied", value: 40, color: CHART_YELLOW },
                { label: "Dissatisfied", value: 35, color: CHART_CYAN },
                { label: "Neutral", value: 25, color: CHART_DARKGREEN },
              ]}
            />
          </div>

          <div className="mt-10 flex justify-center">
            <ChartCard
              question="Would you recommend your current crypto app?"
              slices={[
                { label: "Probably", value: 30, color: CHART_DARKGREEN },
                { label: "Not sure", value: 25, color: CHART_YELLOW },
                { label: "Definitely", value: 25, color: CHART_CYAN },
                { label: "No", value: 20, color: CHART_PINK },
              ]}
            />
          </div>

          <p className="mt-10 text-center text-[13px] leading-[1.7] text-white/60 max-w-[720px] mx-auto">
            These questions helped me gather insights into users behaviors,
            preferences, pain points, and satisfaction levels with
            cryptocurrency trading apps, guiding the design and development of
            a more user-friendly and effective app.
          </p>
        </div>

        {/* Competitive Analysis */}
        <div
          className="mt-8 rounded-2xl p-8 border border-white/10"
          style={{ backgroundColor: SURFACE }}
        >
          <h3 className="text-[18px] font-semibold text-white">Competitive Analysis</h3>
          <p className="mt-2 text-[13px] text-white/60">
            Scored on Ease of Use, Trust Signals &amp; Feature Depth. We need
            to understand how users interact with them.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {[
              {
                name: "Coinbase",
                mark: "C",
                strength:
                  "Coinbase is known for its user-friendly interface and beginner-friendly approach, making it easy for users like Sarah to buy, sell, and manage cryptocurrencies. It offers a wide range of cryptocurrencies and provides educational resources to help users understand the market.",
                weakness:
                  "Coinbase has been criticised for its relatively high transaction fees compared to other platforms. Its customer support is sometimes criticised for being slow to respond.",
              },
              {
                name: "Kraken",
                mark: "M",
                strength:
                  "Kraken is known for its strong security measures and regulatory compliance, providing users with peace of mind when it comes to protecting their funds. It offers a wide range of cryptocurrencies and trading pairs, as well as margin trading and staking options.",
                weakness:
                  "Kraken's interface may appear more complex compared to other more beginner-friendly platforms. Its customer support has received mixed reviews in terms of responsiveness and effectiveness.",
              },
            ].map((c) => (
              <div
                key={c.name}
                className="rounded-xl p-5 border"
                style={{ borderColor: "#2F5F44", backgroundColor: "#0F1F1B" }}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-[16px] font-medium text-white">{c.name}</h4>
                  <span
                    className="flex size-8 items-center justify-center rounded-lg text-[13px] font-bold text-white"
                    style={{ backgroundColor: c.name === "Coinbase" ? "#2563EB" : "#7C3AED" }}
                  >
                    {c.mark}
                  </span>
                </div>
                <div className="mt-4 text-[12px] text-white/75">
                  <p className="font-semibold text-white/90">Strength:</p>
                  <ul className="mt-1 list-disc pl-4 leading-[1.6]">
                    <li>{c.strength}</li>
                  </ul>
                  <p className="mt-4 font-semibold text-white/90">Weakness:</p>
                  <ul className="mt-1 list-disc pl-4 leading-[1.6]">
                    <li>{c.weakness}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* --- USER PERSONAS --- */}
      <Section>
        <H2>User Personas</H2>
        <p className="mt-6 max-w-[720px] text-[14px] leading-[1.7] text-white/70">
          Two distinct archetypes emerged from research, the Curious Investor
          and the Practical Transactor. We focused on the curious investor.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Persona left card */}
          <div
            className="rounded-2xl p-5 border"
            style={{ backgroundColor: SURFACE, borderColor: BRAND_GREEN }}
          >
            <div className="relative aspect-square w-full overflow-hidden rounded-xl">
              <Image
                src="/images/case-studies/token-nest/persona.png"
                alt="Persona portrait"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <h4 className="mt-5 text-[14px] font-semibold text-white">
              Demographic
            </h4>
            <ul className="mt-3 space-y-1 text-[12px] text-white/70">
              <li>Name: Matt Davids</li>
              <li>Age: 32</li>
              <li>Occupation: Marketing Manager</li>
              <li>Education: Bachelor&apos;s Degree in Marketing</li>
              <li>Location: Abuja</li>
            </ul>
            <div
              className="mt-5 rounded-lg border p-3 text-[11px] leading-[1.5]"
              style={{ borderColor: BRAND_GREEN, backgroundColor: "#132922", color: MINT }}
            >
              &ldquo;I&apos;m excited about the potential of cryptocurrencies,
              but I want to make sure I&apos;m making smart investment
              decisions and protecting my money.&rdquo;
            </div>
          </div>

          {/* Two column right */}
          <div className="col-span-1 flex flex-col gap-5 md:col-span-2">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  t: "User story",
                  b: "Matt is a 32-year-old marketing manager who recently became interested in cryptocurrencies. He has some savings that he wants to invest in crypto to diversify his portfolio and potentially earn higher returns than traditional investments.",
                },
                {
                  t: "Motivation",
                  b: "Matt is motivated by the potential for high returns on his investments and the opportunity to be an early adopter of innovative technologies like blockchain. He also values convenience and simplicity in the tools and platforms he uses.",
                },
              ].map((c) => (
                <div
                  key={c.t}
                  className="rounded-xl p-5 border"
                  style={{ borderColor: BRAND_GREEN, backgroundColor: SURFACE }}
                >
                  <h4 className="text-[14px] font-semibold text-white">{c.t}</h4>
                  <p className="mt-2 text-[12px] leading-[1.6] text-white/70">
                    {c.b}
                  </p>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {[
                {
                  t: "Goals",
                  b: [
                    "Invest in cryptocurrencies to diversify his investment portfolio.",
                    "Make informed decisions about buying, selling, and holding cryptocurrencies to maximize his investment returns.",
                  ],
                },
                {
                  t: "Pain points",
                  b: [
                    "Limited understanding of how crypto trading works and which platforms to trust.",
                    "Concerns about the security of his funds and the potential for scams crypto space.",
                    "Difficulty navigating complex user interfaces.",
                  ],
                },
              ].map((c) => (
                <div
                  key={c.t}
                  className="rounded-xl p-5 border"
                  style={{ borderColor: BRAND_GREEN, backgroundColor: SURFACE }}
                >
                  <h4 className="text-[14px] font-semibold text-white">{c.t}</h4>
                  <ul className="mt-2 list-disc pl-4 text-[12px] leading-[1.6] text-white/70">
                    {c.b.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* --- EMPATHY MAP --- */}
      <Section>
        <H2>Empathy Map</H2>
        <div className="mt-10 relative grid grid-cols-2 gap-6">
          {[
            {
              t: "SAYS",
              b: [
                "\"I'm excited about the potential of cryptocurrencies.\"",
                "\"I want to easily buy and sell cryptocurrencies without too much hassle.\"",
              ],
            },
            {
              t: "THINKS",
              b: [
                "I'm concerned about the security of my funds and investments",
                "\" I am very careful about the reliability of the platform I use.\"",
              ],
            },
            {
              t: "DOES",
              b: [
                "They frequently check crypto prices on various platforms.",
                "He engages in trading activities on the platforms he's used to.",
              ],
            },
            {
              t: "FEELS",
              b: [
                "He feels excited about the potential of cryptocurrencies.",
                "He is anxious about the risks involved.",
              ],
            },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-2xl p-6 border relative"
              style={{ borderColor: BRAND_GREEN, backgroundColor: SURFACE }}
            >
              <h4
                className="text-center text-[16px]"
                style={{ fontFamily: 'var(--font-display)', color: MINT }}
              >
                {c.t}
              </h4>
              <ul className="mt-4 space-y-2 list-disc pl-4 text-[12px] leading-[1.6] text-white/75">
                {c.b.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
          {/* Center avatar */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
            <div
              className="size-24 overflow-hidden rounded-full border-2"
              style={{ borderColor: BRAND_GREEN }}
            >
              <Image
                src="/images/case-studies/token-nest/persona.png"
                alt="Persona"
                width={100}
                height={100}
                className="size-full object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </Section>

      {/* --- DESIGN PROCESS --- */}
      <Section id="process">
        <H2>Design Process</H2>
        <p className="mt-6 max-w-[720px] text-[14px] leading-[1.7] text-white/70">
          A double-diamond methodology grounded in continuous user feedback and
          iterative prototyping.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: Compass,
              t: "Discover",
              b: "Surveys, interviews, and competitive audits to understand user mental models and pain points.",
            },
            {
              icon: Lightbulb,
              t: "Define",
              b: "Synthesized research into HMW statements, affinity maps, and a clear problem space.",
            },
            {
              icon: Sparkles,
              t: "Ideate",
              b: "Sketches, crazy 8s, and design sprints to explore divergent solutions before converging.",
            },
            {
              icon: Layers,
              t: "Design",
              b: "Low-fi wireframes → mid-fi clickable prototype → high-fidelity Figma screens.",
            },
            {
              icon: BarChart3,
              t: "Test",
              b: "5 usability sessions per iteration, measuring task completion rate and error frequency.",
            },
            {
              icon: RefreshCw,
              t: "Iterate",
              b: "Rapid design iterations based on test findings, prioritized by severity and frequency.",
            },
          ].map((step) => (
            <div
              key={step.t}
              className="rounded-2xl p-5 border border-white/10"
              style={{ backgroundColor: SURFACE }}
            >
              <div
                className="mb-4 flex size-9 items-center justify-center rounded-lg"
                style={{ backgroundColor: "#1E3D2A", color: MINT }}
              >
                <step.icon className="size-4" strokeWidth={2} />
              </div>
              <h4 className="text-[15px] font-semibold text-white">{step.t}</h4>
              <p className="mt-2 text-[12px] leading-[1.6] text-white/65">
                {step.b}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* --- INFORMATION ARCHITECTURE --- */}
      <Section>
        <div
          className="rounded-2xl p-8 md:p-10 border border-white/10"
          style={{
            background:
              "linear-gradient(180deg, #143823 0%, #0F1F1B 100%)",
          }}
        >
          <H2>Information Architecture</H2>
          <p className="mt-6 max-w-[720px] text-[14px] leading-[1.7] text-white/70">
            5 primary navigation sections with a flat hierarchy, key actions
            reachable in 2 taps or fewer.
          </p>

          <div className="mt-10 rounded-2xl p-6 border border-white/10">
            {/* Root */}
            <div className="flex justify-center">
              <span
                className="rounded-full border px-6 py-2 text-[13px]"
                style={{ borderColor: BRAND_GREEN, backgroundColor: "#132922", color: MINT }}
              >
                TOKEN NEST App
              </span>
            </div>
            <div className="mx-auto my-4 h-6 w-px bg-white/20" />
            <div className="grid grid-cols-5 gap-3">
              {["Onboarding", "Home", "Markets", "Wallet", "Profile"].map((h) => (
                <div key={h} className="text-center">
                  <div
                    className="rounded-full border px-3 py-1.5 text-[11.5px]"
                    style={{ borderColor: BRAND_GREEN, backgroundColor: "#0F1F1B", color: MINT }}
                  >
                    {h}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-5 gap-3 text-center text-[11px]">
              {[
                ["Welcome Screen", "Portfolio Overview", "Coin List", "Send", "Settings"],
                ["Sign Up / Login", "Balance Card", "Price Charts", "Receive", "Security"],
                ["Biometric Auth", "Trending Assets", "Watchlist", "QR Scanner", "Notifications"],
                ["Wallet Setup", "Quick Actions", "News Feed", "Transaction History", "Support"],
              ].flatMap((row, ri) =>
                row.map((cell) => (
                  <div
                    key={`${ri}-${cell}`}
                    className="rounded-full border px-2 py-1.5 text-white/80"
                    style={{ borderColor: "#3A4B4E", backgroundColor: "#132922" }}
                  >
                    {cell}
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { t: "2-Tap Rule", b: "Any primary action (Send, Receive, Buy) reachable in ≤2 taps from Home." },
              { t: "Progressive Disclosure", b: "Advanced settings hidden until user explicitly opts into expert mode." },
              { t: "Persistent Bottom Nav", b: "Core 5 tabs always visible, no hamburger menus burying critical paths." },
            ].map((r) => (
              <div key={r.t} className="rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2">
                  <span
                    className="flex size-5 items-center justify-center rounded-full"
                    style={{ backgroundColor: SUCCESS, color: "#0F1F1B" }}
                  >
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <p className="text-[13px] font-semibold text-white">{r.t}</p>
                </div>
                <p className="mt-2 text-[12px] leading-[1.6] text-white/65">
                  {r.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* --- VISUAL DESIGN SYSTEM --- */}
      <Section>
        <H2>Visual Design System</H2>
        <p className="mt-6 max-w-[720px] text-[14px] leading-[1.7] text-white/70">
          A consistent design language built on accessibility-first color
          tokens, a legible type scale, and reusable component patterns.
        </p>

        {/* Colour palette */}
        <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.24em] text-white/50">
          Colour Palette
        </p>
        <div className="mt-4 grid grid-cols-4 gap-4 md:grid-cols-8">
          {[
            ["Brand Green", "#5F9A61"],
            ["Dark BG", "#263826"],
            ["Surface", "#1C2B2E"],
            ["Accent Mint", "#A8D5A2"],
            ["Text Primary", "#FFFFFF"],
            ["Text Secondary", "#B3B3B3"],
            ["Success", "#66BB6A"],
            ["Error", "#E57373"],
          ].map(([name, hex]) => (
            <div key={name}>
              <div
                className="h-16 w-full rounded-lg border border-white/10"
                style={{ backgroundColor: hex }}
              />
              <p className="mt-2 text-[11.5px] text-white/85">{name}</p>
              <p className="text-[10.5px] text-white/50">{hex}</p>
            </div>
          ))}
        </div>

        {/* Typography */}
        <div
          className="mt-8 rounded-2xl border border-white/10 p-6"
          style={{ backgroundColor: SURFACE }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/50">
            Typography Scale
          </p>
          <div className="mt-4 divide-y divide-white/10 text-[13px]">
            {[
              ["DISPLAY", <span key="d" className="text-[36px] font-bold" style={{fontFamily: 'var(--font-display)'}}>Token Nest</span>, "Fraunces"],
              ["H1 HEADING", <span key="h1" className="text-[24px] font-semibold text-white" style={{fontFamily: 'var(--font-display)'}}>Portfolio Overview</span>, "Fraunces"],
              ["H2 HEADING", <span key="h2" className="text-[18px] font-medium text-white">Ethereum · ETH</span>, "Inter"],
              ["BODY", <span key="b" className="text-[14px] text-white/85">Your wallet is secured with biometric authentication.</span>, "Inter"],
              ["CAPTION", <span key="c" className="text-[12px] text-white/60">Last updated 2 min ago · USDT</span>, "Inter"],
            ].map(([label, sample, font]) => (
              <div key={label as string} className="grid grid-cols-[110px_1fr_auto] items-center gap-4 py-3">
                <span className="text-[11px] uppercase tracking-[0.15em] text-white/50">
                  {label}
                </span>
                <div>{sample}</div>
                <span className="text-[11px] text-white/40">{font}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Component library */}
        <div
          className="mt-6 rounded-2xl border border-white/10 p-6"
          style={{ backgroundColor: SURFACE }}
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/50">
            Component Library
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button
              className="rounded-full px-4 py-2 text-[12px] font-medium text-white"
              style={{ backgroundColor: BRAND_GREEN }}
            >
              Primary CTA
            </button>
            <button
              className="rounded-full border px-4 py-2 text-[12px]"
              style={{ borderColor: BRAND_GREEN, color: MINT, backgroundColor: "#132922" }}
            >
              Secondary
            </button>
            <button className="rounded-full border border-white/20 px-4 py-2 text-[12px] text-white/80">
              Ghost
            </button>
            <span
              className="rounded-full px-3 py-1 text-[11px]"
              style={{ backgroundColor: "#1E3D2A", color: SUCCESS }}
            >
              +2.4% Badge
            </span>
            <span
              className="rounded-full px-3 py-1 text-[11px]"
              style={{ backgroundColor: "#3E1D1D", color: ERROR }}
            >
              -1.2% Badge
            </span>
          </div>
          <div className="mt-5 flex items-center gap-3 rounded-lg border border-white/15 p-3 max-w-md">
            <span className="text-white/40 text-[13px]">◱</span>
            <span className="flex-1 text-[13px] text-white/60">Wallet address input</span>
            <button
              className="flex size-8 items-center justify-center rounded-md text-white"
              style={{ backgroundColor: BRAND_GREEN }}
            >
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </Section>

      {/* --- HIGH-FIDELITY SCREENS --- */}
      <Section id="screens">
        <div
          className="rounded-2xl p-8 md:p-10 border border-white/10"
          style={{ background: "linear-gradient(180deg, #143823 0%, #0F1F1B 100%)" }}
        >
          <H2>High-Fidelity Screens</H2>
          <p className="mt-6 max-w-[720px] text-[14px] leading-[1.7] text-white/70">
            Key screens designed in Figma with precise attention to spacing,
            hierarchy, and interaction states.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              {
                pill: "ONBOARDING",
                stat: "↓ 40% onboarding drop-off",
                t: "Onboarding & Welcome",
                b: "Clean brand introduction with clear value propositions. Biometric setup prompted upfront, trust established before the first transaction.",
                img: "/images/case-studies/token-nest/onboarding.png",
              },
              {
                pill: "HOME",
                stat: "↑ 62% daily active return",
                t: "Portfolio Dashboard",
                b: "Real-time balance card with sparkline charts. Top 3 holdings at a glance. Clear % change with color-coded positive/negative states.",
                img: "/images/case-studies/token-nest/dashboard.png",
              },
              {
                pill: "TRANSACTIONS",
                stat: "92% task completion",
                t: "Send & Receive Flow",
                b: "QR scan for receive. Confirmation screen with fee breakdown before submission. Error prevention built into address validation.",
                img: "/images/case-studies/token-nest/transactions.png",
              },
              {
                pill: "MARKETS",
                stat: "12s avg discovery time",
                t: "Market Explorer",
                b: "Trending coins, watchlist, and interactive price charts. Search and filter reduce time-to-discovery from 45s to 12s.",
                img: "/images/case-studies/token-nest/markets.png",
              },
            ].map((s) => (
              <div
                key={s.t}
                className="rounded-2xl p-5 border border-white/10"
                style={{ backgroundColor: SURFACE }}
              >
                <div
                  className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl border border-white/10 mb-5"
                  style={{ backgroundColor: "#0F1F1B" }}
                >
                  <Image
                    src={s.img}
                    alt={s.t}
                    fill
                    sizes="(min-width:768px) 560px, 100vw"
                    className="object-contain p-3"
                    unoptimized
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="rounded-full px-3 py-1 text-[10.5px] uppercase tracking-[0.18em]"
                    style={{ backgroundColor: "#1E3D2A", color: MINT }}
                  >
                    {s.pill}
                  </span>
                  <span className="text-[11px]" style={{ color: MINT }}>
                    {s.stat}
                  </span>
                </div>
                <h4 className="mt-4 text-[16px] font-semibold text-white">{s.t}</h4>
                <p className="mt-2 text-[12.5px] leading-[1.6] text-white/65">
                  {s.b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* --- LIGHT & DARK MODE --- */}
      <ModeSection />

      {/* --- RESULTS & LEARNINGS --- */}
      <Section>
        <H2>Results &amp; Learnings</H2>
        <p className="mt-6 max-w-[720px] text-[14px] leading-[1.7] text-white/70">
          The redesign delivered measurable improvements across trust,
          usability, and conversion.
        </p>

        <div className="mt-10 rounded-2xl p-8 border border-white/10" style={{ backgroundColor: SURFACE }}>
          <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-white/50">
            Key learnings
          </p>
          <ul className="mt-4 space-y-3 text-[13.5px] leading-[1.7] text-white/75">
            {[
              "Security-first framing outperformed feature-first framing in every usability round, trust is a design decision, not a compliance checkbox.",
              "Progressive disclosure kept task completion at 92% without hiding advanced features from expert users who wanted them.",
              "Copy is the interface. Rewriting error states as guidance cut abandonment by 34% during first-transaction flows.",
              "Light + dark parity from day one prevented late-stage rework and made the product accessible for 54% of users who prefer dark for financial sessions.",
            ].map((l) => (
              <li key={l} className="flex gap-3">
                <span
                  className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full"
                  style={{ backgroundColor: BRAND_GREEN }}
                />
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* --- CLOSING BAND --- */}
      <section
        id="contact"
        className="border-t border-white/10 py-24 text-center"
        style={{
          background:
            "linear-gradient(180deg, #143823 0%, #0F1F1B 100%)",
        }}
      >
        <h2
          className="text-[42px] md:text-[64px]"
          style={{ fontFamily: 'var(--font-display)', color: "#fff", fontWeight: 700 }}
        >
          THANK YOU FOR WATCHING
        </h2>
        <p className="mt-4 text-[14px] text-white/60">
          Get excited and ready to design smart with me
        </p>
      </section>
    </div>
  );
}
