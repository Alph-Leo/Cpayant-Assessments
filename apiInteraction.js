const fetch = require('node-fetch');

async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const extractedData = data.map(item => item.title);

        return extractedData;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

const tesApiInteraction = 'https://jsonplaceholder.typicode.com/posts';
fetchData(tesApiInteraction)
    .then(data => console.log(data.slice(0, 1)))
        .catch(console.error);
