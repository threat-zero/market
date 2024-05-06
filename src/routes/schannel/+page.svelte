<script lang="ts">
	import productNew from '$lib/images/product/productNew.jpg';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	{...{
		title: 'Product',
		titleTemplate: '%s | sChannel™',
		description: 'ThreatMatic™ sChannel™ Feature',
		canonical: 'https://threatmatic.com/schannel',
		openGraph: {
			url: 'https://www.threatmatic.com/schannel',
			title: 'Home',
			description: 'ThreatMatic™ sChannel™ Product',
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
		<div class="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
			<div class="text-gray-500 sm:text-lg dark:text-gray-400">
				<p class="mb-8 font-light lg:text-xl">
					The “un-VPN” update to 25 year old technology. ThreatMatic S/Channel is a lightning quick
					secure channel to your private and public clouds and data centers. It’s both ephemeral and
					encrypted, with the latest ciphers and highly customizable with ThreatMatic security
					policies. You protect only the flows and conversations you choose, unwind the complexity
					and sluggish performance of traditional VPN, while you unleash your workforce and free
					them to connect to your data: uncompromising confidentiality and blazing performance at a
					fraction of the cost. Our built-in metrics and bandwidth management (QoS) capabilities set
					us apart from the competition, as does multi-factor authentication and short key lifetimes
					for maximum peace of mind. It’s engineered for the modern world with auto-scaling and
					high-availability fused into our design.
				</p>
				<p class="mb-8 font-light lg:text-xl">
					S/Channel also functions as a granular, “app level traffic director” to route traffic to
					security pipelines and NAT to ensure deep inspection and address obfuscation, in concert
					with IAM, DLP, XDR and logging services.
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
