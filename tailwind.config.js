/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {spacing: {
      '88': '22rem', // Custom width for cards
    },
    colors: {
      gray: {
        800: '#1f2937', // Custom gray for card background
      },
      green: {
        500: '#10b981', // Custom green for buttons
        600: '#059669', // Hover state for buttons
      },
    },},
  },
  plugins: [],
}

