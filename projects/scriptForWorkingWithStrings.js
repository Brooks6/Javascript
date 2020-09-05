var phrase = "string are fun";
document.write(phrase.length);//single quotation is fine
document.write(phrase[0]);
document.write(phrase.toUpperCase());
document.write(phrase.charAt(0));//like phrase[0]
document.write(phrase.indexOf('f'));//return -1 when the letter is not in the current string
document.write(phrase.substring(0,3));//grasp 0 to 2(don't include 3)
document.write(phrase.endsWith("fun"));//true or false
document.write(phrase.includes("era"));//true or false

var phrase1 = "1";
var phrase2 = "2";
document.write(phrase1 + phrase2);

var num1 = 1;
var num2 = 2;
document.write(num1 + num2);