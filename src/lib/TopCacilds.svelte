<script lang="ts">
    export let image: string, tag: string;
</script>

<article>
    <div class={`bg-brand-black bg-[url('/static/mobile/${image}')] bg-cover bg-center bg-no-repeat w-full h-48 py-4`}>
        <div class="bg-brand-red">{tag}</div>
    </div>
</article>