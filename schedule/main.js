$(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    $("input").on("change",function(){
        $("#courseTable").empty();
        var topicCount=topic.length;
        var millisecsPerDay= 24*60*60*1000;
        for(var x=0;x<topicCount;x++){
            if(topic[x]=="國定假日"|| topic[x]=="尚未開學")
            {
                $("#courseTable").append("<tr>");
                $("#courseTable").append(`<td style="color:gray">${x+1}</td>`);
        
                $("#courseTable").append(`<td style="color:gray">${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
                //先把時間換成毫秒->可以直接乘7(一周) 再轉回日期
                //.slice切掉前()個字
                $("#courseTable").append(`<td style="color:gray">${topic[x]}</td>`);
                $("#courseTable").append("</tr>");
            }
            else
            {
                $("#courseTable").append("<tr>");
                $("#courseTable").append(`<td>${x+1}</td>`);
        
                $("#courseTable").append(`<td>${(new Date(startDate.getTime()+7*x*millisecsPerDay)).toLocaleDateString().slice(5)}</td>`);
                //先把時間換成毫秒->可以直接乘7(一周) 再轉回日期
                //.slice切掉前()個字
                $("#courseTable").append(`<td>${topic[x]}</td>`);
                $("#courseTable").append("</tr>");
            }
        }
    });
});
