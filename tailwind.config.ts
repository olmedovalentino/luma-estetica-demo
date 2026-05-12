import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f5f7f1",
          100: "#e8ede1",
          200: "#d6dec9",
          300: "#becaa9",
          400: "#a3b083",
          500: "#8c9b69",
          600: "#758063",
          700: "#5d664f",
          800: "#454b3b",
          900: "#2f3627",
        },
        beige: {
          50: "#fbf7f1",
          100: "#f7f3ec",
          200: "#eee3d6",
          300: "#e0cfbb",
          400: "#cfb697",
          500: "#b7a58a",
          600: "#9d8b71",
          700: "#7f6f5a",
          800: "#635648",
          900: "#4c4035",
        },
        ink: {
          50: "#f4f1ef",
          100: "#ded7d5",
          200: "#bcb0ac",
          300: "#95837f",
          400: "#6e5d59",
          500: "#4f403d",
          600: "#3b302e",
          700: "#2a2220",
          800: "#1e1817",
          900: "#120f0f",
        },
      },
      boxShadow: {
        soft: "0 20px 60px -28px rgba(55, 65, 38, 0.28)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(111, 122, 90, 0.35), transparent 45%), radial-gradient(circle at right, rgba(183, 165, 138, 0.2), transparent 35%)",
      },
    },
  },
  plugins: [],
};

export default config;
