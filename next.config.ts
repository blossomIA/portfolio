import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The "Explorations and side projects" reel used to live at /work/meerge.
      { source: "/work/meerge", destination: "/work/explorations", permanent: true },
      // About lives at /me; keep /about working too.
      { source: "/about", destination: "/me", permanent: true },
      // Placeholder case studies that were removed in v2.
      { source: "/work/landbridge", destination: "/projects", permanent: true },
      { source: "/work/eye-level", destination: "/projects", permanent: true },
      { source: "/work", destination: "/projects", permanent: true },
    ];
  },
};

export default nextConfig;
