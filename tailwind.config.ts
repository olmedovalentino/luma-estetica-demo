import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sky: {
          50: "#f4f8fb",
          100: "#e8f1f7",
          200: "#d7e6f1",
          300: "#bdd4e7",
          400: "#8eb8d8",
          500: "#5f9dc7",
          600: "#3f7fa9",
          700: "#2f6488",
          800: "#214969",
          900: "#18334a",
        },
        slate: {
          50: "#f7fafc",
          100: "#edf3f7",
          200: "#d5e0e8",
          300: "#afc2d0",
          400: "#7f97aa",
          500: "#5f7486",
          600: "#445768",
          700: "#334351",
          800: "#222f3a",
          900: "#131d26",
        },
        ice: {
          100: "#f7fbff",
          200: "#eef6fd",
          300: "#dcecf8",
          400: "#c3def0",
        },
      },
      boxShadow: {
        soft: "0 20px 60px -30px rgba(28, 52, 79, 0.28)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(158, 208, 247, 0.55), transparent 42%), radial-gradient(circle at right, rgba(93, 161, 204, 0.16), transparent 34%)",
      },
    },
  },
  plugins: [],
};

export default config;
