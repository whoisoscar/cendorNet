// This function listens for any updates in the tab, such as page reloads or new navigations.
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.active) {
        // When a page is completely loaded, inject the content script.
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['content.js']
        });
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.contentScriptQuery === 'queryProfanity') {
        fetch('http://127.0.0.1:5000/profanity-score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: request.sentence })
        })
            .then(response => response.json())
            .then(text => sendResponse({ result: text }))
            .catch(error => console.error('Error:', error));
        return true;  // Will respond asynchronously.
    }
});
