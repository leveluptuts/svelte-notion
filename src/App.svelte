<script context="module">
    import Notion from './Notion.svelte'
    import { fetchNotion } from './fetchNotion'

    const fetchImage = (async () => {
        const pageId = `3e03212e646e41caaa560408162dee99`
        return await fetchNotion({ id: pageId, context: this })
    })()
</script>

<style>
    h1:after {
        content: '';
        position: absolute;
        height: 120%;
        width: 240%;
        background: white;
        left: 0;
        z-index: -1;
        transform: skew(7deg, -2deg);
    }
    h1 {
        position: relative;
        color: black;
        width: auto;
        display: inline-block;
        margin-bottom: 6rem;
    }
    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    li {
        margin-bottom: 3rem;
    }

    a {
        font-size: 2rem;
    }
    :global(hr) {
        background: white;
    }
</style>

<svelte:head>
    <title>Blog</title>
</svelte:head>

{#await fetchImage}
    <p>...waiting</p>
{:then blocks}
    <Notion {blocks} />
{:catch error}
    <p>An error occurred!</p>
{/await}
