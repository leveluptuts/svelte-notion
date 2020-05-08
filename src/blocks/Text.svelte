<script>
    export let block
</script>

{#if block.properties}
    <p>
        {#each block.properties.title as items}
            {#if items.length > 1}
                <a href={items[1][0][1]} target="_blank" rel="noopener">
                    {items[0]}
                </a>
            {:else}{items[0]}{/if}
        {/each}
    </p>
{:else}
    <br />
{/if}
