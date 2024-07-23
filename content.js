chrome.storage.sync.get(['isScriptEnabled'], function (result) {
    if (result.isScriptEnabled) {
        // Your content script code here
        function reloadAssignments(){
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
                    var day=dateInfo.getAttribute("data-day");
                    var month=dateInfo.getAttribute("data-month");
                    var year=dateInfo.getAttribute("data-year");
                    for(var k=0;k<a.length;k++){
                        var curString=a[k].title;
                        var href=a[k].href; // get url to crawling 
                        if(assignmentMap.has(curString)) a[k--].remove();
                        else{
                            assignmentMap.set(curString,1);
                            $(document).ready(function() {
                                // 특정 a 태그 선택 (예: 첫 번째 a 태그)
                                // var url = $('a').first().attr('href');
                                    if (href) {
                                        $.ajax({
                                        url: href,
                                        method: 'GET',
                                        success: function(data) {
                                            // 원하는 변수를 사용하여 HTML 데이터 저장
                                            var $html=$(data);
                                            var $span=$html.find(".card card-body").find("span");
                                            var expireDate=new Array;
                                            $span.each(function (){
                                                expireDate.push($(this).text());
                                                console.log("im here");
                                            });
                                            for(var i=0;i<expireDate.length;i++) console.log(expireDate[i]);
                                            // var endyear=parseInt(expireDate.substr(33,4));
                                            // var endmonth=parseInt(expireDate.substr(38,2));
                                            // var endday=parseInt(expireDate.substr(41,2));
                                            // var endhour=parseInt(expireDate.substr(44,2));
                                            // var endmin=parseInt(expireDate.substr(47,2));
                                            // var differ=365*(endyear-year)+30*(endmonth-month)+endday-day;
                                            // if(differ>0) a[k--].remove();
                                        },
                                        error: function(error) {
                                            console.error('Error fetching HTML:', error);
                                        }
                                        });
                                    } else {
                                        console.error('No href found for the selected a tag');
                                    }
                            });
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