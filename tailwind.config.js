/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'weather-gradient': 'linear-gradient(135deg, #4171EC 0%, #6B8CFF 50%, #AAC2FF 100%)',
      },
      colors: {
        'weather-accent': '#4171EC',
        'weather-dark': '#2563eb',
        'weather-light': '#AAC2FF',
        'glass': 'rgba(255, 255, 255, 0.15)',
      },
      backdropFilter: {
        'glass': 'blur(10px)',
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'weather-icon': 'weather-icon 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
        'rain': 'rain 1s linear infinite',
        'wind': 'wind 2s ease-in-out infinite',
        'blob': 'blob 7s infinite',
      },
      backdropBlur: {
        'glass': '10px',
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.06))',
      },
      fontSize: {
        '10xl': '10rem',
      },
      screens: {
        'xs': '475px',
      },
      extend: {
        animation: {
          'delay-2000': 'animation-delay-2000',
          'delay-4000': 'animation-delay-4000',
        }
      },
      keyframes: {
        'weather-icon': {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-2px) scale(1.1)' }
        },
        'blob': {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        rain: {
          '0%': { transform: 'translateY(-10px)', opacity: '1' },
          '100%': { transform: 'translateY(10px)', opacity: '0' },
        },
        wind: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
          '100%': { transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(8px)',
      },
    },
  },
  plugins: [],
}

