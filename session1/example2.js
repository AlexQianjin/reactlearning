// ====================================================================
// Immutability
// ====================================================================
let color_lawn = {
	title: "lawn",
	color: "#00FF00",
	rating: 0
}

function rateColor(color, rating) {
	color.rating = rating
	return color
}
console.log(rateColor(color_lawn, 5).rating) // 5
console.log(color_lawn.rating) // 5

var rateColor = function (color, rating) {
	return Object.assign({}, color, {
		rating: rating
	})
}
console.log(rateColor(color_lawn, 5).rating) // 5
console.log(color_lawn.rating) // 4

const rateColor = (color, rating) =>
	({
		...color,
		rating
	})

// Array
let list = [{
		title: "Rad Red"
	},
	{
		title: "Lawn"
	},
	{
		title: "Party Pink"
	}
]

var addColor = function (title, colors) {
	colors.push({
		title: title
	})
	return colors;
}
console.log(addColor("Glam Green", list).length) // 4
console.log(list.length) // 4

const addColor = (title, array) => array.concat({
	title
})
console.log(addColor("Glam Green", list).length) // 4
console.log(list.length) // 3

const addColor = (title, list) => [...list, {
	title
}]

// ====================================================================
// Pure Functions
// ====================================================================
// Impure
var frederick = {
	name: "Frederick Douglass",
	canRead: false,
	canWrite: false
}

function selfEducate() {
	frederick.canRead = true
	frederick.canWrite = true
	return frederick
}
selfEducate()
console.log(frederick)
// {name: "Frederick Douglass", canRead: true, canWrite: true}

// Impure
const frederick = {
	name: "Frederick Douglass",
	canRead: false,
	canWrite: false
}
const selfEducate = (person) => {
	person.canRead = true
	person.canWrite = true
	return person
}
console.log(selfEducate(frederick))
console.log(frederick)
// {name: "Frederick Douglass", canRead: true, canWrite: true}
// {name: "Frederick Douglass", canRead: true, canWrite: true}

// Pure
const frederick = {
	name: "Frederick Douglass",
	canRead: false,
	canWrite: false
}
const selfEducate = person =>
	({
		...person,
		canRead: true,
		canWrite: true
	})
console.log(selfEducate(frederick))
console.log(frederick)
// {name: "Frederick Douglass", canRead: true, canWrite: true}
// {name: "Frederick Douglass", canRead: false, canWrite: false}

function Header(text) {
	let h1 = document.createElement('h1');
	h1.innerText = text;
	document.body.appendChild(h1);
}
Header("Header() caused side effects");

// const Header = (props) => (<h1>{props.title}</h1>);

// ====================================================================
// Data Transformations
// ====================================================================
// join
const schools = [
	"Yorktown",
	"Washington & Lee",
	"Wakefield"
]

console.log(schools.join(", "))
// "Yorktown, Washington & Lee, Wakefield"

// filter
const wSchools = schools.filter(school => school[0] === "W")
console.log(wSchools)
// ["Washington & Lee", "Wakefield"]

// remove an item using Array.filter over Array.pop Array.splice
const cutSchool = (cut, list) =>
	list.filter(school => school !== cut)
console.log(cutSchool("Washington & Lee", schools).join(" * "))
// "Yorktown * Wakefield"
console.log(schools.join("\n"))
// Yorktown
// Washington & Lee
// Wakefield

// map
const highSchools = schools.map(school => `${school} High School`)
console.log(highSchools.join("\n"))
// Yorktown High School
// Washington & Lee High School
// Wakefield High School
console.log(schools.join("\n"))
// Yorktown
// Washington & Lee
// Wakefield

const highSchools = schools.map(school => ({
	name: school
}))
console.log(highSchools)
// [
// 	{ name: "Yorktown" },
// 	{ name: "Washington & Lee" },
// 	{ name: "Wakefield" }
// ]

// map edit
let schools = [
	{ name: "Yorktown" },
	{ name: "Stratford" },
	{ name: "Washington & Lee" },
	{ name: "Wakefield" }
]
let updatedSchools = editName("Stratford", "HB Woodlawn", schools)
console.log(updatedSchools[1]) // { name: "HB Woodlawn" }
console.log(schools[1]) // { name: "Stratford" },

