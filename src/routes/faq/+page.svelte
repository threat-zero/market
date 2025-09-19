<script lang="ts">
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

				<div class="collapse bg-base-100 border border-base-300">
					  <input type="radio" name="my-accordion-1" checked="checked" />
					  <div class="collapse-title font-semibold">How do I create an account?</div>
					  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
				</div>
				<div class="collapse bg-base-100 border border-base-300">
					  <input type="radio" name="my-accordion-1" />
					  <div class="collapse-title font-semibold">I forgot my password. What should I do?</div>
					  <div class="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
				</div>
				<div class="collapse bg-base-100 border border-base-300">
					  <input type="radio" name="my-accordion-1" />
					  <div class="collapse-title font-semibold">How do I update my profile information?</div>
					  <div class="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
				</div>
			</h2>
 			</div>

	</div>

</section>
