import { ImageResponse } from "next/og";

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
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "white",
        }}
      >
        <div
          style={{
            fontSize: 24,
            color: "#8b5cf6",
            marginBottom: 24,
            letterSpacing: 8,
          }}
        >
          AI • ML • SOFTWARE ENGINEERING
        </div>

        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            lineHeight: 1.1,
          }}
        >
          Annu Kumar Pal
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 34,
            color: "#a1a1aa",
            maxWidth: 900,
          }}
        >
          Building intelligent software, AI systems, and real-world products.
        </div>

        <div
          style={{
            marginTop: 60,
            display: "flex",
            gap: 16,
          }}
        >
          {["AI", "Machine Learning", "Next.js", "Python"].map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid #8b5cf6",
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: 22,
                color: "#c4b5fd",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}