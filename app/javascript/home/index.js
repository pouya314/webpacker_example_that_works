// This below does not seem to work!!
// document.addEventListener("turbolinks:reload", function() {
// 	$("#target").click(function() {
// 		alert("ZZZZZ!");
// 	});
// });

$(function() {
	$("#target").click(function() {
		var CryptoJS = require("crypto-js");
		var ciphertext = CryptoJS.AES.encrypt('my message', 'SecretKey123').toString();
		alert(ciphertext);
	});
});
