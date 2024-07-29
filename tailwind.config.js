/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["philosopher", "serif"],
        body: ["questrial", "serif"],
      },
    },
  },
  plugins: [],
};
