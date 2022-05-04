// Use CamelCase in Javascript
// Prettier can be used to help with whitespace

// Object Oriented JavaScript: Prototypal Inheritance

// CakeObject.prototype.bake = function(temperature, bakeMinutes) {}

// Strongs vs. Loose Typing
// Loose: Flexible (JavaScript)
// Strong: Strict (Will cause errors if you ignore the rules, helps to avoid bugs)
// Code in TypeScript, a strict Javascript version, than covert it into proper JavaScript for running on the web

// Dynamic imports for libraries which themselves require other libraries and specifications
// import{ myHelper } from helperFunctions;
// webpack and rollup
// npm and yarn for Javascript packages

number = 30;
number = 45;


// Strings
word = "Hello";
word = "World!";

var monster1 = "Grover", monster2 = "Cookie Monster";

var phrase = "This is a sentence: \"Look at this phrase!\"";

var longString = "For \
				  very \
				  long \
				  sentences";

var longStringLength = longString.length;
longStringLength = "For very long sentences".length;


// Numbers
// JavaScript Numbers are all of the same type, precision issues
// Infinity
// -Infinity
// NaN: Not a Number

var numberDouble = 40.0;

Math.round(12.5);
Math.random();


// Booleans
trueBoolean = true;
falseBoolean = false;

var location1 = "United States", location2 = "United States", location3 = "France";
location1 === location2;
location1 === location3;


// Objects
var emptyObject = {};

var anObject = {
	'label': 'value',
	'label2': 'value2',
};

var bird = {
	genus: "corvus",
	species: "corvax",
	commonName: "raven",
	callType: "squaky",
	quote: "Nevermore",
	maxOffspring: 5,
	noisy: true,
	deadly: false
};

var bookOfKnowledge = {
	"Lunch Time": "12:30 P.M.",
	"The Ultimate Answer": 42,
	bestSong: "Lonnie's Lament",
	earth: "Mostly Harmless."
};

// Retrive a property from an object
bird.quote;
bird["quote"];

// Modify an object by giving it a new property
bird.color = "black";
bird["whereItLives"] = "In a tree.";
bird.whereItLives = "In an elm tree.";
bird;

// Delete a property from an object
delete bird.color;
bird;

// Does not make a copy of the object
// References it in terms of location and memory
// They are the same value referenced by 2 variables
var bird2 = bird;

// Converts an object into a String JSON and then reparse it into an object
// Makes a copy of an object safely
var bird2 = JSON.parse(JSON.stringify(bird));


// Arrays
// In JavaScript, arrays are a special type of Object
// Order is preserved and keys are automatically assigned
// Indexing starts at 0
var array1 = [];

var daysOfTheWeek = ['Monday', 'Tuesday', 'Wednesday'];

array1 = [0, 1, 2, "Zero", "One", "Two", true, false];

var countries = [
	"France",
	"United  Kingdom",
	"Germany",
	"Spain"
];

var arrayOfStuff = [
	{"name": "value"},
	[1, 2, 3],
	true,
	"nifty",
	5
];

var arrayLength = arrayOfStuff.length;

// Retrieves "France"
countries[0];

// Adds onto the end of an array
countries[4] = "Italy";
countries[countries.length] = "Ireland";
countries.push("Monaco");

// Removes from the end of an array
countries.pop();

// Only deletes the value at that index, yet the now empty index itself remains
// Use splice instead
delete countries[2];
countries.splice(2, 1);


// Regular Expressions (Regex)
var regexString1 = "This is the longest string ever.";
var regexString2 = "This is the shortest string ever.";
var regexString3 = "Is this the thing called Mount Everest?";
var regexString4 = "This is the Sherman on the Mount.";

// i: Case insensitive
// ^: Appears at the beggining of a String
// $: Appears at the end of a String
// .: Any character
// \: The actual character
var regex = /^this.$/i;

console.log( regex.text(string1) );
console.log( regex.text(string2) );
console.log( regex.text(string3) );
console.log( regex.text(string4) );


// Operators
var one = 1;
var two = 2;

// ==: Equality operator (Might convert data types, i.e. "1" == 1 is true), Compares only values
// !=: Inequality operator, Compares values and data types
// ===: Strict equality operator
// !==: Strict inequality operator
one === one;
one === two;
one !== two;

one == "1";
one === "1";
one != "1";
one !== "1";

