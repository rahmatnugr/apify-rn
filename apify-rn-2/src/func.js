// Axios - Promise based HTTP client for the browser and node.js (Read more at https://axios-http.com/docs/intro).
import axios from 'axios';
// Cheerio - The fast, flexible & elegant library for parsing and manipulating HTML and XML (Read more at https://cheerio.js.org/).
import * as cheerio from 'cheerio';

// Function to extract headings from a webpage
async function extractHeadings(url, stage, apiUrl) {
    try {
        // Fetch the HTML content of the page
        const response = await axios.get(url);

                // Parse the downloaded HTML with Cheerio
        const $ = cheerio.load(response.data);

                // Extract all headings from the page
        const headings = [];
        $("h1, h2, h3, h4, h5, h6").each((i, element) => {
            const headingObject = {
                        stage: stage,
                        apiUrl: apiUrl,
                level: $(element).prop("tagName").toLowerCase(),
                text: $(element).text(),
            };
            console.log("Extracted heading", headingObject);
            headings.push(headingObject);
        });

        return headings;
    } catch (error) {
        console.error('Error extracting headings:', error);
        throw error;
    }
}

export { extractHeadings };
