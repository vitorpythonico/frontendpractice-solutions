/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
      	primary: '#000',
      	secundary: '#e8e5e480',
      	neutral: '#7f7f7f'
      },
      fontFamily: {
				sans: 'var(--font-neue-montreal)'
	    }
    }
  },
  plugins: [],
};
