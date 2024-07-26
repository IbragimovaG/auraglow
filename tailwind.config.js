/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '400px',
      "md":'900px',
      'lg': '1280px',
      'xl': '1536px',
    },

    extend: {
        backgroundImage: {
          'woman': "url('/src/assets/main.svg')",
      }
    },
  },
  plugins: [],
}