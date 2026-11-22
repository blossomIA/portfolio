import { caseStudyOg, ogSize } from "@/lib/og";

export const alt = "Token Nest, a case study by Amarachi Blossom";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return caseStudyOg("token-nest");
}
