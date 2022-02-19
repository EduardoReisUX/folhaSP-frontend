<script lang="ts">
    export let title: string, 
    articles: {
        title: string;
        description: string;
        image: string;
    }[];
</script>

<p class="text-brand-red">{title}</p>

<div class={`grid grid-cols-2 gap-4`}>
    {#each articles as { title, description, image }}
        <img src={`static/mobile/${image}`} alt={title} class="aspect-square bg-brand-black">
        <div class="flex flex-col gap-2">
            <small class="uppercase text-brand-red">{title}</small>
            <small class="capitalize">{description}</small>
        </div>
    {/each}
</div>