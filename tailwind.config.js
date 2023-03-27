/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./src/**/*.{html,js}"],
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
    },
    colors: {
      'red': 'hsl(1, 90%, 64%)',
      'blue': 'hsl(219, 85%, 26%)',
      'white': 'hsl(0, 0%, 100%)',
      'verylightgb': 'hsl(210, 60%, 98%)',
      'lightgb1': 'hsl(211, 68%, 94%)',
      'lightgb2': 'hsl(205, 33%, 90%)',
      'gb': 'hsl(219, 14%, 63%)',
      'darkgb': 'hsl(219, 12%, 42%)',
      'verydarkgb': 'hsl(224, 21%, 14%)',
    },
  },
  plugins: [],
}