one <= one;
one <= two;

// %: Modulus returns remainder
20 + 2;
20 - 2;
20 * 2;
20 / 2;
20 % 2;
19 % 2;

// All Equivalent
var counter = 0;
counter = counter + 1;
counter += 1;
counter++;
counter -= 1;
counter--;
count *= 2;

// Concatenation
var catAndDog = "cat" + " " + "dog";

// Operator Precedence: Ands always come before Ors
// &&: And
// ||: Or
// !: Not

var animal1 = "Monkey";
var animal2 = "Bear";
var animal3 = "Lion";

animal1 === "Monkey" && animal2 === "Bear";
!(animal1 === "Monkey" && animal2 === "Bear");
animal1 !== "Monkey" && animal2 !== "Bear";
animal1 === "Ape" || animal2 === "Bear";
animal1 === "Ape" || animal2 === "Ostritch";
animal1 === "Ape" && animal2 === "Bear" || animal3 === "Lion";

var typedAnswer = window.prompt("Type YES, NO or MAYBE.");
var thisIsTrue = true;
var thisIsFalse = false;
var aWord = "Hello";

// IF Conditionals
if(thisIsTrue) {
	console.log("It's true!");
} else if(aWord === "Hello") {
	console.log("Hello World!");
} else {
	console.log(thisIsFalse);
}

// Terse IFs
var cherub = "Cupid";
if (cherub === "Cupid") console.log("Cupid is the cherub.");
else console.log("No love today.");

// Switch Conditionals
switch (answer) {
	case "YES":
		console.log("You said YES!");
		break;
	case "NO":
		console.log("You said NO!");
		break;
	case "MAYBE":
		console.log("You said MAYBE!");
		break;
	default:
		console.log("You rebel, you!");
		break;
}


// Ternary Operator
// ?: The true condition
// :: The false condition
var pet = "Cat";
pet === "Cat"
	? console.log("Your pet is a cat.")
	: console.log("Your pet is not a cat.");
	
var petPhrase = (pet === "cat") ? ("Your pet is a cat") : ("Your pet is not a cat");


// Type Checking
var thing = "Word";
typeof thing;

thing = 8;
typeof thing;

thing = {};
typeof thing;

// In JavaScript, arrays are an object with a property of length
// typeof sees arrays as an object
// Requires special configuration to properly identify arrays
thing = [];
typeof thing === "object" && thing.hasOwnProperty("length");

// typeof Nan returns as Number, use Number.isNan instead
Number.isNan();

thing = null;
typeof thing === null;


// Looping
// For Loop
for(var i = 0; i < 10; i += 1) {
	console.log(i);
}

// Iterative For Loop
for(var country in countries) {
	console.log(country);
}

for(var country in countries) {
	if(countries.hasOwnProperty(country)) {
		console.log(country, countries[country]);
	}
}

// While Loop
var index = 0;
while(index < 10) {
	console.log(index + " This will go on until we hit 10.");
	i += 1;
}

// do While Loop
var loopArray = [true, true, false, true, true];

var shouldILoop = false;
do {
	shouldILoop = loopArray.pop();
} while(shouldILoop !== false);


// Functions
function speak() {
	console.log("Hello World!");
}

speak();

function fuddify(speech) {
	// Returns an error message if 'speech' is not a String
	if(typeof speech !== "string") {
		console.error("Nice twy, wabbit!");
		return;
	}
	
	// Otherwise, render the speech as if it were pronounced by Elmer Fudd
	speech = speech.replace(/r/g, "w");
	speech = speech.replace(/R/g, "W");
	
	return speech;
}

function isEven(number) {
	if(number % 2 === 0) {
		return true;
	} else {
		return false;
	}
}

// Equivalent to function above
function isEven2(number) {
	return number % 2 === 0;
}

fuddify("Stay put you rascal of a rabbit!");

// Javascript functions depending on the year might not always have default values
// Take into account compatability
function saySomething(speech, howManyTimes) {
	
	// Check if the argument is undefined and if it is, provide a default value
	var speech = (typeof speech !== "undefined") ? speech : "Default Speech";
	var howManyTimes = (typeof howManyTimes !== "undefined") ? howManyTimes : 5;
	
	// Shorter, more condensed version could get tripped up by truthiness
	// speech = speech || "Default Speech";
	// howManyTimes = howManyTimes || 5;
	
	for(var i = 0; i < howManyTimes; i++) {
		console.log(speech + " (" + i + ")");
	}
}

