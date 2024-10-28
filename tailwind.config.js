/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3CB941',
        secondary: '#fff',
        'primary-600': '#2eb232'
        // ...
      }
    },
  },
  plugins: [],
}

