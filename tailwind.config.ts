import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0f766e",
          dark: "#115e59",
          soft: "#f0fdfa",
        },
      },
    },
  },
  plugins: [],
};

export default config;
