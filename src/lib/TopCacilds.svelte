<script lang="ts">
    export let image: string = "", tag: string = "";

    import topCacildisDesktop1 from '$lib/assets/desktop/highlight-01.png'
    import topCacildisDesktop2 from '$lib/assets/desktop/highlight-02.png'
    import topCacildisDesktop3 from '$lib/assets/desktop/highlight-03.png'

    const Images = {
        "highlight-01.png": topCacildisDesktop1,
        "highlight-02.png": topCacildisDesktop2,
        "highlight-03.png": topCacildisDesktop3,
    }
    
</script>

<article class="sm:flex-1">
    <div class={`relative flex flex-col justify-end pb-4 bg-brand-black w-full h-48 py-4`}>
        <img src={Images[image]} alt={tag} class="absolute inset-0 h-full w-full object-cover">
        <div class="relative w-max py-1 pr-5 pl-1 uppercase bg-brand-red text-brand-white">
            {tag}
        </div>
    </div>
</article>