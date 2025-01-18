/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      screens: {
        xsm: '270px', // Custom breakpoint for 270px
      },
    },
  },
  plugins: [],
};
