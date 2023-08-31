import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';
import * as child_process from 'node:child_process';

const dev = process.argv.includes('dev');

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess({})],

	kit: {
		version: {
      name: child_process.execSync('git rev-parse HEAD').toString().trim()
    },
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			base: dev ? '' : process.env.BASE_PATH
		},
		 prerender: {
      crawl: false,
      handleEntryGeneratorMismatch: 'warn'
    },
		serviceWorker: {
			register: isProd
		}
	}
};

export default config;
