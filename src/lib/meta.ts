import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Metadata for one page: title, description, its canonical URL and matching
 * Open Graph / X fields. Pages use the site-wide share image (app/opengraph-image)
 * unless they have their own opengraph-image file, as every case study under
 * /work does. (Listing an image here would override that file.)
 */
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.name}, product designer based in ${site.location}`,
};
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
  // even `images: undefined` would hide a page's own file, so leave the key out
  const img = path.startsWith("/work/") ? {} : { images: [shareImage] };
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
      ...img,
    },
    twitter: { card: "summary_large_image", title: full, description, ...img },
  };
}
