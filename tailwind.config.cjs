/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				brand: {
					primary: "#4B6FFF", // Logo blue
					accent: "#0066FF",
					dark: "#1A237E",
					light: "#F4F7FE",
				},
			},
		},
	},
	plugins: [],
};
