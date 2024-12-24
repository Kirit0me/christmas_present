/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        christmas: ['"Mountains of Christmas"', 'cursive'], // Add custom font
      },
    },
    backgroundImage: {
      'main' : "url('/src/christmas-background.jpg')"
    }
  },
  plugins: [],
}

