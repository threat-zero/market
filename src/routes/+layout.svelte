<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { DarkMode, NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';

	import { Icon } from 'flowbite-svelte-icons';
	import '../app.pcss';

	const appVersion = __APP_VERSION__;
	const gitTag = __GIT_TAG__;
	const gitDate = __GIT_DATE__;

	$: activeUrl = $page.url.pathname;

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

{#if activeUrl != '/v2'}
	<Navbar
		id="header"
		navClass="fixed w-full z-20 top-0 left-0 bg-surface-1/50 dark:bg-surface-1/50 backdrop-blur-xl"
		let:hidden
		let:toggle
	>
		<NavBrand href="/" class="px-2">
			<div class="text-blue-500 dark:text-blue-400">Threat</div>
			<div class="dark:text-white">Matic</div>
			<div class="text-xs dark:text-white">™</div>
		</NavBrand>
		<div class="flex items-center lg:order-2">
			<DarkMode class="mr-4" />
			<NavHamburger on:click={toggle} />
		</div>
		<NavUl {hidden} {activeUrl} class="order-1 mr-4">
			<NavLi href="/">Home</NavLi>
			<NavLi href="/Intro">Intro</NavLi>
			<NavLi href="/product">Product</NavLi>
			<NavLi href="/schannel">sChannel™</NavLi>
			<NavLi href="/pricing">Pricing</NavLi>
			<!-- <NavLi href="/team">Team</NavLi> -->
			<NavLi
				href="https://medium.com/@threatmatic"
				target="_blank"
				rel="external noopener noreferrer"
			>
				Blog
			</NavLi>
		</NavUl>
	</Navbar>
{/if}
<slot />
{#if activeUrl != '/v2'}
	<footer class="bg-gray-50 p-4 dark:bg-gray-800 sm:p-6">
		<div class="mx-auto max-w-screen-xl">
			<div class="md:flex md:justify-between">
				<div class="mb-6 md:mb-0">
					<a href="/">
						<!--Do not format into two seperate lines as <span> is whitespace sensitive-->
						<span class="text-blue-500 dark:text-blue-400">Threat</span><span
							class="dark:text-white">Matic</span
						><span class="text-xs dark:text-white">™</span>
					</a>
				</div>
				<div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
					<div>
						<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
							Company
						</h2>
						<ul class="text-gray-600 dark:text-gray-400">
							<li class="mb-4">
								<a href="/product" class="hover:underline">Product</a>
							</li>
							<li class="mb-4">
								<a href="/pricing" class="hover:underline">Pricing</a>
							</li>
							<!-- <li class="mb-4">
							<a href="/team" class="hover:underline">Team</a>
						</li> -->
							<li class="mb-4">
								<a
									href="https://medium.com/@threatmatic"
									target="_blank"
									rel="external noopener noreferrer"
									class="hover:underline"
								>
									Blog
								</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
							Legal
						</h2>
						<ul class="text-gray-600 dark:text-gray-400">
							<li class="mb-4">
								<a href="/privacy" class="hover:underline">Privacy</a>
							</li>
							<li>
								<a href="/terms" class="hover:underline">Terms of Use</a>
							</li>
						</ul>
					</div>
					<div>
						<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
							Contact Us
						</h2>
						<ul class="text-gray-600 dark:text-gray-400">
							<li class="mb-4">
								<a href="mailto:info@threatmatic.com" class="hover:underline">
									info@threatmatic.com
								</a>
							</li>
							<li>
								<a href="tel:+17143561728" class="hover:underline">+1 (714)-356-1728</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
			<div class="sm:flex sm:items-center sm:justify-between">
				<span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
					© 2024 ThreatMatic™, Co. All rights reserved.
				</span>
				<span class="text-sm font-extralight text-gray-500 dark:text-gray-400 sm:text-center">
					<span class="font-semibold">Version:</span>
					{appVersion} <span class="font-semibold">| Tag:</span>
					{gitTag} <span class="font-semibold">| Date:</span>
					{gitDate}
				</span>
				<div class="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
					<a
						href="https://twitter.com/threatmatic"
						target="_blank"
						rel="external noopener noreferrer"
						class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
					>
						<Icon name="twitter-solid" />
					</a>
				</div>
			</div>
		</div>
	</footer>
{/if}
