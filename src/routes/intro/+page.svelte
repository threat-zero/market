<script lang="ts">
	import productNew from '$lib/images/product/productNew.jpg';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	{...{
		title: 'Product',
		titleTemplate: '%s | Product™',
		description: 'ThreatMatic™ Product',
		canonical: 'https://threatmatic.com/product',
		openGraph: {
			url: 'https://www.threatmatic.com/product',
			title: 'Home',
			description: 'ThreatMatic™ Product',
			images: [
				{
					url: 'https://threatmatic.com/_app/immutable/assets/product.158ef51e.png',
					width: 800,
					height: 600,
					alt: 'Product Graphic'
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

<section class="bg-white dark:bg-gray-900">
	<div class="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6">
		<!-- Row -->
		<div class="gap-8 items-top lg:grid lg:grid-cols-2 xl:gap-16">
			<div class="text-gray-500 sm:text-lg dark:text-gray-400">
				<h2 class="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
					Simplify Security Without Compromising Control.
				</h2>
				<p class="mb-8 font-light lg:text-xl">
					ThreatMatic™ bridges the gap between security and usability. 

					Our intuitive UI and modular Zero Trust architecture delivers lightning-fast, real-time protection against ransomware, malware, phishing, DNS poisoning, and more. Defend your most critical assets with unparalleled ease, security and performance..
				</p>
				<p class="mb-8 font-light lg:text-xl">
					Instant Zero Trust Enforcement:
          				Block traffic in real-time with granular, rule-based policies applied to users, groups, devices, and endpoints.
          				Audit or block applications and executables directly on endpoints. 
				</p>
				<p class="mb-8 font-light lg:text-xl">
					Smarter Bandwidth Management:
          				Prevent network bottlenecks by managing bandwidth allocation for users, workloads, and software updates.
          				Fine-tune bandwidth at a granular level with bi-directional performance tuning.
				</p>
				<p class="mb-8 font-light lg:text-xl">					
					Seamless Micro-segmentation:
          				Quickly isolate malware and control host-to-host traffic to enhance performance and security.
          				Achieve secure, dynamic cloud integration with ClouDiffusion™.
				</p>				
				<p class="mb-8 font-light lg:text-xl">
					Comprehensive Defense-in-Depth:
          				Integrated threat intelligence delivers proactive malware blocking and DNS traffic control.
          				Block malicious domains and C2 communications with precision.
				</p>
				
			</div>
			<img
				class="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg"
				src={productNew}
				alt="Product Graphic"
			/>
		</div>
	</div>
</section>
