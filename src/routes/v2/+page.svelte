<script lang="ts">
	import { Accordion, AccordionItem } from 'flowbite-svelte';
	import { Icon } from 'flowbite-svelte-icons';
</script>

<!-- <div class="min-h-[25vh] bg-gradient-to-b from-zinc-900 via-violet-800 to-violet-400 bg-cover"> -->
<!-- <div class="min-h-[20vh] bg-gradient-to-b  "> -->
<div class="min-h-[25vh] bg-gradient-to-b from-zinc-900 via-violet-800 to-violet-400">
	<div class="container mx-auto flex flex-col items-center justify-between gap-y-4">
		<span class="text-center text-9xl font-bold">
			<div class="text-violet-400">Zero Trust</div>
			<div class="text-zinc-50">Demystified</div>
		</span>
		<div class="mx-64 text-center text-zinc-50">
			<span class="font-bold">ThreatMatic™</span>

			Where Zero Trust network access meets seamless deployment, unparalleled ease of use, and
			ironclad security. Your advantage when responding to ransomware, malware threats, phishing
			attacks, DNS poisoning and so much more.
		</div>
		<button
			type="button"
			class="inline-flex flex-none items-center justify-center rounded-lg bg-purple-300 px-[15px] py-2.5 text-center text-xs font-medium text-violet-950 focus-within:outline-none focus-within:ring-4 focus-within:ring-purple-300 hover:bg-purple-800"
		>
			Get a Demo
		</button>
	</div>
