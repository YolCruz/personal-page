module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "super-big": "9999px",
        "1/10": "10%",
        "2/10": "20%",
        "3/10": "30%",
        "4/10": "40%",
        "5/10": "50%",
        "6/10": "60%",
        "7/10": "70%",
        "8/10": "80%",
        "9/10": "90%",
      },
      colors: {
        "black-back-1": "#151515",
        "black-back-2":"#0e2d49",
        "dark-blue": "#101e36",
        "nice-grey": "#2b2930",
        "nice-red": "B41010",
        "black-inner": "#2f2e35",
        "black-outer": "#151419",
        "dark-blue-main-1": "#101E36",
        "dark-blue-main-2": "#004968",
        "dark-blue-main-3": "#191B1C",
        "dark-green-main-1": "#0A5F5F",
        "dark-purple-main-1": "#321d49",
        "dark-purple-main-2": "#281036",
        "dark-red-main-1": "#3d1d23",
        "dark-red-main-2": "#361010",
        "dark-green-main-1": "#0b4626",
        "dark-green-main-2": "#113610",
        "green-main-1": "#2CBE15",
        "red-main-1": "#BE1515",
        "red-main-2": "#CC0C0C",
        "purple-main-1": "#9215BE",
        "blue-main-1": "#1553BE",
        "notes-palet-1": "#201D13",
        "notes-palet-2": "#4C483D",
        "notes-palet-3": "#FDF0CA",
        "notes-palet-4": "#00C9AB",
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
          "url('https://api.iconify.design/icon-park-outline/hamburger-button.svg?color=white&width=40&height=40')",
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
        linkedin:
          "url('https://api.iconify.design/akar-icons/linkedin-fill.svg?')",
        "linkedin-white":
          "url('https://api.iconify.design/akar-icons/linkedin-fill.svg?color=white')",
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
        pacifico: ["Pacifico", "cursive"],
        kalam: ["Kalam", "cursive"],
        satisfy: ["Satisfy", "cursive"],
        "dancing-script": ['Dancing Script', "cursive"],
        "roboto-mono": ["Roboto Mono", "monospace"],
      },
      fontSize: {
        "2.5xl": "1.625rem",
        "4.5xl": "2.5rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
