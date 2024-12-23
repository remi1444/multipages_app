<script>
    export let data; 

    let url = data.imgUrl;

    console.log(url);
    
</script>
<h2>{url}</h2>
{#if url}
    <img src={url} alt="Random photograph" class="my-4" />
{:else}
    <p>No image found!</p>
{/if}

