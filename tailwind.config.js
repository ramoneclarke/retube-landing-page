/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brand: "#6EE7B7", //Toothpaste
        darkest: "#0f131a",
        darker: "#131c27",
        dark: "#433E5A",
        mid: "#6D59C0",
        light: "#DDDAE8",
        lighter: "#F5F5F5",
        lightest: "#FFFFFF",
        brandDark: "#00dc9b",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/line-clamp")],
};
