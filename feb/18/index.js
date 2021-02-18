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
