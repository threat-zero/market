<script lang="ts">
	import { ComparisonTable } from '$lib/blocks';
</script>

<section class="bg-white dark:bg-gray-900">
	<div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
		<div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
			<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
				Pricing Tiers
			</h2>
		</div>
		<div class="grid gap-2 mb-8 xl:grid-cols-2">
			<!-- Pricing Card -->
			<div
				class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 xl:p-8 dark:text-white dark:bg-gray-800"
			>
				<h3 class="mb-4 text-2xl font-semibold">Standard</h3>
				<h2 class="text-xl font-medium">User</h2>
				<div class="flex justify-center items-baseline my-8">
					<span class="mr-2 text-5xl font-extrabold">$9.99</span>
					<span class="text-gray-500">/month</span>
				</div>
				<h2 class="text-xl font-medium">Workstation</h2>
				<div class="flex justify-center items-baseline my-8">
					<span class="mr-2 text-5xl font-extrabold">$49.99</span>
					<span class="text-gray-500">/month</span>
				</div>
				<a
					href="/"
					class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
				>
					Get started
				</a>
			</div>
			<!-- Pricing Card -->
			<div
				class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 xl:p-8 dark:text-white dark:bg-gray-800"
			>
				<h3 class="mb-4 text-2xl font-semibold">Premium</h3>
				<h2 class="text-xl font-medium">User</h2>
				<div class="flex justify-center items-baseline my-8">
					<span class="mr-2 text-5xl font-extrabold">$12.99</span>
					<span class="text-gray-500">/month</span>
				</div>
				<h2 class="text-xl font-medium">Workstation</h2>
				<div class="flex justify-center items-baseline my-8">
					<span class="mr-2 text-5xl font-extrabold">$15.99</span>
					<span class="text-gray-500">/month</span>
				</div>
				<a
					href="/"
					class="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
				>
					Get started
				</a>
			</div>
		</div>

		<!-- Comparison Table -->
		<ComparisonTable
			comparisonData={{
				'Core Offerings': [
					{
						feature: 'Fully ID aware across all your users and workloads',
						description:
							'ThreatMatic™ is firmly rooted in IAM infrastructure with air-tight policy enforcement across your entire fabric, always on.',
						standard: true,
						premium: true
					},
					{
						feature: 'Unlimited Policies',
						description: 'Admin can add on unlimited number of policies.',
						standard: true,
						premium: true
					},
					{
						feature: 'Run on Customer Provided Infrastructure',
						description:
							'No dependence on VPN; run solely on org network - thus providing better security.',
						standard: true,
						premium: true
					},
					{
						feature: "Customer Safe Downtime",
						description:
							'No dependence on VPN and based on agent based policing (agnostic of Threatmatic™ downtime)',
						standard: true,
						premium: true
					},
					{
						feature: 'Cybersecurity Mesh Architecture',
						description:
							'Trusted, on-demand enforcement across your organization to connect your teams to workloads',
						standard: true,
						premium: true
					},
					{
						feature: 'Cloud Ready ThreatMatic™',
						description: 'Policy control from any public or private cloud',
						standard: true,
						premium: true
					}
				],
				Network: [
					{
						feature: 'Zero Trust Mesh Architecture',
						description: 'Zero Edge Endpoint Architecture',
						standard: true,
						premium: true
					},
					{
						feature: 'Edge2Edge Policy',
						description:
							'User and workload ID enforced simultaneously at source & destination',
						standard: true,
						premium: true
					},
					{
						feature: 'DNS Lock',
						description: "Use your organization's DNS server along with any private",
						standard: true,
						premium: true
					},
					{
						feature: 'Port Scanner Protection',
						description:
							'Protection against systematic scanning against open ports from unverified sources',
						standard: true,
						premium: true
					},
					{
						feature: 'DNSSEC Enforcement',
						description:
							'Additional DNS checking to ensure that name records are not spoofed',
						standard: false,
						premium: true
					},
					{
						feature: 'Disable DoH (DNS over HTTP)',
						description: 'Bypass common browser DoH shortcuts',
						standard: true,
						premium: true
					},
					{
						feature: 'Flexible IPsec Traffic Steering with sChannel',
						description:
							'Easily connect your on-prem and cloud infra with secured IPSec, ondemand channels.',
						standard: false,
						premium: true
					},
					{
						feature: 'Metered Socket Actions (QoS)',
						description:
							'Monitor individual application performance at client and respond with actions.',
						standard: false,
						premium: true
					},
					{
						feature: 'Compliance Signals',
						description: 'Monitor compliance with corporate governance standards',
						standard: false,
						premium: true
					},
					{
						feature: 'TrustZero Cloud Proxy',
						description: 'Redirect web traffic through ThreatMatic Cloud',
						standard: false,
						premium: true
					},
					{
						feature: 'Advanced Analytics',
						description: 'Rich AI and ML powered analytics from the Cloud or On-prem',
						standard: false,
						premium: true
					},
					{
						feature: 'ThreatMatic API',
						description: 'Integrate your SoC or SIEM operations via APIs.',
						standard: false,
						premium: true
					},
					{
						feature: 'Mitre Attack Integrated',
						description: 'Realtime threat intelligence integrated',
						standard: false,
						premium: true
					}
				],
				'Admin Management': [
					{
						feature: 'Cloud-Based Management Platform',
						description: "Easily build and manage your organization network with our admin dashboard.",
						standard: true,
						premium: true
					},
					{
						feature: 'API Support',
						description: "Seamless manage networks, users, services through API's.",
						standard: true,
						premium: true
					}
				],
				Support: [
					{
						feature: 'Self Service Knowledge Base',
						description:
							'Intuitive documents to learn/understand and implement various steps.',
						standard: true,
						premium: true
					},
					{
						feature: 'Designated Account Manager',
						description: 'COMING SOON',
						standard: false,
						premium: true
					},
					{
						feature: 'Technical Specialist',
						description: 'COMING SOON',
						standard: false,
						premium: true
					},
					{
						feature: 'Phone Support',
						description: 'COMING SOON',
						standard: false,
						premium: true
					},
					{
						feature: 'Chat/Email Support',
						description: 'COMING SOON',
						standard: true,
						premium: true
					}
				]
			}}
		/>
	</div>
</section>
