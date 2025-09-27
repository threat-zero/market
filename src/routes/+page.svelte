<script lang="ts">
	import FeaturesList from '$lib/blocks/FeaturesList.svelte';
	import dashboardMockupDark from '$lib/images/product/Threatmatic_Banner1.png';
	import dashboardMockupLight from '$lib/images/product/Threatmatic_Banner3.png';
	import introAudio from '$lib/audio/intro audio.wav';
	import { Icon } from 'flowbite-svelte-icons';
	import { Video } from 'flowbite-svelte';
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	{...{
		title: 'Home',
		titleTemplate: '%s | Threatmatic™',
		description:
			'Threatmatic™ Zero-Trust, Bandwidth, Network, Microsegmentation, and Defense-in-Depth features',
		canonical: 'https://threatmatic.com/',
		openGraph: {
			url: 'https://www.threatmatic.com/',
			title: 'Home',
			description:
				'Threatmatic™ Zero-Trust, Bandwidth, Network, Microsegmentation, and Defense-in-Depth features',
			images: [
				{
					url: 'https://threatmatic.com/_app/immutable/assets/dashboardMockupLight.31c48286.svg',
					alt: 'Threatmatic Dashboard Mockup Light Version',
					width: 800,
					height: 600,
					secureUrl:
						'https://threatmatic.com/_app/immutable/assets/dashboardMockupLight.31c48286.svg',
					type: 'image/jpeg'
				},
				{
					url: 'https://threatmatic.com/_app/immutable/assets/dashboardMockupDark.95a900fd.svg',
					alt: 'Threatmatic Dashboard Mockup Dark Version',
					width: 800,
					height: 600,
					secureUrl:
						'https://threatmatic.com/_app/immutable/assets/dashboardMockupDark.95a900fd.svg',
					type: 'image/jpeg'
				}
			],
			siteName: 'Threatmatic™'
		},
		twitter: {
			handle: '@threatmatic',
			summary: 'summary_large_image',
			site: '@threatmatic'
		}
	}}
/>