function saySomthing2(speech = "Default Speech", howManyTimes = 5) {
	for(var i = 0; i < howManyTimes; i++) {
		console.log(speech + " (" + i + ")");
	}
}

// Arguments are an array
function addingMachine() {
	// Initialize the total to be returned
	var total = 0;
	
	for(var i = 0; i < arguments.length; i++) {
		// Grab the next number from the arguments array
		var number = arguments[i];
		
		// Verify whether the argument is a number
		// If so, add said number to the running total
		if(typeof number === "number") {
			total += number;
		}
	}
	
	return total;
}

addingMachine(1,2,3,4,5);
addingMachine("one",2,3,"four",5);

var calvin = {
	name: "Calvin",
	bestFriend: "Hobbes",
	form: "Human Boy"
}

// Pass By Reference
// No return statement
// Object being passed in via reference
// Function operating on the original object in memory
function transmogrifier(calvin) {
	
	if(typeof calvin !== "object") {
		console.error("You cannot transmogrify someone other than Calvin.");
		return;
	}
	
	var randomNumber = Math.floor(Math.random() * 5) + 1;
	// var newForm = calvin.form; // Copies the object
	
	switch(randomNumber) {
		case 1:
			calfin.form = "Tyrannosaurus";
			break;
		case 2:
			calfin.form = "Grey Wolf";
			break;
		case 3:
			calfin.form = "Bengal Tiger";
			break;
		case 4:
			calfin.form = "Grizzly Bear";
			break;
		case 5:
			calfin.form = "Abominable Snowman";
			break;
		default:
			calvin.form = "Human Boy";
			break;
	}
	
	// Returns a copy of the calvin object, now transmogrified
	/*
	return {
		name: calvin.name,
		bestFriend: calvin.bestFriend,
		form: newForm
	};
	*/
}

transmogrifier(calvin);

var newCalvin = transmogrifier(calvin);

// Functions are objects
// Functions can take other functions as arguments
var helloWorldFunction = function() {
	console.log("Hello World!");
};

window.setTimeout(helloWorldFunction, 5000);

// Objects may contain functions
var objectWithFunction = {
	sayHello: function() {
		console.log("Hi There");
	}
};

objectWithFunction.sayHello();

// Global vs. Local Scope
// Avoid Global variables when possible
// Limit to Local via using 'var', 'let' and 'const'
// To reference Global variable use 'global.'


// Callback Functions
// A function that is passed as an argument into a function, then executed within said function

function doubleIt(number) {
	return (number *= 2);
}

// ESMA 6
doubleIt = number => (number *2);

var numbersToDouble = [1, 2, 3, 4, 5];

// JavaScript array has a method called '.map'
// It takes a callback function as an argument to apply to each array value
var doubledNumbers = numbersToDouble.map(doubleIt);

// Uses an anonymous callback function
numbersToDouble.forEach(function(number) {
	console.log("This array contains ", number);
});


// Asynchronous Code
// One Callback
jQuery.get("Https://httpbin.org/get?data=1", function(response) {
	// Some data obtained 
});

// Multiple Nested Ad Infinitum Callbacks to avoid overlapping reponses, i.e. Callback Hell
jQuery.get("Https://httpbin.org/get", function(response) {
	// Some data obtained 
	
	jQuery.get("Https://httpbin.org/get", function(response) {
		// Some more data obtained 
	});
});

// Promises
// One Promise
axios.get("Https://httpbin.org/get").then(function(response) { 
	// Some data obtained 
});

// Multiple Promises In Sequence
// No Nesting Necessary
axios
	.get("Https://httpbin.org/get")
	.then(function(response) {
		// Some data obtained
		return axios.get("Https://httpbin.org/get");
	})
	.then(function(response) {
		// Some more data obtained
		return axios.get("Https://httpbin.org/get");
	});

// Asynchronous and Await
// One Request
//async function getOneThing() {
//	var response = await axios.get("Https://httpbin.org/get");
	
	// Some data obtained
//}

// Multiple Requests
//async function getOneThing() {
//	var response1 = await axios.get("Https://httpbin.org/get");
//	var response2 = await axios.get("Https://httpbin.org/get");
//	var response3 = await axios.get("Https://httpbin.org/get");
	
	// Much data obtained
//}



