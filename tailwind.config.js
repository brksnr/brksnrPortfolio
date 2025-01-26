/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html", 
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          oswald: ['Oswald', 'sans-serif'], 
          sourceCode: ['Source Code Pro', 'monospace'], 
        },
      },
    },
    plugins: [],
  }
  