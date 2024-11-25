import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
		colors: {
			black: '#333333',
			gray: '#515151',
			white: '#f9f4ef',
			green: '#234a11',
			'maroon-dark': '#800000',
			'maroon-light': '#b03a2e'
		},
		fontFamily: {
			caveat: 'var(--font-caveat)',
			delius: 'var(--font-delius',
			'great-vibes': 'var(--font-great-vibes)',
		},
		backgroundImage: {
			batik: 'url("/images/batik.webp")',
			'batik-transparent': 'url("/images/bgj.webp")'
		}
  },
  plugins: [],
} satisfies Config;
