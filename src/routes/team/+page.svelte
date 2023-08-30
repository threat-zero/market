<script lang="ts">
	import { Icon } from 'flowbite-svelte-icons';
</script>

<section class="bg-white dark:bg-gray-900">
	<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
		<div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
			<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Our Team
			</h2>
		</div>
		<div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
			<div
				class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
			>
				<a href="https://www.linkedin.com/in/karthik-sivanadiyan">
					<img
						class="w-[300px] h-[300px] object-cover object-top rounded-lg sm:rounded-none sm:rounded-l-lg"
						src="headshots/Karthik.jpg"
						alt="Michael Avatar"
					/>
				</a>
				<div class="p-5">
					<h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
						<a href="https://www.linkedin.com/in/karthik-sivanadiyan">Mystery Man</a>
					</h3>
					<span class="text-gray-500 dark:text-gray-400">CEO</span>
					<ul class="flex space-x-4 sm:mt-0">
						<li>
							<a
								href="https://www.linkedin.com/in/karthik-sivanadiyan"
								class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
							>
								<Icon name="linkedin-solid" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div
				class="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700"
			>
				<a href="https://www.linkedin.com/in/karthik-sivanadiyan">
					<img
						class="w-[300px] h-[300px] rounded-lg sm:rounded-none sm:rounded-l-lg object-cover object-top"
						src="headshots/Karthik.jpg"
						alt="Karthik Sivanadiyan"
					/>
				</a>
				<div class="p-5">
					<h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
						<a href="https://www.linkedin.com/in/karthik-sivanadiyan">Karthik Sivanadiyan</a>
					</h3>
					<span class="text-gray-500 dark:text-gray-400">Developer</span>
					<ul class="flex space-x-4 sm:mt-0">
						<li>
							<a
								href="https://www.linkedin.com/in/karthik-sivanadiyan"
								class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
							>
								<Icon name="linkedin-solid" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
