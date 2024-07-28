/** @type {import('tailwindcss').Config} */

import { GlobalColor } from "./src/GlobalColor";

module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		container: {
			center: true,
		},
		extend: {
			colors: {
				primary: GlobalColor.primary,
				secondary: GlobalColor.secondary,
				hover: GlobalColor.hover,
			},
			animation: {
				"spin-slow": "spin 3s linear infinite",
			},
		},
	},
	plugins: [],
};
