import { ImageResponse } from "next/og";
import { site } from "@/content/site";

// Dynamic OpenGraph card — rendered at build/request time by the Edge runtime.
export const runtime = "edge";
export const alt = `${site.name} — ${site.shortRole}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A0B",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            background:
              "radial-gradient(circle, rgba(124,92,255,0.35), transparent 68%)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#7C5CFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            R
          </div>
          <div style={{ color: "#7A7A82", fontSize: 26, letterSpacing: "0.12em" }}>
            {site.shortRole.toUpperCase()}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            style={{
              color: "#F4F4F5",
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            I build the backends behind{" "}
            <span style={{ color: "#7C5CFF" }}>real-time AI voice.</span>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ color: "#F4F4F5", fontSize: 34, fontWeight: 600 }}>{site.name}</div>
          <div style={{ color: "#7A7A82", fontSize: 24 }}>
            STT → LLM → TTS · multi-tenant SaaS
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
