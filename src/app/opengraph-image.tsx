import { ImageResponse } from "next/og";

export const alt = "Jen Kelleman — I design the language layer of AI systems.";
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
          background: "#f7f6f2",
          color: "#1a1a1a",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, color: "#6b6860", letterSpacing: 2 }}>FIG. 00 · AIWITHJEN.COM</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>Jen Kelleman</div>
          <div style={{ display: "flex", fontSize: 34, color: "#55524b" }}>
            I design the language layer of AI systems.
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
                border: "1px solid #dedbd2",
                background: "#fbfaf7",
                color: "#1a1a1a",
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
