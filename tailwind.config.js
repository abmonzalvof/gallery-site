/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        yellow: '#ffd600',
        darkBlue: '#16275b'
      }
    },
  },
  plugins: [],
}

