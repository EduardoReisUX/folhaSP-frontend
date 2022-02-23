<script lang="ts">
    import MdArrowUpward from 'svelte-icons/md/MdArrowUpward.svelte'
</script>

<footer class="text-brand-white">
    <div class="flex items-center justify-end text-sm bg-brand-blue">
            <button class="flex gap-2 items-center px-4 py-2 ">
                VOLTAR AO TOPO
                <div class="h-6 w-6">
                    <MdArrowUpward />
                </div>
            </button> 
    </div>
    <div class="bg-brand-blueDarker px-4 py-4">
            <p class="text-xs">Copyright Folha de S. Paulo. Todos os direitos reservados.
                É proibida a reprodução do conteúdo desta página em qualquer 
                meio de comunicação, eletrônico ou impresso, sem autorização 
                escrita da Folhapress 
                (<a class="underline" href="/">pesquisa@folhapress.com.br</a>).
            </p>
    </div>
</footer>