    // ==UserScript==
	// @name         斗鱼自动参与抽奖&自动参与火力全开
	// @namespace    https://www.52pojie.cn/
	// @version      1.0.0
	// @description  当有免费关注口令抽奖时，自动参与并发送弹幕；当直播间开启了火力全开时，自动参与火力全开；以上检测间隔均为5秒；
	// @author       Jinqiu.Lee
	// @match        https://www.douyu.com/*
	// @match        http://www.douyu.com/*
	// @require      http://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
	// @icon         http://www.douyu.com/favicon.ico
	// @grant        none
	// ==/UserScript==

	if (location.host === "www.douyu.com") {
        var joinRule="参与条件：送礼+关注主播";
        var ifJoined="成功参与";



$(".beginGuess").on("click", function(){
alert("1");
});

        //sleep(7000);
		//斗鱼自动参与火力全开得鱼丸，每20秒执行一次，火力全开最低时长仅为60秒，发送3次足矣，频率太高影响页面流畅度
		setInterval(function() {
			//火力全开自动设置弹幕并发送
			var barrage = $(".ChatSend-button ").text();
			if (barrage === "开火") {
               var joinCondition = $(".FirePowerChatModal-content").text();
                //前者需要关注或者有牌子，后者用来判断未关注主播但允许所有水友参加的主播
                if (joinCondition&&joinCondition.indexOf("已经满足") !=-1||joinCondition&&joinCondition.indexOf("都可") !=-1) {
                    //设置弹幕内容
                    var sendTxt=$(".FirePowerChatModal-title").text();
                    if(sendTxt==""){
                        sendTxt="皮鞭已备好，抽我吧！！！";
                    }
                    $(".ChatSend-txt").val(sendTxt);
                    $(".ChatSend-button").click();
                }
			}
		}, 45000);
        //自动对骂弹幕
/*
        setInterval(function() {

				var sendTxt=$(".FirePowerChatModal-title").text();
                if(sendTxt==""){
                sendTxt="跟我说:老子装b遭雷劈，nmsl";
                }
				$(".ChatSend-txt").val(sendTxt);
				$(".ChatSend-button").click();

		}, 4000);
*/
		//关注抽奖弹幕，每3分钟执行一次，大马猴直播间抽奖一般时间较长，足够参与一次，频率太高影响页面流畅度
		setInterval(function() {

			var openGiftWindow = $(".LotteryDrawEnter-giftIcon");
			//判断对象是否获取到，若获取到则点击左下角对象，未获取到则不作任何处理
			//if(!openGiftWindow && typeof(openGiftWindow)!="undefined" && openGiftWindow!=0){
				//点击打开弹出窗
				$(".LotteryDrawEnter-giftIcon").click();
				//获取参与状态，已参与的按钮内容为"已成功参与"，未参与的按钮内容为"一键参与"
				ifJoined = $(".ULotteryStart-joinBtnText").text();
				//预留位置，可能会用来判断抽奖是否结束，若抽奖已结束，需刷新页面，否则会持续打开抽奖窗口，但窗口提示当前并未开启抽奖，若刷新后页面检测不到，则会不再开启窗口
				//关于送礼抽奖可能也需要判断，增加一个全局变量，判断是否为送礼抽奖，若全局变量的join_Rule包含"送礼"两个字，则不点击按钮
				if (ifJoined == "一键参与") {
					//获取参与规则
					joinRule = $(".ULotteryStart-joinRule").text();
					//只要需要送礼物参与，则不点击一键参与
					if (joinRule&&joinRule.indexOf("送礼") == -1) {
						$(".ULotteryStart-joinBtn").click();
						//在点击完复制口令之后，等待2秒点击发送按钮，避免执行太快弹幕还未输入
						sleep(2000);
						//在参与完之后等待2秒设置弹幕内容并且自动发送
						var sendTxt = "皮鞭已备好，抽我吧！！！";
						$(".ChatSend-txt").val(sendTxt);
						$(".ChatSend-button").click();
					} else {
						//需要送礼，留备关闭窗口
						$(".LotteryContainer-close").click();
					}
				}else{
                    sleep(1000);
                    $(".LotteryContainer-close").click();
                }



	}, 180000);
/*
        //关注抽奖弹幕，每3分钟执行一次，看电影爆灯的礼物判断
        setInterval(function() {
		//获取左下角打开抽奖弹出窗的对象

			var openGiftWindow = $(".UPlayerLotteryEnter");
			//判断对象是否获取到，若获取到则点击左下角对象，未获取到则不作任何处理
			//if(!openGiftWindow && typeof(openGiftWindow)!="undefined" && openGiftWindow!=0){
			if (typeof (openGiftWindow) != "undefined" && openGiftWindow != 0) {
				//点击打开弹出窗
				$(".UPlayerLotteryEnter").click();

				//获取参与状态，已参与的按钮内容为"已成功参与"，未参与的按钮内容为"一键参与"
				var ifJoined = $(".ULotteryStart-joinBtn>span").text();

				//预留位置，可能会用来判断抽奖是否结束，若抽奖已结束，需刷新页面，否则会持续打开抽奖窗口，但窗口提示当前并未开启抽奖，若刷新后页面检测不到，则会不再开启窗口
				//关于送礼抽奖可能也需要判断，增加一个全局变量，判断是否为送礼抽奖，若全局变量的join_Rule包含"送礼"两个字，则不点击按钮
				if (ifJoined == "一键参与") {
					//获取参与规则
					joinRule = $(".ULotteryStart-rule>span").text();
					//只要需要送礼物参与，则不点击一键参与
					if (joinRule.match("送礼") == -1) {
						$(".ULotteryStart-joinBtn").click();
						//在点击完复制口令之后，等待2秒点击发送按钮，执行太快怕弹幕还未输入
						sleep(2000);
						//在参与完之后等待2秒设置弹幕内容“666666666666”并且自动发送
						var sendTxt = "6666666666666";
						$(".ChatSend-txt").val(sendTxt);
						$(".ChatSend-button").click();
				}
			}
		} else {
			$(".LotteryContainer-close").click();
		}
	}, 5000);
    */
		/* //自动领取宝箱，目前还无法获取到领取的点击按钮事件
		  setInterval(function(){
		         $(".TreasureStatus-bg").click();
		         $(".TreasureStatus-text").click();
		         $(".TreasureStatus").click();
		         $(".is-open").each(function(){
		             $(this).click();
		});
		 }, 120000);
		 */
	}

	//自定义休眠函数
	function sleep(n) {
		var start = new Date().getTime();
		while (true) {
			if (new Date().getTime() - start > n) {
				break;
			}
		}
	}