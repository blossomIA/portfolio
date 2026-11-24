import { ImageResponse } from "next/og";
import { PETAL, PETAL_TURNS } from "@/components/site/Logo";

// Browser-tab icon: the Code Bloom blossom on charcoal (brackets are too fine
// to read this small, so the tab carries the flower alone).
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          borderRadius: 14,
          background: "#121114",
        }}
      >
        <Bloom size={54} />
      </div>
    ),
    size,
  );
}

/** The blossom on its own, for icons rendered outside the page's CSS. */
export function Bloom({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="-44 -44 88 88">
      <defs>
        <linearGradient id="b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f472b6" />
          <stop offset="1" stopColor="#a28dff" />
        </linearGradient>
      </defs>
      <g fill="url(#b)">
        {PETAL_TURNS.map((r) => (
          <path key={r} d={PETAL} transform={`rotate(${r})`} />
        ))}
      </g>
      <circle r="6.5" fill="#3dd9ff" />
    </svg>
  );
}
