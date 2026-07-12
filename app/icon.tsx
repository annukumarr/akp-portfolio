import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#000000",
          color: "#ffffff",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "-0.5px",
          border: "1px solid #8b5cf6",
          borderRadius: "8px",
        }}
      >
        AKP.
      </div>
    ),
    {
      ...size,
    }
  );
}