<script lang="ts">
	export let title: string;
	export let articles: {
		title: string;
		description: string;
		image: string;
	}[];

	import sePirulitaDesktop1 from '$lib/assets/desktop/se_pirulita-01.png';
	import sePirulitaDesktop2 from '$lib/assets/desktop/se_pirulita-02.png';
	import sePirulitaDesktop3 from '$lib/assets/desktop/suco_de_cevadiss-01.png';
	import sePirulitaDesktop4 from '$lib/assets/desktop/suco_de_cevadiss-02.png';

	const imagesDesktop = {
		'se_pirulita-01.png': sePirulitaDesktop1,
		'se_pirulita-02.png': sePirulitaDesktop2,
		'suco_de_cevadiss-01.png': sePirulitaDesktop3,
		'suco_de_cevadiss-02.png': sePirulitaDesktop4
	};
</script>

<p class="text-brand-red text-lg">{title}</p>

<div class={`grid grid-cols-2 gap-4`}>
	{#each articles as { title, description, image }}
		<img src={imagesDesktop[image]} alt={title} class="aspect-square bg-brand-black" />

		<div class="flex flex-col gap-2">
			<small class="uppercase text-brand-red">{title}</small>
			<small class="capitalize">{description}</small>
		</div>
	{/each}
</div>
