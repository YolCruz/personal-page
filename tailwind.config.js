module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F4252",
        secondary: "#6EB0CC",
        third: "#98C9DB",
        fourth: "#3D8BB7",
        "nice-grey": "#2b2930",
        "black-inner": "#2f2e35",
        "black-outer": "#151419",
        "white-inner": "#c7c6cd",
        "white-outer": "#e1e0e6",
      },
      screens: {
        "md-min-max": { min: "640px", max: "867px" },
        "sm-max": { max: "641px" },
      },
      backgroundImage: {
        "waves-pattern": "url('/background wave.svg')",
        mountain: "url('/wallpaper.jpg')",
        "menu-icon":
          "url('https://api.iconify.design/icon-park-outline/hamburger-button.svg?color=white')",
        hamburger:
          "url('https://api.iconify.design/icon-park-outline/hamburger-button.svg?width=32&height=32')",
        "hamburger-white":
          "url('https://api.iconify.design/icon-park-outline/hamburger-button.svg?color=white&width=32&height=32')",
        close:
          "url('https://api.iconify.design/ep/close.svg?width=32&height=32')",
        "close-white":
          "url('https://api.iconify.design/ep/close.svg?color=white&width=32&height=32')",
        "gradient-radial":
          "radial-gradient(circle at center, var(--tw-gradient-stops))",
        instagram:
          'url("https://api.iconify.design/akar-icons/instagram-fill.svg?")',
        "instagram-white":
          'url("https://api.iconify.design/akar-icons/instagram-fill.svg?color=white")',
        github: 'url("https://api.iconify.design/akar-icons/github-fill.svg?")',
        "github-white":
          'url("https://api.iconify.design/akar-icons/github-fill.svg?color=white")',
        sun: "url('https://api.iconify.design/emojione-v1/sun.svg?width=32&height=32')",
        moon: "url('https://api.iconify.design/emojione/crescent-moon.svg?width=32&height=32')",
        settings:
          "url('https://api.iconify.design/flat-color-icons/settings.svg')",
      },
      fontFamily: {
        numans: ["Numans", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        "open-sans": ["Open Sans", "sans-serif"],
        yanone: ["Yanone Kaffeesatz", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
