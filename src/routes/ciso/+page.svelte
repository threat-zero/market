<script lang="ts">
	import productNew from '$lib/images/product/Background-Security Abstract_horizontal.jpg';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	{...{
		title: 'Product',
		titleTemplate: '%s | Product™',
		description: 'Threatmatic™ Product',
		canonical: 'https://threatmatic.com/ciso',
		openGraph: {
			url: 'https://www.threatmatic.com/ciso',
			title: 'Home',
			description: 'Threatmatic™ for CISOs',
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
						Elevate Zero Trust Enforcement with Threatmatic ZT-sync
					</h2>
					<p class="mb-8 font-light lg:text-2xl">
						Zero Trust is no longer optional—it’s mission-critical.
						Yet, most ZTNA solutions struggle with latency, complexity, and reliability.
						Threatmatic ZT-sync changes that paradigm.
					</p>

					<img
						class="hidden mb-4 w-full lg:mb-0 lg:flex rounded-lg"
						src={productNew}
						alt="Product Graphic"
					/>
				</div>

					<div class="gap-8 items-top lg:grid lg:grid-cols-3 dark:text-gray-400 xl:gap-16">
						<p class="mb-8 font-light lg:text-xl">
							<span class="font-semibold">Uninterruptible Control Plane:</span> Conceptually simple yet profoundly effective for Zero Trust enforcement.
						</p>

						<p class="mb-8 font-light lg:text-xl">
							<span class="font-semibold">Unmatched Performance:</span> Sub-50ms latency for targeted policy updates to endpoints and workloads—anywhere in the world.
						</p>

						<p class="mb-8 font-light lg:text-xl">
							<span class="font-semibold">Architectural Excellence:</span> Asynchronous, multi-cloud design with highly decoupled components, autoscaling, and astonishing reliability.
						</p>

						<p class="mb-8 font-light lg:text-xl">
							<span class="font-semibold">Global Reach:</span> Multi-region availability ensures resilience and compliance across distributed environments.
						</p>

						<p class="mb-8 font-light lg:text-xl">
						<span class="font-semibold">Intelligent Security:</span> Multi-modal IOC signal processing fused with AI-powered reasoning for topological, chronological, and causal correlation.
						</p>

						<p class="mb-8 font-light lg:text-xl">
							<span class="font-semibold">Future-Proof:</span> Built for adaptive, autonomous enforcement in dynamic threat landscapes.
						</p>

				</div>

	</div>

			<div class="mx-auto max-w-screen-xl px-4 py-8 text-center sm:py-16 lg:px-6 dark:text-gray-400">
				<p class="mb-8 font-light lg:text-xl">
					<span class="font-semibold">Rapid Policy Enforcement Across Distributed Environments:</span>

					Legacy ZTNA and firewall solutions struggle to push policy updates quickly across global endpoints and workloads, often taking minutes or hours—leaving gaps attackers exploit.
				</p>
				<p class="mb-8 font-light lg:text-xl">
					<span class="font-semibold">Threatmatic Solution:</span>
					Threatmatic enforces targeted security policy updates in under 50ms, regardless of endpoint location or network topology. This ultra-low latency ensures instant posture correction and real-time containment of emerging threats.
				</p>
				<p class="mb-8 font-light lg:text-xl">
					<span class="font-semibold">Fragmented Threat Signal Processing:</span>

					EDR/XDR tools often rely on endpoint-only telemetry and static rules, missing multi-modal signals like network anomalies, identity context, and behavioral patterns.
				</p>
				<p class="mb-8 font-light lg:text-xl">
				<span class="font-semibold">Threatmatic Solution:</span>
				Threatmatic processes multi-modal IOC signals—network, identity, application, and behavioral telemetry—through a global, asynchronous architecture. This enables high-fidelity threat detection and context-aware enforcement across the entire attack surface.
				</p>
				<p class="mb-8 font-light lg:text-xl">
				<span class="font-semibold">Lack of Intelligent Correlation and Autonomous Response:</span>

				Traditional SIEM and XDR platforms provide alerts but lack AI-driven reasoning and causal correlation, forcing manual triage and delayed response.
				</p>
				<p class="mb-8 font-light lg:text-xl">
				<span class="font-semibold">Threatmatic Solution:</span>
				Threatmatic fuses AI-powered reasoning with topological, chronological, and causal correlation to understand attack paths and root causes. Combined with agentic tool calling, Threatmatic autonomously executes mitigation actions—such as isolating endpoints or adjusting ZTNA posture—without human intervention.
				</p>
		</div>
</section>
