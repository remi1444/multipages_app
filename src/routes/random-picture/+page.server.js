// @ts-nocheck
/** @type {{ data: import('./$types').PageData }} */

export async function load() {
        const categories = [
                "nature",
                "city",
                "technology",
                "food",
                "still_life",
                "abstract",
                "wildlife"
        ];
        async function fetchRandomImage() {
                const category = categories[Math.floor(Math.random() * categories.length)];
                try {
                        const response = await fetch(
                                `https://api.api-ninjas.com/v1/randomimage?category=${category}`,
                                {
                                        headers: {
                                                "X-Api-Key":
                                                        "xNCRM4kXShSiVXLkgNvmKA==uAyX1HajYvqRe59N",
                                                Accept: "image/jpg"
                                        }
                                }
                        );
                        if (!response.ok) {
                                throw new Error(`Error fetching image: ${response.statusText}`);
                        }
                        const blob = await response.blob();
                        const imgUrl = URL.createObjectURL(blob);
                        return { imgUrl };
                } catch (error) {
                        console.error("Error:", error);
                        return { imgUrl: null };
                }
        }
        const data = await fetchRandomImage();
        return data;
}
