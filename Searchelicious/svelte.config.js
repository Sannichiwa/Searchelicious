const sveltePreprocess = require('svelte-preprocess');
const netlify = require('@sveltejs/adapter-netlify');
const pkg = require('./package.json');
// import adapter from '@sveltejs/adapter-auto';
// import firebase from 'svelte-adapter-firebase';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// module.exports = {
	preprocess: sveltePreprocess(),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		// adapter: firebase({ firebaseJsonPath: './firebase.json' }),
		// adapter: node(),
		adapter: netlify(),
		// adapter: adapter(),
		// adapter: adapter({ out: './src/routes' }),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	}
};

export default config;
