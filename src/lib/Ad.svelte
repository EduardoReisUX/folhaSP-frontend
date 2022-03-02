<script lang="ts">
	export let innerWidth: number;

	import adMobile from '$lib/assets/mobile/ads-300x250.png';
	import adDesktop from '$lib/assets/desktop/ads-300x600.png';
</script>

<div class="flex flex-col items-center justify-center w-40 mx-auto md:w-full md:h-full md:mb-8">
	<small class="text-xs text-brand-black opacity-60 self-end">Publicidade</small>

	<a href="/">
		{#if innerWidth > 768}
			<img src={adDesktop} alt="Anúncio" class="w-[full] h-full object-cover" />
		{:else}
			<img src={adMobile} alt="Anúncio" class="aspect-square w-40 object-cover" />
		{/if}
	</a>
</div>
