import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import "./globals.css";
import "@/styles/site.css";
import "@/styles/home.css";
import "@/styles/case-study.css";

// One variable family; the width axis gives us condensed display type,
// regular text and expanded labels from a single font file.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  display: "swap",
  axes: ["wdth"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://amarachiblossom.com";

const description =
  "Product designer creating modern digital products through user research, systems thinking, AI, and clean execution.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amarachi Blossom, Product Designer",
    template: "%s · Amarachi Blossom",
  },
  description,
  keywords: [
    "product designer",
    "UX designer",
    "portfolio",
    "design systems",
    "user research",
    "Amarachi Blossom",
  ],
  authors: [{ name: "Amarachi Blossom" }],
  creator: "Amarachi Blossom",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Amarachi Blossom",
    title: "Amarachi Blossom, Product Designer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarachi Blossom, Product Designer",
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={archivo.variable}
      data-scroll-behavior="smooth"
      data-theme="dark"
      suppressHydrationWarning
    >
      <head>
        {/* Apply a saved theme before first paint (charcoal is the default). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`,
          }}
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Nav />
        <main id="main" className="page">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
