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
		},
	},
	plugins: [],
};
