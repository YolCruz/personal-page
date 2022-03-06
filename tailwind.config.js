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
        "black-inner": "#2f2e35",
        "black-outer": "#151419",
        "green-1": "#25FF96",
        "blue-1": "#0E2A47",
        "blue-2": "#262C4A",
        "blue-3": "#1E6E9B",
        "blue-4": "#0D58CA",
        "black-1": "#06080C",
        "black-2": "#0E161B",
        "purple-1": "#363E68",
        "red-1": "#900D0D",
        "yellow-1": "#E89900",
        "calculator-palet-1": "#36294B",
        "tt-blue": "hsl(246, 80%, 60%)",
        "tt-light-red": "hsl(15, 100%, 70%)",
        "tt-soft-blue": "hsl(195, 74%, 62%)",
        "tt-lime-green": "hsl(145, 58%, 55%)",
        "tt-violet": "hsl(264, 64%, 52%)",
        "tt-soft-orange": "hsl(43, 84%, 65%)",
        "tt-very-dark-blue": "hsl(226, 43%, 10%)",
        "tt-dark-blue": "hsl(235, 46%, 20%)",
        "tt-desaturated-blue": "hsl(235, 45%, 61%)",
        "tt-pale-blue": "hsl(236, 100%, 87%)",
      },
      screens: {
        "md-min-max": { min: "640px", max: "867px" },
        "sm-max": { max: "641px" },
        "xs" : "400px",
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
        "open-sans": ["Open Sans", "sans-serif"],
        "roboto-mono": ["Roboto Mono", "monospace"],
        "rubik": ["Rubik", "sans-serif"],
        "raleway": ["Raleway", "sans-serif"],
        "audiowide": ["Audiowide", "cursive"],
      },
      fontSize: {
        "2.5xl": "1.625rem",
        "4.5xl": "2.5rem",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
