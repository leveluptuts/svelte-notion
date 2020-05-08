<script>
    import Code from './Code.svelte'
    export let blocks
</script>

{#each blocks as block}
    {#if block.type === 'header'}
        <h1>{block.properties.title[0][0]}</h1>
    {:else if block.type === 'page'}
        <h2>{block.properties.title[0][0]}</h2>
    {:else if block.type === 'sub_header'}
        <h2>{block.properties.title[0][0]}</h2>
    {:else if block.type === 'sub_sub_header'}
        <h3>{block.properties.title[0][0]}</h3>
    {:else if block.type === 'text'}
        {#if block.properties}
            <p>{block.properties.title[0][0]}</p>
        {:else}
            <br />
        {/if}
    {:else if block.type === 'divider'}
        <hr />
    {:else if block.type === 'code'}
        <Code
            code={block.properties.title[0][0]}
            lang={block.properties.language[0][0]} />
    {/if}
{/each}
