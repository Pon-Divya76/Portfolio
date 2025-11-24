import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Modern color palette
        background: {
          DEFAULT: '#0f172a',
          lighter: '#1e293b',
          lightest: '#334155',
        },
        primary: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
          light: '#60a5fa',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          dark: '#7c3aed',
          light: '#a78bfa',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#cbd5e1',
          tertiary: '#94a3b8',
        },
        // Keep existing colors for backward compatibility
        carbon: "#0f172a",
        graphite: "#1e293b",
        mist: "#94a3b8",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "Inter", "sans-serif"],
      },
      boxShadow: {
        'glass': '0 10px 40px rgba(0,0,0,0.35)',
        'card': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'card-hover': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;



