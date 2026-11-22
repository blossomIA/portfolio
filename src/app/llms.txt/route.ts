import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

// A plain-text summary of the site for AI assistants (llmstxt.org).
export const dynamic = "force-static";

const SUMMARIES: Record<string, string> = {
  "token-nest":
    "Blockchain crypto wallet and portfolio tracker. Mixed-method research (120 survey respondents, 8 interviews, a competitive audit), persona, design system and light/dark modes. Onboarding completion rose from 58% to 94%.",
  "baby-haven":
    "Mobile app for new parents. 25 parent interviews, a journey map, a five-pillar information architecture, the Dusk & Milk design system and before/after screens. Usability testing went from 23 critical issues to 94% task completion.",
  fetch:
    "Delivery platform where customers and couriers negotiate prices in real time: problem framing, design process, type and colour, key flows and mock-ups.",
  explorations: "A reel of product shots, components, flows and motion explorations from client work and personal projects.",
};

export function GET() {
  const u = site.url;
  const body = `# ${site.name}

> ${site.description}

${site.name} is a ${site.role.toLowerCase()} based in ${site.location} who works with teams worldwide. She has worked across startups, agencies and product teams on fintech, edtech and consumer products. Her focus: ${site.skills.join(", ")}.

- Location: ${site.location} (works remotely with teams anywhere)
- Contact: ${site.email}
- LinkedIn: ${site.socials.linkedin}

## Case studies

${projects.map((p) => `- [${p.name}: ${p.title}](${u}${p.href}): ${SUMMARIES[p.slug] ?? p.blurb ?? ""}`).join("\n")}

## Pages

- [Home](${u}/): introduction, selected work, services, testimonials and contact
- [Projects](${u}/projects): every case study and exploration
- [About](${u}/me): her background, approach, process and life outside work
- [Résumé](${u}/resume): experience timeline (Seashell Labs / LinkBridge Consulting, Meerge / Megadel Africa, FunMondayCo., GoMyCode) and the PDF

## Optional

- [Sitemap](${u}/sitemap.xml)
`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
