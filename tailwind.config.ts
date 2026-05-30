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
        mori: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      colors: {
        'absolute-zero': '#0e100f',
        'frosted-canvas': '#fffce1',
        'faded-steel': '#7c7c6f',
        'deep-graphite': '#42433d',
        'neon-pink': '#fec5fb',
        'fiery-orange': '#ff8709',
        'shocking-green': '#0ae448',
        'digital-violet': '#9d95ff',
        'aqua-glow': '#00bae2',
        'mint-burst': '#abff84',
      },
      borderRadius: {
        pill: '100px',
        card: '8px',
      },
      letterSpacing: {
        'display': '-4.48px',
        'heading-lg': '-1.32px',
        'heading': '-0.88px',
        'heading-sm': '-0.64px',
        'subheading': '-0.24px',
        'body': '-0.18px',
        'body-sm': '-0.16px',
        'caption': '-0.14px',
      },
      fontSize: {
        'display': ['clamp(80px,15vw,224px)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
        'heading-lg': ['66px', { lineHeight: '1.05', letterSpacing: '-1.32px' }],
        'heading': ['44px', { lineHeight: '1.15', letterSpacing: '-0.88px' }],
        'heading-sm': ['32px', { lineHeight: '1.2', letterSpacing: '-0.64px' }],
        'subheading': ['24px', { lineHeight: '1.38', letterSpacing: '-0.24px' }],
        'body': ['18px', { lineHeight: '1.4', letterSpacing: '-0.18px' }],
        'body-sm': ['16px', { lineHeight: '1.4', letterSpacing: '-0.16px' }],
        'caption': ['14px', { lineHeight: '1.4', letterSpacing: '-0.14px' }],
      },
      spacing: {
        '18': '76px',
        '24': '96px',
        '27': '108px',
      },
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
