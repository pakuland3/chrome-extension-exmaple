// EVENT LISTENER

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
    chrome.tabs.sendMessage(details.tabId, { url: details.url });
  });

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ isScriptEnabled: false }, function () {
    console.log('Content script is disabled by default.');
  });
});