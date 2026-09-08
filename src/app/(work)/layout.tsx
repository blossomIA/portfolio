import type { ReactNode } from "react";
import { BackHome } from "@/components/BackHome";
import { Footer } from "@/components/Footer";

export default function WorkLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <BackHome />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
