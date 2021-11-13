module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/components/*.{js,jsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#1A1F38",
        mainTransparent: "rgba(196, 196, 196, 0.3)",
        medBlack: "#050E12",
      },
      fontFamily: {
        inter: "Inter, sans-serif",
        roboto: "Roboto, sans-serif;",
      },
      backgroundColor: {
        medBlack: "rgba(5, 14, 18, 1)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
