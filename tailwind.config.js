/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '300px',
      "md":'700px',
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