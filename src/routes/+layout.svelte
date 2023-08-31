<script lang="ts">
	import '../app.pcss';

	import { DarkMode } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
</script>

<header>
	<nav class="bg-gray-50 border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
		<div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
			<a href="/" class="flex items-center">
				<span class="ml-3 text-xl">
					<span class="text-blue-500 dark:text-blue-400">Threat</span><span class="dark:text-white"
						>Matic™</span
					>
				</span>
			</a>
			<div class="flex items-center lg:order-2">
				<a
					href="/"
					class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
				>
					Console
				</a>
				<DarkMode
					class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg text-xl p-2"
				/>
				<button
					data-collapse-toggle="mobile-menu-2"
					type="button"
					class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
					aria-controls="mobile-menu-2"
					aria-expanded="false"
				>
					<span class="sr-only">Open main menu</span>
					<Icon name="bars-outline" />
				</button>
			</div>
			<div
				class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
				id="mobile-menu-2"
			>
				<ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
					<li>
						<a
							href="/"
							class="block py-2 pr-4 pl-3 border-b border-gray-100 text-primary-600 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-primary-500 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-primary-500 lg:dark:hover:bg-transparent dark:border-gray-700"
							aria-current="page">Home</a
						>
					</li>
					<li>
						<a
							href="/product"
							class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
							aria-current="page">Product</a
						>
					</li>
					<li>
						<a
							href="/pricing"
							class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
						>
							Pricing
						</a>
					</li>
					<li>
						<a
							href="/team"
							class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
						>
							Team
						</a>
					</li>
					<li>
						<a
							href="https://medium.com/@threatmatic"
							class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
						>
							Blog
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>
<slot />
<footer class="p-4 bg-gray-50 sm:p-6 dark:bg-gray-800">
	<div class="mx-auto max-w-screen-xl">
		<div class="md:flex md:justify-between">
			<div class="mb-6 md:mb-0">
				<a href="/" class="flex items-center">
					<span class="ml-3 text-xl">
						<span class="text-blue-500 dark:text-blue-400">Threat</span><span
							class="dark:text-white">Matic™</span
						>
					</span>
				</a>
			</div>
			<div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
				<div>
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
						Company
					</h2>
					<ul class="text-gray-600 dark:text-gray-400">
						<li class="mb-4">
							<a href="/product" class="hover:underline">Product</a>
						</li>
						<li class="mb-4">
							<a href="https://medium.com/@threatmatic" class="hover:underline">Blog</a>
						</li>
						<li>
							<a href="/team" class="hover:underline">Team</a>
						</li>
					</ul>
				</div>
				<div>
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
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
					<h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
						Contact Us
					</h2>
					<ul class="text-gray-600 dark:text-gray-400">
						<li class="mb-4">
							<a href="mailto:threatmatic@gmail.com" class="hover:underline"
								>threatmatic@gmail.com</a
							>
						</li>
						<li>
							<a href="tel:+15626732599" class="hover:underline">+1-(562)-673-2599</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
		<div class="sm:flex sm:items-center sm:justify-between">
			<span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
				© 2023 ThreatMatic™, Co. All rights reserved.
			</span>
			<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
				<a
					href="https://twitter.com/threatmatic"
					class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
				>
					<Icon name="twitter-solid" />
				</a>
			</div>
		</div>
	</div>
</footer>
