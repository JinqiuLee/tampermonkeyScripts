// ==UserScript==
// @name         ������ȯ
// @namespace    http://tampermonkey.net/
// @version      0.0.2
// @description  designed for getting 11.11 2000-1111 RMB
// @author       Jinqiu.Lee
// @match        https://pro.jd.com/*
// @require      http://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @grant        none
// @icon         https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=57d5eca73f2ac65c73086e219a9bd974/7dd98d1001e939014c6dbdf971ec54e737d1968d.jpg
// ==/UserScript==

var hours, minutes, seconds, t1;
var count = 0;

function control() {
	if ((hours == 0 || hours == 24 || hours == 10 || hours == 15 || hours == 20)
			&& minutes == 0 && seconds == 0) {
		//������ȯ��Ԫ�ض�λ���ܻ��б䶯������ÿ����֮ǰ������������ȷ��һ��Ԫ��λ���ʵ�������
		$(".hot_space:eq(0)").click();
		// �����ʹ��ʱ����ʧЧ����ֹ��ε����
		window.clearInterval(t1);
		// ˢ��ҳ��ʹ��ʱ�����ٴ���Ч 
		window.location.reload();
	}// else
	// console.log("��"+(++count)+"�μ��");
}
function nowTime() {
	hours = new Date().getHours();
	minutes = new Date().getMinutes();
	seconds = new Date().getSeconds();
}
function check() {
	nowTime();
	control();
}
t1 = window.setInterval(check, 0);
