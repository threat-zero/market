<script lang="ts">
	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	// import { Icon } from 'flowbite-svelte-icons';
	import { NavBrand, NavHamburger, NavLi, NavUl, Navbar } from 'flowbite-svelte';

	// const appVersion = __APP_VERSION__;
	// const gitTag = __GIT_TAG__;
	// const gitDate = __GIT_DATE__;

	$: activeUrl = $page.url.pathname;

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
	$: console.log(activeUrl);
</script>

<Navbar class="bg-zinc-900">
	<NavBrand href="/">
		<div class="text-normal flex self-center whitespace-nowrap font-bold md:text-2xl">
			<span class="text-violet-400">Threat</span>
			<span class="text-zinc-50">Matic™</span>
		</div>
	</NavBrand>
	<div class="flex gap-2 md:gap-4">
		<ul class="hidden items-center gap-4 rounded-lg p-2 font-medium md:flex md:flex-row">
			<li>
				<a href="#" class="p-0 text-white" aria-current="page"> Home </a>
			</li>
			<li>
				<a href="#" class="p-0 text-white"> Product </a>
			</li>
			<li>
				<a href="#" class="p-0 text-white"> sChannel™ </a>
			</li>
			<li>
				<a href="#" class="p-0 text-white"> Pricing </a>
			</li>
			<li>
				<a href="#" class="p-0 text-white"> Blog </a>
			</li>
		</ul>
		<button
			type="button"
			class="inline-flex flex-none items-center justify-center rounded-lg bg-purple-300 px-[15px] py-2.5 text-center text-xs font-medium text-violet-950 focus-within:outline-none focus-within:ring-4 focus-within:ring-purple-300 hover:bg-purple-800"
		>
			Get a Demo
		</button>
		<NavHamburger class="ml-0 ms-0 p-2" />
	</div>
	<NavUl
		{activeUrl}
		ulClass="flex flex-col p-4 mt-4 bg-gray-800 border-none"
		divClass="w-full md:hidden"
		activeClass="text-violet-900 bg-purple-300"
		nonActiveClass="text-white hover:bg-gray-100"
	>
		<NavLi href="/v2">Home</NavLi>
		<NavLi href="/product">Product</NavLi>
		<NavLi href="/schannel">sChannel™</NavLi>
		<NavLi href="/pricing">Pricing</NavLi>
		<NavLi
			href="https://medium.com/@threatmatic"
			target="_blank"
			rel="external noopener noreferrer"
		>
			Blog
		</NavLi>
	</NavUl>
</Navbar>
<slot />
