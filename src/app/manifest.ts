import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name}, ${site.role}`,
    short_name: site.name,
    description: site.short,
    start_url: "/",
    display: "standalone",
    background_color: "#121114",
    theme_color: "#121114",
    icons: [
      { src: "/icon", sizes: "64x64", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
