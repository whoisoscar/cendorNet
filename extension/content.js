const overlay = document.createElement('div'); // Create an overlay element

overlay.className = 'overlay';
overlay.innerHTML = '<h1>Scanning for profanity...</h1><div class="loader"></div>';

document.body.appendChild(overlay); // Add the overlay to the page

// Function to send text to the API and handle the response
async function checkProfanity(sentence) {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({
            contentScriptQuery: 'queryProfanity',
            sentence: sentence
        }, response => {
            if (response.result) {
                resolve(response.result);

            } else {
                reject('API error');
            }
        });
    });
}


// Function to process the text content of the page
async function processText() {
    const textNodes = document.querySelectorAll('p, span, li, h1, h2, h3, h4, h5, h6');
    for (const node of textNodes) {
        const sentences = node.innerText.split('. ');
        for (const sentence of sentences.slice(0, 100)) {
            if (sentence.length < 5) continue; // Skip short sentences

            const profanityResult = await checkProfanity(sentence);

            console.log(profanityResult);

            if (profanityResult.processed === 'OFFENSIVE') {
                node.innerHTML = node.innerHTML.replace(sentence, `<span class="blur-text">${sentence}</span>`);
            }
        }
    }
    document.body.removeChild(overlay);
    document.body.style.filter = ''; // Remove blur from the page
}

processText(); // Start the processing when the script is loaded
