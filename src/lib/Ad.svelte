<script lang="ts">
    export let innerWidth: number;
</script>

<div class="flex flex-col items-center justify-center w-40 mx-auto md:w-full md:h-full md:mb-8">
    <small class="text-xs text-brand-black opacity-60 self-end">Publicidade</small>
    
    {#if innerWidth > 768}
        <img src="/static/desktop/ads-300x600.png" alt="Anúncio" class="w-full h-full "/>
        {:else}
        <img src="/static/mobile/ads-300x250.png" alt="Anúncio" class="aspect-square w-40 object-cover bg-brand-black" />
    {/if}
</div>