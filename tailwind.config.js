/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html', // Pick up all HTML files in the root folder
    './*.js', // Pick up all JS files in the root folder
    './src/.html', // Pick up all HTML files inside src and its subfolders
  ],
  theme: {
    extend: {
      screens: {
        xsm: '270px', // Custom breakpoint for 270px
      },
    },
  },
  plugins: [require('daisyui')],
};
