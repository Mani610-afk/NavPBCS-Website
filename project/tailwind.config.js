/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4fa',
          100: '#e0e9f5',
          200: '#c1d3eb',
          300: '#92b3db',
          400: '#5c8bc8',
          500: '#3a6cb7',
          600: '#295299',
          700: '#23427c',
          800: '#1E3A8A', // Deep blue (primary)
          900: '#182e5c',
        },
        secondary: {
          50: '#edfdfd',
          100: '#d1f8f8',
          200: '#a9eff0',
          300: '#73e2e5',
          400: '#39cdd3',
          500: '#19b5bc',
          600: '#0D9488', // Teal (secondary)
          700: '#0e7271',
          800: '#115c5c',
          900: '#134e4d',
        },
        accent: {
          50: '#fff9eb',
          100: '#ffefc6',
          200: '#ffdf89',
          300: '#ffc946',
          400: '#F59E0B', // Amber (accent)
          500: '#f59e0b',
          600: '#e17c02',
          700: '#bb5702',
          800: '#984308',
          900: '#7d390c',
        },
        success: {
          500: '#22c55e',
        },
        warning: {
          500: '#f97316',
        },
        error: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        sans: [
          'system-ui', 
          '-apple-system', 
          'BlinkMacSystemFont', 
          'Segoe UI', 
          'Roboto', 
          'Helvetica Neue', 
          'Arial', 
          'sans-serif'
        ],
      },
      spacing: {
        '128': '32rem',
      },
      animation: {
        'fade-in': 'fadeIn 1.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
    },
  },
  plugins: [],
};