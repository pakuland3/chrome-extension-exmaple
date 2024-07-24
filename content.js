chrome.storage.sync.get(['isScriptEnabled'], function (result) {
    if (result.isScriptEnabled) {

        function fetchHTML(href,year,month,day) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: href,
                    method: 'GET',
                    xhrFields: {
                        withCredentials: true // 쿠키를 포함하여 요청을 보냄
                    },
                    success: function(data) {
                        // 원하는 변수를 사용하여 HTML 데이터 저장
                        var $html = $(data);
                        var expireDate = $html.find(".card:eq(2)").text();
                        var endyear = parseInt(expireDate.substr(33, 4));
                        var endmonth = parseInt(expireDate.substr(38, 2));
                        var endday = parseInt(expireDate.substr(41, 2));
                        var endhour = parseInt(expireDate.substr(44, 2));
                        var endmin = parseInt(expireDate.substr(47, 2));
                        var differ = 365 * (endyear - year) + 30 * (endmonth - month) + (endday - day);
                        resolve({ endyear, endmonth, endday, differ });
                    },
                    error: function(error) {
                        reject(error);
                    }
                });
            });
        }

        async function reloadAssignments(){
            const className="calendarmonth calendartable mb-0 table table-coursemos table-bordered";
        
            var tables = document.getElementsByClassName(className);
            
            var rows=tables[0].getElementsByTagName("tr"); // rows for 4-5 weeks of month
            
            const assignmentMap=new Map();

            for(var i=rows.length-1;i>0;i--){
                var ul=rows[i].getElementsByTagName("ul"); // ul HTMLCollection for rows
                var daysOfThisWeek=rows[i].getElementsByClassName("day text-sm-center text-md-left clickable");
                for(var j=ul.length-1;j>-1;j--){
                    var a=ul[j].getElementsByTagName("a"); // a HTMLCollection for uls
                    var dateInfo=daysOfThisWeek[j].getElementsByTagName("a")[0];
                    var day=parseInt(dateInfo.getAttribute("data-day"));
                    var month=parseInt(dateInfo.getAttribute("data-month"));
                    var year=parseInt(dateInfo.getAttribute("data-year"));
                    // console.log(`${year}/${month}/${day}`);
                    for(var k=0;k<a.length;k++){
                        var curString=a[k].title;
                        var href=a[k].getAttribute("href"); // get url to crawling
                        if(assignmentMap.has(curString)) a[k--].remove();
                        else{
                            assignmentMap.set(curString,1);
                            assignmentMap.set(curString, 1);
                            if (href) {
                                try {
                                    let { endyear, endmonth, endday, differ } = await fetchHTML(href,year,month,day);
                                    console.log(`${endyear}/${endmonth}/${endday}/${differ}`);
                                    if (differ>0) a[k--].remove();
                                } catch (error) {
                                    console.error('Error fetching HTML:', error);
                                }
                            } else {
                                console.error('No href found for the selected a tag');
                            }
                        }
                    }
                }
            }
        }
        
        reloadAssignments();
        
        chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
            if (message.url) {
            //   console.log(`URL changed to: ${message.url}`);
                reloadAssignments();
            }
        });
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'getSessionKeyFromStorage') {
        var scriptTagText=document.getElementsByTagName("script")[2].innerText;
        var sesskey="";
        var adding=0;
        for(var i=80;i<scriptTagText.length;i++){
            if(scriptTagText.charAt(i-4)=='y' && scriptTagText.charAt(i-1)=='\"') adding=1;
            if(adding && scriptTagText.charAt(i)=='\"') break;
            if(adding) sesskey+=scriptTagText.charAt(i);
        }
        sendResponse({sessionKey: sesskey});
    //   var sessionKey = localStorage.getItem('MoodleSession') || sessionStorage.getItem('MoodleSession');
    //   sendResponse({ sessionKey: sessionKey });
    }
});