/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				background: '#0b0b0d',
			},
			screens: {
				smm: '320px',
			},
			animation: {
				'spin-fast': 'spin 0.2s linear infinite',
			},
		},
	},
	plugins: [],
};
