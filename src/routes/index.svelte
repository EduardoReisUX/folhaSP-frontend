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
</script>

<main class="flex flex-col gap-10 max-w-screen-lg mx-auto px-4 my-8">
    <Carousel />

    <section class="flex flex-col gap-4">
        {#each topCacildis as tag}
            <TopCacilds tag={tag}/>
        {/each}
    </section>

    <section class="flex flex-col gap-4">
        <p>divoltis porris</p>
        <div class="flex flex-col gap-4">
            {#each divoltis as {title, subtitle, image}}
                <DivoltisPorris title={title} subtitle={subtitle} image={image} />
            {/each}
        </div>
    </section>

    <section class="flex flex-col gap-4">
        <p class="text-brand-blue">paisis, filhis, espiritis santis</p>
        <div class="flex flex-col gap-4">
            {#each paisisFilhis as title}
                <PaisisFilhis title={title}/>
            {/each}
        </div>
    </section>

    <section class="flex flex-col gap-4">
            {#each sePirulita as {title, articles}}
                <SePirulita title={title} articles={articles}/>
            {/each}
    </section>

    <section class="my-[4.5rem]">
        <Ad />
    </section>
</main>

<style global>
    body {
        min-height: 100vh;
        background-color: rgb(243, 244, 246);
        font-family: Arial, Helvetica, sans-serif
    }
</style>