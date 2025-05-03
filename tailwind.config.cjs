/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    screens: {
      'movil-lg': '400px',
      tablet: '500px',
      'tablet-lg': '768px',
      'tablet-xl': '865px',
      laptop: '1024px',
      'laptop-lg': '1280px',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      poiret: ['Poiret One', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}
