<script lang="ts">
	import { ComparisonTable } from '$lib/blocks';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	{...{
		title: 'Pricing',
		titleTemplate: '%s | Threatmatic™',
		description: 'Threatmatic™ Pricing Tiers',
		canonical: 'https://threatmatic.com/pricing',
		openGraph: {
			url: 'https://www.threatmatic.com/pricing',
			title: 'Home',
			description: 'Threatmatic™ Pricing Tiers',
			siteName: 'Threatmatic™'
		},
		twitter: {
			handle: '@threatmatic',
			site: '@threatmatic'
		}
	}}
/>

<section class="bg-white dark:bg-gray-900">
	<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
		<div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
			<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				FAQs
			</h2>
		</div>

		<div id="accordion-collapse" data-accordion="open">

			<h2 id="accordion-collapse-heading-1">
	 		<button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
		 		<span>Where is the zero-trust boundary  enforced?</span>
		 			<svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
			 		<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
		 			</svg>
	 		</button>
 			</h2>
 				<div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
	 				<div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
		 			<p class="mb-2 text-gray-500 dark:text-gray-400">Directly on the endpoints, every  endpoint that is protected by Threatmatic.</p>
					</div>
 				</div>

 			<h2 id="accordion-collapse-heading-2">
	 		<button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
		 		<span>How light is lightweight?</span>
		 		<svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
			 	<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
		 		</svg>
	 		</button>
		</h2>

 		<div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
	 		<div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
		 	<p class="mb-2 text-gray-500 dark:text-gray-400">Less than 60MB on disk, 30MB in  memory, 0.1% cpu.</p>
	 		</div>
 		</div>

 		<h2 id="accordion-collapse-heading-3">
	 	<button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
		 	<span>Where does the “brain” reside?</span>
		 	<svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
			<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
		 	</svg>
	 	</button>
 		</h2>

 		<div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
	 		<div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
		 	<p class="mb-2 text-gray-500 dark:text-gray-400">Our policy engines are designed to  operate from any compute zone:  private or public virtual machines, any  combination, across your availability  zones.</p>
	 		</div>
 		</div>

 	</div>

</section>
