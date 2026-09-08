import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { BackHome } from "@/components/BackHome";

export default function HomeLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <BackHome />
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
