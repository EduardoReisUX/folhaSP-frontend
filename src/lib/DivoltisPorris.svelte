<script lang="ts">
    export let image: string = "", title: string = "", subtitle: string = "";
</script>

<div class={`flex flex-col gap-2 pb-4 border-b border-gray-200`}>
    <img src={`static/images/${image}`} alt="" class="w-full bg-brand-black h-44">
    <p id="title" class="text-brand-blue uppercase">{title}</p>
    <p id="subtitle">{subtitle}</p>
</div>