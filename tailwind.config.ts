import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#0b0f16",
        graphite: "#141922",
        mist: "#9fb3c8",
        accent: "#6dd3ff",
        accentMuted: "#8ce6ff"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"]
      },
      boxShadow: {
        glass: "0 10px 40px rgba(0,0,0,0.35)"
      }
    }
  },
  plugins: []
};

export default config;


