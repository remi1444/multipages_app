<script>
        // import { Menu } from "lucide-svelte";
        import { page } from "$app/stores";

        $: path = $page.url.pathname;

        let isOpen = false;
</script>

<nav
        class='bg-emerald-500 text-white list-none  py-4 shadow-md fixed top-0 h-screen w-screen flex-col items-end justify-around pr-8 md:justify-evenly md:static md:h-[60px] md:flex-row md:items-center hidden md:flex'
>
        <button
                class="flex md:hidden flex-col justify-center items-center space-y-1 w-8 h-8 focus:outline-none"
                on:click={() => (isOpen = !isOpen)}
                aria-label="Toggle Menu"
        >
                <span
                        class="block w-6 h-0.5 bg-white transition-transform duration-300"
                        class:translate-y-1.5={isOpen}
                        class:rotate-45={isOpen}
                ></span>
                <span
                        class="block w-6 h-0.5 bg-white transition-opacity duration-300"
                        class:opacity-0={isOpen}
                ></span>
                <span
                        class="block w-6 h-0.5 bg-white transition-transform duration-300"
                        class:-translate-y-1.5={isOpen}
                        class:-rotate-45={isOpen}
                ></span>
        </button>

        <li class="${path === '/' && 'font-extrabold text-xl font-mono '}"><a href="/">Home</a></li>
        <li>
                <a href="/about" class="${path === '/about' && 'font-extrabold text-xl font-mono '}"
                        >About</a
                >
        </li>
        <li>
                <a
                        href="/api-query"
                        class="${path === '/api-query' && 'font-extrabold text-xl font-mono '}"
                        >Random Quote</a
                >
        </li>
        <li>
                <a
                        href="/random-picture"
                        class="${path === '/random-picture' && 'font-extrabold text-xl font-mono '}"
                        >Random Picture</a
                >
        </li>
</nav>

<div class="
flex md:hidden bg-emerald-500 w-screen z-50 py-4 justify-end
">
 <button
                class=" mr-6 flex-col justify-center items-center space-y-1 w-8 h-8 focus:outline-none"
                on:click={() => (isOpen = !isOpen)}
                aria-label="Toggle Menu"
        >
                <span
                        class="block w-6 h-0.5 bg-white transition-transform duration-300"
                        class:translate-y-1.5={isOpen}
                        class:rotate-45={isOpen}
                ></span>
                <span
                        class="block w-6 h-0.5 bg-white transition-opacity duration-300"
                        class:opacity-0={isOpen}
                ></span>
                <span
                        class="block w-6 h-0.5 bg-white transition-transform duration-300"
                        class:-translate-y-1.5={isOpen}
                        class:-rotate-45={isOpen}
                ></span>
        </button>
</div>


 {#if isOpen}
  <nav
    class="bg-emerald-500 text-white list-none py-4 shadow-md fixed top-14 h-screen w-screen flex-col items-end justify-around pr-8 md:justify-evenly md:static md:h-[60px] md:flex-row md:items-center flex md:hidden transition-all duration-500 ease-out z-50"
    class:translate-y-0={isOpen} 
    class:translate-y-full={!isOpen}
    class:opacity-100={isOpen}
    class:opacity-0={!isOpen}
  >
    <ul class="flex flex-col h-full justify-around items-end" >
      <li class="${path === '/' && 'font-extrabold text-xl font-mono '}" >
        <a href="/" on:click={() => (isOpen = !isOpen)}>Home</a>
      </li>
      <li>
        <a
          href="/about"
          class="${path === '/about' && 'font-extrabold text-xl font-mono '}" on:click={() => (isOpen = !isOpen)}
          >About</a
        >
      </li>
      <li>
        <a
          href="/api-query"
          class="${path === '/api-query' && 'font-extrabold text-xl font-mono '}" on:click={() => (isOpen = !isOpen)}
          >Random Quote</a
        >
      </li>
      <li>
        <a
          href="/random-picture"
          class="${path === '/random-picture' && 'font-extrabold text-xl font-mono '}" on:click={() => (isOpen = !isOpen)}
          >Random Picture</a
        >
      </li>
    </ul>
  </nav>
{/if}

<style>
        :global(.is-open) {
                transform: translateY(1.5px) rotate(45deg) !important;
                opacity: 0 !important;
        }
</style>
