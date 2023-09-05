<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import flowbiteError from '$lib/images/flowbite/flowbiteError.svg';
	import { Icon } from 'flowbite-svelte-icons';
</script>

<svelte:head>
	<title>Error: {$page.status} : {$page?.error?.message}</title>
</svelte:head>

<section class="bg-white dark:bg-gray-900">
	<div
		class="mx-auto max-w-screen-xl grid-cols-2 content-center gap-8 px-4 py-8 md:grid lg:px-6 lg:py-16"
	>
		<div class="self-center">
			<h1 class="mb-4 text-2xl font-bold text-primary-600 dark:text-primary-500">
				{$page.status} Internal Error
			</h1>
			<p
				class="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl lg:mb-10"
			>
				Whoops! That page doesn’t exist.
			</p>
			<p class="mb-4 text-gray-500 dark:text-gray-400">
				{#if typeof navigator !== 'undefined' ? navigator.onLine : true}
					{#if $page?.error?.message}
						<p class="error">{$page.status}: {$page.error.message}</p>
					{:else}
						<p class="error">Encountered a {$page.status} error</p>
					{/if}

					{#if $page.status >= 500}
						{#if dev && $page?.error?.stack}
							<pre>{$page?.error?.stack}</pre>
						{:else}
							<p>Please try reloading the page.</p>
						{/if}
					{/if}
				{:else}
					<h1>It looks like you're offline</h1>

					<p>Reload the page once you've found the internet.</p>
				{/if}
			</p>
			<div class="flex items-center">
				<Icon name="arrow-left-solid" class="mr-2 text-primary-600" />
				<a
					href="/"
					on:click={() => history.back()}
					class="text-base font-medium text-primary-600 hover:text-teal-500"
				>
					Go back
				</a>
			</div>
		</div>
		<img class="mx-auto mb-4 hidden md:flex" src={flowbiteError} alt="500 Server Error" />
	</div>
</section>
