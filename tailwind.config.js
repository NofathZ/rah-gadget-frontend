/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "#434343",
        "brand-secondary": "#D31E1C",
        "brand-tertiary": "#41199E",
        "semantic-success": "#3FC633",
        "semantic-info": "#0090DD",
        "semantic-warning": "#E08404",
        "semantic-error": "#ED2D23",
        "system-black": "#222222",
        "system-grey": "#AFA8BD",
        "system-white": "#FFFFFF",
        "system-background": "#EFEFEF"
      }
    },
    fontFamily: {
      "rubik": ["Rubik", "sans-serif"]
    },
    screens: {
      'mobile': '0px',
      'desktop': '961px',
      'desktop-lg': "1120px",
    }
  },
  plugins: [],
}