</div>
<div class="min-h-[25vh] bg-gradient-to-b from-zinc-900 via-violet-800 to-violet-400">
	<div class="container mx-auto flex flex-col items-center justify-between gap-y-4">
		<span class="mt-4 text-center font-bold text-zinc-50">
			<div class="text-4xl">Our Platform</div>
			<div class="mx-[450px] text-center">
				A comprehensive platform to secure, simplify, and transform your business
			</div>
		</span>
		<div class="grid-rows-8 grid w-full grid-cols-3 gap-x-4 gap-y-4">
			<div class="col-span-3 row-start-1 row-end-2 text-5xl text-zinc-50">Zero Trust</div>
			<div
				class="col-start-1 col-end-2 row-start-2 row-end-3 rounded-xl border border-gray-500 bg-zinc-900 p-10"
			>
				<div class="mx-auto flex flex-col items-center justify-between gap-y-4">
					<div class="rounded-xl bg-zinc-50 p-5">
						<Icon name="lock-outline" class="text-gray-500" />
					</div>
					<div class="text-center text-zinc-50">
						<div class="font-bold">S/Channel™ “un-VPN”</div>
						<div class="font-light">
							Ditch your VPNs/VDI with ThreatMatic’s S/Channel, a lightening quick secure channel
							for your workforce
						</div>
					</div>
				</div>
			</div>
			<div
				class="col-start-2 col-end-3 row-start-2 row-end-3 rounded-xl border border-gray-500 bg-zinc-900 p-10"
			>
				<div class="mx-auto flex flex-col items-center justify-between gap-y-4">
					<div class="rounded-xl bg-zinc-50 p-5">
						<Icon name="lock-outline" class="text-gray-500" />
					</div>
					<div class="text-center text-zinc-50">
						<div class="font-bold">Instant Rule -Based Traffic Control</div>
						<div class="font-light">
							Instantly block in-flight traffic by deploying rules to users, groups, devices, and
							device-pools.
						</div>
					</div>
				</div>
			</div>
			<div
				class="col-start-3 col-end-4 row-start-2 row-end-3 rounded-xl border border-gray-500 bg-zinc-900 p-10"
			>
				<div class="mx-auto flex flex-col items-center justify-between gap-y-4">
					<div class="rounded-xl bg-zinc-50 p-5">
						<Icon name="lock-outline" class="text-gray-500" />
					</div>
					<div class="text-center text-zinc-50">
						<div class="font-bold">Inbound Access Control</div>
						<div class="font-light">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua
						</div>
					</div>
				</div>
			</div>
			<div class="col-span-3 row-start-3 row-end-4 text-5xl text-zinc-50">
				Prevention & Protection
			</div>
			<div
				class="col-start-1 col-end-2 row-start-4 row-end-5 rounded-xl border border-gray-500 bg-zinc-900 p-10"
			>
				<div class="mx-auto flex flex-col items-center justify-between gap-y-4">
					<div class="rounded-xl bg-zinc-50 p-5">
						<Icon name="lock-outline" class="text-gray-500" />
					</div>
					<div class="text-center text-zinc-50">
						<div class="font-bold">Inbound Access Control</div>
						<div class="font-light">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua
						</div>
					</div>
				</div>
			</div>
			<div
				class="col-start-2 col-end-3 row-start-4 row-end-5 rounded-xl border border-gray-500 bg-zinc-900 p-10"
			>
				<div class="mx-auto flex flex-col items-center justify-between gap-y-4">
					<div class="rounded-xl bg-zinc-50 p-5">
						<Icon name="lock-outline" class="text-gray-500" />
					</div>
					<div class="text-center text-zinc-50">
						<div class="font-bold">Rapid Malware Blocking</div>
						<div class="font-light">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua
						</div>
					</div>
				</div>
			</div>
			<div
				class="col-start-3 col-end-4 row-start-4 row-end-5 rounded-xl border border-gray-500 bg-zinc-900 p-10"
			>
				<div class="mx-auto flex flex-col items-center justify-between gap-y-4">
					<div class="rounded-xl bg-zinc-50 p-5">
						<Icon name="lock-outline" class="text-gray-500" />
					</div>
					<div class="text-center text-zinc-50">
						<div class="font-bold">Threat Intelligence Integration</div>
						<div class="font-light">
							Combine Cloud-based threat intelligence to automate instantaneous anti-malware policy
							delivery to your endpoints
						</div>
					</div>
				</div>
			</div>
			<div class="col-span-3 row-start-5 row-end-6 text-5xl text-zinc-50">Microsegmentation</div>
			<div
				class="col-start-1 col-end-2 row-start-6 row-end-7 rounded-xl border border-gray-500 bg-zinc-900 p-10"
			>
				<div class="mx-auto flex flex-col items-center justify-between gap-y-4">
					<div class="rounded-xl bg-zinc-50 p-5">
						<Icon name="lock-outline" class="text-gray-500" />
					</div>
					<div class="text-center text-zinc-50">
						<div class="font-bold">Segment Specific Security Policies</div>
						<div class="font-light">
							Zero trust architectures shut out existing network monitoring tools. Regain end-to-end
							visibility from device to app.
						</div>
					</div>
				</div>
			</div>
			<div
				class="col-start-2 col-end-3 row-start-6 row-end-7 rounded-xl border border-gray-500 bg-zinc-900 p-10"
			>
				<div class="mx-auto flex flex-col items-center justify-between gap-y-4">
					<div class="rounded-xl bg-zinc-50 p-5">
						<Icon name="lock-outline" class="text-gray-500" />
					</div>
					<div class="text-center text-zinc-50">
						<div class="font-bold">Precise Malware Blocking</div>
						<div class="font-light">
							Instantly react and black malware on your endpoints by user, group, device, or
							device-pool coordinates for precisely delivered relief and forensic analysis.
						</div>
					</div>
				</div>
			</div>
			<div
				class="col-start-3 col-end-4 row-start-6 row-end-7 rounded-xl border border-gray-500 bg-zinc-900 p-10"
			>
				<div class="mx-auto flex flex-col items-center justify-between gap-y-4">
					<div class="rounded-xl bg-zinc-50 p-5">
						<Icon name="lock-outline" class="text-gray-500" />
					</div>
					<div class="text-center text-zinc-50">
						<div class="font-bold">Policy Based Security Zones</div>
						<div class="font-light">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua
						</div>
					</div>
				</div>
			</div>
			<div class="row-end-8 col-span-3 row-start-7 text-5xl text-zinc-50">
				Visibility & Detection
			</div>
			<div
				class="row-start-8 row-end-9 col-start-1 col-end-2 rounded-xl border border-gray-500 bg-zinc-900 p-10"
			>
				<div class="mx-auto flex flex-col items-center justify-between gap-y-4">
					<div class="rounded-xl bg-zinc-50 p-5">
						<Icon name="lock-outline" class="text-gray-500" />
					</div>
					<div class="text-center text-zinc-50">
						<div class="font-bold">Traffic Pattern Recognition</div>
						<div class="font-light">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua
						</div>
					</div>
				</div>
			</div>
			<div
				class="row-start-8 row-end-9 col-start-2 col-end-3 rounded-xl border border-gray-500 bg-zinc-900 p-10"
			>
				<div class="mx-auto flex flex-col items-center justify-between gap-y-4">
					<div class="rounded-xl bg-zinc-50 p-5">
						<Icon name="lock-outline" class="text-gray-500" />
					</div>
					<div class="text-center text-zinc-50">
						<div class="font-bold">Application Behavior Profiling</div>
						<div class="font-light">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua
						</div>
					</div>
				</div>
			</div>
			<div
				class="row-start-8 row-end-9 col-start-3 col-end-4 rounded-xl border border-gray-500 bg-zinc-900 p-10"
			>
				<div class="mx-auto flex flex-col items-center justify-between gap-y-4">
					<div class="rounded-xl bg-zinc-50 p-5">
						<Icon name="lock-outline" class="text-gray-500" />
					</div>
					<div class="text-center text-zinc-50">
						<div class="font-bold">Application Layer Visibility</div>
						<div class="font-light">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							incididunt ut labore et dolore magna aliqua
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="min-h-[25vh] bg-gradient-to-b from-violet-400 via-violet-800 to-zinc-900">
	<div class="container mx-auto flex flex-col items-center justify-between gap-y-4">
		<span class="mt-4 text-center text-6xl font-bold text-zinc-50">
			Frequently Asked Questions
		</span>
		<Accordion flush>
			<AccordionItem>
				<span slot="header" class="text-zinc-50"
					>What sets ThreatMatic Zero Trust Solution apart?
				</span>
				<span slot="default" class="text-zinc-50">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua
				</span>
				<span slot="arrowdown"><Icon name="plus-outline" class="ml-2 text-zinc-50" /></span>
				<span slot="arrowup"> <Icon name="minus-outline" class="ml-2 text-zinc-50" /></span>
			</AccordionItem>
			<AccordionItem>
				<span slot="header" class="text-zinc-50">What is Zero Trust?</span>
				<span slot="default" class="text-zinc-50">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua
				</span>
				<span slot="arrowdown"><Icon name="plus-outline" class="ml-2 text-zinc-50" /></span>
				<span slot="arrowup"> <Icon name="minus-outline" class="ml-2 text-zinc-50" /></span>
			</AccordionItem>
			<AccordionItem>
				<span slot="header" class="text-zinc-50">Who is Zero Trust for?</span>
				<span slot="default" class="text-zinc-50">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua
				</span>
				<span slot="arrowdown"><Icon name="plus-outline" class="ml-2 text-zinc-50" /></span>
				<span slot="arrowup"> <Icon name="minus-outline" class="ml-2 text-zinc-50" /></span>
			</AccordionItem>
			<AccordionItem>
				<span slot="header" class="text-zinc-50">When should you implement Zero Trust?</span>
				<span slot="default" class="text-zinc-50">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
					ut labore et dolore magna aliqua
				</span>
				<span slot="arrowdown"><Icon name="plus-outline" class="ml-2 text-zinc-50" /></span>
				<span slot="arrowup"> <Icon name="minus-outline" class="ml-2 text-zinc-50" /></span>
			</AccordionItem>
		</Accordion>
	</div>
