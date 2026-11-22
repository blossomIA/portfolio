import { Hero } from "@/components/home/Hero";
import { Work } from "@/components/home/Work";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";
import { Contact } from "@/components/home/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}
