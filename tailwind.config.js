module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        temperature: {
          cold: '#00f', // Blue for cold temperatures
          warm: '#ff0', // Yellow for warm temperatures
          hot: '#f00', // Red for hot temperatures
        },
      },
    },
  },
  plugins: [],
}