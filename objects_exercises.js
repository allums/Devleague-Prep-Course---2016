/*Plain object and adding properties

Declare a variable named plainBox and set its value to be an empty object.

Next, you will add three properties to this object. Each property declaration expression will be on its own line and ending with semicolons (;). This is just one way of adding properties to an object.

Add a property named color and set it the name of any color.
Add a property named size and set it to a number value between 0 and 20.
Add a property named contents and set it to be an empty array.*/


var plainBox = {
    color: "red",
    size: 20,
    contents: []
};


/*An object with properties declared line by line

Declare a variable named stockCar and set its value to be an object with its key-value pairs separated by commas (,). This is a way of declaring a new object and also being able to add property names and values at the moment an object is created.

add a key named model and set its value to the name of an American car manufacturer.
add a key named year and set it to be a value above 2000 but below 2016.
add a key named automaticTransmission and give it a Boolean value of your choice.
add a key named driver and set it to be null.
add a key named passengers and set it to be an empty array.*/

var stockCar = {
    model: "Ford",
    year: 2010,
    automaticTransmission: true,
    driver: null,
    passengers: []
};

console.log(stockCar);

/*Add new property inside a function

Declare a variable named plainPerson. Set its value to be an empty object with no properties.

Next, declare a function named buildPerson and then define three parameters. The first parameter will be named person and the second will be nameString and the third will be age. Within this function you will modify the person object by:

adding a property called name and set its value to be the second parameter.
adding a property called age and set its value to be the third parameter.

The function will return the first parameter.
Finally, invoke your new function while passing in the plainPerson object and additional agrument values, then store the return value. Use console.log three times to print the entire object, just the value at name, and just the value at age.
*/

var plainPerson = {};

function buildPerson(person, nameString, age) {
    person.name = nameString;
    person.age = age;
    return person;
}
var newPerson = buildPerson(plainPerson, "Stephen", 36);
console.log(newPerson);
console.log(newPerson.name);
console.log(newPerson.age);


/*Display values of objects that are inside an array

Declare a new variable named arrayOfObjects and set it to be this array of objects.

Declare a new function named printProcessedOrdersand set one parameter called orders. Within this function you will use console.log to print order details to the page.*/


var arrayOfObjects = 
   [
  {
    id: 0,
    date: "Monday Jan 25 2015 2:01 PM",
    total: "279.38"
  },
  {
    id: 1,
    date: "Monday Jan 27 2015 11:31 AM",
    total: "79.80"
  },
  {
    id: 2,
    date: "Monday Feb 1 2015 7:56 AM",
    total: "15.62"
  },
  {
    id: 3,
    date: "Monday Feb 1 2015 9:43 AM",
    total: "19.83"
  },
  {
    id: 4,
    date: "Monday Feb 1 2015 11:08 PM",
    total: "56.69"
  },
  {
    id: 5,
    date: "Monday Feb 13 2015 10:22 AM",
    total: "137.92"
  },
  {
    id: 6,
    date: "Monday Feb 14 2015 6:54 PM",
    total: "938.65"
  },
  {
    id: 7,
    date: "Monday Feb 14 2015 7:17 PM",
    total: "43.77"
  },
  {
    id: 8,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "28.54"
  },
  {
    id: 9,
    date: "Monday Feb 14 2015 7:18 PM",
    total: "194.33"
  }
];

function printProcessedOrders(orders) {
	for (var i = 0; i < orders.length; i++) {
		var order = orders[i];
		console.log("============");
		console.log('id' + order.id);
		console.log("purchase date: " + order.date);
		console.log("purchase total " + order.total);
	}
}
printProcessedOrders(arrayOfObjects);


/*Addition with an object

Declare a new variable and set it to be a new object with the properties a, b, and result.

Declare a new function. Declare the first parameter, which will be an object. Within this function, you will access the values stored a and b of the object being passed in. Add the these values and store the sum to this object's result property. This function will return the object.

Invoke your function and pass in your object, store the result to a variable and use console.log to inspect your results.

Go ahead and create some more objects and pass them to this function. Have fun with it.*/

