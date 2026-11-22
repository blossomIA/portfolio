import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Metadata for one page: title, description, its canonical URL and matching
 * Open Graph / X fields. (Share images come from opengraph-image files.)
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const full = title ? `${title} · ${site.name}` : `${site.name}, ${site.role}`;
  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: site.name,
      url: path,
      title: full,
      description,
    },
    twitter: { card: "summary_large_image", title: full, description },
  };
}
