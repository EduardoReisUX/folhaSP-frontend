<script lang="ts">
	export let image: string = '';
	export let tag: string = '';

	import topCacildisDesktop1 from '$lib/assets/desktop/highlight-01.png';
	import topCacildisDesktop2 from '$lib/assets/desktop/highlight-02.png';
	import topCacildisDesktop3 from '$lib/assets/desktop/highlight-03.png';

	const Images = {
		'highlight-01.png': topCacildisDesktop1,
		'highlight-02.png': topCacildisDesktop2,
		'highlight-03.png': topCacildisDesktop3
	};
</script>

<article class="sm:flex-1">
	<a
		href="/"
		class={`relative flex flex-col justify-end w-full h-48 py-4 border-b-4 border-transparent hover:border-brand-red`}
	>
		<img src={Images[image]} alt={tag} class="absolute inset-0 h-full w-full object-cover" />
		<div class="relative w-max py-1 pr-5 pl-1 uppercase bg-brand-red text-brand-white">
			{tag}
		</div>
	</a>
</article>
