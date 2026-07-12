import { ImageResponse } from "next/og";

export const alt =
  "Annu Kumar Pal — AI and Machine Learning Engineer Portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background: "#000000",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            right: "-120px",
            top: "-180px",
            borderRadius: "9999px",
            background: "rgba(139, 92, 246, 0.22)",
            filter: "blur(80px)",
          }}
        />

        <div
  style={{
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    position: "relative",
  }}
>
          <div
            style={{
              display: "flex",
              fontSize: "28px",
              fontWeight: 700,
            }}
          >
            AKP.
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: "72px",
                fontWeight: 700,
                letterSpacing: "-3px",
                lineHeight: 1.05,
                maxWidth: "950px",
              }}
            >
              Building AI that solves real-world problems.
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "30px",
                fontSize: "28px",
                color: "#a1a1aa",
              }}
            >
              Annu Kumar Pal · AI & ML Engineer
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "22px",
              color: "#c4b5fd",
            }}
          >
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "9999px",
                background: "#8b5cf6",
              }}
            />

            AI · Machine Learning · Intelligent Software
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}