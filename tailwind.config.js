/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./blog/**/*.html"   // 👈 this is critical
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        brand: {
          blue: '#0EA5E9',
          teal: '#14B8A6',
          dark: '#020617'
        }
      }
    }
  },
  plugins: [],
}