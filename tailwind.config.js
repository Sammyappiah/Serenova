/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fdfcf7",
        dark: "#1f2937",
        green: "#166534",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
