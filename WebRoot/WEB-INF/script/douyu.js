    // ==UserScript==
	// @name         �����Զ�����齱&�Զ��������ȫ��
	// @namespace    https://www.52pojie.cn/
	// @version      1.0.0
	// @description  ������ѹ�ע����齱ʱ���Զ����벢���͵�Ļ����ֱ���俪���˻���ȫ��ʱ���Զ��������ȫ�������ϼ������Ϊ5�룻
	// @author       Jinqiu.Lee
	// @match        https://www.douyu.com/*
	// @match        http://www.douyu.com/*
	// @require      http://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
	// @icon         http://www.douyu.com/favicon.ico
	// @grant        none
	// ==/UserScript==

	if (location.host === "www.douyu.com") {
        var joinRule="��������������+��ע����";
        var ifJoined="�ɹ�����";



$(".beginGuess").on("click", function(){
alert("1");
});

        //sleep(7000);
		//�����Զ��������ȫ�������裬ÿ20��ִ��һ�Σ�����ȫ�����ʱ����Ϊ60�룬����3�����ӣ�Ƶ��̫��Ӱ��ҳ��������
		setInterval(function() {
			//����ȫ���Զ����õ�Ļ������
			var barrage = $(".ChatSend-button ").text();
			if (barrage === "����") {
               var joinCondition = $(".FirePowerChatModal-content").text();
                //ǰ����Ҫ��ע���������ӣ����������ж�δ��ע��������������ˮ�Ѳμӵ�����
                if (joinCondition&&joinCondition.indexOf("�Ѿ�����") !=-1||joinCondition&&joinCondition.indexOf("����") !=-1) {
                    //���õ�Ļ����
                    var sendTxt=$(".FirePowerChatModal-title").text();
                    if(sendTxt==""){
                        sendTxt="Ƥ���ѱ��ã����Ұɣ�����";
                    }
                    $(".ChatSend-txt").val(sendTxt);
                    $(".ChatSend-button").click();
                }
			}
		}, 45000);
        //�Զ����Ļ
/*
        setInterval(function() {

				var sendTxt=$(".FirePowerChatModal-title").text();
                if(sendTxt==""){
                sendTxt="����˵:����װb��������nmsl";
                }
				$(".ChatSend-txt").val(sendTxt);
				$(".ChatSend-button").click();

		}, 4000);
*/
		//��ע�齱��Ļ��ÿ3����ִ��һ�Σ������ֱ����齱һ��ʱ��ϳ����㹻����һ�Σ�Ƶ��̫��Ӱ��ҳ��������
		setInterval(function() {

			var openGiftWindow = $(".LotteryDrawEnter-giftIcon");
			//�ж϶����Ƿ��ȡ��������ȡ���������½Ƕ���δ��ȡ�������κδ���
			//if(!openGiftWindow && typeof(openGiftWindow)!="undefined" && openGiftWindow!=0){
				//����򿪵�����
				$(".LotteryDrawEnter-giftIcon").click();
				//��ȡ����״̬���Ѳ���İ�ť����Ϊ"�ѳɹ�����"��δ����İ�ť����Ϊ"һ������"
				ifJoined = $(".ULotteryStart-joinBtnText").text();
				//Ԥ��λ�ã����ܻ������жϳ齱�Ƿ���������齱�ѽ�������ˢ��ҳ�棬���������򿪳齱���ڣ���������ʾ��ǰ��δ�����齱����ˢ�º�ҳ���ⲻ������᲻�ٿ�������
				//��������齱����Ҳ��Ҫ�жϣ�����һ��ȫ�ֱ������ж��Ƿ�Ϊ����齱����ȫ�ֱ�����join_Rule����"����"�����֣��򲻵����ť
				if (ifJoined == "һ������") {
					//��ȡ�������
					joinRule = $(".ULotteryStart-joinRule").text();
					//ֻҪ��Ҫ��������룬�򲻵��һ������
					if (joinRule&&joinRule.indexOf("����") == -1) {
						$(".ULotteryStart-joinBtn").click();
						//�ڵ���긴�ƿ���֮�󣬵ȴ�2�������Ͱ�ť������ִ��̫�쵯Ļ��δ����
						sleep(2000);
						//�ڲ�����֮��ȴ�2�����õ�Ļ���ݲ����Զ�����
						var sendTxt = "Ƥ���ѱ��ã����Ұɣ�����";
						$(".ChatSend-txt").val(sendTxt);
						$(".ChatSend-button").click();
					} else {
						//��Ҫ���������رմ���
						$(".LotteryContainer-close").click();
					}
				}else{
                    sleep(1000);
                    $(".LotteryContainer-close").click();
                }



	}, 180000);
/*
        //��ע�齱��Ļ��ÿ3����ִ��һ�Σ�����Ӱ���Ƶ������ж�
        setInterval(function() {
		//��ȡ���½Ǵ򿪳齱�������Ķ���

			var openGiftWindow = $(".UPlayerLotteryEnter");
			//�ж϶����Ƿ��ȡ��������ȡ���������½Ƕ���δ��ȡ�������κδ���
			//if(!openGiftWindow && typeof(openGiftWindow)!="undefined" && openGiftWindow!=0){
			if (typeof (openGiftWindow) != "undefined" && openGiftWindow != 0) {
				//����򿪵�����
				$(".UPlayerLotteryEnter").click();

				//��ȡ����״̬���Ѳ���İ�ť����Ϊ"�ѳɹ�����"��δ����İ�ť����Ϊ"һ������"
				var ifJoined = $(".ULotteryStart-joinBtn>span").text();

				//Ԥ��λ�ã����ܻ������жϳ齱�Ƿ���������齱�ѽ�������ˢ��ҳ�棬���������򿪳齱���ڣ���������ʾ��ǰ��δ�����齱����ˢ�º�ҳ���ⲻ������᲻�ٿ�������
				//��������齱����Ҳ��Ҫ�жϣ�����һ��ȫ�ֱ������ж��Ƿ�Ϊ����齱����ȫ�ֱ�����join_Rule����"����"�����֣��򲻵����ť
				if (ifJoined == "һ������") {
					//��ȡ�������
					joinRule = $(".ULotteryStart-rule>span").text();
					//ֻҪ��Ҫ��������룬�򲻵��һ������
					if (joinRule.match("����") == -1) {
						$(".ULotteryStart-joinBtn").click();
						//�ڵ���긴�ƿ���֮�󣬵ȴ�2�������Ͱ�ť��ִ��̫���µ�Ļ��δ����
						sleep(2000);
						//�ڲ�����֮��ȴ�2�����õ�Ļ���ݡ�666666666666�������Զ�����
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
		/* //�Զ���ȡ���䣬Ŀǰ���޷���ȡ����ȡ�ĵ����ť�¼�
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

	//�Զ������ߺ���
	function sleep(n) {
		var start = new Date().getTime();
		while (true) {
			if (new Date().getTime() - start > n) {
				break;
			}
		}
	}