<script lang="ts">
	import Ad from '$lib/Ad.svelte';
	import Carousel from '$lib/Carousel.svelte';
	import DivoltisPorris from '$lib/DivoltisPorris.svelte';
	import PaisisFilhis from '$lib/PaisisFilhis.svelte';
	import SePirulita from '$lib/SePirulita.svelte';
	import TopCacilds from '$lib/TopCacilds.svelte';
	import { onMount } from 'svelte';

	import { fly } from 'svelte/transition';

	import type { divoltisType, paisisFilhisType, sePirulitaType, topCacildisType } from '.';

	export let topCacildis: topCacildisType;
	export let divoltis: divoltisType;
	export let paisisFilhis: paisisFilhisType;
	export let sePirulita: sePirulitaType;

	let innerWidth = 0;

	let pageLoaded = false;
	onMount(() => (pageLoaded = true));
</script>

<svelte:window bind:innerWidth />

<main
	class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-screen-lg mx-auto px-4 my-8"
>
	{#if pageLoaded}
		<section class="flex flex-col gap-4 col-span-full" transition:fly={{ y: -4, duration: 300 }}>
			<Carousel {innerWidth} />
		</section>

		<section
			class="flex flex-col gap-4 col-span-full"
			transition:fly={{ y: -4, duration: 300, delay: 200 }}
		>
			<p class="hidden md:block font-bold text-lg">top cacildis</p>
			<div class="flex flex-col sm:flex-row gap-4 md:gap-10">
				{#each topCacildis as props}
					<TopCacilds {...props} />
				{/each}
			</div>
		</section>

		<section
			class="flex flex-col gap-4 sm:col-span-2"
			transition:fly={{ y: -4, duration: 300, delay: 200 * 2 }}
		>
			<p class="font-bold text-lg">divoltis porris</p>
			<div class="flex flex-col gap-4 md:gap-10 sm:grid sm:grid-cols-2 sm:gap-8">
				{#each divoltis as props}
					<DivoltisPorris {...props} />
				{/each}
			</div>
		</section>

		<section class="flex flex-col gap-4" transition:fly={{ y: -4, duration: 300, delay: 200 * 3 }}>
			<p class="text-brand-blue text-lg">paisis, filhis, espiritis santis</p>
			<div class="flex flex-col gap-4">
				{#each paisisFilhis as title}
					<PaisisFilhis {title} />
				{/each}
			</div>
		</section>

		{#each sePirulita as props}
			<div class="flex flex-col gap-4" transition:fly={{ y: -4, duration: 300, delay: 200 * 4 }}>
				<SePirulita {...props} />
			</div>
		{/each}

		<section class="my-[4.5rem] md:my-7 md:col-start-3 md:row-start-3">
			<Ad {innerWidth} />
		</section>
	{/if}
</main>

<style global>
	body {
		background-color: rgb(243, 244, 246);
		font-family: Arial, Helvetica, sans-serif;
	}

	body > div {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
