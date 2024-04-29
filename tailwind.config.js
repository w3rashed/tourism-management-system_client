/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Comforter_Brush: '"Comforter Brush", cursive',
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "luxury"],
  },
};
