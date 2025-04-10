/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {spacing: {
      '88': '22rem', 
    },
    colors: {
      gray: {
        800: '#1f2937', 
      },
      green: {
        500: '#10b981', 
        600: '#059669', 
      },
    },},
  },
  plugins: [],
}

