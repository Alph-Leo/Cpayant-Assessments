const fetch = require('node-fetch');

async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json(); // Parse the JSON response
        const extractedData = data.slip.advice; // Access the "advice" property inside "slip"

        return extractedData; 
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

const tesApiInteraction = 'https://api.adviceslip.com/advice'; // Get 'random life advice' url

fetchData(tesApiInteraction)
    .then(data => console.log(data))
    .catch(console.error);
