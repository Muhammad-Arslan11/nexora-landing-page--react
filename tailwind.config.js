/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Make sure your HTML file is included
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/TSX/React files
  ],
  theme: {
    extend: {
      colors: {
        themegreen: '#25db79', // ✅ Custom color alias
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // ✅ Custom font
      },
    },
  },
  plugins: [],
}
