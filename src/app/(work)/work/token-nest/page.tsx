import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import Image from "next/image";
import Link from "next/link";
import { Montserrat_Alternates } from "next/font/google";
import {
  ArrowLeft,
  Award,
  BarChart3,
  Bell,
  CircleAlert,
  CircleCheck,
  CircleHelp,
  Clock,
  Compass,
  Eye,
  Filter,
  History,
  Home,
  Info,
  Lightbulb,
  Lock,
  Mic,
  PenTool,
  RefreshCw,
  ScanLine,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  Smartphone,
  Star,
  Target,
  Ticket,
  Trash2,
  TrendingUp,
  Triangle,
  Upload,
  User,
  Wallet,
  X,
  ChevronDown,
  ChevronLeft,
  Zap,
  ArrowRight,
  FlaskConical,
} from "lucide-react";
import { CaseStudy, Chapter, Tree, Swatches } from "@/components/case-study/CaseStudy";
import { Donut, Pie, type Slice } from "@/components/case-study/Charts";
import { Slot } from "@/components/case-study/Slot";
import { ModeSwitch } from "./_mode";
import { Flow } from "./_flow";
import "@/styles/cs-token-nest.css";

export const metadata: Metadata = pageMeta({ title: "Token Nest", description: "A UX/UI case study on designing a secure, intuitive cryptocurrency portfolio management app, from research to high-fidelity screens.", path: "/work/token-nest" });

/** a phone screenshot: file, alt text, and its pixel size (defaults to 85×172) */
type Shot = [file: string, alt: string, width?: number, height?: number];

const img = (f: string) => `/images/case-studies/token-nest/${f}`;

// The app's display face, shown only in the design-system typography specimen.
const alt = Montserrat_Alternates({ subsets: ["latin"], weight: ["600", "700"], display: "swap" });

/* survey palette, as in the Figma: dark green, lime, sky, magenta */
const P = ["#2f4a33", "#c6ea5b", "#4fc3f7", "#c2389e"];
const pie = (pairs: [string, number][]): Slice[] => pairs.map(([label, value], i) => ({ label, value, color: P[i] }));

const polls: { q: string; a: Slice[] }[] = [
  { q: "How often do you use crypto trading apps?", a: pie([["A few times a week", 35], ["Once a day", 25], ["Several times a day", 25], ["Rarely", 15]]) },
  { q: "What are the main reasons for using cryptocurrency trading apps?", a: pie([["To buy and sell cryptocurrencies", 34], ["To explore new investment opportunities", 26], ["To track my portfolio", 22], ["To monitor market trends", 18]]) },
  { q: "What features do you like in crypto apps?", a: pie([["Easy-to-use app", 32], ["Secure wallet storage", 28], ["Variety of cryptocurrencies supported", 22], ["Real-time data", 18]]) },
  { q: "What challenges do you face with crypto apps?", a: pie([["Complex user interface", 34], ["Concerns about security", 28], ["High transaction fees", 22], ["Limited customer support", 16]]) },
  { q: "How easy is it to use your current crypto app?", a: pie([["Easy", 45], ["Difficult", 35], ["Neutral", 20]]) },
  { q: "How can crypto app interfaces improve?", a: pie([["Simplify navigation", 32], ["Provide clear instructions and guides", 26], ["Lessen transaction fees", 22], ["Customize settings", 20]]) },
  { q: "What makes you trust a crypto app?", a: pie([["Strong reputation", 34], ["Positive user reviews", 26], ["Transparent fees", 22], ["Popularity", 18]]) },
  { q: "Are you satisfied with your current crypto app customer support?", a: pie([["Satisfied", 40], ["Dissatisfied", 35], ["Neutral", 25]]) },
  { q: "Would you recommend your current crypto app?", a: pie([["Probably", 30], ["Not sure", 25], ["Definitely", 25], ["No", 20]]) },
];

const iconography = [
  ArrowLeft, Star, Home, Eye, Triangle, Filter, Wallet, ScanLine, History, Upload, Lock, Search,
  Trash2, Settings, Bell, CircleCheck, Mic, Ticket, X, User, CircleHelp, ChevronDown, Info, BarChart3,
];

