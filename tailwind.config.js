/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/**/*/*.{html,ts}",
  ],
  theme: {
    fontFamily: {
      'tektur': ['Tektur', 'sans-serif']
    },
    extend: {      
    },
  },
  
  variants: {},
  plugins: [
    require('@tailwindcss/forms'),
  ],
}


