<script>
  import MdMenu from 'svelte-icons/md/MdMenu.svelte'
</script>

<nav class="w-full bg-brand-blueDarker bg-[url('/static/mobile/logo.png')] bg-no-repeat bg-center">
  <section class="grid grid-cols-4 items-center max-w-screen-lg p-4 m-auto">
	<div class="w-8 h-8 text-brand-black"><MdMenu /></div>
	<p class="hidden sm:block col-span-2">O site de teste para <strong>novos webs</strong></p>
	<div class="hidden sm:flex gap-2">
    <button class="flex items-center justify-center gap-2 py-2 px-4 border rounded-md bg-slate-50"><smal>img</smal> <small class="hidden md:block">CURTIR</small></button>
    <button class="flex items-center justify-center gap-2 py-2 px-4 border rounded-md bg-slate-50"><smal>img</smal> <small class="hidden md:block text-brand-blue">SEGUIR</small></button>
  </div>
  </section>
</nav>