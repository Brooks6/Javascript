var textbox = document.getElementById("textbox");
var but = document.getElementById("but");

but.addEventListener("click", function(){
	localStorage.name = textbox.value;//anything can replace "name"
});

document.write(localStorage.name);