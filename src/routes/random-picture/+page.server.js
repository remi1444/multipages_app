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

        const category = categories[Math.floor(Math.random() * categories.length)];
        // async function fetchRandomImage() {
        //         const category = categories[Math.floor(Math.random() * categories.length)];
        //         try {
        //                 const response = await fetch(
        //                         `https://api.api-ninjas.com/v1/randomimage?category=${category}`,
        //                         {
        //                                 headers: {
        //                                         "X-Api-Key":
        //                                                 "xNCRM4kXShSiVXLkgNvmKA==uAyX1HajYvqRe59N",
        //                                         Accept: "image/jpg"
        //                                 }
        //                         }
        //                 );
        //                 if (!response.ok) {
        //                         throw new Error(`Error fetching image: ${response.statusText}`);
        //                 }
        //                 const blob = await response.blob();
        //                 const imgUrl = URL.createObjectURL(blob);
        //                 return { imgUrl };
        //         } catch (error) {
        //                 console.error("Error:", error);
        //                 return { imgUrl: null };
        //         }
        // }
        // const data = await fetchRandomImage();
        // return data;

        /** @type {{ data: import('./$types').PageData }} */
       

                return fetch(`https://api.api-ninjas.com/v1/randomimage?category=${category}`, {
                        headers: {
                                "X-Api-Key": "xNCRM4kXShSiVXLkgNvmKA==uAyX1HajYvqRe59N",
                                Accept: "image/jpg"
                        }
                })
                        .then((response) => {
                                if (!response.ok) {
                                        throw new Error(
                                                `Error fetching image: ${response.statusText}`
                                        );
                                }
                                return response.blob();
                        })
                        .then((blob) => {
                                const imgUrl = URL.createObjectURL(blob); // Create a URL from the blob
                                return { imgUrl }; // Return the image URL
                        })
                        .catch((error) => {
                                console.error("Error:", error);
                                return { imgUrl: null }; // Return null if an error occurs
                        });
        }

