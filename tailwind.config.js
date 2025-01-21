/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './*.js'], // Corrected syntax for content paths
  theme: {
    extend: {
      screens: {
        xsm: '270px', // Custom breakpoint for 270px
      },
    },
  },
  plugins: [],
};
