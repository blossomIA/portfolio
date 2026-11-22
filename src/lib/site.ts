/**
 * Facts about Amarachi and the site, shared by metadata, structured data,
 * llms.txt and the share images so they never drift apart.
 */
export const site = {
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://amarachiblossom.com").replace(/\/$/, ""),
  name: "Amarachi Blossom",
  role: "Product Designer",
  location: "Germany",
  locationLine: "Based in Germany, working with teams worldwide",
  email: "hello@amarachiblossom.com",
  description:
    "Amarachi Blossom is a product designer based in Germany, creating modern digital products through user research, systems thinking, AI, and clean execution.",
  short:
    "Product designer based in Germany. Modern digital products through user research, systems thinking, AI, and clean execution.",
  socials: {
    linkedin: "https://linkedin.com/in/amarachiblossom",
    x: "https://twitter.com/amarachiblossom",
    github: "https://github.com/amarachiblossom",
  },
  skills: [
    "Product design",
    "UX research",
    "AI-powered UX research",
    "Design systems",
    "Prototyping and usability testing",
    "Interaction design",
  ],
} as const;
