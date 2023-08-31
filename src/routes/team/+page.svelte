<script lang="ts">
	import { Icon } from 'flowbite-svelte-icons';
</script>

<svelte:head>
	<title>ThreatMatic™ | Team</title>
</svelte:head>

<section class="bg-white dark:bg-gray-900">
	<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
		<div class="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
			<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Our Team
			</h2>
		</div>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<div
				class="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700"
			>
				<a href="https://twitter.com/threatmatic">
					<img
						class="p-4 w-[288px] h-[288px] object-cover rounded-lg"
						src="/headshots/mohan.jpg"
						alt="Mohan Reddy"
					/>
				</a>
				<div class="px-5 pb-5">
					<h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
						<a href="https://twitter.com/threatmatic">Mohan Reddy</a>
					</h3>
					<span class="text-gray-500">CEO & Co Founder</span>
					<p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
						Mohan S. Reddy is a well-known Internet, datacenter, and cybersecurity engineering
						expert based in the Los Angeles area. He is a Distinguished Engineer at
						UnitedHealthGroup where he plays a leading role in innovating and advancing a world
						class IP communications fabric that spans the globe. He also served on the faculty of
						Irvine Valley College, focusing on ICT (information and communications technology).
						Mohan has served on technical advisory boards for iconic Internet companies such as
						Cisco and Dell, and he collaborates regularly with a number of well-known visionaries on
						SDNs and next gen datacenters. He holds a master’s degree in computer science from
						Florida Atlantic University, and a bachelor’s degree in computer engineering from
						Bangalore University. Mohan is a multiple CCIE #23501 Emeritus, PCNSE, and CCSI #34359.
					</p>
					<ul class="flex space-x-4 sm:mt-0">
						<li>
							<a
								href="https://twitter.com/threatmatic"
								class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
							>
								<Icon name="twitter-solid" size="xl" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div
				class="bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700"
			>
				<a href="https://www.linkedin.com/in/karthik-sivanadiyan/">
					<img
						class="p-4 w-[288px] h-[288px] object-cover object-top rounded-lg"
						src="/headshots/karthik.jpg"
						alt="Mohan Reddy"
					/>
				</a>
				<div class="px-5 pb-5">
					<h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
						<a href="https://www.linkedin.com/in/karthik-sivanadiyan/">Karthik Siva</a>
					</h3>
					<span class="text-gray-500">Developer</span>
					<p class="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
						Description coming soon.
					</p>
					<ul class="flex space-x-4 sm:mt-0">
						<li>
							<a
								href="https://www.linkedin.com/in/karthik-sivanadiyan/"
								class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
							>
								<Icon name="linkedin-solid" size="xl" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
