<script lang="ts">
	import product from '$lib/images/product/product.png';
</script>

<svelte:head>
	<title>ThreatMatic™ | Product</title>
</svelte:head>

<section class="bg-white dark:bg-gray-900">
	<div class="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6">
		<!-- Row -->
		<div class="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
			<div class="text-gray-500 sm:text-lg dark:text-gray-400">
				<h2 class="mb-4 text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
					ThreatZero is a potent solution for a smart zero-trust edge and rapid malware counter
					measures with unparalleled visibility and control.
				</h2>
				<p class="mb-8 font-light lg:text-xl">
					Today’s cyber defenses are typically constructed with a perimeter focus where the security
					is built from outside-in, and this is the main reason why we have so many security
					breaches that cause massive loss of data, trust and productivity, and are expensive to
					mitigate. We have taken a novel approach to building an end point focused zero-trust
					solution that is guided by simplicity of deployment with ultra low-latency policy updates
					for an impermeable Zero-Trust edge. Our lightweight agent coupled with AI cloud engine has
					the power to secure your servers and workstations regardless of size, scope or location,
					in a matter of milliseconds. Our policy driven model is rooted in identity and secured by
					the latest encryption and cloud-native technology.
				</p>
				<p class="mb-8 font-light lg:text-xl">
					Our cloud policy engine (also available on-site) is scalable, secure and reliable and can
					instantly control the security posture on all your endpoints (users and servers) for
					multi-dimensional protection based on identity and each app/exe.
				</p>
			</div>
			<img
				class="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg"
				src={product}
				alt="Product Graphic"
			/>
		</div>
	</div>
</section>
