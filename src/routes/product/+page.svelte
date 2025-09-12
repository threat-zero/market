<script lang="ts">
	import productNew from '$lib/images/product/tm-circle-new.png';
	import threatmaticZTE from '$lib/videos/ThreatmaticZTE.webm';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	{...{
		title: 'Product',
		titleTemplate: '%s | Product™',
		description: 'Threatmatic™ Product',
		canonical: 'https://threatmatic.com/product',
		openGraph: {
			url: 'https://www.threatmatic.com/product',
			title: 'Home',
			description: 'Threatmatic™ Product',
			images: [
				{
					url: 'https://threatmatic.com/_app/immutable/assets/product.158ef51e.png',
					width: 800,
					height: 600,
					alt: 'Product Graphic'
				}
			],
			siteName: 'Threatmatic™'
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
				<h2 class="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white">
					Threatmatic™ Zero Trust Edge deploys in minutes and enforces ZTNA in <span class="italic">milliseconds</span>.
				</h2>
				<p class="mb-8 font-light lg:text-xl">
					Cybersecurity today is focussed on protecting
					the <span class="italic">perimeter</span> and as a consequence the security architecture
					is built from the outside-in. In our hyperconnected current world with widely dispersed users and applications,
					this design creates a <span class="italic">blind spot</span> in the "east-west aperture" that can result in security
					breaches often accompanied by loss of data, trust and productivity.
					These disruptive events are often crippling and expensive to mitigate.
				</p>

				<!--
				<div class="aspect-video rounded-lg overflow-hidden">
  				<iframe src="{https://www.youtube.com/embed/_WkwgAx5094?si=nftk3rIkAj8TSmh0}"
					class="w-full h-full"
					allowfullscreen>
					</iframe>
				</div>
				-->

				<div class="aspect-video rounded-lg overflow-hidden">
  				<iframe src="{threatmaticZTE}"
					class="w-full h-full"
					allowfullscreen>
					</iframe>
				</div>

				<p class="mb-8 font-light lg:text-xl">

					We have taken a novel approach to building a Zero-Trust
					solution that is founded on the principles of <span class="italic">simplicity</span>
					of deployment and <span class="italic">ultra low-latency</span> policy updates.
					Threatmatic can be hosted in the cloud or privately, or as a hybrid model
					to protect all your assets regardless of size, scope or location, in <span class="italic">milliseconds</span>.
				</p>
				<p class="mb-8 font-light lg:text-xl">
					The Threatmatic platform is engineered to thrive in a cybersecurity mesh (CSMA):
					lightning fast ZTNA enforcement directly on all your endpoints. With ultra-fast,
				  onboarding, you can deploy app and user ID based least-privilege policies
					with super malleable microsegmentation in minutes.
				</p>
				<p class="mb-8 font-light lg:text-xl">
					Threatmatic is a highly modular design with decoupled components
					that are designed to operate independently and asynchronously
					to deliver <span class="italic">uninterruptible</span> operation.
					On Windows, MacOS and Linux we offer unparalleled protection
					against unauthorized program executions and bi-directional access control.
				</p>
				<p class="mb-8 font-light lg:text-xl">
					QSChannel™ obsoletes the traditional VPN approach to securely connect your private,
					cloud and untrusted spaces with integrated policy-driven ZTNA.
					Our microsegmentation zones are simple to deploy and scale and ZTNA is infused, not a legacy "add-on".
					We offer this feature for all platforms including iPhone and Android.
				</p>
				<p class="mb-8 font-light lg:text-xl">
					Cloudiffusion™ enables you to seamlessly and
					rapidly connect your global workforce with private datacenters and the Cloud with ZTNA policies.
					With our continuous verification and app-bandwidth-control features,
					you get fine-grained control against runaway cloud costs.
				</p>
				<p class="mb-8 font-light lg:text-xl">
					Threatmatic includes a deep-analytics
					capability with Gen-AI and extends a natural language interface.
					You can query insights on the UI and dive deep into the ZTNA audit logs.
					We integrate with EDR/XDR systems and firewalls at the perimeter as
					the <span class="italic">enforcement point</span> in your CSMA.
				</p>
			</div>
			<img
				class="hidden mb-4 max-w-full mx-auto lg:mb-0 lg:flex rounded-lg"
				src={productNew}
				alt="Product Graphic"
			/>
		</div>
	</div>
</section>
