<script lang="ts">
    export let innerWidth: number;

    import carousel from "$lib/assets/desktop/image_rotate.png"
</script>

{#if innerWidth > 768}
    <div class="relative flex flex-col gap-4 justify-end px-4 pb-4 w-full h-80">
        <img src={carousel} alt={"Carrossel"} class="absolute inset-0 h-full w-full object-cover brightness-75">
        <div class="relative w-max py-1 pr-5 pl-1 md:px-5 font-bold uppercase bg-brand-blue text-brand-white">
            MUSSUM IPSUM CACILDS
        </div>
        <div class="relative">
            <p class="font-bold text-xl text-brand-white">Pra lá, depois divoltis porris, paradis.</p>
            <p class="font-bold text-xl text-brand-white">Paisis, filhis, espiritis santis</p>
        </div>
    </div>
{:else}
    <div class="relative flex flex-col gap-4 justify-end pb-4 w-full h-80">
        <img src={carousel} alt={"Carrossel"} class="absolute inset-0 h-full w-full object-cover brightness-75">
        <div class="relative w-max py-1 pr-5 pl-1 md:px-5 font-bold uppercase bg-brand-blue text-brand-white">
            MUSSUM IPSUM CACILDS
        </div>
    </div>

    <p class="font-bold text-xl">Pra lá, depois divoltis porris, paradis.</p>
{/if}

<div class="flex gap-4 mx-auto">
    <button class="w-2 h-2 rounded-full bg-brand-blue"></button>
    <button class="w-2 h-2 rounded-full bg-brand-black opacity-60"></button>
    <button class="w-2 h-2 rounded-full bg-brand-black opacity-60"></button>
</div>
