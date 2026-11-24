import { ogSize, siteOg } from "@/lib/og";

export const alt = "Amarachi Blossom, product designer who builds, based in Germany";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return siteOg();
}
