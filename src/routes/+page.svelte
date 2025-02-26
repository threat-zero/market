<script lang="ts">
	import FeaturesList from '$lib/blocks/FeaturesList.svelte';
	import dashboardMockupDark from '$lib/images/product/tm-cloud.jpg';
	import dashboardMockupLight from '$lib/images/product/34.jpg';
	import { Icon } from 'flowbite-svelte-icons';
	import { JsonLd, MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	{...{
		title: 'Home',
		titleTemplate: '%s | ThreatMatic™',
		description:
			'ThreatMatic™ Zero-Trust, Bandwidth, Network, Microsegmentation, and Defense-in-Depth features',
		canonical: 'https://threatmatic.com/',
		openGraph: {
			url: 'https://www.threatmatic.com/',
			title: 'Home',
			description:
				'ThreatMatic™ Zero-Trust, Bandwidth, Network, Microsegmentation, and Defense-in-Depth features',
			images: [
				{
					url: 'https://threatmatic.com/_app/immutable/assets/dashboardMockupLight.31c48286.svg',
					alt: 'ThreatMatic Dashboard Mockup Light Version',
					width: 800,
					height: 600,
					secureUrl:
						'https://threatmatic.com/_app/immutable/assets/dashboardMockupLight.31c48286.svg',
					type: 'image/jpeg'
				},
				{
					url: 'https://threatmatic.com/_app/immutable/assets/dashboardMockupDark.95a900fd.svg',
					alt: 'ThreatMatic Dashboard Mockup Dark Version',
					width: 800,
					height: 600,
					secureUrl:
						'https://threatmatic.com/_app/immutable/assets/dashboardMockupDark.95a900fd.svg',
					type: 'image/jpeg'
				}
			],
			siteName: 'ThreatMatic™'
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
			description: "ThreatMatic™'s flagship product consisting of the agent and admin dashboard.",
			featureList:
				"Fully ID aware across all your users and workloads, Unlimited Policies, Run on Customer Provided Infrastructure, Customer Safe Downtime, Cybersecurity Mesh Architecture, Cloud Ready ThreatMatic™, Zero Trust Mesh Architecture, Edge2Edge Policy, DNS Lock, Port Scanner Protection, DNSSEC Enforcement, Disable DoH (DNS over HTTP), Flexible IPsec Traffic Steering with QSChannel, Metered Socket Actions (QoS), Compliance Signals, TrustZero Cloud Proxy, Advanced Analytics, 'ThreatMatic API', 'Mitre Attack Integrated', 'Cloud-Based Management Platform', 'API Support', Self Service Knowledge Base, Designated Account Manager, Technical Specialist, Phone Support, Chat/Email Support",
			keywords:
				'Access Application Bandwidth Blocking Browser Cloud Control DNS DNS-over-HTTP Executable Free Granular Inbound Instant Integration Intelligence Internet Limits Malware Monitoring Performance Precise Rapid Resource Rule-Based Threat Traffic Trust Tuning Vulnerability-Based Zero ',
			name: 'ThreatMatic™ Pricing Structure',
			offers: [
				{
					'@type': 'offer',
					businessFunction: 'Sell',
					category: 'https://threatmatic.com/pricing',
					disambiguatingDescription: 'ThreatMatic Standard Working Tier',
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
					disambiguatingDescription: 'ThreatMatic Standard Workstation Tier',
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
					disambiguatingDescription: 'ThreatMatic Premium Workstation Tier',
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
					disambiguatingDescription: 'ThreatMatic Premium Workstation Tier',
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
			class="mb-4 text-4xl font-light leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
		>
			<span class="text-primary-500"> Zero Trust </span>
			Demystified
		</h1>
		<p
			class="mb-8 font-light text-gray-500 dark:text-gray-400 sm:px-16 md:text-lg lg:text-xl xl:px-48"
		>
			ThreatMatic™ strikes the perfect balance between security and usability. Our modular and uninterruptible Zero Trust enforcement design, managed from an ultra-easy and modern UI ensures that
			your most valuable assets are protected <span class="italic">instantaneously</span> with ZTNA - your advantage
			when responding to ransomware, malware, phishing attacks, DNS poisoning and so much more. QSChannel™ Zones and Cloudiffusion™ enable you to deploy microsegmentation and cloud integration with unparalleled ease, security and performance.
		</p>
		<div
			class="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16"
		>
			<a
				href="https://docs.google.com/forms/d/19STPsBM-tFH9KedGLJAcj0xBE3ImP69AR2S430GMKLc"
				target="_blank"
				rel="external noopener noreferrer"
				class="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
			>
				Get a Demo
			</a>
			<!-- 
			<a
				href="https://drive.google.com/file/d/10L879kcqd5gl0iq0WfTkEXxp8vSBtJqy/view?usp=drive_link"
				target="_blank"
				rel="external noopener noreferrer"
				class="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 		focus:ring-primary-300 dark:focus:ring-primary-900"
			>
				Get our Agent
			</a> 
			-->
			
		</div>
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
	</div>
	<!--Social Proof-->
	<div class="z-2 -mt-48 bg-gray-50 pb-8 pt-48 dark:bg-gray-800 sm:-mt-80 sm:pt-80 lg:pb-16">
		<div class="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-6 lg:py-16">
			<dl class="mx-auto grid max-w-screen-md gap-8 text-gray-900 dark:text-white sm:grid-cols-3">
				<div class="flex flex-col items-center justify-center">
					<dt class="mb-2 text-3xl font-extrabold md:text-4xl">300+</dt>
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

<!--Feature List with CTAs-->
<section class="bg-white dark:bg-gray-900">
	<div class="mx-auto max-w-screen-xl px-4 py-8 text-center sm:py-16 lg:px-6">
		<h2 class="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
			Simplicity Comes Standard
		</h2>
		<p class="text-gray-500 dark:text-gray-400 sm:text-xl">
			Whether you’re a 10 person small business or a large enterprise, ThreatMatic™ enables
			uncompromising endpoint protection. Lightning fast policy changes with no learning curve and instantaneous ZTNA enforcement: all adminstered by a refreshingly simple and modern UI.
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
				name: 'Application Control',
				description:
					'Audit or block applications directly on endpoints by any user, group, device or device-pool groupings.',
				flowbiteIconName: 'clapperboard-play-solid'
			},
			{
				name: 'Executable Control',
				description: 'Audit or block any executable to IPv4 or IPv6 addresses at endpoints.',
				flowbiteIconName: 'terminal-solid'
			},
			{
				name: 'Instant Rule-Based Traffic Control',
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
				name: 'Internet & Cloud Resource Bandwidth Limits',
				description:
					'Fine-tune bandwidth throttle rates for executables accessing your cloud-resources or the internet.',
				flowbiteIconName: 'cloud-arrow-up-solid'
			},
			{
				name: ' Performance Tuning ',
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
				name: 'QSChannel Zones',
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
				name: 'Granular DNS Traffic Control',
				description:
					'Control DNS traffic to specific servers, and resolution to specific domains',
				flowbiteIconName: 'filter-solid'
			}
		]
	}}
/>

<!--Mailing List Heading with CTA Button-->
<section class="bg-white dark:bg-gray-900">
	<div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
		<div class="mx-auto max-w-screen-sm text-center">
			<h2
				class="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white"
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
