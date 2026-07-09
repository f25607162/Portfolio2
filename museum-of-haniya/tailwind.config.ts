import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F8F7F4",
          soft: "#ECE8DF",
        },
        ink: {
          DEFAULT: "#222222",
          deep: "#111111",
        },
        brass: {
          DEFAULT: "#C8A96A",
          soft: "#DCC48F",
          deep: "#9C7F45",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-space-grotesk)", "sans-serif"],
      },
      transitionTimingFunction: {
        museum: "cubic-bezier(0.16, 1, 0.3, 1)",
        door: "cubic-bezier(0.76, 0, 0.24, 1)",
      },
      backdropBlur: {
        museum: "16px",
      },
      boxShadow: {
        spotlight: "0 0 80px rgba(200,169,106,0.25)",
        frame: "0 20px 50px rgba(0,0,0,0.12)",
      },
      keyframes: {
        floatParticle: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-40px)" },
        },
        scrollLine: {
          "0%,100%": { transform: "scaleY(0.4)", opacity: "0.4" },
          "50%": { transform: "scaleY(1)", opacity: "1" },
        },
      },
      animation: {
        floatParticle: "floatParticle 10s ease-in-out infinite",
        scrollLine: "scrollLine 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