const editName = (oldName, name, arr) =>
	arr.map(item => {
		if (item.name === oldName) {
			return {
				...item,
				name
			}
		} else {
			return item
		}
	})

const editName = (oldName, name, arr) => arr.map(item => (item.name === oldName) ? ({ ...item, name }) : item)	

// Object to Array
const schools = {
	"Yorktown": 10,
	"Washington & Lee": 2,
	"Wakefield": 5
}
const schoolArray = Object.keys(schools).map(key =>
	({
		name: key,
		wins: schools[key]
	})
)
console.log(schoolArray)
// [
// 	{
// 		name: "Yorktown",
// 		wins: 10
// 	},
// 	{
// 		name: "Washington & Lee",
// 		wins: 2
// 	},
// 	{
// 		name: "Wakefield",
// 		wins: 5
// 	}
// ]

// reduce reduceRight
const ages = [21, 18, 42, 40, 64, 63, 34];
const maxAge = ages.reduce((max, age) => {
	console.log(`${age} > ${max} = ${age > max}`);
	if (age > max) {
		return age
	} else {
		return max
	}
}, 0)
console.log('maxAge', maxAge);
// 21 > 0 = true
// 18 > 21 = false
// 42 > 21 = true
// 40 > 42 = false
// 64 > 42 = true
// 63 > 64 = false
// 34 > 64 = false
// maxAge 64

const max = ages.reduce((max, value) => (value > max) ? value : max, 0)

const colors = [
	{
		id: '-xekare',
		title: "rad red",
		rating: 3
	},
	{
		id: '-jbwsof',
		title: "big blue",
		rating: 2
	},
	{
		id: '-prigbj',
		title: "grizzly grey",
		rating: 5
	},
	{
		id: '-ryhbhsl',
		title: "banana",
		rating: 1
	}
]
const hashColors = colors.reduce(
	(hash, { id, title, rating }) => {
		hash[id] = { title, rating }
		return hash
	},
	{}
)
console.log(hashColors);
// {
// 	"-xekare": {
// 		title: "rad red",
// 			rating: 3
// 	},
// 	"-jbwsof": {
// 		title: "big blue",
// 			rating: 2
// 	},
// 	"-prigbj": {
// 		title: "grizzly grey",
// 			rating: 5
// 	},
// 	"-ryhbhsl": {
// 		title: "banana",
// 			rating: 1
// 	}
// }

const colors = ["red", "red", "green", "blue", "green"];
const distinctColors = colors.reduce(
	(distinct, color) =>
		(distinct.indexOf(color) !== -1) ?
			distinct :
			[...distinct, color],
	[]
)
console.log(distinctColors)
// ["red", "green", "blue"]

// ====================================================================
// Higher-Order Functions
// ====================================================================
const invokeIf = (condition, fnTrue, fnFalse) =>
	(condition) ? fnTrue() : fnFalse()
const showWelcome = () =>
	console.log("Welcome!!!")
const showUnauthorized = () =>
	console.log("Unauthorized!!!")
invokeIf(true, showWelcome, showUnauthorized) // "Welcome"
invokeIf(false, showWelcome, showUnauthorized) // "Unauthorized"

// Currying
const userLogs = userName => message =>
	console.log(`${userName} -> ${message}`)
const log = userLogs("grandpa23")
log("attempted to load 20 fake members")
getFakeMembers(20).then(
	members => log(`successfully loaded ${members.length} members`),
	error => log("encountered an error loading members")
)
// grandpa23 -> attempted to load 20 fake members
// grandpa23 -> successfully loaded 20 members
// grandpa23 -> attempted to load 20 fake members
// grandpa23 -> encountered an error loading members

// ====================================================================
// Recursion
// ====================================================================
const countdown = (value, fn) => {
	fn(value)
	return (value > 0) ? countdown(value - 1, fn) : value
}
countdown(10, value => console.log(value));
// 10
// 9
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

// Recursion with delay
const countdown = (value, fn, delay = 1000) => {
	fn(value)
	return (value > 0) ?
		setTimeout(() => countdown(value - 1, fn), delay) :
		value
}
const log = value => console.log(value)
countdown(10, log);

// Recursion for searching data structures
var dan = {
	type: "person",
	data: {
		gender: "male",
		info: {
			id: 22,
			fullname: {
				first: "Dan",
				last: "Deacon"
			}
		}
	}
}
deepPick("type", dan); // "person"
deepPick("data.info.fullname.first", dan); // "Dan"

