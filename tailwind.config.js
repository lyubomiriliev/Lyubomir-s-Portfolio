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
        orange: "#EC9356",
        lightBlue: "#8ADBFF",
        gradientBlack: "#1F1F1F",
        gradientLight: "#454545",
        grayGradientBlack: "#CECECE",
        grayGradientLight: "#FFFFFF",
      },
      perspective: {
        1000: "1000px",
      },
      rotate: {
        "y-180": "rotateY(180deg)",
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
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".transform-style-3d": {
          "transform-style": "preserve-3d",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
      });
    },
  ],
};
