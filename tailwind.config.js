module.exports = {
  content: [
    "./pages/**/*.{tsx,ts,js,jsx}",
    "./components/**/*.{tsx,ts,js,jsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'bg-styles': "url('/img/bg-styles.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      })
  },
    colors: {
      'yellow-skin': '#F1D78E'
    },
  plugins: [],
  }
};
