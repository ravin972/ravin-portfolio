import type { Config } from "tailwindcss";

/**
 * Tokens mirror the PUL$E design system (dark-first, Ghost Violet accent).
 * Values are the resolved hex/timing from colors_and_type.css so the
 * production app has no runtime dependency on the design-system project.
 */
const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1180px" },
    },
    extend: {
      colors: {
        bg: "#0A0A0B",
        surface: "#101014",
        "surface-2": "#15151A",
        "surface-3": "#1A1A1E",
        ink: {
          0: "#0A0A0B",
          1: "#141418",
          2: "#1A1A1E",
          3: "#2A2A30",
          4: "#48484F",
          5: "#7A7A82",
          6: "#9A9AA2",
          7: "#B5B5BB",
          8: "#F4F4F5",
        },
        violet: {
          DEFAULT: "#7C5CFF",
          soft: "#A58BFF",
          bright: "#8F74FF",
          tint: "#16121F",
        },
        lime: "#C6F24E",
        heat: "#FF4D6D",
        border: "rgba(255,255,255,0.09)",
        "border-strong": "rgba(255,255,255,0.16)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-body)", "Inter", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        display: "-0.02em",
      },
      borderRadius: {
        sheet: "20px",
      },
      boxShadow: {
        glow: "0 0 26px rgba(124,92,255,0.35)",
        card: "0 8px 24px rgba(0,0,0,0.5)",
        lift: "0 24px 70px rgba(0,0,0,0.6)",
      },
      transitionTimingFunction: {
        "out-quint": "cubic-bezier(0.22,1,0.36,1)",
        "in-quart": "cubic-bezier(0.4,0,1,1)",
      },
      keyframes: {
        flow: {
          "0%": { backgroundPosition: "-70px 0" },
          "100%": { backgroundPosition: "calc(100% + 70px) 0" },
        },
        pulseNode: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(124,92,255,0)" },
          "50%": { boxShadow: "0 0 22px 0 rgba(124,92,255,0.4)" },
        },
        ambient: {
          "0%,100%": { transform: "translate(0,0) scale(1)", opacity: "0.5" },
          "50%": { transform: "translate(-40px,30px) scale(1.25)", opacity: "0.85" },
        },
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0.25" },
        },
      },
      animation: {
        flow: "flow 2.4s linear infinite",
        pulseNode: "pulseNode 3s ease-in-out infinite",
        ambient: "ambient 12s ease-in-out infinite",
        blink: "blink 2.2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
