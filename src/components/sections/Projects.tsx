import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { SectionLabel } from "@/components/SectionLabel";
import { Reveal } from "@/components/Reveal";

type Project = {
 slug: string;
 title: string;
 image: string;
 imageW: number;
 imageH: number;
};

const projects: Project[] = [
 {
  slug: "meerge",
  title: "Explorations and Side Projects",
  image: "/images/projects/explorations.png",
  imageW: 1050,
  imageH: 925,
 },
 {
  slug: "token-nest",
  title: "Building trust into every tap, a next-gen crypto experience",
  image: "/images/projects/token-vest.png",
  imageW: 1050,
  imageH: 925,
 },
 {
  slug: "baby-haven",
  title: "Redesigning Your Gentle Parenting Companion",
  image: "/images/projects/baby-haven.png",
  imageW: 1050,
  imageH: 985,
 },
 {
  slug: "fetch",
  title: "Building a design system from the ground up",
  image: "/images/projects/fetch-delivery.png",
  imageW: 1050,
  imageH: 985,
 },
];

export function Projects() {
 return (
    <section id="work" className="rule-top py-24">
   <Container>
    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
     <div>
      <SectionLabel number="02" label="Selected Work" />
            <h2 className="mt-4 text-[34px] sm:text-[44px] md:text-[56px] font-medium leading-[1.05] tracking-h2 text-ink">
              Projects
            </h2>
     </div>
          <p className="max-w-[400px] text-[18px] leading-[1.5] tracking-body text-muted">
      <span className="text-accent-cyan">
       &ldquo;I promise i didn&apos;t just watch Youtube videos ;)
      </span>
      <br />
      Each project is a complete story. Not a UI showcase, a product story, each
      shaped by real user problems and rigorous process&rdquo;.
     </p>
    </div>

    <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
     {projects.map((p, i) => (
      <Reveal key={p.slug} as="article" delay={i * 0.08} className="group">
       <Link href={`/work/${p.slug}`} aria-label={p.title} className="block">
        <Image
         src={p.image}
         alt={p.title}
         width={p.imageW}
         height={p.imageH}
         className="block h-auto w-full transition-transform duration-500 group-hover:scale-[1.01]"
         unoptimized
        />
       </Link>
      </Reveal>
     ))}
    </div>
   </Container>
  </section>
 );
}
