/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ['"Libre Bodoni"', 'serif'],
        rye: ['"Rye"', 'serif'],
        plyfire: ['Plyfire', 'sans-serif'],
      },
      lineHeight: {
        custom: '65.8px',
      },
      letterSpacing: {
        tight: '0.025em',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  variants: {},
  plugins: [],
};
