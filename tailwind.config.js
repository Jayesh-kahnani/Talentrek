/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        "blackish": "#201a1e",
        "champagne": "#e4d4c8",
        "brownish": "#d0b49f",
        "blackish-blue": "#1a202c"
      },
    },
  },
  plugins: [],
};

