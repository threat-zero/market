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
			</h2>
		</div>

		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		Where is the zero-trust boundary enforced?
		</p>
		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		Directly on the endpoints, every  endpoint that is protected by
		Threatmatic.
		</p>
		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		How light is “lightweight”?
		</p>
		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		Less than 60MB on disk, 30MB in  memory, 0.1% cpu.
		</p>
		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		Where does the “brain” reside? Our policy engines are designed to  operate from any compute zone:  private or public virtual machines, any  combination, across your availability  zones.
		</p>
		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		Can I write policies against arbitrary  groupings of devices?
		</p>
		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		Yes! We support virtually limitless  grouping structures, including IoT  devices and any endpoint that can be  identified with an IP address.
		</p>
		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		We support any ID authentication  method: AD, Azure AD (Entra),Google,  AWS, Ping, Octa, Social, etc. We also  support hybrid schemes.
		</p>
	<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		How fast can my zero-trust security  posture be changed?
		</p>
	<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		Instantly in a matter of milliseconds.  ThreatMatic engines direct policy  changes in real time, even cloud based  deployments achieve sub-second  policy enforcement, regardless of the  number of endpoints.
		</p>
	<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		What if I need to block an app but  only for a specific group of my users?
		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		Absolutely! You can write policy using  a natural language interface against  any combination of users, groups,  devices, tags, IP addresses, port  numbers, time intervals, and much  more.
		</p>
	<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		I need to control exactly which can  communicate with my servers and  workloads. Can I achieve that? You sure can! When you write policies  in the “ingress” direction, you’ll have  the peace of mind that only expressly  authorized access is permitted.
		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		My network suffers because of  uncontrolled software updates. Can ThreatMatic control that?
		</p>
	<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		100%. You can easily govern exactly  which updates are allowed to  complete, at which time, and with how  much bandwidth.
		</p>
	<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		Can you block traffic to known  malicious sites?
		</p>
	<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		With our HiFi DNS setting, we check  every name query against the latest  updates from across the globe on  malicious site activity.
		</p>
	<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		How fast can I securely connect my  employees to data centers and public  cloud subscriptions?
		</p>
	<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		Nearly instantaneously! Our QSChannel  technology is shockingly
		straightforward and simple, and has  the latest ciphers and blazing
		performance. Say goodbye to your  VPN.
		</p>
		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		How can I reign in my Public Cloud  spending?
		</p>
		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		ThreatMatic policies can control both  the time allowed and bandwidth  offered, between your on-premises  data centers and cloud. Just like with  our other policies, you can specify any  group of users and applications that  are allowed to interact with your cloud  subscription.
		</p>
		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		What are some of the use-cases?
		</p>
		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		Govern exactly what app, which user or  group, which set of devices, IP  addresses or host names, what  timeframe, how much bandwidth, is  allowed (or denied): precisely across  your entire domain, instantaneously  within milliseconds.
		</p>
		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		Control access to your data centers  and cloud, connect your users securely  with utmost confidentiality and privacy,  without VPN.
		</p>
		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		Deployments are  measured in minutes, not days or  weeks.
		</p>
		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		Gain deep and meaningful insights into  user and application performance,  directly from endpoints and blended  with metrics your other sources. Our  ML models are constantly being  updated to integrate with AI and LLM  capabilities. Autopilot control of  security posture is a desirable use case.
		</p>
		<p class="font-light text-justify text-gray-500 md:text-lg xl:text-sm dark:text-gray-400">
		What personal information do we process? When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about personal information you disclose to us.
		</p>

		<div id="accordion-example">
		  <h2 id="accordion-example-heading-1">
		    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" aria-expanded="true" aria-controls="accordion-example-body-1">
		      <span>What is Flowbite?</span>
		      <svg data-accordion-icon class="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
		    </button>
		  </h2>
		  <div id="accordion-example-body-1" class="hidden" aria-labelledby="accordion-example-heading-1">
		    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
		      <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
		      <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
		    </div>
		  </div>
		  <h2 id="accordion-example-heading-2">
		    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" aria-expanded="false" aria-controls="accordion-example-body-2">
		      <span>Is there a Figma file available?</span>
		      <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
		    </button>
		  </h2>
		  <div id="accordion-example-body-2" class="hidden" aria-labelledby="accordion-example-heading-2">
		    <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
		      <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
		      <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
		    </div>
		  </div>
		  <h2 id="accordion-example-heading-3">
		    <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" aria-expanded="false" aria-controls="accordion-example-body-3">
		      <span>What are the differences between Flowbite and Tailwind UI?</span>
		      <svg data-accordion-icon class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
		    </button>
		  </h2>
		  <div id="accordion-example-body-3" class="hidden" aria-labelledby="accordion-example-heading-3">
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

	</div>
</section>
