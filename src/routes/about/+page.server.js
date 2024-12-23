// @ts-nocheck
/** @type {{ data: import('./$types').PageData }} */

export function load() {

    function generateParagraph() {
            const topics = [
                    "The impact of technology on modern life",
                    "The importance of environmental conservation",
                    "The evolution of education in the digital age",
                    "The role of artificial intelligence in shaping the future",
                    "The benefits and challenges of remote work"
            ];

            const randomTopic = topics[Math.floor(Math.random() * topics.length)];

            const intro = `In recent years, ${randomTopic.toLowerCase()} has become a topic of widespread interest and discussion. `;

            const body = [
                    `One of the primary reasons for this interest is the profound effect it has on individuals and society as a whole. `,
                    `For instance, the rapid development of technology has transformed how we interact, work, and live our daily lives. `,
                    `On a larger scale, these changes have also influenced global economies, cultural exchanges, and communication patterns. `,
                    `However, alongside these benefits, there are notable challenges that must be addressed to ensure sustainable progress. `,
                    `These include addressing issues of accessibility, ethical implications, and the potential for misuse of advancements. `,
                    `Moreover, it is essential to consider the role of education and awareness in preparing individuals for these shifts. `,
                    `By fostering a culture of continuous learning and adaptability, societies can better equip themselves to navigate future developments. `,
                    `At the same time, governments and organizations must implement policies that promote inclusivity and equitable access to resources. `
            ].join("");

            const conclusion =
                    `In conclusion, ${randomTopic.toLowerCase()} presents both incredible opportunities and significant responsibilities. ` +
                    `By addressing challenges proactively and embracing innovation thoughtfully, we can pave the way for a future that benefits all. `;

            let paragraph = (intro + body + conclusion).trim();

            // Ensure the paragraph is approximately 500 words
            while (paragraph.split(" ").length < 500) {
                    paragraph +=
                            " Additionally, it is worth noting that thoughtful collaboration and strategic planning are integral to realizing the potential of these advancements.";
            }

            return paragraph;
    }

        const text = generateParagraph()
                

        return { text };
}
