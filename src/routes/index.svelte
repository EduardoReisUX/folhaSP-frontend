<script lang="ts">
    import Ad from "$lib/Ad.svelte";
    import Carousel from "$lib/Carousel.svelte";
    import DivoltisPorris from "$lib/DivoltisPorris.svelte";
    import PaisisFilhis from "$lib/PaisisFilhis.svelte";
    import SePirulita from "$lib/SePirulita.svelte";
    import TopCacilds from "$lib/TopCacilds.svelte";

    let topCacildis = [
        "pindureta", 
        "bolis",
        "sapiens"
    ]

    let divoltis = [
        {
            title: "consetis",
            subtitle: "Manduma pindureta quium dia nois paga. Sapien in monti palavris",
            image: "",
        },
        {
            title: "aenan",
            subtitle: "Pellentesque laoreet mé vel lectus scelerique",
            image: "",
        },
        {
            title: "matis",
            subtitle: "Etiam ac mauris lectus, non scelerisque augue. Aenean justo massa.",
            image: "",
        },
        {
            title: "divinis",
            subtitle: "Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis",
            image: "",
        },
    ]

    let paisisFilhis = [
        "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscing elitis",
        "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscing elitis",
        "Mussum ipsum cacilds, vidis litro abertis.",
        "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscing elitis",
        "Mussum ipsum cacilds, vidis litro abertis.",
    ]

    let sePirulita = [
        {
            title: "se pirulitá",
            articles: [
                {
                    title: "nam liber",
                    description: "casamentiss faiz malandris se pirulitá",
                    image: "a"
                },
                {
                    title: "gostis",
                    description: "aenean ut ante turpis. pellentesque laoreet mé",
                    image: "a"
                },
            ]
        },
        {
            title: "suco de cavadiss",
            articles: [
                {
                    title: "interagi",
                    description: "é um leite divinis qui tem lupuliz, matis, aguis e fermentis",
                    image: "a"
                },
                {
                    title: "gostis",
                    description: "aenean ut ante turpis. pellentesque laoreet mé",
                    image: "a"
                },
            ]
        },
    ]
</script>

<main class="flex flex-col gap-10 max-w-screen-lg mx-auto px-4 my-8">
    <Carousel />

    <section class="flex flex-col gap-4">
        {#each topCacildis as tag}
            <TopCacilds tag={tag}/>
        {/each}
    </section>

    <section class="flex flex-col gap-4">
        <p>divoltis porris</p>
        <div class="flex flex-col gap-4">
            {#each divoltis as {title, subtitle, image}}
                <DivoltisPorris title={title} subtitle={subtitle} image={image} />
            {/each}
        </div>
    </section>

    <section class="flex flex-col gap-4">
        <p class="text-blue-400">paisis, filhis, espiritis santis</p>
        <div class="flex flex-col gap-4">
            {#each paisisFilhis as title}
                <PaisisFilhis title={title}/>
            {/each}
        </div>
    </section>

    <section class="flex flex-col gap-4">
            {#each sePirulita as {title, articles}}
                <SePirulita title={title} articles={articles}/>
            {/each}
    </section>

    <section class="my-[4.5rem]">
        <Ad />
    </section>
</main>

<style global>
    body {
        min-height: 100vh;
        background-color: rgb(243, 244, 246);
    }
</style>