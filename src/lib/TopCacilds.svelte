<script lang="ts">
    export let image: string, tag: string;
</script>

<article>
    <div class={`flex flex-col justify-end pb-4 bg-brand-black bg-[url('/static/mobile/${image}')] bg-cover bg-center bg-no-repeat w-full h-48 py-4`}>
        <div class="w-max py-1 pr-5 pl-1 uppercase bg-brand-red text-brand-white">{tag}</div>
    </div>
</article>