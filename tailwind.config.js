module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "waves-pattern": "url('/background wave.svg')",
        mountain: "url('/wallpaper.jpg')",
        "menu-icon":
          "url('https://api.iconify.design/icon-park-outline/hamburger-button.svg?color=white')",
        hamburger:
          "url('https://api.iconify.design/icon-park-outline/hamburger-button.svg?color=white')",
        "close-icon":
          "url('https://api.iconify.design/ep/close-bold.svg?color=white')",
      },
      fontFamily: {
        numans: ["Numans"],
        work: ["Work Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
