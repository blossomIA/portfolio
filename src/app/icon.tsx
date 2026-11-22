import { ImageResponse } from "next/og";

// Browser-tab icon: her initial on charcoal with the site's pink full stop.
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
          color: "#f3f1ea",
          fontSize: 46,
          letterSpacing: -2,
          paddingBottom: 6,
        }}
      >
        a<span style={{ color: "#f472b6" }}>.</span>
      </div>
    ),
    size,
  );
}
