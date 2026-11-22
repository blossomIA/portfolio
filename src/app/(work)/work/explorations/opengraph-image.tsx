import { caseStudyOg, ogSize } from "@/lib/og";

export const alt = "Explorations and side projects by Amarachi Blossom";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return caseStudyOg("explorations");
}
