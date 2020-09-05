function handleClick(element){
	element.innerHTML = "clicked";
	element.style = "color: red";
}

var img = document.getElementById("img");
img.addEventListener("mouseover", function(){
	img.style = "box-shadow: 5px 5px; width: 300px";
});

img.addEventListener("mouseout", function(){
	img.style = "box-shadow: 0px 0px; width: 200px";
});