import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070C18",
          900: "#0B1220",
          850: "#0F172A",
          800: "#111A2E",
          700: "#1A2540",
        },
        "oracle-red": "#C74634",
        "azure-blue": "#0078D4",
        "iq-yellow": "#FFD600",
        "iq-teal": "#2DD4BF",
        "iq-purple": "#A78BFA",
        muted: "#94A3B8",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        "grid-faint":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        "iq-glow": "0 0 0 1px rgba(255,214,0,0.35), 0 0 28px rgba(255,214,0,0.18)",
        "teal-glow": "0 0 0 1px rgba(45,212,191,0.35), 0 0 28px rgba(45,212,191,0.18)",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.78", transform: "scale(1.04)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-soft": "pulse-soft 2.6s ease-in-out infinite",
        "fade-up": "fade-up 0.4s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
