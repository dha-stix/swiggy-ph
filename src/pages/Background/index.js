function injectscript() {
    const foreground_entry_point = document.createElement('div');
    let reactJS_script = document.createElement('script');
    foreground_entry_point.id = 'content';
    foreground_entry_point.appendChild(reactJS_script);
    document.body.appendChild(foreground_entry_point);
    }



chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    if (changeInfo.status === 'complete' &&   tab.url.includes('http')) {
        chrome.scripting.executeScript({ target: {tabId: tabId}, func: injectscript}, function () {
            chrome.scripting.executeScript({target: {tabId: tabId}, files: ['ContentScript.bundle.js'] }, function () {
                console.log('INJECTED AND EXECUTED');
            });
        });
    }
});

console.log("Background working")
