//Presidents - Accessing values in an Array

var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

for (var i = 0; i < presidents.length; i++) {
	console.log("The value of i is " + i);
	console.log("The value of Index is " + presidents[i]);
}

function printContent(presidents, i) {}


//The String of Numbers
//REMEMBER += INCREMENTS BY X VALUE

var stringOfNumbers = '';

for (var i = 10; i < 21; i++) {
	stringOfNumbers += i;
}
console.log(stringOfNumbers);

//Add only even numbrs to an array

var evenNumberArray = [];

for (var i = 0; i < 52; i+=2) {
	evenNumberArray.push(i);
}


//Accessing only the odd indexes of an Array - 'Not Even Brah'

var oopsArray = [ 'turn' , , 'down' , , 'for' , , 'what' ];

for (var i = 0; i < oopsArray.length; i++) {
  if (i % 2 === 1) {
  	oopsArray[i] = 'nope';
  }
 }
 console.log(oopsArray[i]);

