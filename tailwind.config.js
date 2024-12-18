import daisyui from 'daisyui';
import aspectRatio from '@tailwindcss/aspect-ratio'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui, aspectRatio],
}

