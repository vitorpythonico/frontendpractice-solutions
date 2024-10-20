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
       'primary': '#191a1b',
       'secundary': '#dadbf1',
       'contrast': '#4c5fd5',
      },
      fontFamily: {
      	sans: 'var(--font-gt_america)',
    	},
    	screens: {
    		'xs': '380px',
    		'2xs': '500px',
    	}
    },
  },
  plugins: [],
};
/*'GT America Standard', sans-serif*/
