import { sveltekit } from '@sveltejs/kit/vite';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';
import { defineConfig } from 'vitest/config';

// Get current tag/commit and last commit date from git
const pexec = promisify(exec);

const [gitTag, gitDate] = (
	await Promise.allSettled([
		pexec('git describe --tags || git rev-parse --short HEAD'),
		pexec('git log -1 --format=%cd --date=format:"%Y-%m-%d %H:%M"')
	])
).map((v) =>
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	JSON.stringify(v.value?.stdout.trim())
);

export default defineConfig({
	plugins: [sveltekit()],
	define: {
		// fallback values: BUILD_VERSION and BUILD_TIME are passed as --build-arg to docker build
		__APP_VERSION__: JSON.stringify(process.env.npm_package_version),
		__GIT_TAG__: gitTag ?? JSON.stringify(process.env.BUILD_VERSION),
		__GIT_DATE__: gitDate ?? JSON.stringify(process.env.BUILD_TIME)
	},
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
