import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
			colors: {
				'black': '#333333',
				'gray': '#515151',
				'white': '#F9F4EF',
				'green': '#234a11',
				'maroon-dark': '#800000',
				'maroon-light': '#B03A2E'
			},
			aspectRatio: {
				'9-16': '9 / 16'
			},
			fontFamily: {
				caveat: ['var(--font-caveat)'],
				greatVibes: ['var(--font-great-vibes)']
			},
			backgroundImage: {
				batik: 'url("/images/batik-transparent.webp")',
				'left-batik': 'url("/images/batik-kiri.webp")',
				'right-batik': 'url("/images/batik-kanan.webp")',
				bunga: 'url("/images/bgj.png")'
			}
		}
  },
  plugins: [],
} satisfies Config;
