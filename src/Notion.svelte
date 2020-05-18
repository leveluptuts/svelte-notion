<script>
    import Code from './blocks/Code.svelte'
    import Text from './blocks/Text.svelte'
    import Image from './blocks/Image.svelte'
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
        <Text {block} />
    {:else if block.type === 'divider'}
        <hr />
    {:else if block.type === 'quote'}
        <blockquote className="notion-quote">
            {block.properties.title[0][0]}
        </blockquote>
    {:else if block.type === 'code'}
        <Code
            code={block.properties.title[0][0]}
            lang={block.properties.language[0][0]} />
    {:else if block.type === 'image'}
        <Image {block}/>
    {/if}
{/each}
