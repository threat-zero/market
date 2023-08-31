<script lang="ts">
	import '../app.pcss';

	import { base } from '$app/paths';
	import { DarkMode, NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
</script>

<!--Use the Flowbite-Svelte blocks header code to bring in responsive menu functionality w/o appending flowbite.min.js bundle-->
<header>
	<Navbar
		let:hidden
		let:toggle
		fluid={false}
		navClass="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800"
		navDivClass="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"
	>
		<NavBrand href="{base}/">
			<!--Do not format into two seperate lines as <span> is whitespace sensitive-->
			<span class="text-blue-500 dark:text-blue-400">Threat</span><span class="dark:text-white"
				>Matic™</span
			>
		</NavBrand>
		<div class="flex items-center lg:order-2">
			<a
				href="https://docs.google.com/forms/d/19STPsBM-tFH9KedGLJAcj0xBE3ImP69AR2S430GMKLc"
				target="_blank"
				rel="external noopener noreferrer"
				class="mr-2 rounded-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 lg:px-5 lg:py-2.5"
			>
				Console
			</a>
			<DarkMode
				class="rounded-lg p-2 text-xl text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700"
			/>
			<NavHamburger
				on:click={toggle}
				btnClass="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
			/>
		</div>
		<NavUl
			{hidden}
			divClass="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
			ulClass="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0"
		>
			<NavLi href="{base}/">Home</NavLi>
			<NavLi href="{base}/product">Product</NavLi>
			<NavLi href="{base}/pricing">Pricing</NavLi>
			<NavLi href="{base}/team">Team</NavLi>
			<NavLi
				href="https://medium.com/@threatmatic"
				target="_blank"
				rel="external noopener noreferrer"
			>
				Blog
			</NavLi>
		</NavUl>
	</Navbar>
</header>
<slot />
<footer class="bg-gray-50 p-4 dark:bg-gray-800 sm:p-6">
	<div class="mx-auto max-w-screen-xl">
		<div class="md:flex md:justify-between">
			<div class="mb-6 md:mb-0">
				<a href="{base}/" class="flex items-center">
					<span class="ml-3 text-xl">
						<!--Do not format into two seperate lines as <span> is whitespace sensitive-->
						<span class="text-blue-500 dark:text-blue-400">Threat</span><span
							class="dark:text-white">Matic™</span
						>
					</span>
				</a>
			</div>
			<div class="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
						Company
					</h2>
					<ul class="text-gray-600 dark:text-gray-400">
						<li class="mb-4">
							<a href="{base}/product" class="hover:underline">Product</a>
						</li>
						<li class="mb-4">
							<a href="{base}/pricing" class="hover:underline">Pricing</a>
						</li>
						<li class="mb-4">
							<a href="{base}/team" class="hover:underline">Team</a>
						</li>
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
					<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">Legal</h2>
					<ul class="text-gray-600 dark:text-gray-400">
						<li class="mb-4">
							<a href="{base}/privacy" class="hover:underline">Privacy</a>
						</li>
						<li>
							<a href="{base}/terms" class="hover:underline">Terms of Use</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
						Contact Us
					</h2>
					<ul class="text-gray-600 dark:text-gray-400">
						<li class="mb-4">
							<a href="mailto:threatmatic@gmail.com" class="hover:underline">
								threatmatic@gmail.com
							</a>
						</li>
						<li>
							<a href="tel:+15626732599" class="hover:underline">+1-(562)-673-2599</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<hr class="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
		<div class="sm:flex sm:items-center sm:justify-between">
			<span class="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
				© 2023 ThreatMatic™, Co. All rights reserved.
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
