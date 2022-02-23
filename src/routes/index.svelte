<script lang="ts">
    import Ad from "$lib/Ad.svelte";
    import Carousel from "$lib/Carousel.svelte";
    import DivoltisPorris from "$lib/DivoltisPorris.svelte";

    import PaisisFilhis from "$lib/PaisisFilhis.svelte";
    import SePirulita from "$lib/SePirulita.svelte";
    import TopCacilds from "$lib/TopCacilds.svelte";
    
    import type { divoltisType, paisisFilhisType, sePirulitaType, topCacildisType } from ".";

    export let topCacildis: topCacildisType, 
    divoltis: divoltisType, 
    paisisFilhis: paisisFilhisType, 
    sePirulita: sePirulitaType

    let innerWidth = 0;
</script>

<svelte:window bind:innerWidth />

<main class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-screen-lg mx-auto px-4 my-8">
    <section class="flex flex-col gap-4 col-span-full">
        <Carousel innerWidth={innerWidth}/>
    </section>
    
    <section class="flex flex-col gap-4 col-span-full">
        <p class="hidden md:block font-bold text-lg">top cacildis</p>
        <div class="flex flex-col sm:flex-row gap-4 md:gap-10">
        {#each topCacildis as { tag, image }}
            <TopCacilds tag={tag} image={image}/>
        {/each}
        </div>
    </section>

    <section class="flex flex-col gap-4 sm:col-span-2">
        <p class="font-bold text-lg">divoltis porris</p>
        <div class="flex flex-col gap-4 md:gap-10 sm:grid sm:grid-cols-2 sm:gap-8">
            {#each divoltis as { title, subtitle, image }}
                <DivoltisPorris title={title} subtitle={subtitle} image={image} />
            {/each}
        </div>
    </section>

    <section class="flex flex-col gap-4">
        <p class="text-brand-blue text-lg">paisis, filhis, espiritis santis</p>
        <div class="flex flex-col gap-4">
            {#each paisisFilhis as title}
                <PaisisFilhis title={title}/>
            {/each}
        </div>
    </section>

    {#each sePirulita as {title, articles}}
        <div class="flex flex-col gap-4">
            <SePirulita title={title} articles={articles} />
        </div>
    {/each}

    <section class="my-[4.5rem] md:my-7 md:col-start-3 md:row-start-3">
        <Ad innerWidth={innerWidth}/>
    </section>
</main>

<style global>
    body {
        min-height: 100vh;
        background-color: rgb(243, 244, 246);
        font-family: Arial, Helvetica, sans-serif;
    }
</style>