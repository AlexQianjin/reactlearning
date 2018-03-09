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

// The Spread Operator
// ------ Array ------ 
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

// ------ Object ------ 
var morning = {
	breakfast: "oatmeal",
	lunch: "peanut butter and jelly"
};
var dinner = "mac and cheese";

var backpackingMeals = {
	...morning,
	dinner
};
console.log(backpackingMeals) ;
// {breakfast: "oatmeal", lunch: "peanut butter and jelly",	dinner: "mac and cheese"}

// ====================================================================
// Promises
// ====================================================================

const getFakeMembers = count => new Promise((resolves, rejects) => {
	const api = `https://api.randomuser.me/?nat=US&results=${count}`;
	const request = new XMLHttpRequest();
	request.open('GET', api);
	request.onload = () =>
		(request.status === 200) ?
		resolves(JSON.parse(request.response).results) :
		reject(Error(request.statusText));
	request.onerror = (err) => rejects(err);
	request.send();
})

getFakeMembers(5).then(
	members => console.log(members),
	err => console.error(new Error("cannot load members from randomuser.me"))
);

// ====================================================================
// Classes
// ====================================================================

// Classic
function Vacation(destination, length) {
	this.destination = destination
	this.length = length
}
Vacation.prototype.print = function() {
	console.log(this.destination + " | " + this.length + " days")
}
var maui = new Vacation("Maui", 7);
maui.print(); // Maui | 7

// Modern
class Vacation {
	constructor(destination, length) {
		this.destination = destination;
		this.length = length;
	}

	print() {
		console.log(`${this.destination} will take ${this.length} days.`);
	}
}

const trip = new Vacation("Santiago, Chile", 7);
console.log(trip.print()); // Santiago, Chile will take 7 days.

// Inherited
class Expedition extends Vacation {
	constructor(destination, length, gear) {
		super(destination, length);
		this.gear = gear;
	}

	print() {
		super.print();
		console.log(`Bring your ${this.gear.join(" and your ")}`);
	}
}

const trip = new Expedition("Mt. Whitney", 3, ["sunglasses", "prayer flags", "camera"]);
trip.print();
// Mt. Whitney will take 3 days.
// Bring your sunglasses and your prayer flags and your camera

// ====================================================================
// ES6 Modules
// ====================================================================

// ./text-helpers.js
// ./mt-freel.js

import { print, log } from './text-helpers';
import freel from './mt-freel';

print('printing a message');
log('logging a message');
freel.print();

// node --experimental-modules run.mjs

import { print as p, log as l } from './text-helpers';
p('printing a message');
l('logging a message');

import * as fns from './text-helpers';

// ====================================================================
// CommonJS
// ====================================================================

const { log, print } = require('./txt-helpers');