const deepPick = (fields, object = {}) => {
	const [first, ...remaining] = fields.split(".")
	return (remaining.length) ?
		deepPick(remaining.join("."), object[first]) :
		object[first]
}

deepPick("data.info.fullname.first", dan); // "Dan"
// First Iteration
// first = "data"
// remaining.join(".") = "info.fullname.first"
// object[first] = { gender: "male", {info} }

// Second Iteration
// first = "info"
// remaining.join(".") = "fullname.first"
// object[first] = {id: 22, {fullname}}

// Third Iteration
// first = "fullname"
// remaining.join("." = "first"
// object[first] = {first: "Dan", last: "Deacon" }

// Finally...
// first = "first"
// remaining.length = 0
// object[first] = "Dan"

// ====================================================================
// Composition
// ====================================================================
// Chaining
const template = "hh:mm:ss tt"
const clockTime = template.replace("hh", "03")
	.replace("mm", "33")
	.replace("ss", "33")
	.replace("tt", "PM")
console.log(clockTime)
// "03:33:33 PM"

// Composition
const both = date => appendAMPM(civilianHours(date))

const both = compose(
	civilianHours,
	appendAMPM
)
both(new Date())

const compose = (...fns) =>
	(arg) =>
		fns.reduce(
			(composed, f) => f(composed),
			arg
		)

// ====================================================================
// Composition
// ====================================================================		
// imperative solution
// Log Clock Time every Second
setInterval(logClockTime, 1000);
function logClockTime() {
	// Get Time string as civilian time
	var time = getClockTime();
	// Clear the Console and log the time
	console.clear();
	console.log(time);
}
function getClockTime() {
	// Get the Current Time
	var date = new Date();
	var time = "";
	// Serialize clock time
	var time = {
		hours: date.getHours(),
		minutes: date.getMinutes(),
		seconds: date.getSeconds(),
		ampm: "AM"
	}
	// Convert to civilian time
	if (time.hours == 12) {
		time.ampm = "PM";
	} else if (time.hours > 12) {
		time.ampm = "PM";
		time.hours -= 12;
	}
	// Prepend a 0 on the hours to make double digits
	if (time.hours < 10) {
		time.hours = "0" + time.hours;
	}
	// prepend a 0 on the minutes to make double digits
	if (time.minutes < 10) {
		time.minutes = "0" + time.minutes;
	}
	// prepend a 0 on the seconds to make double digits
	if (time.seconds < 10) {
		time.seconds = "0" + time.seconds;
	}
	// Format the clock time as a string "hh:mm:ss tt"
	return time.hours + ":"
		+ time.minutes + ":"
		+ time.seconds + " "
		+ time.ampm;
}

// functional approach
const oneSecond = () => 1000
const getCurrentTime = () => new Date()
const clear = () => console.clear()
const log = message => console.log(message)

const serializeClockTime = date =>
	({
		hours: date.getHours(),
		minutes: date.getMinutes(),
		seconds: date.getSeconds()
	})
const civilianHours = clockTime =>
	({
		...clockTime,
		hours: (clockTime.hours > 12) ?
			clockTime.hours - 12 :
			clockTime.hours
	})
const appendAMPM = clockTime =>
	({
		...clockTime,
		ampm: (clockTime.hours >= 12) ? "PM" : "AM"
	})

const display = target => time => target(time)
const formatClock = format =>
	time =>
		format.replace("hh", time.hours)
			.replace("mm", time.minutes)
			.replace("ss", time.seconds)
			.replace("tt", time.ampm)
const prependZero = key => clockTime =>
	({
		...clockTime,
		[key]: (clockTime[key] < 10) ?
			"0" + clockTime[key] :
			clockTime[key]
	})	

const convertToCivilianTime = clockTime =>
	compose(
		appendAMPM,
		civilianHours
	)(clockTime)
	
const doubleDigits = civilianTime =>
	compose(
		prependZero("hours"),
		prependZero("minutes"),
		prependZero("seconds")
	)(civilianTime)
const startTicking = () =>
	setInterval(
		compose(
			clear,
			getCurrentTime,
			serializeClockTime,
			convertToCivilianTime,
			doubleDigits,
			formatClock("hh:mm:ss tt"),
			display(log)
		),
		oneSecond()
	)
startTicking()	