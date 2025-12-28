/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09091A", // The deep dark blue-black background
        primary: "#7F56D9",    // The bright purple in buttons
        secondary: "#4FACFE",  // The light blue accent
        "card-bg": "rgba(255, 255, 255, 0.03)", // Glass effect color
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'], // Sets Outfit as default
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(90deg, #7F56D9 0%, #4FACFE 100%)', // The exact button gradient
      }
    },
  },
  plugins: [],
}