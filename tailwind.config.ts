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
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-out forwards",
        fadeUp: "fadeUp 1.2s ease-out forwards"
      }
    }
  },
  plugins: []
};

export default config;

