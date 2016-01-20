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
 console.log(oopsArray);


 //Going backwards?!

//Using a FOR loop, iterate through the Array stored at oopsArray backwards. console.log each value in the Array.

for (var i = oopsArray.length-1; i >= 0; i -= 1) {
 console.log(oopsArray[i]);
}

// Nap Schedule

var isNapTime = false;
var napSchedule = [false, false, true, false, true, true];

function nap(schedule) {

  if (schedule === true) {
    console.log("ZzZzZzZ");
  }
  else {
    console.log("gotta get to work!");
    isNapTime = true;
  }
 }

for (var i = 0; i < napSchedule.length; i++) {
  nap(napSchedule[i]);
}

//Naptime

var isNapTime = false;
var napSchedule = [false, false, true, false, true, true];

function nap(schedule) {

  if (schedule === true) {
    console.log("ZzZzZzZ");
  }
  else {
    console.log("gotta get to work!");
    isNapTime = true;
  }
 }

for (var i = 0; i < napSchedule.length; i++) {
  nap(napSchedule[i]);
}

//Copy of Values Array

var copyOfValuesArray = [];
var valuesArray = [99, 66, 829, 1941, 8, 76];

function copyArray(originArray, destinationArray) {
  for (var i = 0; i < valuesArray.length; i++) {
    copyOfValuesArray.push(valuesArray[i]);
  }
}
copyArray(copyOfValuesArray, valuesArray);

console.log(copyOfValuesArray);
console.log(valuesArray);

