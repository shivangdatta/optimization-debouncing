/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        'neon-green': '#39FF14',
      },
      boxShadow: {
        neon: '0 0 1px #39FF14, 0 0 20px #39FF14, 0 0 30px #39FF14, 0 0 40px #39FF14',
      },
    },
  },
  plugins: [],
}