<JsonLd
	schema={[
		{
			'@context': 'https://schema.org',
			'@type': 'organization',
			email: 'info@threatmatic.com',
			employee: 'Mohan Reddy',
			founder: 'Mohan Reddy',
			telephone: '7143561728',
			employees: [
				{
					'@context': 'https://schema.org',
					'@type': 'person',
					name: 'Mohan Reddy',
					telephone: '7143561728',
					alumniOf: {
						'@context': 'https://schema.org',
						'@type': 'CollegeOrUniversity',
						name: 'Florida Atlantic University'
					}
				}
			]
		},
		{
			'@context': 'https://schema.org/',
			'@type': 'Recipe',
			name: 'Banana Bread Recipe',
			description:
				"The best banana bread recipe you'll ever find! Learn how to use up all those extra bananas."
		},
		{
			'@context': 'https://schema.org',
			'@type': 'WebApplication',
			applicationCategory: 'SecurityApplication',
			description: "Threatmatic™'s flagship product consisting of the agent and admin dashboard.",
			featureList:
				"Fully ID aware across all your users and workloads, Unlimited Policies, Run on Customer Provided Infrastructure, Customer Safe Downtime, Cybersecurity Mesh Architecture, Cloud Ready Threatmatic™, Zero Trust Mesh Architecture, Edge2Edge Policy, DNS Lock, Port Scanner Protection, DNSSEC Enforcement, Disable DoH (DNS over HTTP), Flexible IPsec Traffic Steering with QSchannel, Metered Socket Actions (QoS), Compliance Signals, TrustZero Cloud Proxy, Advanced Analytics, 'Threatmatic API', 'Mitre Attack Integrated', 'Cloud-Based Management Platform', 'API Support', Self Service Knowledge Base, Designated Account Manager, Technical Specialist, Phone Support, Chat/Email Support",
			keywords:
				'Access Application Bandwidth Blocking Browser Cloud Control DNS DNS-over-HTTP Executable Free Granular Inbound Instant Integration Intelligence Internet Limits Malware Monitoring Performance Precise Rapid Resource Rule-Based Threat Traffic Trust Tuning Vulnerability-Based Zero ',
			name: 'Threatmatic™ Pricing Structure',
			offers: [
				{
					'@type': 'offer',
					businessFunction: 'Sell',
					category: 'https://threatmatic.com/pricing',
					disambiguatingDescription: 'Threatmatic Standard Working Tier',
					name: 'Standard Workstation',
					price: '9.99',
					priceCurrency: 'USD',
					priceSpecification: {
						'@type': 'UnitPriceSpecification',
						billingDuration: 'month'
					}
				},
				{
					'@type': 'offer',
					businessFunction: 'Sell',
					category: 'https://threatmatic.com/pricing',
					disambiguatingDescription: 'Threatmatic Standard Workstation Tier',
					name: 'Standard Workstation',
					price: '49.99',
					priceCurrency: 'USD',
					priceSpecification: {
						'@type': 'UnitPriceSpecification',
						billingDuration: 'month'
					}
				},
				{
					'@type': 'offer',
					businessFunction: 'Sell',
					category: 'https://threatmatic.com/pricing',
					disambiguatingDescription: 'Threatmatic Premium Workstation Tier',
					name: 'Premium User',
					price: '12.99',
					priceCurrency: 'USD',
					priceSpecification: {
						'@type': 'UnitPriceSpecification',
						billingDuration: 'month'
					}
				},
				{
					'@type': 'offer',
					businessFunction: 'Sell',
					category: 'https://threatmatic.com/pricing',
					disambiguatingDescription: 'Threatmatic Premium Workstation Tier',
					name: 'Premium User',
					price: '59.99',
					priceCurrency: 'USD',
					priceSpecification: {
						'@type': 'UnitPriceSpecification',
						billingDuration: 'month'
					}
				}
			],
			operatingSystem: 'WINDOWS',
			provider: {
				'@type': 'organization',
				email: 'info@threatmatic.com',
				employee: 'Mohan Reddy',
				founder: 'Mohan Reddy',
				telephone: '7143561728'
			}
		}
	]}
/>

