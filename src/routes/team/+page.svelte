<script lang="ts">
	// import mohan from '$lib/images/headshots/mohan.jpg';
	// import viswanath from '$lib/images/headshots/viswanath.jpg';
	// import reena from '$lib/images/headshots/reena.jpg';
	// import naren from '$lib/images/headshots/naren.jpg';
	// import { Icon } from 'flowbite-svelte-icons';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	{...{
		title: 'Team',
		titleTemplate: '%s | Team™',
		description: 'ThreatMatic™ Team',
		canonical: 'https://threatmatic.com/team',
		openGraph: {
			url: 'https://www.threatmatic.com/team',
			title: 'Home',
			description: 'ThreatMatic™ Team',
			images: [
				{
					url: 'https://threatmatic.com/_app/immutable/assets/mohan.0dcfc7d0.jpg',
					width: 800,
					height: 600,
					alt: "Mohan Reddy's Headshot"
				}
			],
			siteName: 'ThreatMatic™'
		},
		twitter: {
			handle: '@threatmatic',
			site: '@threatmatic'
		}
	}}
/>

<!-- <section class="bg-white dark:bg-gray-900">
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
					<span class="text-gray-500">Engineering</span>
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
								href="https://www.linkedin.com/in/mohan-s-reddy-5b2b86b/"
								target="_blank"
								rel="external noopener noreferrer"
								class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
							>
								<Icon name="linkedin-solid" size="xl" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div
				class="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
			>
				<a
					href="https://www.linkedin.com/in/viswanathvk"
					target="_blank"
					rel="external noopener noreferrer"
				>
					<img
						class="w-[288px] h-[288px] rounded-lg object-cover p-4"
						src={viswanath}
						alt="Viswanath VK"
					/>
				</a>
				<div class="px-5 pb-5">
					<h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
						<a
							href="https://www.linkedin.com/in/viswanathvk"
							target="_blank"
							rel="external noopener noreferrer"
						>
							Viswanath VK
						</a>
					</h3>
					<span class="text-gray-500">Product</span>
					<p class="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
						VK has been involved in creating products across a wide range of domains - risk/security
						, payments, trust and safety for the last 15 years. He has worked at companies like Meta
						and Paypal where he has helped design data and intuition based solutions to provide
						security at scale focusing on customer acquisition,retention and servicing. He also
						brings ML based experience to further enhance product customization and reach.
					</p>
					<ul class="flex space-x-4 sm:mt-0">
						<li>
							<a
								href="https://www.linkedin.com/in/viswanathvk"
								target="_blank"
								rel="external noopener noreferrer"
								class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
							>
								<Icon name="linkedin-solid" size="xl" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div
				class="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
			>
				<a
					href="https://www.linkedin.com/in/reena-j-vaswani-15927214"
					target="_blank"
					rel="external noopener noreferrer"
				>
					<img
						class="w-[288px] h-[288px] rounded-lg object-none object-top p-4"
						src={reena}
						alt="Reena Vaswani"
					/>
				</a>
				<div class="px-5 pb-5">
					<h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
						<a
							href="https://www.linkedin.com/in/reena-j-vaswani-15927214"
							target="_blank"
							rel="external noopener noreferrer"
						>
							Reena Vaswani
						</a>
					</h3>
					<span class="text-gray-500">Business Operations</span>
					<p class="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
						Reena Vaswani received her Master’s Degree in Computer Science from Northwestern
						University. She has over 15 years of experience delivering complete IT solutions to
						public and private sector clients both in the U.S. and internationally. She is certified
						in ITIL and CSM. In 2012, Reena Vaswani participated in Goldman Sachs 10,000 Small
						Businesses program designed to help small businesses in the United States create jobs
						and economic growth by providing entrepreneurs with a practical business and management
						education, access to capital and business support services.
					</p>
					<ul class="flex space-x-4 sm:mt-0">
						<li>
							<a
								href="https://www.linkedin.com/in/reena-j-vaswani-15927214"
								target="_blank"
								rel="external noopener noreferrer"
								class="text-gray-500 hover:text-gray-900 dark:hover:text-white"
							>
								<Icon name="linkedin-solid" size="xl" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div
				class="rounded-lg border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800"
			>
				<a
					href="https://www.linkedin.com/in/naren-goel-527297"
					target="_blank"
					rel="external noopener noreferrer"
				>
					<img
						class="w-[288px] h-[288px] rounded-lg object-none object-top p-4"
						src={naren}
						alt="Naren Goel"
					/>
				</a>
				<div class="px-5 pb-5">
					<h3 class="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
						<a
							href="https://www.linkedin.com/in/naren-goel-527297"
							target="_blank"
							rel="external noopener noreferrer"
						>
							Naren Goel
						</a>
					</h3>
					<span class="text-gray-500">Board</span>
					<p class="mb-4 mt-3 font-light text-gray-500 dark:text-gray-400">
						Naren Goel brings nearly 20 years of senior finance leadership experience to the
						position, having led a broad range of startups to large corporations such as VMWare
						through various stages of growth. Goel has a strong background as a financial executive
						for a number of enterprise software and cloud computing organizations, including an
						understanding of Software-as-a-Service-model. He has also earned an ACMA (Chartered
						Management Accountant) designation in the U.K.
					</p>
					<ul class="flex space-x-4 sm:mt-0">
						<li>
							<a
								href="https://www.linkedin.com/in/naren-goel-527297"
								target="_blank"
								rel="external noopener noreferrer"
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
</section> -->
