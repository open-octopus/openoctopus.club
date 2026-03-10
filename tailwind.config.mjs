/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ocean: '#1E3A5F',
        purple: {
          DEFAULT: '#6C3FA0',
          light: '#8B5FC4',
        },
        cyan: {
          DEFAULT: '#00D4AA',
          light: '#33DFBf',
          dark: '#00A888',
        },
        abyss: '#0D1117',
        surface: '#F6F8FA',
        'card-dark': '#161B22',
        'card-light': '#FFFFFF',
        'border-dark': '#30363D',
        'border-light': '#D0D7DE',
        'text-primary': '#E6EDF3',
        'text-secondary': '#8B949E',
        'text-light-primary': '#1F2328',
        'text-light-secondary': '#656D76',
        discord: '#5865F2',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'summon-gradient': 'linear-gradient(135deg, #6C3FA0, #00D4AA)',
        'hero-glow': 'radial-gradient(ellipse at 50% 0%, rgba(108, 63, 160, 0.15) 0%, transparent 60%)',
      },
      animation: {
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('light', 'html.light &');
    },
  ],
};
