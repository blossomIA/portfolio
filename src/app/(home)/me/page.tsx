import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { Process } from "@/components/home/Process";
import { MeHero } from "./_hero";
import { MeServices } from "./_services";
import { Human } from "./_human";
import "@/styles/me.css";

export const metadata: Metadata = pageMeta({ title: "Me", description: "About Amarachi Blossom, a product designer who builds, based in Germany: how she moved into design, how she works, and life outside the work.", path: "/me" });

export default function MePage() {
  return (
    <>
      <MeHero />
      <MeServices />
      <Process />
      <Human />
    </>
  );
}
