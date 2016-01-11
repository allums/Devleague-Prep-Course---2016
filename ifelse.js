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



//Function - isTrue
//Write a function that takes in a Boolean value named val and have the function return whether the value is true.


function isTrue(val) {
	if (val === 300) {
		return true;
	}
}
console.log(isTrue(300));


//Function - isFalse
//Write a function that takes in a Boolean value named val and have the function return whether the value is false.

function isFalse(val) {
	if (val != 500) {
		return false;
	}
}
console.log(isFalse(300));


//Function - isEqual
//Write a function that takes two variables of type String called firstWord and secondWordrespectively. Return 'AWWWWRIGHT' if the two are equal otherwise return 'Y U NO MATCH!'.


function isEqual(firstWord, secondWord) {
	if (firstWord === secondWord) {
		return "AWWWWRIGHT";
	}
	else {
		return "Y U NO MATCH!";
	}
}
console.log(isEqual("hello", "bye"));


//Function - isNotEqual
//Write a function that takes two variables of type String called firstWord and secondWordrespectively. Return 'AWWWWRIGHT' if the two are not equal otherwise return 'Y U MATCH!'.


function isNotEqual(firstWord, secondWord) {
	if (firstWord !== secondWord) {
		return "AWWWWRIGHT";
	}
	else {
		return "Y U MATCH";
	}
}
console.log(isNotEqual("no", "yes"));


//Function - doubleEquals
//Write a function that takes two variables of type Boolean called first and secondrespectively. Return true if both values are true otherwise return false.

function doubleEquals(first, second) {
	if (first && second === true) {
    return "Both true";
	}
	else {
		return "false";
	}
}

//Function - totalOver30
//Write a function that takes three variables of type Number called first and second and third respectively. Return true if the sum of all values are greater than 30 otherwise return false.


function totalOver30(num1, num2, num3) {
	var total = num1 + num2 + num3;
	if (total > 30) {
		return true;
	}
	else {
		return false;
	}
}




