    // ==UserScript==
	// @name         自定义竞猜鱼丸数量
	// @namespace    https://www.52pojie.cn/
	// @version      0.0.1
	// @description  自定义竞猜快捷设置鱼丸数量
	// @author       Jinqiu.Lee
	// @match        https://www.douyu.com/*
	// @match        http://www.douyu.com/*
	// @require      http://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
	// @icon         http://www.douyu.com/favicon.ico
	// @grant        none
	// ==/UserScript==


    // Your code here...
    $(document).on("click",".chooseOption:lt(2)",function(){
        $(".chooseOption:eq(2)").text(1000);
        $(".chooseOption:eq(3)").text(2000);
        $(".chooseOption:eq(4)").text(5000);
        $(".chooseOption:eq(5)").text(10000);
});
 $(document).on("click",".chooseOption:gt(1)",function(){

     var val=$(this).text();
     var index=$(this).index();
     if(index==0){
$(".delearInput:eq(1)").val(val-5000);
     }else
         if(index==1){
$(".delearInput:eq(1)").val(val-10000);
     }else if(index==2){
$(".delearInput:eq(1)").val(val-20000);
     }else if(index==3){
$(".delearInput:eq(1)").val(val-50000);
     }
});