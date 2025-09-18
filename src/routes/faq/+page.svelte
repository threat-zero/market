<script lang="ts">
	import { AccordionItem, Accordion } from "flowbite-svelte";
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


		<div id="accordion-collapse" data-accordion="collapse">
		  <h2 id="accordion-collapse-heading-1">
		    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
		      <span>What is Flowbite?</span>
		      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
		        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
		      </svg>
		    </button>
		  </h2>
		  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
		    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
		      <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
		      <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
		    </div>
		  </div>
		  <h2 id="accordion-collapse-heading-2">
		    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
		      <span>Is there a Figma file available?</span>
		      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
		        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
		      </svg>
		    </button>
		  </h2>
		  <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
		    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
		      <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
		      <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
		    </div>
		  </div>
		  <h2 id="accordion-collapse-heading-3">
		    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
		      <span>What are the differences between Flowbite and Tailwind UI?</span>
		      <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
		        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
		      </svg>
		    </button>
		  </h2>
		  <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
		    <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
		      <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
		      <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
		      <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
		      <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
		        <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
		        <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
		      </ul>
		    </div>
		  </div>
		</div>



<!--
	<Accordion>
			<AccordionItem>
				{#snippet header()}Where is the zero-trust boundary  enforced?{/snippet}
				<p class="mb-2 text-gray-500 dark:text-gray-400">Directly on the endpoints, every  endpoint that is protected by Threatmatic.</p>
			</AccordionItem>
			<AccordionItem>
				{#snippet header()}How light is “lightweight”?{/snippet}
				<p class="mb-2 text-gray-500 dark:text-gray-400">Less than 60MB on disk, 30MB in memory, 0.1% cpu.</p>
			</AccordionItem>
			<AccordionItem>
				{#snippet header()}Where does the “brain” reside?{/snippet}
				<p class="mb-2 text-gray-500 dark:text-gray-400">Our policy engines are designed to  operate from any compute zone:  private or public virtual machines, any  combination, across your availability  zones.</p>
			</AccordionItem>
			<AccordionItem>
				{#snippet header()}Can I write policies against arbitrary  groupings of devices?{/snippet}
				<p class="mb-2 text-gray-500 dark:text-gray-400">Yes! We support virtually limitless  grouping structures, including IoT  devices and any endpoint that can be  identified with an IP address.</p>
			</AccordionItem>
			<AccordionItem>
				{#snippet header()}What are the Active Directory  systems you support?{/snippet}
				<p class="mb-2 text-gray-500 dark:text-gray-400">We support any ID authentication  method: AD, Azure AD (Entra),Google,  AWS, Ping, Octa, Social, etc. We also  support hybrid schemes.</p>
			</AccordionItem>
			<AccordionItem>
				{#snippet header()}How fast can my zero-trust security  posture be changed?{/snippet}
				<p class="mb-2 text-gray-500 dark:text-gray-400">Instantly in a matter of milliseconds. ThreatMatic engines direct policy  changes in real time, even cloud based  deployments achieve sub-second  policy enforcement, regardless of the  number of endpoints.</p>
			</AccordionItem>
			<AccordionItem>
				{#snippet header()}What if I need to block an app but  only for a specific group of my users?{/snippet}
				<p class="mb-2 text-gray-500 dark:text-gray-400">Absolutely! You can write policy using  a natural language interface against  any combination of users, groups,  devices, tags, IP addresses, port  numbers, time intervals, and much  more.</p>
			</AccordionItem>
			<AccordionItem>
				{#snippet header()}I need to control exactly which can  communicate with my servers and  workloads. Can I achieve that?{/snippet}
				<p class="mb-2 text-gray-500 dark:text-gray-400">You sure can! When you write policies  in the “ingress” direction, you’ll have  the peace of mind that only expressly  authorized access is permitted.</p>
			</AccordionItem>
			<AccordionItem>
				{#snippet header()}My network suffers because of  uncontrolled software updates. Can  ThreatMatic control that? {/snippet}
				<p class="mb-2 text-gray-500 dark:text-gray-400">100%. You can easily govern exactly  which updates are allowed to  complete, at which time, and with how  much bandwidth.</p>
			</AccordionItem>
			<AccordionItem>
				{#snippet header()}Can you block traffic to known  malicious sites?{/snippet}
				<p class="mb-2 text-gray-500 dark:text-gray-400">With our HiFi DNS setting, we check  every name query against the latest  updates from across the globe on  malicious site activity.</p>
			</AccordionItem>
			<AccordionItem>
				{#snippet header()}How fast can I securely connect my  employees to data centers and public  cloud subscriptions?{/snippet}
				<p class="mb-2 text-gray-500 dark:text-gray-400">Nearly instantaneously! Our QSChannel technology is shockingly
								straightforward and simple, and has  the latest ciphers and blazing performance. Say goodbye to your  VPN.</p>
			</AccordionItem>
			<AccordionItem>
				{#snippet header()}How can I reign in my Public Cloud  spending?{/snippet}
				<p class="mb-2 text-gray-500 dark:text-gray-400">ThreatMatic policies can control both  the time allowed and bandwidth  offered, between your on-premises  data centers and cloud. Just like with  our other policies, you can specify any  group of users and applications that  are allowed to interact with your cloud  subscription.</p>
			</AccordionItem>
			<AccordionItem>
				{#snippet header()}What are some of the use-cases?{/snippet}
				<p class="mb-2 text-gray-500 dark:text-gray-400">Govern exactly what app, which user or  group, which set of devices, IP  addresses or host names, what  timeframe, how much bandwidth, is  allowed (or denied): precisely across  your entire domain, instantaneously  within milliseconds.</p>
				<p class="mb-2 text-gray-500 dark:text-gray-400">Control access to your data centers  and cloud, connect your users securely  with utmost confidentiality and privacy,  without VPN. Deployments are  measured in minutes, not days or  weeks.</p>
				<p class="mb-2 text-gray-500 dark:text-gray-400">Gain deep and meaningful insights into  user and application performance,  directly from endpoints and blended  with metrics your other sources. Our  ML models are constantly being  updated to integrate with AI and LLM  capabilities. Autopilot control of  security posture is a desirable use case.</p>
			</AccordionItem>
			<AccordionItem>
				{#snippet header()}How fast can I test Threatmatic in my own environment?{/snippet}
				<p class="mb-2 text-gray-500 dark:text-gray-400">You can be up and running in a secure POC with minutes!</p>
			</AccordionItem>
		</Accordion>
-->

 	</div>

</section>
