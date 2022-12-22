/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0563bb",
        secondary: "#45505b",
        "light-100": "#f2f3f5",
      },
    },
  },
  plugins: [],
};
