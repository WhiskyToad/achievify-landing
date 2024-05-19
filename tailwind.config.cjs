const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#2196f3'
					// Optionally, you can define different shades of the primary color
					// For example: 'light': '#your-light-primary-color',
					//               'dark': '#your-dark-primary-color',
				},
				secondary: {
					DEFAULT: '#ff5722'
					// Similarly, you can define different shades of the secondary color
					// For example: 'light': '#your-light-secondary-color',
					//               'dark': '#your-dark-secondary-color',
				}
			}
		}
	},

	plugins: [require('daisyui')]
};

module.exports = config;
