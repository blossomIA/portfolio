import Image from "next/image";
import { Container } from "@/components/Container";
import { ArrowRight, Droplet } from "lucide-react";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-24 md:pt-20 md:pb-28">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-[minmax(340px,440px)_1fr] md:gap-24">
          {/* Portrait card */}
          <div className="relative mx-auto w-[340px] shrink-0 md:w-[420px]">
            <div className="relative -rotate-[1.5deg]">
              <Image
                src="/images/portrait.png"
                alt="Amarachi Blossom, Product Designer and 3D Animator"
                width={739}
                height={1033}
                className="block h-auto w-full"
                priority
                unoptimized
                sizes="(min-width: 768px) 420px, 340px"
              />

              {/* Purple badge, top-right, peeking out */}
              <span className="absolute right-[-14px] top-[-14px] rounded-2xl bg-accent-purple px-3.5 py-2 font-body text-[12px] font-bold text-white shadow-[0_10px_30px_rgba(147,51,234,0.35)]">
                1 Ultimate goal
              </span>

              {/* Cyan badge, bottom-left, peeking out */}
              <span className="absolute bottom-[-14px] left-[-14px] rounded-2xl bg-accent-cyan px-3.5 py-2 font-body text-[12px] font-bold text-ink shadow-[0_10px_24px_rgba(34,211,238,0.25)]">
                3+ Years
              </span>
            </div>
          </div>

          {/* Text side */}
          <div className="relative">
            {/* Heading with dots */}
            <div className="relative">
              <h1 className="font-display font-medium leading-[1.15] tracking-display text-ink pr-16 md:pr-24">
                <span className="block text-right text-[64px] md:text-[104px]">
                  Amarachi
                </span>
                <span className="block text-right text-[64px] md:text-[104px]">
                  Blossom
                </span>
              </h1>

              {/* Pink dot, far right of the column, aligned near "Amarachi" baseline */}
              <span
                aria-hidden
                className="absolute right-0 top-[38%] block size-[16px] rounded-full bg-accent-pink"
              />

              {/* Purple dot, left, aligned with top of "Blossom" */}
              <span
                aria-hidden
                className="absolute left-[6%] top-[62%] block size-[16px] rounded-full bg-accent-purple"
              />
            </div>

            <div className="mt-10 space-y-1 text-[18px] leading-[1.65] tracking-body-lg text-muted md:text-[22px]">
              <p>
                <span className="text-accent-pink">
                  Creates modern digital products
                </span>{" "}
                through user research, systems thinking, Ai, and clean execution.
              </p>
              <p>
                PS; Currently accepting{" "}
                <span className="text-ink/80">exciting design problems</span> ;
                )
              </p>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-4 text-[15px] font-medium leading-5 text-white tracking-button transition-opacity hover:opacity-90"
              >
                View my Work
                <ArrowRight className="size-4" strokeWidth={2.2} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-border-soft px-6 py-4 text-[15px] font-medium leading-5 text-ink tracking-button transition-colors hover:bg-surface"
              >
                Let&apos;s Build
              </a>
            </div>

            <p className="mt-10 flex items-center gap-2 text-[14px] leading-5 tracking-button text-muted opacity-70">
              <Droplet className="size-[13px]" strokeWidth={2} />
              Anywhere in the world, Good collaboration required.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
