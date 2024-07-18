const className="calendarmonth calendartable mb-0 table table-coursemos table-bordered";

var tables = document.getElementsByClassName(className);

var rows=tables[0].getElementsByTagName("tr"); // rows for 4-5 weeks of month

const assignmentMap=new Map();

for(var i=rows.length-1;i>0;i--){
    var ul=rows[i].getElementsByTagName("ul"); // ul HTMLCollection for rows
    for(var j=ul.length-1;j>-1;j--){
        var a=ul[j].getElementsByTagName("a"); // a HTMLCollection for uls
        for(var k=0;k<a.length;k++){
            var curString=a[k].title;
            if(assignmentMap.has(curString)){
                a[k--].remove();
            }
            else{
                assignmentMap.set(curString,1);
            }
        }
    }
}