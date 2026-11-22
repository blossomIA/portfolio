import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

import { site } from "@/lib/site";

const baseUrl = site.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const page = (path: string, priority: number): MetadataRoute.Sitemap[number] => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority,
  });
  return [
    page("/", 1),
    page("/projects", 0.9),
    ...projects.map((p) => page(p.href, 0.8)),
    page("/me", 0.7),
    page("/resume", 0.6),
  ];
}
