import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "sereno-green": "#2E6B4F",
        "deep-forest": "#0F1915",
        cream: "#FAF8F5"
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["system-ui", "Segoe UI", "Helvetica", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 4px 10px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};
export default config;
