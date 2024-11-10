/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: "#019ECF",
        secondary: "#331942",
      },
      fontSize: {
        "6xl": "4rem", // 64px
        "7xl": "5rem", // 80px
        "8xl": "6rem", // 96px
        "9xl": "7rem", // 112px
        "10xl": "8rem", // 128px
        "11xl": "9rem", // 144px
        "12xl": "10rem", // 160px
      },
    },
  },
  plugins: [],
};