<section class="bg-white dark:bg-gray-900">
	<!--Hero with App Screenshot and CTAs-->
	<div class="mx-auto max-w-screen-xl px-4 pt-8 text-center lg:px-12 lg:pt-16">
		<h1
			class="mb-4 text-4xl font-semibold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
		>
			<span class="text-primary-500"> Zero Trust </span>
			<span class="italic">Demystified</span>
		</h1>
		<p
			class="mb-8 font-light text-gray-500 dark:text-gray-400 sm:px-16 md:text-lg lg:text-3xl xl:px-48"
		>
			<!--
			Threatmatic™ strikes the perfect balance between security and usability. Our modular and uninterruptible Zero Trust enforcement design, managed from an ultra-easy and modern UI ensures that
			your most valuable assets are protected <span class="italic">instantaneously</span> with ZTNA - your advantage
			when responding to ransomware, malware, phishing attacks, DNS poisoning and so much more. QSchannel™ Zones and Cloudiffusion™ enable you to deploy microsegmentation and cloud integration with unparalleled ease, security and performance.
			-->
			Threatmatic™ empowers your organization with real-time, Zero Trust protection that scales with your enterprise.
			It reduces risk exposure while enabling innovation — so your teams can move fast without compromising security.
		</p>


		<!--
		<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Watch a Demo <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
		<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
		</svg>
		</button>


		<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
		    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
		      <li>
		        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Threatmatic ZTE</a>
		      </li>
		      <li>
		        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">QSchannel</a>
		      </li>
		      <li>
		        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Policies in Action</a>
		      </li>
		      <li>
		        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Installing our Agent</a>
		      </li>
		    </ul>

		</div>
		-->

		<div class="aspect-video rounded-lg overflow-hidden mb-4">
			<iframe
				src="https://www.youtube.com/embed/eK0kWThr8D8?si=V4wocTbGaCVOA5Em"
				class="w-full h-full"
				allowfullscreen>
			</iframe>
		</div>

		<!--
		<div class="aspect-video rounded-lg overflow-hidden mb-4">
			<iframe
				src="https://drive.google.com/file/d/1ujeChKX7vW6P-NOlGIIjmuQgb185a56Z/preview"
				class="w-full h-full"
				allowfullscreen>
			</iframe>
		</div>
		-->

		<!--
		<img
			class="z-1 mx-auto mb-5 rounded-lg border border-gray-200 shadow-xl dark:hidden dark:border-gray-600 lg:mb-8"
			src={dashboardMockupLight}
			alt="dashboard overview"
		/>
		<img
			class="z-1 mx-auto mb-5 hidden rounded-lg border border-gray-200 shadow-xl dark:block dark:border-gray-600 lg:mb-8"
			src={dashboardMockupDark}
			alt="dashboard overview dark"
		/>
		-->

	</div>
	<!--Social Proof-->
	<div class="z-2 -mt-48 bg-gray-50 pb-8 pt-48 dark:bg-gray-800 sm:-mt-80 sm:pt-80 lg:pb-16">
		<div class="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
			<dl class="mx-auto grid max-w-screen-md gap-8 text-gray-900 dark:text-white sm:grid-cols-3">
				<div class="flex flex-col items-center justify-center">
					<dt class="mb-2 text-3xl font-extrabold md:text-4xl">900+</dt>
					<dd class="font-light text-gray-500 dark:text-gray-400">Hours Saved</dd>
				</div>
				<div class="flex flex-col items-center justify-center">
					<dt class="mb-2 text-3xl font-extrabold md:text-4xl">≤10 s</dt>
					<dd class="font-light text-gray-500 dark:text-gray-400">Policy Creation</dd>
				</div>
				<div class="flex flex-col items-center justify-center">
					<dt class="mb-2 text-3xl font-extrabold md:text-4xl">60 ms</dt>
					<dd class="font-light text-gray-500 dark:text-gray-400">Policy Propagation</dd>
				</div>
			</dl>
		</div>
	</div>
</section>

<!--
<section class="bg-white dark:bg-gray-900">
    <div class="py-4 px-4 mx-auto max-w-screen-xl">
        <div>
            <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" src="https://drive.google.com/file/d/1G1rhXAv5Z53TIHh12uai3ZrTlHeNJ_dr/preview" frameborder="1" allow="autoplay;"></iframe>
        </div>
    </div>
</section>
-->

<!--Feature List with CTAs-->
<section class="bg-white dark:bg-gray-900">
	<div class="mx-auto max-w-screen-xl px-4 py-8 text-center sm:py-16 lg:px-6">
		<h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
			Speed, Simplicity, and Scale
		</h2>
		<p class="text-gray-500 dark:text-gray-400 sm:text-xl">
		Our intuitive UI and flexible architecture make deployment fast and frictionless,
		while delivering powerful protection without slowing down systems, at scale.
		It’s the security solution your team can deploy quickly — and rely on daily.
		Lightning fast policy changes for instantaneous ZTNA enforcement.
		</p>
		<div
			class="mt-8 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0 lg:mt-12 lg:grid-cols-3"
		>
			<div>
				<Icon
					name="fingerprint-solid"
					class="mx-auto mb-4 h-12 w-12 text-primary-600 dark:text-primary-500"
				/>
				<h3 class="mb-2 text-xl font-bold dark:text-white">
					No-compromise endpoint security rooted in identity
				</h3>
			</div>
			<div>
				<Icon
					name="clock-outline"
					class="mx-auto mb-4 h-12 w-12 text-primary-600 dark:text-primary-500"
				/>
				<h3 class="mb-2 text-xl font-bold dark:text-white">Millisecond malware countermeasures</h3>
			</div>
			<div>
				<Icon
					name="draw-square-outline"
					class="mx-auto mb-4 h-12 w-12 text-primary-600 dark:text-primary-500"
				/>
				<h3 class="mb-2 text-xl font-bold dark:text-white">
					On demand microsegmentation and app traffic control
				</h3>
			</div>
		</div>
	</div>
