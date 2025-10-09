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
					QSchannel is a quantum-safe asymmetric secure access mechanism designed to resist future
					Post-Quantum Cryptography (PQC) threats. It ensures iron-clad confidentiality and integrity
					of secure communications through advanced cryptographic primitives, integrated with Threatmatic Zero Trust framework.
					QSchannel supports dynamic key exchange, identity validation, and encrypted session management, optimized
					for scalability and low latency.
				</p>

				<div class="aspect-video rounded-lg overflow-hidden mb-4">
  				<iframe
    				src="https://drive.google.com/file/d/1rMw338SR38bJJ213jJRK4Fus5ICeq1G_/preview"
    				class="w-full h-full"
    				allowfullscreen>
  				</iframe>
				</div>

					<!--
					<iframe width="560" height="315" src="https://www.youtube.com/embed/tlfQEfB3FOs?si=IFRRT6iCMB57uKoT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
					-->

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
