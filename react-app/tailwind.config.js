/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Georgia', 'Times', '"Times New Roman"', 'serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0ea5e9',
          dark: '#0284c7',
          light: '#38bdf8',
        },
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      maxWidth: {
        container: '1180px',
      },
      borderRadius: {
        card: '1.25rem',
      },
    },
  },
  plugins: [],
}
