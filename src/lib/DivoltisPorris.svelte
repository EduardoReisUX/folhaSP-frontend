<script lang="ts">
	export let image: string = '';
	export let title: string = '';
	export let subtitle: string = '';

	import divoltisDesktop1 from '$lib/assets/desktop/divoltis-porris-01.png';
	import divoltisDesktop2 from '$lib/assets/desktop/divoltis-porris-02.png';
	import divoltisDesktop3 from '$lib/assets/desktop/divoltis-porris-03.png';
	import divoltisDesktop4 from '$lib/assets/desktop/divoltis-porris-04.png';

	const imagesDesktop = {
		'divoltis-porris-01.png': divoltisDesktop1,
		'divoltis-porris-02.png': divoltisDesktop2,
		'divoltis-porris-03.png': divoltisDesktop3,
		'divoltis-porris-04.png': divoltisDesktop4
	};
</script>

<div class={`flex flex-col gap-2 pb-4 border-b border-gray-200`}>
	<img src={imagesDesktop[image]} alt={image} class="w-full bg-brand-black h-44 object-cover" />
	<p class="text-brand-blue uppercase">{title}</p>
	<p class="">{subtitle}</p>
</div>
