// EVENT LISTENER

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
    chrome.tabs.sendMessage(details.tabId, { url: details.url });
  });

chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set({ isScriptEnabled: false }, function () {
    console.log('Content script is disabled by default.');
  });
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'getSessionKey') {
    // 쿠키 중에 learn.hoseo.ac.kr에서 항상 있는 MoodleSession 쿠키 값을 가져옴
    chrome.cookies.get({ url: request.url, name: 'MoodleSession' }, (cookie) => {
      if (cookie) {
        sendResponse({ sessionKey: cookie });
      } else {
        sendResponse({ sessionKey: null });
      }
    });
    return true;  // 비동기 응답을 위해 true를 반환합니다.
  }
});