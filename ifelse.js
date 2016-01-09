//Write a function that takes a single String parameter called action. If the value passed into our function is eathave the function return the String value EAT TACOS.

function youGetTaco(action) {
	var eatHave = "eat";
	if (action === eatHave) {
		console.log("EAT TACOS");
	}
}
console.log(youGetTaco("eat"));



//Function - isNumberGreaterThan
//Write a function that takes two variables of type Number called first and secondrespectively. Return true if the first number is greater than the second.


function isNumberGreaterThan(first, second) {
	if (first > second) {
		return true;
	}
}
console.log(isNumberGreaterThan(9, 4));
