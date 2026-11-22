/**
 * The four projects, in display order. Used by the home "Selected work" stack,
 * each case study's "next project" card, and the sitemap.
 *
 * `theme` drives the project's colours everywhere it appears:
 *   panel  — card / hero panel background
 *   on     — text on the panel
 *   accent — highlight colour (frames, numbers, chips)
 */
export type Project = {
  slug: string;
  href: string;
  title: string;
  name: string;
  kind: string;
  blurb?: string;
  tags: string[];
  image: string;
  cta: string;
  theme: { panel: string; on: string; accent: string };
};

export const projects: Project[] = [
  {
    slug: "token-nest",
    href: "/work/token-nest",
    title: "Building trust into every tap",
    name: "Token Nest",
    kind: "Fintech · Case study",
    blurb:
      "A next-gen crypto experience. A blockchain-powered crypto wallet and portfolio tracker designed to make decentralized finance accessible to everyday users.",
    tags: ["AI Research", "Immersive UI", "Systems Thinking"],
    image: "/images/projects/cover-token-nest.webp",
    cta: "Read the case study",
    theme: { panel: "#16211F", on: "#EEF5EC", accent: "#8AE28F" },
  },
  {
    slug: "baby-haven",
    href: "/work/baby-haven",
    title: "Redesigning your gentle parenting companion",
    name: "Baby Haven",
    kind: "Parenting · Case study",
    tags: ["UX Research", "Product Strategy", "Systems Design"],
    image: "/images/projects/cover-baby-haven.webp",
    cta: "Read the case study",
    theme: { panel: "#FFE3EC", on: "#0A0A0A", accent: "#F472B6" },
  },
  {
    slug: "fetch",
    href: "/work/fetch",
    title: "Building a design system from the ground up",
    name: "Fetch",
    kind: "Logistics · Case study",
    tags: ["Design Systems", "Component Library", "Interaction Design"],
    image: "/images/projects/cover-fetch.webp",
    cta: "Read the case study",
    theme: { panel: "#FF6B1A", on: "#0A0A0A", accent: "#0A0A0A" },
  },
  {
    slug: "explorations",
    href: "/work/explorations",
    title: "Explorations and side projects",
    name: "Explorations",
    kind: "Motion · UI",
    blurb: "Interactions, in motion.",
    tags: ["Motion", "Interaction", "Visual Design"],
    image: "/images/projects/cover-explorations.webp",
    cta: "See the reel",
    theme: { panel: "#0A0A0A", on: "#FFFFFF", accent: "#22D3EE" },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

/** The project after `slug`, wrapping around to the first. */
export function nextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}

export function projectNumber(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return `${String(i + 1).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
}
