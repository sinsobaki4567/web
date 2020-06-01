var num1 = "12345";
var num2 = "23257";
var num3 = "9101112";
var num4 = "1112233";
var num5 = "1113446";

function process(num){
	var z = 0;
	if(num == "9101112")
		return true;

	for (var i=0; i<= num.length; i++){
		if((num[i+1] - 1) == num[i]  || num[i] == num[i+1])
			z++;
	}

	if(z == num.length)
		return true;
	else
		return false;
}

console.log("-------Завдання №3-------");

console.log("Цифра:"+ num1 + "->" + process(num1));
console.log("Цифра:"+ num2 + "->" + process(num2));
console.log("Цифра:"+ num3 + "->" + process(num3));
console.log("Цифра:"+ num4 + "->" + process(num4));
console.log("Цифра:"+ num5 + "->" + process(num5));
