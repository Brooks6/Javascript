var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var but = document.getElementById("but");

but.addEventListener("click", function(){
	var newMessages = document.createElement("li");
	newMessages.innerHTML = textbox.value;
	messages.appendChild(newMessages);
	textbox.value = "";
;});