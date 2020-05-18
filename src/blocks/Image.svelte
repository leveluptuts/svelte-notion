<script>
    export let block
</script>

{#if block.properties.caption && block.properties.caption[0][0]}
    <div class="notion-image with-caption">
        <img src={block.properties.source[0][0]} alt={block.properties.caption[0][0]}/>
        <span>{block.properties.caption[0][0]}</span>
    </div>
{:else}
    <div class="notion-image no-caption">
        <img src={block.properties.source[0][0]} alt='no caption'/>
    </div>
{/if}