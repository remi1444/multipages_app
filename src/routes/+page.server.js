import fetch from "node-fetch"; // Ensure you have the `node-fetch` package installed.

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

        const category = categories[Math.floor(Math.random() * categories.length)];

        async function fetchRandomImage() {
                try {
                        const width = 5000;
                        const height = 5000;
                        const response = await fetch(
                                `https://api.api-ninjas.com/v1/randomimage?category=${category}&width=${width}&height=${height}`,
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

                        // Convert response body to Buffer
                        const buffer = await response.arrayBuffer();
                        const base64 = Buffer.from(buffer).toString("base64");

                        // Create a Data URL
                        const imgUrl = `data:image/jpeg;base64,${base64}`;
                        return { imgUrl };
                } catch (error) {
                        console.error("Error:", error);
                        return { imgUrl: null };
                }
        }

        const data = await fetchRandomImage();
        return data;
}
