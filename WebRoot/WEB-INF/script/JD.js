// ==UserScript==
// @name         京东抢券
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
		//立即领券的元素定位可能会有变动，所以每天领之前最好先在浏览器确认一次元素位置适当做调整
		$(".hot_space:eq(0)").click();
		// 点击后使定时函数失效，防止多次点击，
		window.clearInterval(t1);
		// 刷新页面使定时函数再次生效 
		window.location.reload();
	}// else
	// console.log("第"+(++count)+"次监控");
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
