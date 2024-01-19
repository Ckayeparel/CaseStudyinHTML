/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        steelblue: {
          200: "#0a80c2",
          300: "#0d6597",
          400: "#0b5e8f",
          500: "#0b5c8b",
        },
        gray: "#fdfdfd",
        darkslategray: "#07476c",
        white: "#fff",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "29xl": "48px",
        "89xl": "108px",
      },
    },
    fontSize: {
      "31xl": "50px",
      "45xl": "64px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
