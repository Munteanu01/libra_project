/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			background:'black',
			text:'white',
  			secundary: '#dedcff',
  			accent: '#433bff',
  		},
		 fontFamily: {
            sans: ['var(--font-inter)', 'sans-serif'],
		 },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		screens: {
			'3xl': '1600px',},
	}
  },
  plugins: [require("tailwindcss-animate")],
};
