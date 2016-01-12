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


//Function - totalUnderWhat
//Write a function that takes four variables of type Number called first and second and third and fourth respectively. Return true if the sum of first, second and third are less than fourth otherwise return false.

function totalUnderWhat(first, second, third, fourth) {
	var added = first + second + third;
	if (added < fourth) {
		return true;
	}
    else {
    	return false;
    }
}


//Function - looptoNumber
//Write a function that takes in a Number value named limit and have the function write a for loop that loops the number of times of limit and console.log each number as the loop executes.


function loopToNumber(limit) {
	for (var i = 0;  i < limit; i++) {
		console.log(i);
		}
	}
loopToNumber(5);


//Function - showEachValue
//Write a function that takes in a Array value named characters that has a sequence of single character String values and have the function write a for loop that loops for each number of elements in the Array and console.log each character as the loop executes.


function showEachValue(characters) {
  for (var i = 0; i < characters.length; i++) {
  	console.log(characters[i]);
  }
}
var myCharac = ["A", "B", "C", "D", "E"];
showEachValue(myCharac);


//Function - createArrayFromString
//Write a function that takes a single variable of type String called word and write a for loop that creates an Array made up of each character in word except for A. We don't want no stinking A in our Array. Note: You will need to use the Array.push() method to complete this function.
var word = ["H", "E", "L", "L", "O"];

var word = "Aloha";
var arr = [];

function createArrayFromString(word) {
	for (var i = 0; i < word.length; i++) {
      if (word[i] !== "A" && word[i] !== "a") {
        arr.push(word[i]);
      }
	  else {
        console.log(arr);
      }
	}
}
createArrayFromString(word);



//Function - greatSummator
//Write a function that takes an Array with any number of type Number and write a for loop to add all numbers in the Array and return the sum.

var numbers = [2, 5, 8, 12];
var totalNum = 0;
function addIt(total) {
	for (var i = 0; numbers.length; i++) {
		totalNum += numbers[i];
      console.log('add the number ' + numbers[i]);
        console.log(totalNum);
	}
}
addIt(numbers);

//Function - totalUnderWhatFor
//Write a function that takes an Array with any number of type Number and second variable called total. Return true if the sum of all values in the Array are less than total otherwise return false.

function totalUnderWhatFor(number, total) {
	var myArray = [10, 20, 30, 40];
	if myArray < total {
		return true;
	}
}



//Function - checkTrueValues
//Write a function that takes an Array with any number of type Boolean values and write a for loop to call our isTrue function with each value as input and return true if all values return true from our isTrue function.

	






