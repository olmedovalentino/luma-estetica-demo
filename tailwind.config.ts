import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        sand: {
          50: "#fdf9f4",
          100: "#fbf2e8",
          200: "#f6e2cf",
          300: "#edc7aa",
          400: "#dfaa80",
          500: "#c98a5b",
          600: "#a76341",
          700: "#844d34",
          800: "#603a2d",
          900: "#3c241d",
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
        soft: "0 20px 60px -28px rgba(61, 38, 28, 0.35)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(242, 204, 172, 0.45), transparent 45%), radial-gradient(circle at right, rgba(201, 138, 91, 0.18), transparent 35%)",
      },
    },
  },
  plugins: [],
};

export default config;
