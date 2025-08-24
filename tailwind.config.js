/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'markazi': ['Markazi Text', 'serif'],
        'karla': ['Karla', 'sans-serif']
      }
    },
  },
  plugins: [],
}