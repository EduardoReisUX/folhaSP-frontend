<script lang="ts">
    export let title: string, 
    articles: {
        title: string;
        description: string;
        image: string;
    }[];
</script>

<p class="text-red-600">{title}</p>
<div class={`grid grid-cols-2 gap-4`}>
    {#each articles as { title, description, image }}
        <img src={`static/images/${image}`} alt="" class="aspect-square bg-gray-200">
        <div class="flex flex-col gap-2">
            <small class="uppercase text-red-400">{title}</small>
            <small class="capitalize">{description}</small>
        </div>
    {/each}
</div>