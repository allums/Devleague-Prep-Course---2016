var a = 10;
var b = 5;


function add(a, b) {
	return a + b;
}
var sum = add(a, b);




function subtract(a, b) {
	return a - b;
}
var difference = subtract(a, b);





function multiply(a, b) {
	return a * b;
}
var product = multiply(a, b);




function checkDifference() {
	return "My football team lost " + difference + " times this week.";
}
console.log(checkDifference);





function checkSum(sum) {
	console.log("I CAN ADD" + sum + " NUMBERS!");
}
checkSum(sum);



function checkProduct(number) {
	console.log(product * difference);
}
checkSum(difference);


function addThenSubtract(num1, num2, num3) {
	var sum = add(num1, num2);
	return subtract(sum, num3);
}
console.log(addThenSubtract(4, 5, 8));


function addThenMultiply(num1, num2, num3) {
	var sum = add(num1, num2);
	return multiply(sum, num3);
}
var howMany = addThenMultiply(3, 3, 3);


function createFullName(firstName, lastName) {
	return firstName + " " + lastName;
}
var myFullName = createFullName("Stephen", "Allum");
console.log(myFullName);

function verifyDrinkingAge(age) {
	if (age < 21) {
		return false;
	}
	else {
        return true;
	}
}  
  var canDrinkBeer = verifyDrinkingAge;




function throwParty(canDrinkBeer) {
	if (canDrinkBeer === false) {
		return "The party will have tonnes of cake!";
	}
	else {
		return "This party will have an open bar!";
	}
}
console.log(throwParty(canDrinkBeer(34)));


function eatFood(myFullName, food) {
  return myFullName + " loves to eat " + food + "!";
}
console.log(eatFood(myFullName, "pizza"));






