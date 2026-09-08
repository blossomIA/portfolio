import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { CaseStudyNav } from "@/components/CaseStudyNav";
import { Reveal } from "@/components/Reveal";
import {
  caseStudies,
  caseStudySections,
  getCaseStudy,
} from "@/lib/case-studies";
import { ArrowUpRight } from "lucide-react";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  const title = `${cs.title}, Amarachi Blossom`;
  return {
    title,
    description: cs.subtitle,
    openGraph: {
      title,
      description: cs.subtitle,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: cs.subtitle,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  return (
    <>
      <CaseStudyNav brand={cs.brand} sections={[...caseStudySections]} />

      {/* Hero */}
      <section className={`${cs.heroBg} pt-24 pb-32`}>
        <Container>
          <p className="font-mono text-[11px] uppercase tracking-label-sm text-ink/60">
            {cs.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-[64px] leading-[1.02] tracking-display text-ink md:text-[96px]">
            {cs.title}
          </h1>
          <p className="mt-8 max-w-[720px] text-[22px] leading-[1.55] tracking-body-lg text-ink/75">
            {cs.subtitle}
          </p>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-[560px]">
            {cs.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-[40px] leading-none text-ink">
                  {s.value}
                </p>
                <p className="mt-2 text-[13px] leading-4 text-ink/60">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-2">
            {cs.tags.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/70 px-3 py-1 text-[12px] font-medium text-ink/70 backdrop-blur"
              >
                {t}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section id="overview" className="border-t border-border-soft py-24">
        <Container>
          <p className="font-mono text-[10px] uppercase tracking-label-lg text-muted">
            <span className="text-accent-purple">01</span>, Overview
          </p>
          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-[280px_1fr]">
            <dl className="space-y-6">
              <MetaRow label="Role" value={cs.overview.role} />
              <MetaRow label="Duration" value={cs.overview.duration} />
              <MetaRow label="Team" value={cs.overview.team} />
            </dl>
            <div>
              <h2 className="text-[32px] leading-[1.2] tracking-h2 text-ink">
                What I did
              </h2>
              <ul className="mt-6 space-y-3">
                {cs.overview.scope.map((s) => (
                  <li key={s} className="flex gap-3 text-[15px] leading-[1.72] text-muted">
                    <span
                      aria-hidden
                      className="mt-[9px] size-1.5 shrink-0 rounded-full bg-accent-purple"
                    />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Problem */}
      <section id="problem" className="border-t border-border-soft bg-surface py-24">
        <Container>
          <p className="font-mono text-[10px] uppercase tracking-label-lg text-muted">
            <span className="text-accent-purple">02</span>, Problem
          </p>
          <div className="mt-10 max-w-[900px]">
            <blockquote className="border-l-2 border-accent-purple pl-6 text-[36px] leading-[1.2] tracking-h2 text-ink md:text-[44px]">
              &ldquo;{cs.problem.quote}&rdquo;
            </blockquote>
            <p className="mt-10 max-w-[720px] text-[17px] leading-[1.72] text-muted">
              {cs.problem.body}
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
            {cs.problem.insights.map((i) => (
              <div
                key={i.label}
                className="rounded-card border border-border-soft bg-white p-8"
              >
                <p className="font-display text-[56px] leading-none text-ink">
                  {i.stat}
                </p>
                <p className="mt-2 text-[14px] font-medium text-ink">
                  {i.label}
                </p>
                <p className="mt-3 text-[13px] leading-[1.55] text-muted">
                  {i.note}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section id="process" className="border-t border-border-soft py-24">
        <Container>
          <p className="font-mono text-[10px] uppercase tracking-label-lg text-muted">
            <span className="text-accent-purple">03</span>, Design Process
          </p>
          <h2 className="mt-5 max-w-[820px] text-[40px] leading-[1.15] tracking-h2 text-ink">
            {cs.process.intro}
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
            {cs.process.steps.map((step, i) => (
              <Reveal
                key={step.step}
                delay={i * 0.08}
                className="rounded-card border border-border-soft p-8"
              >
                <p className="font-mono text-[11px] uppercase tracking-label-sm text-accent-purple">
                  {step.step}
                </p>
                <h3 className="mt-4 text-[22px] font-medium leading-[1.3] tracking-h2 text-ink">
                  {step.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.72] text-muted">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </div>

          {/* System pillars */}
          <div className="mt-24 rounded-card bg-ink p-10 text-white md:p-16">
            <p className="font-mono text-[10px] uppercase tracking-label-lg text-white/50">
              System
            </p>
            <h2 className="mt-5 max-w-[720px] font-display text-[44px] leading-[1.05] tracking-display md:text-[56px]">
              {cs.system.intro}
            </h2>
            <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-5">
              {cs.system.pillars.map((p) => (
                <div key={p.title}>
                  <h3 className="text-[16px] font-medium text-white">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.62] text-white/70">
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Screens */}
      <section id="screens" className="border-t border-border-soft py-24">
        <Container>
          <p className="font-mono text-[10px] uppercase tracking-label-lg text-muted">
            <span className="text-accent-purple">04</span>, Key Screens
          </p>
          <h2 className="mt-5 max-w-[820px] text-[40px] leading-[1.15] tracking-h2 text-ink">
            {cs.screens.intro}
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {cs.screens.items.map((screen, i) => (
              <Reveal
                as="figure"
                key={screen.title}
                delay={i * 0.08}
                className={`overflow-hidden rounded-card ${screen.bg}`}
              >
                <div className="aspect-[4/3] p-8 relative">
                  <div className="absolute inset-x-16 top-12 bottom-0 rounded-t-[18px] bg-white/80 shadow-2xl" />
                  <div className="absolute inset-x-20 top-16 h-6 rounded-t-[6px] bg-black/5" />
                </div>
                <figcaption className="bg-white p-6">
                  <h3 className="text-[18px] font-medium leading-6 tracking-h2 text-ink">
                    {screen.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.62] text-muted">
                    {screen.caption}
                  </p>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Impact */}
      <section id="impact" className="border-t border-border-soft py-24">
        <Container>
          <p className="font-mono text-[10px] uppercase tracking-label-lg text-muted">
            <span className="text-accent-purple">05</span>, Impact
          </p>
          <h2 className="mt-5 max-w-[820px] text-[40px] leading-[1.15] tracking-h2 text-ink">
            {cs.impact.intro}
          </h2>
          <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-3">
            {cs.impact.metrics.map((m, i) => (
              <Reveal
                key={m.label}
                delay={i * 0.08}
                className="rounded-card border border-border-soft p-8"
              >
                <div className="flex items-baseline gap-3">
                  <span className="text-[20px] text-muted line-through">
                    {m.before}
                  </span>
                  <span aria-hidden className="text-muted">
                    →
                  </span>
                  <span className="font-display text-[40px] leading-none text-ink">
                    {m.after}
                  </span>
                </div>
                <p className="mt-4 text-[14px] leading-[1.62] text-muted">
                  {m.label}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 max-w-[860px] rounded-card border-l-2 border-accent-purple bg-surface/60 py-2 pl-8 pr-6">
            <p className="text-[17px] leading-[1.72] text-ink-76">
              {cs.impact.reflection}
            </p>
          </div>
        </Container>
      </section>

      {/* Next project */}
      {cs.next && (
        <section className="border-t border-border-soft py-24">
          <Container>
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-label-lg text-muted">
                  Next project
                </p>
                <h2 className="mt-4 text-[40px] font-medium leading-[1.15] tracking-h2 text-ink">
                  {cs.next.label}
                </h2>
              </div>
              <Link
                href={`/work/${cs.next.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-[14px] font-medium leading-5 text-white tracking-button transition-opacity hover:opacity-90"
              >
                View another project
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="font-mono text-[10px] uppercase tracking-label-lg text-muted">
        {label}
      </dt>
      <dd className="mt-1.5 text-[15px] leading-[1.55] text-ink">{value}</dd>
    </div>
  );
}
