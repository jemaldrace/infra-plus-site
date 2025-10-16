/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0D1B2A",
          teal: "#00B4B6"
        }
      }
    }
  },
  plugins: [],
};
