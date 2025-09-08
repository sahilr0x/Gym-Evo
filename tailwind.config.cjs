/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#FFE1E0",
        "primary-200": "#FFD1CF",
        "primary-300": "#FFA6A3",
        "primary-400": "#FF8A86",
        "primary-500": "#FF6B66",
        "primary-800": "#CC2B26",
        "secondary-100": "#FFF4CC",
        "secondary-400": "#FFCD5B",
        "secondary-500": "#FFC132",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "gradient-primary":
          "linear-gradient(135deg, #FF6B66 0%, #FFC132 100%)",
        "gradient-primary-hover":
          "linear-gradient(135deg, #FF6B66 0%, #FFCD5B 100%)",
        "gradient-card":
          "linear-gradient(145deg, rgba(255, 255, 255, 0.8) 0%, rgba(255, 225, 224, 0.4) 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')",
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        evolvetext: "url('./assets/EvolveText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};