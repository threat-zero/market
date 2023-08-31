// Since there's no dynamic data for marketing site, we can prerender it
// so that it gets served as a static asset in prod
// FIXME: `$env/dynamic/public` not working with `prerender = true`
// https://github.com/sveltejs/kit/discussions/7700
import { dev } from '$app/environment';

export const csr = dev;

export const prerender = true;
