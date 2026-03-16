import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",

  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#0F172A", // slate-900
        accent: "#2563EB", // blue-600
        muted: "#64748B", // slate-500
        bg: "#F8FAFC", // slate-50

        success: "#16A34A",
        warning: "#F59E0B",
      },

      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        jakarta: ["var(--font-jakarta)", "system-ui", "sans-serif"],
      },

      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },

      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.06)",
        card: "0 10px 30px rgba(0,0,0,0.08)",
      },
    },
  },

  plugins: [],
};

export default config;