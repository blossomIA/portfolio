import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://amarachiblossom.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies.map((c) => ({
      url: `${baseUrl}/work/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
