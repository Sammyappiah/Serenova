/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fdfcf7",
        "sereno-green": "#2f5d50",
        "deep-forest": "#1a3b32"
      }
    },
  },
  plugins: [],
};
