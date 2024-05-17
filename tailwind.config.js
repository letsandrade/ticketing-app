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
        darkest: "#1C2022",
        nav: "#1C2022",
        page: "#31393C",
        card: "#4B444B",
        cardhover: "#605760",
        defaulttext: "#EEF1EF",
        accent: "#18A999",
        accenthover: "#1FD6C1",
      },
    },
  },
  plugins: [],
};
