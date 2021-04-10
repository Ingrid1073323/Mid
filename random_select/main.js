$(document).ready(function(){
    //$("ul").text("li")
    $("#uu").append(" <li id=0>拉麵</li> <li>滷肉飯</li> <li>水餃</li>")
})

$(function(){
    var i;
    $("input").on("click",function(){
        //alert("多肥 還吃");
        // $("h1").text("再吃啊");//$->找到h1
        //$("h1").text($("li").eq(2).text());
        var num_listItem=$("li").length;
        var random_num=Math.floor(Math.random()*num_listItem);//0~1之間的數字*item數量
        
        while(i == random_num)
            random_num=Math.floor(Math.random()*num_listItem);
        i=random_num;

        //math.floor:取最大整數
        $("h1").text($("li").eq(i).text());
        var img=['https://resources.matcha-jp.com/resize/720x2000/2018/05/24-54841.jpeg',
               'https://fairylolita.com/wp-content/uploads/flickr/40251683831_2ba7f2c3e3_b.jpg',
            'https://banbi.tw/wp-content/uploads/20190509230042_82.jpg'];
        
        $("#ii").attr("src",img[i]);
   
    });
});