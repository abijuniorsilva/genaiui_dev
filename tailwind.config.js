/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    fontFamily: {
			'montserrat': ['Montserrat'],
		},
    extend: {
      colors: {
				'base': '#2E2C34',
				'bees-pink': '#F67071',
			}
    },
  },
  plugins: [],
}

