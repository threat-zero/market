<script lang="ts">
	import { Icon } from 'flowbite-svelte-icons';

	export let comparisonData: {
		[category: string]: {
			feature: string;
			description: string;
			standard: boolean;
			premium: boolean;
		}[];
	};
</script>

{#if comparisonData}
	<div id="detailed-pricing" class="overflow-x-auto mt-8 w-full">
		<div class="overflow-hidden max-w-max">
			{#each Object.keys(comparisonData) as category}
				<div
					class="grid grid-cols-3 gap-x-4 justify-items-center items-center p-4 text-sm font-medium text-gray-900 bg-gray-100 border-t border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
				>
					<div class="flex items-center">{category}</div>
					<div class="max-w-max">Standard</div>
					<div class="max-w-max">Premium</div>
				</div>
				{#each comparisonData[category] as { feature, description, standard, premium }, i}
					<div
						class="grid grid-cols-3 justify-items-center items-center gap-x-4 py-5 px-5 text-sm text-gray-700 border-b border-gray-200 dark:border-gray-700"
					>
						<div class="flex">
							<span class="text-gray-500 dark:text-gray-400">
								{feature}
							</span>
							<Icon
								name="info-circle-solid"
								data-tooltip-target={`${category.replaceAll(' ', '')}${i}`}
								class="ml-2 text-primary-500 dark:text-primary-600"
							/>
							<div
								id={`${category.replaceAll(' ', '')}${i}`}
								role="tooltip"
								class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
							>
								{description}
								<div class="tooltip-arrow" data-popper-arrow />
							</div>
						</div>
						<div class="max-w-max">
							{#if standard}
								<Icon name="check-solid" class="text-green-500" />
							{:else}
								<Icon name="close-solid" class="text-red-500" />
							{/if}
						</div>
						<div class="max-w-max">
							{#if premium}
								<Icon name="check-solid" class="text-green-500" />
							{:else}
								<Icon name="close-solid" class="text-red-500" />
							{/if}
						</div>
					</div>
				{/each}
			{/each}
		</div>
	</div>
{/if}
