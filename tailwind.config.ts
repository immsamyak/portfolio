import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1200px' }
    },
    extend: {
      fontFamily: {
        sans: ['Almarai', 'sans-serif'],
        serif: ['"Instrument Serif"', 'serif'],
      },
      colors: {
        primary: '#DEDBC8',
        background: '#000000',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
