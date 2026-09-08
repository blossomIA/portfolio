import type { Metadata } from "next";
import { Inter, Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://amarachiblossom.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Amarachi Blossom, Product Designer",
    template: "%s",
  },
  description:
    "Product designer creating digital products through user research, systems thinking, and clean execution.",
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
    description:
      "Product designer creating digital products through user research, systems thinking, and clean execution.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amarachi Blossom, Product Designer",
    description:
      "Product designer creating digital products through user research, systems thinking, and clean execution.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink">
        {children}
      </body>
    </html>
  );
}
