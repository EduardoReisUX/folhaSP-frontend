<script>
  import MdMenu from 'svelte-icons/md/MdMenu.svelte'
  import FaFacebookF from 'svelte-icons/fa/FaFacebookF.svelte'
  import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte'
</script>

<nav class="w-full sticky top-0 bg-brand-blue bg-[url('/static/mobile/logo.png')] bg-no-repeat bg-center sm:bg-[position:15%] md:bg-[position:25%]">
  <section class="grid grid-cols-4 items-center max-w-screen-lg p-4 m-auto">
    <div class="w-8 h-8 text-brand-black">
      <MdMenu />
    </div>
    <p class="hidden sm:block col-span-2 justify-self-end text-brand-white">O site de teste para <strong>novos webs</strong></p>
    
    <div class="hidden sm:flex gap-4 justify-self-end">
      <button class="flex items-center justify-center gap-2 py-2 px-4 sm:p-2 border rounded-md bg-slate-50">
        <div class="w-4 h-4 text-brand-blueDarker">
          <FaFacebookF />
        </div>
        <small class="hidden md:block text-xs">CURTIR</small>
      </button>
      <button class="flex items-center justify-center gap-2 py-2 px-4 sm:p-2 border rounded-md bg-slate-50">
        <div class="w-4 h-4 text-brand-blue">
          <FaTwitter /> 
        </div>
        <small class="hidden md:block text-xs text-brand-blue">SEGUIR</small>
      </button>
    </div>
  </section>
</nav>