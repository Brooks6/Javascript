var num1 = window.prompt("enter a number");
var op = window.prompt("enter a operator");
var num2 = window.prompt("enter another number");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if(op == '+'){
	document.write(num1 + num2);
}else if(op == '-'){
	document.write(num1 - num2);
}else if(op == '*'){
	document.write(num1 * num2);
}else if(op == '/'){
	document.write(num1 / num2);
}else if(op == '%'){
	document.write(num1 % num2);
}else{
	document.write("invalid operator");
}
