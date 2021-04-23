var topic=[
    "尚未開學",//
    "國定假日",//
    "環境準備",
    "隨機性",
    "重複性"
];

var startDate=new Date();
function setMonthAndDay(startMonth,startDay){
    //一次設定好月份跟日期
    startDate.setMonth(startMonth,startDay);   /////javascript的月份為0~11
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

$(function(){
    $("input").on("change",function(){
        var date=new Date(document.getElementById("date").value);
        setMonthAndDay(date.getMonth(),date.getDate());
    });
    
});

