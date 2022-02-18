<script lang="ts">
    export let img: string = "", tag: string = "";
</script>

<article>
    <div id="image" class="w-full bg-gray-200 h-48 py-4">
        <div id="tag" class={`bg-[url('static/images/${img})] bg-blue-300`}>{tag}</div>
    </div>
</article>