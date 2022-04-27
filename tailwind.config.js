module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '5': '5px'
      }
    },
    fontFamily: {
      "commissioner": ['Commissioner', 'sans-serif']
    },
    colors: {
      "moderate-cyan": "hsl(176, 50%, 47%)",
      "dark-cyan": "hsl(176, 72%, 28%)",
      "black": "hsl(0, 0%, 0%)",
      "dark-gray": "hsl(0, 0%, 48%)",
      "white": "#fff",
      "transparent": "transparent",
    }
  },
  plugins: [],
}
