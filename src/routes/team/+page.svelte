<script lang="ts">
	import { base } from '$app/paths';
	import mohan from '$lib/images/headshots/mohan.jpg';
	import karthik from '$lib/images/headshots/karthik.jpg';
	import { Icon } from 'flowbite-svelte-icons';
</script>

<svelte:head>
	<title>ThreatMatic™ | Team</title>
</svelte:head>

<section class="bg-white dark:bg-gray-900">
	<div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
		<div class="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
			<h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
				Our Team
			</h2>
		</div>
		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			<div
				class="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
			>
				<a
					href="https://twitter.com/threatmatic"
					target="_blank"
					rel="external noopener noreferrer"
				>
					<img
						class="w-[288px] h-[288px] rounded-lg object-cover p-4"
						src={mohan}
						alt="Mohan Reddy"
					/>
				</a>
				<div class="px-5 pb-5">
					<h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
						<a
							href="https://twitter.com/threatmatic"
							target="_blank"
							rel="external noopener noreferrer"
						>
							Mohan Reddy
						</a>
					</h3>
					<span class="text-gray-500">CEO & Co-Founder</span>
					<p class="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
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
								target="_blank"
								rel="external noopener noreferrer"
								class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
							>
								<Icon name="twitter-solid" size="xl" />
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>
