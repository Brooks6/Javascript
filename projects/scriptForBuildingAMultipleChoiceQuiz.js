var question = [
	{
		hint: 1,
		answer: 1
	},
	{
		hint: 2,
		answer: 2
	},
	{
		hint: 3,
		answer: 3
	}
];
var i = 0;
var score = 0;
for(var i = 0; i < question.length; i++){
	var ans = window.prompt(question[i].hint);
	if(ans == question[i].answer){
		alert("correct");
		score++;
	}else{
		alert("wrong");
	}
}
document.write("score: " + score + "/" + "3");