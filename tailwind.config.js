/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        'logo-screen': {'raw': '(max-height: 800px)'}
      },
      backgroundImage: {
        "war-robots": "url('@/assets/bg.jpeg')",
      },
      backdropBlur: {
        xs: '10px',
      },
      colors: {
        yellow: "#FFCD05",
        footer: '#131114'
      }
    },
  },
  plugins: [],
};
