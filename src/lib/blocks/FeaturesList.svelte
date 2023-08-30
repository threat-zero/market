<script lang="ts">
	import { Icon } from 'flowbite-svelte-icons';

	export let featureData: {
		[category: string]: {
			name: string;
			description: string;
			flowbiteIconName: string;
		}[];
	};
</script>

{#if featureData}
	{#each Object.keys(featureData) as category, i}
		<section class={i % 2 == 0 ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900'}>
			<div
				class="items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid xl:grid-cols-3 lg:gap-8 xl:gap-24 sm:py-16 lg:px-6"
			>
				<div class="mb-8 lg:mb-0">
					<h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
						{category}
					</h2>
				</div>
				<div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
					{#each featureData[category] as { name, description, flowbiteIconName }}
						<div>
							<div
								class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900"
							>
								<Icon name={flowbiteIconName} class="text-primary-600 dark:text-primary-300" />
							</div>
							<h3 class="mb-2 text-xl font-bold dark:text-white">{name}</h3>
							<p class="text-gray-500 dark:text-gray-400">
								{description}
							</p>
						</div>
					{/each}
				</div>
			</div>
		</section>
	{/each}
{/if}