</section>

<FeaturesList
	featureData={{
		'Zero Trust': [
			{
				name: 'User and App Whitelisting',
				description:
					'Audit or block applications and/or users directly on endpoints by any user, group, device or device-pool.',
				flowbiteIconName: 'clapperboard-play-solid'
			},
			{
				name: 'Executable Control',
				description: 'Allow or block any application to IPv4 or IPv6 addresses (or URLs, ports) at endpoints, ingress or egress.',
				flowbiteIconName: 'terminal-solid'
			},
			{
				name: 'Instantaneous Enforcement',
				description:
					'Instantly block in-flight traffic by deploying rules to users, groups, devices, and device-pools.',
				flowbiteIconName: 'scale-balance-solid'
			}
		],
		'Take Control of Your Bandwidth': [
			{
				name: 'Free Up Your Bandwidth',
				description: 'Manage network bandwidth to prevent bandwidth-starving software updates.',
				flowbiteIconName: 'hourglass-solid'
			},
			{
				name: 'Group based Bandwidth Limits',
				description:
					'Fine-tune bandwidth allocation to users or groups, or network destinations.',
				flowbiteIconName: 'cloud-arrow-up-solid'
			},
			{
				name: ' Performance tuning for Workloads',
				description:
					'Control bandwidth allocation to specific workloads bidirectionally by user, group, device, and pool for fine-grained performance tuning at the host level.',
				flowbiteIconName: 'cog-outline'
			}
		],
		'Secure Your Network': [
			{
				name: 'Inbound Access Control',
				description: 'Orchestrate inbound access rules directly on all your endpoints.',
				flowbiteIconName: 'sort-horizontal-solid'
			},
			{
				name: 'Precise Traffic Monitoring',
				description:
					'Track and alert on specific traffic streams from executables to specific destinations and ports.',
				flowbiteIconName: 'search-solid'
			},
			{
				name: 'Rapid Vulnerability-Based Blocking',
				description:
					'Instantly block or throttle in-progress or scheduled software updates with known vulnerabilities.',
				flowbiteIconName: 'shield-solid'
			}
		],
		Microsegmentation: [
			{
				name: 'QSchannel Zones',
				description:
					'Simple and direct policy action to build unlimited any-to-any nano- and micro-segments: ',
				flowbiteIconName: 'clock-solid'
			},
			{
				name: 'Granular Traffic Bandwidth Control',
				description:
					'Optimize performance and enhance security by controlling bandwidth throttling rates by application for traffic by user, group, device or pool.',
				flowbiteIconName: 'filter-solid'
			},
			{
				name: 'Cloudiffusion',
				description:
					'Seamless and secure diffusion between on-prem-private and public clouds, with ZTNA policies.',
				flowbiteIconName: 'cloud-arrow-up-outline'
			}
		],
		'Defense-in-Depth': [
			{
				name: 'Threat Intelligence Integration',
				description:
					'Combine Cloud-based threat intelligence to automate instantaneous anti-malware policy delivery to your endpoints.',
				flowbiteIconName: 'brain-solid'
			},
			{
				name: 'Browser DNS-over-HTTP Control',
				description: 'Control DNS-over-HTTP for individual browsers by user, group, or device.',
				flowbiteIconName: 'draw-square-solid'
			},
			{
				name: 'Precise Malware Blocking',
				description:
					'Instantly block malware executables from contacting C2 or from spreading.',
				flowbiteIconName: 'bug-solid'
			},
			{
				name: 'DNS Trust Enforcement',
				description:
					'Control which name-servers are allowed to respond to specific users, groups or networks including DNS-over-HTTP and DNS-over-TLS.',
				flowbiteIconName: 'filter-solid'
			}
		]
	}}
