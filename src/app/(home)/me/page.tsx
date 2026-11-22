import type { Metadata } from "next";
import { Process } from "@/components/home/Process";
import { MeHero } from "./_hero";
import { MeServices } from "./_services";
import { Human } from "./_human";
import "@/styles/me.css";

export const metadata: Metadata = {
  title: "Me",
  description:
    "I believe good design is invisible. It doesn't announce itself. It just works, clearly, calmly, without drama.",
};

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
