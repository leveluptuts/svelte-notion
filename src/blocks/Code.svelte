<script>
    export let code
    export let lang

    import marked from 'marked'
    import hljs from 'highlight.js'

    const { value: highlighted } = hljs.highlight(lang, code)
    $: code = `<pre class='language-javascriptreact'><code>${highlighted}</code></pre>`
</script>

{@html code}
