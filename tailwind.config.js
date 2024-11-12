// tailwind.config.js
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
      fontSize: {
        "6xl": "4rem",
        "7xl": "5rem",
        "8xl": "6rem",
        "9xl": "7rem",
        "10xl": "8rem",
        "11xl": "9rem",
        "12xl": "10rem",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".perspective": {
          perspective: "1000px",
        },
        ".preserve-3d": {
          "transform-style": "preserve-3d",
        },
        ".backface-hidden": {
          "backface-visibility": "hidden",
        },
        ".rotate-y-180": {
          transform: "rotateY(180deg)",
        },
      });
    },
  ],
};
