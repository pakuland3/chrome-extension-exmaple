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
                
                if(assignmentMap.has(curString)){
                    a[k--].remove();
                }
                else{
                    assignmentMap.set(curString,1);
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