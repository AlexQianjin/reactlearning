// ====================================================================
// Declaring Variables in ES6
// ====================================================================

// const
var pizza = true;
pizza = false;
console.log(pizza); //false

const pizza = true;
pizza = false;

// let
var topic = 'Javascript';

if (topic) {
	var topic = 'React';
	console.log('block', topic); // block React
}

console.log('global', topic); // global React

// -------
var topic = 'JavaScript';
if (topic) {
	let topic = 'React'
	console.log('block', topic) // React
}
console.log('global', topic) // JavaScript

// Template Strings
let lastName = 'Qin';
let firstName = 'Alex';
let middleName = 'Super';

console.log(lastName + ", " + firstName + " " + middleName);
console.log(`${lastName}, ${firstName} ${middleName}`);

// Default Parameters
function logActivity(name="Shane McConkey", activity="skiing") {
	console.log( `${name} loves ${activity}` );
}

var defaultPerson = {
	name: {
		first: "Shane",
		last: "McConkey"
	},
	favActivity: "skiing"
};

function logActivity(p=defaultPerson) {
	console.log(`${p.name.first} loves ${p.favActivity}`)
}

// ====================================================================
// Arrow Functions
// ====================================================================
var lordify = function(firstname) {
	return `${firstname} of Canterbury`;
};
console.log( lordify("Dale") ); // Dale of Canterbury
console.log( lordify("Daryle") ); // Daryle of Canterbury

var lordify = firstname => `${firstname} of Canterbury`;

// Old
var lordify = function(firstName, land) {
	return `${firstName} of ${land}`;
}
// New
var lordify = (firstName, land) => `${firstName} of ${land}`;
console.log( lordify("Dale", "Maryland") ); // Dale of Maryland
console.log( lordify("Daryle", "Culpeper") ); // Daryle of Culpeper

// ====================================================================
// ES6 Objects and Arrays
// ====================================================================

// Destructuring Assignment
// ------ assignment ------
var sandwich = {
	bread: "dutch crunch",
	meat: "tuna",
	cheese: "swiss",
	toppings: ["lettuce", "tomato", "mustard"]
};
var {bread, meat} = sandwich;
console.log(bread, meat); // dutch crunch tuna

var {bread, meat} = sandwich;
bread = "garlic";
meat = "turkey";
console.log(bread); // garlic
console.log(meat); // turkey
console.log(sandwich.bread, sandwich.meat); // dutch crunch tuna

// ------ arguments ------
var lordify = regularPerson => {
	console.log(`${regularPerson.firstname} of Canterbury`)
};
var regularPerson = {
	firstname: "Bill",
	lastname: "Wilson"
};
lordify(regularPerson); // Bill of Canterbury

var lordify = ({firstname}) => {
	console.log(`${firstname} of Canterbury`)
};
lordify(regularPerson); // Bill of Canterbury

// ------ arrays ------
var [firstResort] = ["Kirkwood", "Squaw", "Alpine"];
console.log(firstResort); // Kirkwood

var [,,thirdResort] = ["Kirkwood", "Squaw", "Alpine"]
console.log(thirdResort) // Alpine

// Object Literal Enhancement
// ------ object ------ 
var name = "Tallac";
var elevation = 9738;
var funHike = {name, elevation};
console.log(funHike); // {name: "Tallac", elevation: 9738}

// ------ function ------ 
var name = "Tallac";
var elevation = 9738;
var print = function() {
	console.log(`Mt. ${this.name} is ${this.elevation} feet tall`);
}
var funHike = {name, elevation, print};
funHike.print(); // Mt. Tallac is 9738 feet tall

// ------ Old versus new: Object syntax ------
// OLD
var skier = {
	name: name,
	sound: sound,
	powderYell: function() {
		var yell = this.sound.toUpperCase();
		console.log(`${yell} ${yell} ${yell}!!!`);
	},
	speed: function(mph) {
		this.speed = mph;
		console.log('speed:', mph);
	}
};

// NEW
const skier = {
	name,
	sound,
	powderYell() {
		let yell = this.sound.toUpperCase();
		console.log(`${yell} ${yell} ${yell}!!!`);
	},
	speed(mph) {
		this.speed = mph;
		console.log('speed:', mph);
	}
}

// Object Literal Enhancement

var peaks = ["Tallac", "Ralston", "Rose"]
var [last] = peaks.reverse()
console.log(last) // Rose
console.log(peaks.join(', ')) // Rose, Ralston, Tallac

var peaks = ["Tallac", "Ralston", "Rose"]
var [last] = [...peaks].reverse()
console.log(last) // Rose
console.log(peaks.join(', ')) // Tallac, Ralston, Rose

var lakes = ["Donner", "Marlette", "Fallen Leaf", "Cascade"]
var [first, ...rest] = lakes
console.log(rest.join(", ")) // "Marlette, Fallen Leaf, Cascade"

function directions(...args) {
	var [start, ...remaining] = args
	var [finish, ...stops] = remaining.reverse()
	console.log(`drive through ${args.length} towns`)
	console.log(`start in ${start}`)
	console.log(`the destination is ${finish}`)
	console.log(`stopping ${stops.length} times in between`)
}

directions(
	"Truckee",
	"Tahoe City",
	"Sunnyside",
	"Homewood",
	"Tahoma"
)