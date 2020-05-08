<script>
    export let block
</script>

{#if block.properties}
    {#each block.properties.title as items}
        {#if items.length > 1}
            <p>{JSON.stringify(items)}</p>
        {:else}
            <p>{items[0]}</p>
        {/if}
    {/each}
{:else}
    <br />
{/if}
