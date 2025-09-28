import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sereno-green": "#2E6B4F",
        "deep-forest": "#0F1915",
        cream: "#FAF8F5",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["system-ui", "Segoe UI", "Helvetica", "Arial", "sans-serif"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeUp: "fadeUp .6s ease-out both",
        slideDown: "slideDown .25s ease-out both",
        fadeIn: "fadeIn .5s ease-out both",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.08)",
      },
    },
  },
  plugins: [],
};

export default config;
