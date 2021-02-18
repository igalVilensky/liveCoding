// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]

// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
// Notes
// Zero is a non-negative integer.
// The given array only has integers and strings.
// Numbers in the array should not repeat.
// The original order must be maintained.
/* 
const filterArray = (arr) => {
  arr = new Set();

  return arr.size;
};

console.log(filterArray([1, 2, "aasf", "1", "123", 123, "123"])); */

// Create a function which returns the number of true values there are in an array.

// countTrue([]) ➞ 0
// Notes
// Return 0 if given an empty array.
// All array items are of the type bool (true or false).

const countTrue = (arr) => {
  let result;

  result = arr.reduce((acc, cur) => {
    return acc + (cur === true);
  }, 0);

  return result;
};

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false, false]));
console.log(countTrue([]));
// reduce

let arr2 = ["hi", "hello", "what"];

let test = arr2.reduce((acc, cur) => {
  return acc + (" " + cur + " ");
});

console.log(test);

// In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided dice.

// If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.

// Given you and your friend's tile number, create a function that returns if it's possible to earn a bonus when you roll the dice.

// Notes
// You cannot move backward (which is why example #3 doesn't work).
// If you are already on the same tile, return false, as you would be advancing away.
// Expect only positive integer inputs.

const possibleBonus = (x, y) => {
  let result;
  let diceMax = 6;
  if (x > y || x === y) {
    result = false;
  } else if (x + diceMax > y) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

console.log(possibleBonus(3, 7));
console.log(possibleBonus(7, 7));
console.log(possibleBonus(1, 9));
console.log(possibleBonus(5, 3));

// Create a function that takes a country's name and its area as arguments and returns the area of the country's proportion of the total world's landmass.
// Notes
// The total world's landmass is 148,940,000 [Km^2]
// Round the result to two decimal places.

const areaOfCountry = (name, area) => {
  let result;

  let landmass = 148940000;
  let onePerOfLand = landmass / 100;
  result = area / onePerOfLand;

  result = Math.round((result + Number.EPSILON) * 100) / 100;
  return `${name} is ${result}% of the total world's landmass`;
};

console.log(areaOfCountry("Russia", 17098242));
console.log(areaOfCountry("USA", 9372610));
console.log(areaOfCountry("Iran", 1648195));
console.log(areaOfCountry("Israel", 22145));
console.log(areaOfCountry("Kazakhstan", 2724900));

// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).

// Examples
// addName({}, "Brutus", 300) ➞ { Brutus: 300 }

// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
// Notes
// The value argument will be a number.

const addName = (obj, name, value) => {
  //   let newObj;
  //   let some = Object.values(obj);
  //   if (obj == "") {
  //     newObj = { name, value };
  //   } else {
  //     let objEnt = Object.entries(obj);
  //     newObj = { objEnt, name, value };
  //   }
  //   return some;
};

console.log(addName({}, "Brutus", 300));
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));

const obj10 = {
  name: "igal",
  age: 35,
  married: true,
};

let val = Object.values(obj10);

let keys = Object.keys(obj10);

let entr = Object.entries(obj10);

console.log(val);
console.log(keys);
console.log(entr);

let newObj = Object.keys(obj10) + " " + Object.values(obj10);

let some = newObj.split(" ");

console.log(some);

let obj9 = {};

var i;
for (i in some) {
  some[i] = some[i].split(":");
  obj9[some[i]] = some[i];
}

console.log(obj9);

// Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).

// Examples
// addName({}, "Brutus", 300) ➞ { Brutus: 300 }

// addName({ piano: 500 }, "Brutus", 400) ➞ { piano: 500, Brutus: 400 }

// addName({ piano: 500, stereo: 300 }, "Caligula", 440) ➞ { piano: 500, stereo: 300, Caligula: 440 }
// Notes
// The value argument will be a number.

console.log("*************************");

const addName3 = (obj, name, value) => {
  let objMain = { obj, name, value };
  let result;
  if (Object.entries(objMain.obj).length === 0) {
    return (obj = "");
  }

  console.log(objMain.obj.length);
  return objMain;
};

console.log(addName3({}, "Brutus", 300));
/* console.log(addName3({ piano: 500 }, "Brutus", 400));
console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440)); */

// Write a function that returns 0 if the input is 1, and returns 1 if the input is 0.

// Examples
// flip(1) ➞ 0

// flip(0) ➞ 1
// Notes
// Try completing this challenge without using any:

// Conditionals
// Ternary operators
// Negations
// Bit operators

const flip = (n) => {
  let result;
  if (n === 0) {
    result = 1;
  } else {
    result = 0;
  }

  return result;
};

console.log(flip(0));
console.log(flip(1));

// Create a function that will take a HEX number and returns the binary equivalent (as a string).

// Examples
// toBinary(0xFF) ➞ "11111111"

// toBinary(0xAA) ➞ "10101010"

// toBinary(0xFA) ➞ "11111010"
// Notes
// The number will be always an 8-bit number.

const toBinary = (str) => {
  let result = (str >>> 0).toString(2);

  return result;
};

console.log(toBinary(0xff));
console.log(toBinary(0xaa));
console.log(toBinary(0xfa));
