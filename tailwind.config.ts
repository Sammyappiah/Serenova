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
        fadeUp: { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        slideDown: { "0%": { height: "0", opacity: "0" }, "100%": { height: "var(--content)", opacity: "1" } },
        fadeIn: { from: { opacity: "0" }, to: { opacity: "1" } },
      },
      animation: {
        fadeUp: "fadeUp .6s ease-out both",
        slideDown: "slideDown .25s ease-out both",
        fadeIn: "fadeIn .4s ease-out both",
      },
      boxShadow: {
        lux: "0 10px 30px rgba(0,0,0,.08)",
      },
    },
  },
  plugins: [],
};

export default config;
