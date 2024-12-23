<script>
    export let data; 

    let url = data.imgUrl;


    
</script>
{#if url}
<div class=''><h1>Welcome to This project where I try to learn how to build a SPA with SvelteKit</h1>
    <img src={url} alt="Random photograph" class="my-4 h-[calc(100vh-14vh)] w-screen  overflow-hidden" /></div>
{:else}
    <p>No image found!</p>
{/if}