</div>

<div class="min-h-[25vh] bg-gradient-to-b from-zinc-900 via-violet-800 to-zinc-900">
	<div class="container mx-auto flex flex-col items-center justify-between gap-y-4">
		<div class="mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16">
			<div class="mx-auto max-w-screen-md sm:text-center">
				<h2 class="mb-4 text-3xl font-extrabold tracking-tight text-zinc-50 sm:text-4xl">
					Learn More
				</h2>
				<p class="mx-auto mb-8 max-w-2xl font-light text-zinc-50 sm:text-xl md:mb-12">
					Interested in a demo for your business or learning more? Join our list and one of our
					members will get in touch.
				</p>
				<form action="#">
					<div class="mx-auto mb-3 max-w-screen-sm items-center space-y-4 sm:flex sm:space-y-0">
						<div class="relative w-full">
							<label
								for="email"
								class="mb-2 hidden text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Email address
							</label>
							<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<Icon name="envelope-outline" />
							</div>
							<input
								class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500 sm:rounded-none sm:rounded-l-lg"
								placeholder="Enter your email"
								type="email"
								id="email"
								required={false}
							/>
						</div>
						<div>
							<button
								type="submit"
								class="ml-2 w-full cursor-pointer rounded-lg bg-purple-300 px-5 py-4 text-center text-xs font-medium text-violet-950 focus-within:outline-none focus-within:ring-4 focus-within:ring-purple-300 hover:bg-purple-800"
							>
								Subscribe
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
    <div class="text-zinc-50">
      @ 2024 ThreatMatic™, Inc. All rights reserved.
    </div>
	</div>
</div>

<!-- </div> -->
