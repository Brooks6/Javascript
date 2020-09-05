var password = "wordpass";
var response;
var entryCount = 0;
var entryLimit = 3;

while(response != password && entryCount <= entryLimit){
	response = window.prompt("enter password");
	entryCount++;
}
if(entryCount<=3){
	alert("you got it!");
	document.write("entryCount = " + entryCount);
}else{
	alert("you are wrong!");
}