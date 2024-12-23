<script>
    export let data; 

    let url = data.imgUrl;


    
</script>
{#if url}
    <img src={url} alt="Random photograph" class="my-4 h-[calc(100vh-2vh)] w-screen" />
{:else}
    <p>No image found!</p>
{/if}

