import { ImageResponse } from "next/og";

export const alt = "Jen Kelleman — Content Design Engineering & AI Systems Architecture";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const pills = ["Agentic Orchestration", "Semantic Layers", "Prompt Evals", "Microsoft Fabric"];

// Critical content sits inside the 1040x530 safe area (80px / 50px insets).
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "50px 80px",
          background: "#090d16",
          color: "#f1f5f9",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#60a5fa" }}>aiwithjen.com</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>Jen Kelleman</div>
          <div style={{ display: "flex", fontSize: 34, color: "#cbd5e1" }}>
            Content Design Engineering & AI Systems Architecture
          </div>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {pills.map((p) => (
            <div
              key={p}
              style={{
                display: "flex",
                fontSize: 22,
                padding: "8px 18px",
                borderRadius: 10,
                border: "1px solid #1e293b",
                background: "#0f172a",
                color: "#cbd5e1",
              }}
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
