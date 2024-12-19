/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
			colors: {
				primary: "#118B50",
				secondary: "#5DB996",
				accent: "#E3F0AF",
				neutral: "#FBF6E9",
			},
			fontFamily: {
				playfair: ["Playfair Display", "Georgia", "Serif"],
				lato: ["Lato", "Arial", "Sans-Serif"]
			}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};
