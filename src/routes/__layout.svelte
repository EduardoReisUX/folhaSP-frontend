<script lang="ts">
  import Header from "$lib/layout/Header.svelte";
  import Footer from "$lib/layout/Footer.svelte";
  import "../app.css";
</script>

<Header />
<slot />
<Footer />