<script lang="ts">
    export let innerWidth: number;
</script>

{#if innerWidth > 768}
    <div class="flex flex-col gap-4 justify-end px-4 pb-4 bg-brand-black bg-[url('/static/mobile/image_rotate.png')] bg-cover bg-center bg-no-repeat w-full h-80">
        <div class="w-max py-1 pr-5 pl-1 md:px-5 font-bold uppercase bg-brand-blue text-brand-white">MUSSUM IPSUM CACILDS</div>
        <p class="font-bold text-xl text-brand-white">Pra lá, depois divoltis porris, paradis.</p>
    </div>

<div id="three-dots" class=""></div>
{:else}
    <div class="flex flex-col justify-end pb-4 bg-brand-black bg-[url('/static/mobile/image_rotate.png')] bg-cover bg-center bg-no-repeat w-full h-80">
        <div class="w-max py-1 pr-5 pl-1 font-bold uppercase bg-brand-blue text-brand-white">MUSSUM IPSUM CACILDS</div>
    </div>

    <p class="font-bold text-xl">Pra lá, depois divoltis porris, paradis.</p>
    <div id="three-dots" class=""></div>
{/if}
