import { ImageResponse } from "next/og";
import { Bloom } from "./icon";

// Home-screen icon (iOS rounds the corners itself, so the square is full-bleed).
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background: "#121114",
        }}
      >
        <Bloom size={132} />
      </div>
    ),
    size,
  );
}
