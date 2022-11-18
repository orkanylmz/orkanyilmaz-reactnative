/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins-bold': ['Poppins-Bold'],
        'poppins-light': ['Poppins-Light'],
        'poppins-medium': ['Poppins-Medium'],
        poppins: ['Poppins-Regular'],
        'poppins-semibold': ['Poppins-Semibold'],
        'poppins-thin': ['Poppins-Thin'],
      },
    },
  },
  plugins: [],
};
