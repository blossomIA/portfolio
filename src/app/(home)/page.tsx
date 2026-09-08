import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { WhatICanDo } from "@/components/sections/WhatICanDo";
import { Capabilities } from "@/components/sections/Capabilities";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <WhatICanDo />
      <Capabilities />
      <Testimonials />
      <Contact />
    </>
  );
}