export default function TokenNest() {
  return (
    <CaseStudy
      slug="token-nest"
      aInk="#8AE28F"
      aSoft="#18221C"
      chapters={[
        { id: "overview", label: "Overview" },
        { id: "problem", label: "Problem" },
        { id: "research", label: "Research" },
        { id: "persona", label: "Persona" },
        { id: "process", label: "Process" },
        { id: "system", label: "Design system" },
        { id: "screens", label: "Screens" },
        { id: "modes", label: "Light & dark" },
        { id: "results", label: "Results" },
      ]}
      hero={
        <header className="tn-hero">
          <div className="wrap tn-hero-in">
            <Link className="tn-back lab" href="/projects">
              <ChevronLeft size={14} aria-hidden /> All projects
            </Link>
            <div className="tn-hero-copy">
            <Image
              className="tn-logo"
              src={img("logo-mark.png")}
              alt=""
              width={374}
              height={305}
              priority
              sizes="64px"
            />
            <h1 className="tn-word">Token Nest</h1>
            <p className="tn-kicker">Blockchain Crypto Wallet App</p>
            <p className="tn-sub">
              A comprehensive UX/UI case study on designing a secure, intuitive cryptocurrency portfolio management app
              from research to high-fidelity screens.
            </p>
            <ul className="tn-pills">
              {["UX Research", "UI Design", "Prototyping", "Usability Testing"].map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            </div>
            <div className="tn-hero-phones">
              <Image
                className="tn-phone tn-phone-a"
                src={img("hero-phone-history.webp")}
                alt="Token Nest wallet: total balance and recent transaction history"
                width={815}
                height={2000}
                priority
                sizes="(min-width: 900px) 260px, 40vw"
              />
              <Image
                className="tn-phone tn-phone-b"
                src={img("hero-phone-welcome.webp")}
                alt="Token Nest welcome screen with floating coins"
                width={1144}
                height={2000}
                priority
                sizes="(min-width: 900px) 360px, 56vw"
              />
            </div>
          </div>
        </header>
      }
    >
      {/* 01 · Project overview */}
      <Chapter
        id="overview"
        no="01"
        title="Project overview"
        intro="Token Nest is a blockchain-powered crypto wallet and portfolio tracker designed to make decentralized finance accessible to everyday users."
      >
        <div className="tn-two">
          <div className="tn-card">
            <h3>The Challenge</h3>
            <p>
              Cryptocurrency apps are notoriously complex. Existing solutions overwhelm new users with jargon, poor
              navigation, and trust-eroding UI patterns. Token Nest needed to bridge the gap between sophisticated
              functionality and approachable design.
            </p>
          </div>
          <div className="tn-card">
            <h3>The Solution</h3>
            <p>
              A clean, security-first mobile experience with progressive disclosure — revealing complexity only as
              users need it. Streamlined onboarding, real-time portfolio dashboards, and clear transaction flows built
              around user mental models.
            </p>
          </div>
        </div>
        <div className="tn-stats">
          {[
            { icon: TrendingUp, value: "40%", label: "Reduced onboarding drop-off" },
            { icon: Star, value: "4.8★", label: "Target user satisfaction score" },
            { icon: Clock, value: "2 min", label: "Average time-to-first-trade" },
            { icon: Award, value: "92%", label: "Task completion rate in testing" },
          ].map(({ icon: Icon, value, label }) => (
            <div key={label} className="tn-stat">
              <span className="tn-ico"><Icon size={16} aria-hidden /></span>
              <b>{value}</b>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </Chapter>

      {/* 02 · Problem statement */}
      <Chapter
        id="problem"
        no="02"
        title="Problem statement"
        intro="How might we design a crypto wallet app that earns user trust, reduces cognitive load, and makes blockchain technology feel approachable?"
      >
        <div className="tn-two">
          {[
            { icon: CircleAlert, title: "Cognitive Overload", body: "Users are bombarded with charts, tickers, and jargon before they understand the basics." },
            { icon: Shield, title: "Trust Deficit", body: "Security concerns are the #1 barrier — unclear wallet authentication and opaque transaction fees erode confidence." },
            { icon: Eye, title: "Poor Discoverability", body: "Key features like send/receive and swap are buried in nested menus, causing abandonment." },
            { icon: Smartphone, title: "No Adaptive UI", body: "Most crypto apps lack light/dark mode parity and accessible contrast ratios, excluding a large user segment." },
          ].map(({ icon: Icon, title, body }) => (
            <div key={title} className="tn-card tn-problem">
              <span className="tn-ico tn-ico-warn"><Icon size={16} aria-hidden /></span>
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
        <blockquote className="tn-hmw">
          <span className="lab">How might we</span>
          <p>
            &ldquo;Design a crypto experience so clear and trustworthy that users feel confident managing real money on
            their first try?&rdquo;
          </p>
        </blockquote>
      </Chapter>

      {/* 03 · Research & discovery */}
      <Chapter
        id="research"
        no="03"
        title="Research & discovery"
        intro="Mixed-method research: 120 survey respondents + 8 in-depth user interviews + competitive audit of 4 leading crypto apps."
      >
        <div className="tn-two">
          <div className="tn-card">
            <h3>What users prioritize in a crypto app</h3>
            <p className="tn-note">Survey · n=120</p>
            <Donut
              label="What users prioritize in a crypto app"
              slices={[
                { label: "Security", value: 38, color: "#66bb6a" },
                { label: "Ease of Use", value: 29, color: "#4e8a50" },
                { label: "Speed", value: 18, color: "#a8d5a2" },
                { label: "Low Fees", value: 15, color: "#dcefd8" },
              ]}
            />
          </div>
          <div className="tn-card">
            <h3>Key Survey Insights</h3>
            <p className="tn-note">Interview synthesis · n=8</p>
            <ul className="tn-insights">
              {[
                ["76%", "of users abandoned a crypto app due to confusing onboarding"],
                ["83%", "expressed anxiety about making irreversible transaction mistakes"],
                ["61%", "check portfolio balance at least 3× per day"],
                ["54%", "prefer dark mode for extended financial app sessions"],
              ].map(([v, t]) => (
                <li key={v}>
                  <b>{v}</b>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="tn-panel">
          <div className="tn-polls">
            {polls.map((p) => (
              <Pie key={p.q} title={p.q} slices={p.a} />
            ))}
          </div>
          <p className="tn-panel-note">
            These questions helped me gather insights into users behaviors, preferences, pain points, and satisfaction
            levels with cryptocurrency trading apps, guiding the design and development of a more user-friendly and
            effective app.
          </p>
        </div>

        <div className="tn-panel">
          <h3 className="tn-panel-h">Competitive Analysis</h3>
          <p className="tn-note">Scored on Ease of Use, Trust Signals &amp; Feature Depth. We need to understand how users interact with them.</p>
          <div className="tn-two tn-comp">
            {[
              {
                name: "Coinbase",
                logo: "logo-coinbase.png",
                strength: [
                  "Coinbase is known for its user-friendly interface and beginner-friendly approach, making it easy for users like Sarah to buy, sell, and manage cryptocurrencies.",
                  "It offers a wide range of cryptocurrencies and provides educational resources to help users understand the market.",
                ],
                weakness: [
                  "Coinbase has been criticised for its relatively high transaction fees compared to other platforms.",
                  "Its customer support is sometimes criticised for being slow to respond.",
                ],
              },
              {
                name: "Kraken",
                logo: "logo-kraken.png",
                strength: [
                  "Kraken is known for its strong security measures and regulatory compliance, providing users with peace of mind when it comes to protecting their funds.",
                  "It offers a wide range of cryptocurrencies and trading pairs, as well as margin trading and staking options.",
                ],
                weakness: [
                  "Kraken's interface may appear more complex compared to other more beginner-friendly platforms.",
                  "Its customer support has received mixed reviews in terms of responsiveness and effectiveness.",
                ],
              },
            ].map((c) => (
              <div key={c.name}>
                <div className="tn-brand">
                  <span>{c.name}</span>
                  <Image
                    className="tn-brand-logo"
                    src={img(c.logo)}
                    alt={`${c.name} logo`}
                    width={448}
                    height={448}
                    sizes="72px"
                  />
                </div>
                <div className="tn-card tn-comp-card">
                  <p className="lab tn-good">Strength</p>
                  <ul>{c.strength.map((t) => <li key={t}>{t}</li>)}</ul>
                  <p className="lab tn-bad">Weakness</p>
                  <ul>{c.weakness.map((t) => <li key={t}>{t}</li>)}</ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Chapter>

      {/* 04 · Persona + empathy map */}
      <Chapter
        id="persona"
        no="04"
        title="User personas"
        intro="Two distinct archetypes emerged from research — the Curious Investor and the Practical Transactor, we focused on the curious investor"
      >
        <div className="tn-persona">
          <div className="tn-card tn-person">
            <Image
              className="tn-person-photo"
              src={img("persona-matt.webp")}
              alt="Matt Davids, the Curious Investor persona"
              width={636}
              height={484}
              sizes="(min-width: 1000px) 360px, 90vw"
            />
            <p className="lab">Demographic</p>
            <dl>
              <div><dt>Name:</dt><dd>Matt Davids</dd></div>
              <div><dt>Age:</dt><dd>32</dd></div>
              <div><dt>Occupation:</dt><dd>Marketing Manager</dd></div>
              <div><dt>Education:</dt><dd>Bachelor&apos;s Degree in Marketing</dd></div>
              <div><dt>Location:</dt><dd>Abuja</dd></div>
            </dl>
            <p className="tn-says">
              &ldquo;I&apos;m excited about the potential of cryptocurrencies, but I want to make sure I&apos;m making
              smart investment decisions and protecting my money.&rdquo;
            </p>
          </div>
          <div className="tn-persona-grid">
            <div className="tn-card">
              <h3>User story</h3>
              <p>
                Matt is a 32-year-old marketing manager who recently became interested in cryptocurrencies. He has some
                savings that he wants to invest in crypto to diversify his portfolio and potentially earn higher returns
                than traditional investments.
              </p>
            </div>
            <div className="tn-card">
              <h3>Motivation</h3>
              <p>
                Matt is motivated by the potential for high returns on his investments and the opportunity to be an
                early adopter of innovative technologies like blockchain. He also values convenience and simplicity in
                the tools and platforms he uses.
              </p>
            </div>
            <div className="tn-card">
              <h3>Goals</h3>
              <ul>
                <li>Invest in cryptocurrencies to diversify his investment portfolio.</li>
                <li>Make informed decisions about buying, selling, and holding cryptocurrencies to maximize his investment returns.</li>
              </ul>
            </div>
            <div className="tn-card">
              <h3>Pain points</h3>
              <ul>
                <li>Limited understanding of how crypto trading works and which platforms to trust.</li>
                <li>Concern about the security of his funds and the potential for scams crypto space.</li>
                <li>Difficulty navigating complex user interfaces.</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="tn-sub-h">Empathy Map</h3>
        <div className="tn-empathy">
          {[
            { k: "Says", items: ["“I'm excited about the potential of cryptocurrencies”", "“I want to easily buy and sell cryptocurrencies without too much hassle”"] },
            { k: "Thinks", items: ["I'm concerned about the security of my funds and investments", "“ I am very careful about the reliability of the platform I use ”"] },
            { k: "Does", items: ["They frequently check crypto prices on various platforms.", "He engages in trading activities on the platforms he's used to."] },
            { k: "Feels", items: ["He feels excited about the potential of cryptocurrencies.", "He is anxious about the risks involved."] },
          ].map((b) => (
            <div key={b.k} className="tn-card tn-emp">
              <h4>{b.k}</h4>
              <ul>{b.items.map((t) => <li key={t}>{t}</li>)}</ul>
            </div>
          ))}
          <div className="tn-emp-ring" aria-hidden />
          <Image
            className="tn-emp-face"
            src={img("persona-matt-face.webp")}
            alt="Matt Davids"
            width={440}
            height={440}
            sizes="140px"
          />
        </div>
      </Chapter>

      {/* 05 · Design process + IA */}
      <Chapter
        id="process"
        no="05"
        title="Design process"
        intro="A double-diamond methodology grounded in continuous user feedback and iterative prototyping."
      >
        <Flow>
          <ol className="tn-flow">
            {[
              { icon: Compass, title: "Discover", body: "Surveys, interviews, and competitive audits to understand user mental models and pain points." },
              { icon: Target, title: "Define", body: "Synthesized research into HMW statements, affinity maps, and a clear problem space." },
              { icon: Lightbulb, title: "Ideate", body: "Sketches, crazy 8s, and design sprints to explore divergent solutions before converging." },
              { icon: PenTool, title: "Design", body: "Low-fi wireframes → mid-fi clickable prototype → high-fidelity Figma screens." },
              { icon: FlaskConical, title: "Test", body: "5 usability sessions per iteration, measuring task completion rate and error frequency." },
              { icon: RefreshCw, title: "Iterate", body: "Rapid design iterations based on test findings, prioritized by severity and frequency." },
            ].map(({ icon: Icon, title, body }, n) => (
              <li key={title} className="tn-step">
                <span className="tn-step-no">{String(n + 1).padStart(2, "0")}</span>
                <span className="tn-ico"><Icon size={16} aria-hidden /></span>
                <h3>{title}</h3>
                <p>{body}</p>
              </li>
            ))}
          </ol>
        </Flow>

        <div className="tn-panel">
          <h3 className="tn-panel-h">Information Architecture</h3>
          <p className="tn-note">5 primary navigation sections with a flat hierarchy, key actions reachable in 2 taps or fewer.</p>
          <Tree
            root="TOKEN NEST App"
            columns={[
              { head: "Onboarding", items: ["Welcome Screen", "Sign Up / Login", "Biometric Auth", "Wallet Setup"] },
              { head: "Home", items: ["Portfolio Overview", "Balance Card", "Trending Assets", "Quick Actions"] },
              { head: "Markets", items: ["Coin List", "Price Charts", "Watchlist", "News Feed"] },
              { head: "Wallet", items: ["Send", "Receive", "QR Scanner", "Transaction History"] },
              { head: "Profile", items: ["Settings", "Security", "Notifications", "Support"] },
            ]}
          />
          <div className="tn-rules">
            {[
              { title: "2-Tap Rule", body: "Any primary action (Send, Receive, Buy) reachable in ≤2 taps from Home." },
              { title: "Progressive Disclosure", body: "Advanced settings hidden until user explicitly opts into expert mode." },
              { title: "Persistent Bottom Nav", body: "Core 5 tabs always visible — no hamburger menus burying critical paths." },
            ].map((r) => (
              <div key={r.title} className="tn-card tn-rule">
                <CircleCheck size={16} aria-hidden className="tn-good" />
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Chapter>

      {/* 06 · Visual design system */}
      <Chapter
        id="system"
        no="06"
        title="Visual design system"
        intro="A consistent design language built on accessibility-first color tokens, a legible type scale, and reusable component patterns."
      >
        <p className="lab tn-label">Colour palette</p>
        <Swatches
          items={[
            { name: "Brand Green", hex: "#5F9A61" },
            { name: "Dark BG", hex: "#263826" },
            { name: "Surface", hex: "#1C2B2E" },
            { name: "Accent Mint", hex: "#A8D5A2" },
            { name: "Text Primary", hex: "#FFFFFF" },
            { name: "Text Secondary", hex: "#B3B3B3" },
            { name: "Success", hex: "#66BB6A" },
            { name: "Error", hex: "#E57373" },
          ]}
        />

        <div className="tn-panel tn-type">
          <p className="lab tn-label">Typography scale</p>
          {[
            { role: "Display", sample: "Token Nest", font: "Montserrat Alternates", cls: `tn-t-display ${alt.className}` },
            { role: "H1 Heading", sample: "Portfolio Overview", font: "Montserrat Alternates", cls: `tn-t-h1 ${alt.className}` },
            { role: "H2 Heading", sample: "Ethereum · ETH", font: "Inter", cls: "tn-t-h2" },
            { role: "Body", sample: "Your wallet is secured with biometric authentication.", font: "Inter", cls: "tn-t-body" },
            { role: "Caption", sample: "Last updated 2 min ago · USDT", font: "Inter", cls: "tn-t-cap" },
          ].map((t) => (
            <div key={t.role} className="tn-type-row">
              <span className="lab">{t.role}</span>
              <span className={t.cls}>{t.sample}</span>
              <span className="tn-font">{t.font}</span>
            </div>
          ))}
        </div>

        <div className="tn-panel">
          <p className="lab tn-label">Component library</p>
          <div className="tn-comps">
            <span className="tn-btn tn-btn-primary">Primary CTA</span>
            <span className="tn-btn tn-btn-secondary">Secondary</span>
            <span className="tn-btn tn-btn-ghost">Ghost</span>
            <span className="tn-badge tn-badge-up">+2.4% Badge</span>
            <span className="tn-badge tn-badge-down">-1.2% Badge</span>
            <span className="tn-icon-btn"><Zap size={16} aria-hidden /></span>
          </div>
          <div className="tn-input">
            <Wallet size={14} aria-hidden />
            <span>Wallet address input</span>
            <span className="tn-input-go"><ArrowRight size={14} aria-hidden /></span>
          </div>
        </div>

        <h3 className="tn-sub-h">Iconography</h3>
        <ul className="tn-icons" aria-label="Icon set">
          {iconography.map((Icon, n) => (
            <li key={n}><Icon size={18} aria-hidden /></li>
          ))}
        </ul>
      </Chapter>

      {/* 07 · High-fidelity screens */}
      <Chapter
        id="screens"
        no="07"
        title="High-fidelity screens"
        intro="Key screens designed in Figma with precise attention to spacing, hierarchy, and interaction states."
      >
        <div className="tn-two">
          {[
            { tag: "Onboarding", shots: [["screen-onboarding-welcome.png", "Welcome screen", 253, 516], ["screen-onboarding-signin.png", "Welcome to Token Nest: create account or sign in", 253, 516], ["screen-onboarding-signup.png", "Create account form", 253, 516]], stat: "↓ 40% onboarding drop-off", title: "Onboarding & Welcome", body: "Clean brand introduction with clear value propositions. Biometric setup prompted upfront — trust established before the first transaction." },
            { tag: "Home", shots: [["screen-dashboard-home.png", "Portfolio home: wallet value, trending coins and holdings", 253, 516], ["screen-dashboard-profile.png", "Profile and account settings menu", 253, 516], ["screen-dashboard-coins.png", "Cryptocurrency list with prices and market cap", 253, 516]], stat: "↑ 62% daily active return", title: "Portfolio Dashboard", body: "Real-time balance card with sparkline charts. Top 3 holdings at a glance. Clear % change with color-coded positive/negative states." },
            { tag: "Transactions", shots: [["screen-transfer-history.png", "Balance and recent transaction history", 253, 516], ["screen-transfer-passcode.png", "Confirm passcode with Face ID authentication", 253, 516], ["screen-transfer-withdraw.png", "Withdrawal with destination address and QR code", 253, 516]], stat: "92% task completion", title: "Send & Receive Flow", body: "QR scan for receive. Confirmation screen with fee breakdown before submission. Error prevention built into address validation." },
            { tag: "Markets", shots: [["screen-markets-coins.png", "Cryptocurrency list with prices and market cap", 253, 516], ["screen-markets-chart.png", "Ethereum price chart with market statistics", 253, 516], ["screen-markets-home.png", "Wallet value with trending coins", 253, 516]], stat: "12s avg discovery time", title: "Market Explorer", body: "Trending coins, watchlist, and interactive price charts. Search and filter reduce time-to-discovery from 45s to 12s." },
          ].map((s) => (
            <div key={s.title} className="tn-card tn-screen">
              {"shots" in s && s.shots ? (
                <div className="tn-shots">
                  {(s.shots as Shot[]).map(([f, alt, w = 85, h = 172]) => (
                    <Image key={f} src={img(f)} alt={alt} width={w} height={h} unoptimized />
                  ))}
                </div>
              ) : (
                <Slot name={`${s.title} screens`} ratio="16 / 9" />
              )}
              <div className="tn-screen-meta">
                <span className="tn-tag">{s.tag}</span>
                <span className="tn-good">{s.stat}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </Chapter>

      {/* 08 · Light & dark mode */}
      <Chapter
        id="modes"
        no="08"
        title="Light & dark mode"
        intro="Both modes designed from scratch — not just a color inversion. Contrast ratios meet WCAG AA across the entire app."
      >
        <ModeSwitch />
      </Chapter>

      {/* 09 · Results & learnings */}
      <Chapter
        id="results"
        no="09"
        title="Results & learnings"
        intro="Measured against baseline metrics from competitive app audits and usability benchmarks."
      >
        <span className="tn-tag">10 — Outcomes</span>
        <div className="tn-stats">
          {[
            { icon: TrendingUp, label: "Onboarding completion", before: "58%", after: "94%" },
            { icon: CircleCheck, label: "Task completion rate", before: "61%", after: "92%" },
            { icon: Star, label: "User satisfaction (SUS)", before: "62/100", after: "84/100" },
            { icon: ShieldCheck, label: "Error rate", before: "31%", after: "7%" },
          ].map(({ icon: Icon, label, before, after }) => (
            <div key={label} className="tn-stat tn-result">
              <span className="tn-ico"><Icon size={16} aria-hidden /></span>
              <span className="lab">{label}</span>
              <div className="tn-ba">
                <span>
                  <small>Before</small>
                  <s>{before}</s>
                </span>
                <ArrowRight size={14} aria-hidden className="tn-ba-arrow" />
                <span>
                  <small className="tn-good">After</small>
                  <b>{after}</b>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="tn-card">
          <h3>Key Learnings</h3>
          <ol className="tn-learn">
            <li>Progressive disclosure dramatically reduced overwhelm, users completed onboarding 36% faster when wallet complexity was introduced gradually.</li>
            <li>Biometric authentication built in step 2 (not step 8) increased perceived security scores by 28 points in SUS.</li>
            <li>Confirmation screens with fee breakdowns reduced abandonment on the Send flow from 44% to 9%.</li>
            <li>Color-coded transaction states (green up / red down) with accessible contrast ratios improved scannability for users with low or impaired vision.</li>
          </ol>
        </div>
      </Chapter>
    </CaseStudy>
  );
}

