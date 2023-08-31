<script lang="ts">
	import FeaturesList from '$lib/blocks/FeaturesList.svelte';
	import { Icon } from 'flowbite-svelte-icons';
</script>

<svelte:head>
	<title>Threatmatic™</title>
	<meta name="description" content="ThreatMatic™ Zero Trust Security Demystified" />
</svelte:head>

<section class="bg-white dark:bg-gray-900">
	<!--Hero with App Screenshot and CTAs-->
	<div class="max-w-screen-xl px-4 pt-8 mx-auto text-center lg:pt-16 lg:px-12">
		<h1
			class="mb-4 text-4xl font-light tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
		>
			<span class="text-primary-500"> Zero Trust </span>
			Demystified
		</h1>
		<p
			class="mb-8 font-light text-gray-500 md:text-lg lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
		>
			ThreatMatic™ strikes the perfect balance between functionality and usability. Our
			unparalleled approach to melding modern user and app identities into a snappy and powerful
			agent ensures that your most valuable assets are protected in an instant: your advantage when
			responding to ransomware or malware threats, Phishing attacks, DNS poisoning and so much more.
		</p>
		<div
			class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
		>
			<a
				href="https://docs.google.com/forms/d/19STPsBM-tFH9KedGLJAcj0xBE3ImP69AR2S430GMKLc"
				class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
			>
				Get a Demo
			</a>
		</div>
		<img
			class="mx-auto mb-5 lg:mb-8 border border-gray-200 rounded-lg shadow-xl dark:border-gray-600 z-1 dark:hidden"
			src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup.svg"
			alt="dashboard overview"
		/>
		<img
			class="mx-auto mb-5 lg:mb-8 border border-gray-200 rounded-lg shadow-xl dark:border-gray-600 hidden dark:block z-1"
			src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/dashboard-mockup-dark.svg"
			alt="dashboard overview dark"
		/>
	</div>
	<!--Social Proof-->
	<div class="pt-48 lg:pb-16 pb-8 -mt-48 bg-gray-50 sm:pt-80 sm:-mt-80 dark:bg-gray-800 z-2">
		<div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
			<dl class="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
				<div class="flex flex-col items-center justify-center">
					<dt class="mb-2 text-3xl md:text-4xl font-extrabold">100+</dt>
					<dd class="font-light text-gray-500 dark:text-gray-400">Hours Saved</dd>
				</div>
				<div class="flex flex-col items-center justify-center">
					<dt class="mb-2 text-3xl md:text-4xl font-extrabold">≤5 minutes</dt>
					<dd class="font-light text-gray-500 dark:text-gray-400">Deployment</dd>
				</div>
				<div class="flex flex-col items-center justify-center">
					<dt class="mb-2 text-3xl md:text-4xl font-extrabold">0</dt>
					<dd class="font-light text-gray-500 dark:text-gray-400">Network Latency</dd>
				</div>
			</dl>
		</div>
	</div>
</section>

<!--Feature List with CTAs-->
<section class="bg-white dark:bg-gray-900">
	<div class="py-8 px-4 mx-auto max-w-screen-xl text-center sm:py-16 lg:px-6">
		<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
			Simplicity Comes Standard
		</h2>
		<p class="text-gray-500 sm:text-xl dark:text-gray-400">
			Whether you’re a 10 person small business or a large enterprise, ThreatMatic™ enables
			uncompromising endpoint protection.
		</p>
		<div
			class="mt-8 lg:mt-12 space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
		>
			<div>
				<Icon
					name="fingerprint-solid"
					class="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500"
				/>
				<h3 class="mb-2 text-xl font-bold dark:text-white">
					No-compromise endpoint security rooted in identity
				</h3>
			</div>
			<div>
				<Icon
					name="clock-outline"
					class="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500"
				/>
				<h3 class="mb-2 text-xl font-bold dark:text-white">Millisecond malware countermeasures</h3>
			</div>
			<div>
				<Icon
					name="draw-square-outline"
					class="mx-auto mb-4 w-12 h-12 text-primary-600 dark:text-primary-500"
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
					'Instantly Block in-progress or scheduled software updates with known vulnerabilities.',
				flowbiteIconName: 'shield-solid'
			}
		],
		Microsegmentation: [
			{
				name: 'Rapid Malware Blocking',
				description:
					'Instantly react and black malware on your endpoints by user, group, device, or device-pool coordinates for precisely delivered relief and forensic analysis.',
				flowbiteIconName: 'clock-solid'
			},
			{
				name: 'Granular Traffic Bandwidth Control',
				description:
					'Optimize performance and enhance security by controlling bandwidth throttling rates for host-to-host traffic by user, group, device or device-pool.',
				flowbiteIconName: 'filter-solid'
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
					'Instantly block confirmed malware commands & control malware destination by hostnames or IP addresses.',
				flowbiteIconName: 'bug-solid'
			},
			{
				name: 'Granular DNS Traffic Control',
				description:
					'Control DNS traffic to specific servers by users, groups, devices, and device pools.',
				flowbiteIconName: 'filter-solid'
			}
		]
	}}
/>

<!--Mailing List Heading with CTA Button-->
<section class="bg-white dark:bg-gray-900">
	<div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
		<div class="mx-auto max-w-screen-sm text-center">
			<h2
				class="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white"
			>
				Join our Mailing List!
			</h2>
			<a
				href="https://docs.google.com/forms/d/e/1FAIpQLScTMV_GyN480Jie4voJMwDDb6U6WUv14p0k8do3TPeeb8g9uQ/viewform?usp=sf_link"
				class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
			>
				Interest Form
			</a>
		</div>
	</div>
</section>
