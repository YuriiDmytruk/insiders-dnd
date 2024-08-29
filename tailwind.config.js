/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'tab-hover': '#F4F7F9',
        'light-grey': '#F1F5F8',
        'white': '#FFFFFF',

        'text-black': '#343434',
        'text-gray': '#7F858D'
      },
      boxShadow: {
        'tab-pop-up-shadow': '0px 16px 30px 0px rgba(123, 127, 145, 0.2)', // Adjust opacity if needed
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },

    },
  },
  plugins: [],
}