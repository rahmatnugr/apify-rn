// Apify SDK - toolkit for building Apify Actors (Read more at https://docs.apify.com/sdk/js/).
import { Actor } from 'apify';

import { extractHeadings } from './func.js';

// this is ESM project, and as such, it requires you to specify extensions in your relative imports
// read more about this here: https://nodejs.org/docs/latest-v18.x/api/esm.html#mandatory-file-extensions
// import { router } from './routes.js';

// The init() call configures the Actor for its environment. It's recommended to start every Actor with an init().
await Actor.init();

// Structure of input is defined in input_schema.json
const input = await Actor.getInput();
const { url } = input;

const STAGE = process.env.STAGE;
const API_URL = process.env.API_URL;

// Main execution
try {
    const headings = await extractHeadings(url, STAGE, API_URL);
    await Actor.pushData(headings);
} catch (error) {
    console.error('Failed to process headings:', error);
    throw error;
}

// Gracefully exit the Actor process. It's recommended to quit all Actors with an exit().
await Actor.exit();
