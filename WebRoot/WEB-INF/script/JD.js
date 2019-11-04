// ==UserScript==
// @name         京东抢券
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  designed for get 11.11 to 2000-1111RMB
// @author       Jinqiu.Lee
// @match        https://pro.jd.com/mall/active/4VkT6xwambh1JFV5zkXKPovyG1tz/index.html
// @require      http://cdn.bootcss.com/jquery/3.3.1/jquery.min.js
// @grant        none
// @icon         https://gss1.bdstatic.com/-vo3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=57d5eca73f2ac65c73086e219a9bd974/7dd98d1001e939014c6dbdf971ec54e737d1968d.jpg
// ==/UserScript==

var hours, minutes, seconds;
function nowTime() {
	hours = new Date().getHours();
	minutes = new Date().getMinutes();
	seconds = new Date().getSeconds();
}

function control() {
	if (hours == 15 && minutes == 33 && seconds == 59) {
		$(".hot_space:eq(0)").click();
		sleep(2000);
	} else
		console.log("时间没有到");
}
function check() {
	nowTime();
	control();
}
setInterval(check, 0);
function sleep(n) {
	var start = new Date().getTime();
	while (true) {
		if (new Date().getTime() - start > n) {
			break;
		}
	}
	
}