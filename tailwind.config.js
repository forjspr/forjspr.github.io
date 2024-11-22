/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*"],
	theme: {
		extend: {
			fontFamily: {
				instrument: ["Instrument Serif", "serif"],
				hed: ["Hedvig Letters Serif", "serif"],
			},
			animation: {
				"infinite-scroll": "infinite-scroll 40s linear infinite",
				"infinite-scroll2": "infinite-scroll2 40s linear infinite",
				"infinite-scroll-reverse":
					"infinite-scroll-reverse 40s linear infinite",
				"infinite-scroll2-reverse":
					"infinite-scroll2-reverse 40s linear infinite",
			},
			keyframes: {
				"infinite-scroll": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(-100%)" },
				},
				"infinite-scroll2": {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" },
				},

				"infinite-scroll-reverse": {
					"0%": { transform: "translateX(-100%)" },
					"100%": { transform: "translateX(0)" },
				},
				"infinite-scroll2-reverse": {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(100%)" },
				},
			},
		},
	},
	plugins: [],
};
