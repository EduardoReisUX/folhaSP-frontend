<script lang="ts">
    export let img: string = "", tag: string = "";
</script>

<article>
    <div id="image" class="w-full bg-brand-black h-48 py-4">
        <div id="tag" class={`bg-[url('static/images/${img})] bg-brand-red`}>{tag}</div>
    </div>
</article>