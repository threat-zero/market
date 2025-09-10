<script lang="ts">
	import productNew from '$lib/images/product/tm-schannel.png';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	{...{
		title: 'Product',
		titleTemplate: '%s | sChannel™',
		description: 'Threatmatic™ sChannel™ Feature',
		canonical: 'https://threatmatic.com/schannel',
		openGraph: {
			url: 'https://www.threatmatic.com/schannel',
			title: 'Home',
			description: 'Threatmatic™ sChannel™ Product',
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
		<div class="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
			<div class="text-gray-500 sm:text-lg dark:text-gray-400">
				<h2 class="mb-4 text-3xl tracking-tight font-bold text-gray-900 dark:text-white">
					Retire your VPN: QSchannel™ delivers <span class="italic">lightning quick, quantum-safe</span>
					secure connectivity
				</h2>
				<p class="mb-8 font-light lg:text-xl">
					QSchannel is a <span class="italic">Quantum Safe</span>
					encrypted private mesh network with the latest ciphers, infused with Threatmatic ZTNA
					policies. Protect the flows and conversations you choose, unwind the complexity
					and supercharge the sluggish performance of traditional VPNs, unleash your workforce and free
					them to connect to your data: uncompromising confidentiality and blazing performance at a
					fraction of the cost.
				</p>

				<div
					class="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16"
				>
				
				<div class="aspect-w-16 aspect-h-9">
					<iframe
						src="https://youtu.be/tlfQEfB3FOs"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						allowfullscreen
						class="w-full h-full"
					></iframe>
				</div>

				<p class="mb-8 font-light lg:text-xl">
					Threatmatic AI with deep-learning metrics and bandwidth management (QoS) capabilities
					distinguishes us from others, along with multi-factor authentication and short key-lifetimes
					for maximum peace of mind. It’s engineered for the modern world with auto-scaling and
					high-availability fused into our design.
				</p>
				<p class="mb-8 font-light lg:text-xl">
					QSchannel enables you to create unlimited micro (or nano) segments, and route traffic between your branches or cloud, and to
					security pipelines and secure web gateways (SWG) to ensure deep inspection and address obfuscation, in concert
					with IAM, DLP, XDR and logging services. Threatmatic microsegmentation/security policies can be applied in
					concert with QSchannel "zones" to extend Zero Trust Edge (ZTE) to endpoints anywhere: corp HQ, branch, home and public cloud.
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
