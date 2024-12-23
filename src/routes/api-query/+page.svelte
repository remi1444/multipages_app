<script>
        import IoIosClose from "svelte-icons/io/IoIosClose.svelte";
        let inputData = "";
        /**
         * @type {{ quote: any; author: any; category?: any; } | null}
         */
        let fetchedData = null;
        let modalIsOpen = true;
        let errorDisplay = false;
        let categories = [
                "age",
                "alone",
                "amazing",
                "anger",
                "architecture",
                "art",
                "attitude",
                "beauty",
                "best",
                "birthday",
                "business",
                "car",
                "change",
                "communication",
                "computers",
                "cool",
                "courage",
                "dad",
                "dating",
                "death",
                "design",
                "dreams",
                "education",
                "environmental",
                "equality",
                "experience",
                "failure",
                "faith",
                "family",
                "famous",
                "fear",
                "fitness",
                "food",
                "forgiveness",
                "freedom",
                "friendship",
                "funny",
                "future",
                "god",
                "good",
                "government",
                "graduation",
                "great",
                "happiness",
                "health",
                "history",
                "home",
                "hope",
                "humor",
                "imagination",
                "inspirational",
                "intelligence",
                "jealousy",
                "knowledge",
                "leadership",
                "learning",
                "legal",
                "life",
                "love",
                "marriage",
                "medical",
                "men",
                "mom",
                "money",
                "morning",
                "movies",
                "success"
        ];

        const getQuote = async () => {
                if (!inputData) {
                        errorDisplay = true;
                        return;
                }
                try {
                        const response = await fetch(
                                `https://api.api-ninjas.com/v1/quotes?category=${inputData}`,
                                {
                                        method: "GET",
                                        headers: {
                                                "X-Api-Key":
                                                        "xNCRM4kXShSiVXLkgNvmKA==uAyX1HajYvqRe59N",
                                                "Content-Type": "application/json"
                                        }
                                }
                        );

                                errorDisplay = false;
                        if (!response.ok) {
                                throw new Error(`Failed to fetch quote: ${response.statusText}`);
                        }

                        const data = await response.json();
                        fetchedData = data[0]; // Get the first quote from the response
                } catch (error) {
                        console.error("Error fetching quote:", error);
                        fetchedData = { quote: "Error fetching quote", author: "Unknown" };
                }
                modalIsOpen = true;
                inputData = "";
        };
</script>

<div class="relative">
        <form on:submit|preventDefault={getQuote} class="flex flex-col justify-center items-center">
                <div class="flex flex-col items-center mt-6">
                        <label for="search" class="font-bold px-3">
                                Enter any of the following text under this input to get a quote in
                                that category:
                        </label>
                        <input
                                type="text"
                                name="search"
                                class="border w-[96%] p-3 rounded-md"
                                id="search"
                                bind:value={inputData}
                        />
                </div>
                <button type="submit" class="bg-emerald-500 text-white p-2 w-2/3 my-4 rounded-md">
                        Get Quote
                </button>
                {#if errorDisplay}
                        <p class="text-red-500">
                                Hey, you need to click or type in one of the categories listed
                                below!
                        </p>
                {/if}
                {console.log(fetchedData)}
                {#if fetchedData === undefined}
                        <p class="text-red-500 px-4">Your query did not yield any result because your entry did not match any of the categories, pick from the categories below!</p>
                {/if}
                <ul class="list-none flex flex-row gap-1 flex-wrap cursor-none p-2 text-justify">
                        {#each categories as category}
                                <button
                                        type="button"
                                        class="border rounded p-1 active:bg-emerald-100 focus:bg-emerald-100"
                                        on:click={() => {
                                                inputData = category;
                                        }}
                                >
                                        {category}
                                </button>
                        {/each}
                </ul>
        </form>

        {#if fetchedData?.quote}
                {#if modalIsOpen}
                        <div
                                class="fixed top-0 h-screen bg-black/70 justify-center flex items-center"
                        >
                                <div class="relative bg-amber-100 flex flex-col">
                                        <button
                                                class="text-red-700 place-self-end justify-self-end h-9 w-9 mb-6 top-1 right-2"
                                                on:click={() => {
                                                        modalIsOpen = false;
                                                }}
                                        >
                                                <IoIosClose /></button
                                        >
                                        <p
                                                class="w-full py-4 px-10 text-pretty pt-4 font-serif text-2xl"
                                        >
                                                "{fetchedData.quote}"
                                        </p>

                                        <p
                                                class="bg-amber-100 w-full text-right h-10 text-xl font-mono my-auto flex justify-end items-center pr-4"
                                        >
                                                {fetchedData.author}
                                        </p>
                                </div>
                        </div>
                {/if}
        {:else if fetchedData}
                <p>No data yet!</p>
        {/if}
</div>