/>

<section class="bg-white dark:bg-gray-900">

		<div class="py-8 px-4 mx-auto max-w-screen-md lg:py-16 grid lg:grid-cols-1 gap-8 lg:gap-16">
				<div class="flex flex-col justify-center grid lg:grid-cols-1">
            <h1 class="mb-4 text-4xl font-semibold tracking-tight text-center text-gray-900 md:text-3xl lg:text-3xl dark:text-white">Demystifying Zero Trust</h1>
            <p class="mb-8 text-lg font-normal text-wrap text-gray-500 lg:text-xl dark:text-gray-400">Threatmatic™ strikes the perfect balance between security and usability.</p>

						<div class="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0">
							<a class="inline-flex justify-center items-center py-3 px-5 text-base font-normal text-left text-white
								rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ">
                    Hear from the experts
										<svg class="w-24 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 4">
												<!--
												<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
												-->
                    </svg>
										<div class="w-full">
       								<audio controls class="w-full h-4 rounded-lg">
         							<source src={introAudio} type="audio/wav">
         							Your browser does not support the audio element.
       								</audio>
     								</div>
                </a>
            </div>

					</div>
 </section>

 <section class="bg-white dark:bg-gray-900">

			<div class="mx-auto max-w-screen-xl px-4 pt-8 text-center lg:px-12 lg:pt-16">

			<!--
			<div class="mx-auto max-w-screen-xl text-center px-4 py-8 sm:py-16 lg:px-6">
				<img
					class="z-1 mx-auto mb-5 rounded-lg border border-gray-200 shadow-xl dark:hidden dark:border-gray-600 lg:mb-8"
					src={dashboardMockupLight}
					alt="dashboard overview"
				/>
				<img
					class="z-1 mx-auto mb-5 hidden rounded-lg border border-gray-200 shadow-xl dark:block dark:border-gray-600 lg:mb-8"
					src={dashboardMockupDark}
					alt="dashboard overview dark"
				/>
				-->

				<div class="aspect-video rounded-lg overflow-hidden mb-4">
					<iframe
						src="https://drive.google.com/file/d/1Tnv4cEJge1o0CQCnQw8YJ9SDW3f20QDd/preview"
						allow="autoplay controls"
						class="w-full h-full">
					</iframe>
					<p Why Threatmatic? /p>
				</div>

				<div class="aspect-video rounded-lg overflow-hidden mb-4">
					<iframe
						src="https://drive.google.com/file/d/1ujeChKX7vW6P-NOlGIIjmuQgb185a56Z/preview"
						class="w-full h-full"
						allowfullscreen>
					</iframe>
					<p Threatmatic Architecture /p>
				</div>

				<!--
				<Video src="https://drive.google.com/file/d/1Tnv4cEJge1o0CQCnQw8YJ9SDW3f20QDd/preview"
				controls autoplay
				class="h-auto w-full max-w-full rounded-lg"/>
				-->

			</div>

</section>

<!--Mailing List Heading with CTA Button-->
<section class="bg-white dark:bg-gray-900">
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
		<div class="mx-auto max-w-screen-sm text-center">
			<h2
				class="mb-4 text-4xl font-semibold text-gray-900 dark:text-white"
			>
				Join our Mailing List!
			</h2>
			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLScTMV_GyN480Jie4voJMwDDb6U6WUv14p0k8do3TPeeb8g9uQ/viewform?usp=sf_link"
				target="_blank"
				rel="external noopener noreferrer"
				class="mb-2 mr-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
			>
				Interest Form
			</a>
		</div>
	</div>
</section>
