<script lang="ts">
	import productNew from '$lib/images/product/tm-circle.png';
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
					ThreatMatic™ is a potent solution for a smart Zero-Trust edge and rapid malware counter
					measures with unparalleled visibility and control.
				</h2>
				<p class="mb-8 font-light lg:text-xl">
					Today’s cyber defenses are typically constructed with a perimeter focus where the security
					is built from outside-in, and this fact is one of the main reasons for security
					breaches that cause massive loss of data, trust and productivity, and are massively disruptive and expensive to
					mitigate.
				</p>
				<p class="mb-8 font-light lg:text-xl">
					We have taken a novel approach to building a Zero-Trust
					solution that is founded on the principles of simplicity of deployment and ultra low-latency policy updates
					for an impermeable Zero-Trust model. A featherweight agent along with our cloud, or privately hosted policy engine, 
					protect your servers and users regardless of size, scope or location, in a
					matter of milliseconds. It's all anchored by a policy driven model, rooted in identity and secured by the
					latest encryption and cloud-native technology. 
				</p>
				<p class="mb-8 font-light lg:text-xl">
					The ThreatMatic platform is engineered with the most up-to-date frameworks to help realize a highly potent cybersecurity mesh: lightning fast ZTNA enforcement that protects directly at your endpoints. With ultra-fast, modern onboarding in datacenters or public cloud, you can deploy app and user ID based least-privilege policies and flexible microsegmentation. On Windows and MacOS, we offer unparalleled protection against unauthorized executions or access, enable micro-segmentation and deep visibility/interoperability with perimeter protection and XDR, all adminstered with a modern UI. The platform is modular with decoupled components that are designed to operate independently and asynchronously, to deliver uninterruptible operation.
				</p>
				<p class="mb-8 font-light lg:text-xl">					
					sChannel™ untangles the traditional VPN approach to securely connect your private, cloud and untrusted spaces with an integrated policy-driven approach. It is offered for all platforms including iPhone and Android.
				</p>				
				<p class="mb-8 font-light lg:text-xl">
					Cloudiffusion™ enables you to seamlessly connect your global workforce and privately hosted datacenters to the Cloud with sChannel and ThreatMatic ZTNA policies.
				</p>
				<p class="mb-8 font-light lg:text-xl">
					ActiveObscurity™ ingress posture control extends ZTNA to ensure that only trusted and verified clients are allowed to connect to your services.
				</p>
				<p class="mb-8 font-light lg:text-xl">
					Infused into the platform is a deep-analytics architecture that was built with AI-ML and LLM at the center to enable a natural language interface to ThreatMatic.
				</p>
			</div>
			<img
				class="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg mx-auto"
				src={productNew}
				alt="Product Graphic"
			/>
		</div>
	</div>
</section>
