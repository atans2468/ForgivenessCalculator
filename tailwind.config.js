/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,ts}'],
  darkMode: "media",
  theme: {
    extend: {
      top: {
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
      },
      colors: {
        primary: {
          default: '#6149cd',
          shade: '#9080dc',
          tint: '#443390',
        },
        secondary: {
          default: '#49cda3',
          shade: '#a4e6d1',
          tint: '#256752'
        },
        tertiary: {
          default: '#cd6149',
          shade: '#e6b0a4',
          tint: '#673125'
        },
        dark: {
          default: '#2E2E3F',
          shade: '#6d6d79',
          tint: '#171720'
        },
        light: {
          default: '#d2dae5'
        },
        warning: {
          default: '#ffc409',
          shade: '#ffe284',
          tint: '#806205'
        },
        danger: {
          default: '#e44418',
          shade: '#f2a28c',
          tint: '#72220c'
        },
        'white' : '#fff',
        'black': '#000',
        'transparent': 'transparent'
      },
      animation: {
        'fade-in': 'fadeIn .5s linear',
        'fade-out': 'fadeIn .5s linear'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 }
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')
    ,require('@tailwindcss/forms')
    ,require('@tailwindcss/line-clamp')
    ,require('@tailwindcss/typography')
  ],
};
