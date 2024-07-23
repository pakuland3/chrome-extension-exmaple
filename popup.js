document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
  
    // Load the current state from storage
    chrome.storage.sync.get(['isScriptEnabled'], function (result) {
      if (result.isScriptEnabled) {
        toggleButton.textContent = 'Disable Content Script';
      } else {
        toggleButton.textContent = 'Enable Content Script';
      }
    });
  
    // Toggle the content script state
    toggleButton.addEventListener('click', function () {
      chrome.storage.sync.get(['isScriptEnabled'], function (result) {
        const newState = !result.isScriptEnabled;
        chrome.storage.sync.set({ isScriptEnabled: newState }, function () {
          toggleButton.textContent = newState ? 'Disable Content Script' : 'Enable Content Script';
          chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.scripting.executeScript({
              target: { tabId: tabs[0].id },
              files: ['content.js']
            });
          });
        });
      });
    });
  });

  $(document).ready(function() {
    // 현재 탭의 URL을 가져옵니다.
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var currentTab = tabs[0];
      
      // 쿠키에서 세션 키를 가져옵니다. -> 쿠키에서 말고 view.php에서 가져와야함 즉 content.js에서
      // chrome.runtime.sendMessage({ action: 'getSessionKey', url: currentTab.url }, function(response) {
      //   if (response.sessionKey) {
      //     $('#session-key').text('Session Key: ' + response.sessionKey.value);
      //   } else {
      //     // 스토리지에서 세션 키를 가져옵니다.
      //     chrome.tabs.sendMessage(currentTab.id, { action: 'getSessionKeyFromStorage' }, function(response) {
      //       if (response.sessionKey) {
      //         $('#session-key').text('Session Key: ' + response.sessionKey.value);
      //       } else {
      //         $('#session-key').text('No session key found');
      //       }
      //     });
      //   }

        chrome.tabs.sendMessage(currentTab.id, { action: 'getSessionKeyFromStorage' }, function(response) {
          if (response.sessionKey) {
            $('#session-key').text('Session Key: ' + response.sessionKey);
            let param=[{
              year: "2024",
              month: "7",
              courseid: "1",
              categoryid: "0",
              includenavigation: "!1",
              mini: !0,
              day: 15
          }];
          $.ajax({
            url: "https://learn.hoseo.ac.kr/lib/ajax/service.php?sesskey="+$('#session-key').text()+"&info=core_calendar_get_calendar_monthly_view", // 실제 API URL로 변경하세요.
            method: 'POST', //JSON을 같이 보내야 하기 때문에 GET METHOD는 안됨
            data: JSON.stringify(param),
            success: function(response) {
              // 결과를 #result 요소에 표시합니다.
              $('#result').text(JSON.stringify(response));
            },
            error: function(xhr, status, error) {
              // 에러 메시지를 #result 요소에 표시합니다.
              $('#result').text('Error: ' + error);
            }
          });
          } else {
            $('#session-key').text('No session key found');
          }
      });
    });
  });