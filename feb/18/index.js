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

// Check if a string title is a title string or not. A title string is one which has all the words in the string start with a upper case letter.

// Examples
// checkTitle("A Mind Boggling Achievement") ➞ true

// checkTitle("A Simple Java Script Program!") ➞ true

// checkTitle("Water is transparent") ➞ false

const checkTitle = (str) => {
  let bigLet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let blToArr = bigLet.split("");
  let result;
  let counter = 0;
  let strToArr = str.split(" ");
  for (let i = 0; i < strToArr.length; i++) {
    for (let j = 0; j < blToArr.length; j++) {
      if (strToArr[i][0] == blToArr[j]) {
        counter++;
        /*   console.log(counter);
        console.log(strToArr.length); */
        if (counter == strToArr.length) {
          result = true;
        } else {
          result = false;
        }
        /*    console.log(blToArr[j]); */
      }
    }
  }

  return result;
};

console.log(checkTitle("A Mind Boggling Achievement"));
console.log(checkTitle("A Simple Java Script Program!"));
console.log(checkTitle("Water is transparent"));

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

const filterArray = (arr) => {
  let finArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
      finArr.unshift(arr[i]);
    }
  }
  return finArr.reverse();
};

console.log("***********");
console.log(filterArray([1, 2, "a", "b"]));
console.log(filterArray([1, "a", "b", 0, 15]));
console.log(filterArray([1, 2, "aasf", "1", "123", 123]));

let num = 10;

let num2 = 20;

console.log(10 >> 20);

/* 
Create a function that finds the highest integer in the array using recursion.

Examples
findHighest([-1, 3, 5, 6, 99, 12, 2]) ➞ 99

findHighest([0, 12, 4, 87]) ➞ 87

findHighest([6,7,8]) ➞ 8
 */

const findHighest = (arr) => {
  let copyArr = arr.slice();

  if (copyArr.length == 1) {
    console.log(copyArr[0]);
    return copyArr[0];
  }

  if (copyArr[0] < copyArr[1]) {
    return copyArr.splice(0, 1);
  } else {
    copyArr.splice(1, 1);
  }

  return findHighest(copyArr);
};

console.log(findHighest([-1, 3, 5, 6, 99, 12, 2]));

function nearHundred(n) {
  if (Math.abs(n) >= 90 && Math.abs(n) <= 110) {
    return true;
  } else if (Math.abs(n) >= 190 && Math.abs(n) <= 210) {
    return true;
  } else {
    return false;
  }
}

console.log(nearHundred(89));
console.log(nearHundred(93));
function posNeg(a, b, negative) {
  let result;
  if (Math.sign(a) !== Math.sign(b) && negative === false) {
    result = true;
  } else if (Math.sign(a) === Math.sign(b) && negative === true) {
    result = true;
  } else if (Math.sign(a) > 0 && Math.sign(b) > 0 && negative === true) {
    result = false;
  } else {
    result = false;
  }

  return result;
}

function posNeg(a, b, negative) {
  let result;
  if (Math.sign(a) !== Math.sign(b) && negative === false) {
    result = true;
  } else if (a > 0 && b > 0 && negative === true) {
    result = false;
  } else if (a < 0 && b < 0 && negative === true) {
    result = true;
  } else {
    result = false;
  }

  return result;
}

console.log("************************************");
console.log(posNeg(1, 1, true));
console.log(posNeg(1, -1, false));
console.log(posNeg(-1, -1, true));

// Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged.

// Examples

// notString('candy') → not candy
// notString('x') → not x
// notString('not bad') → not bad

const notString = (str) => {
  let result = "";
  let strToArr = str.split(" ");

  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[0] == "not") {
      result = `${str}`;
    } else if (!str.includes("not")) {
      result = `not ${str}`;
    } else {
      result = `not ${str}`;
    }
  }

  return result;
};

console.log(notString("candy"));
console.log(notString("x"));
console.log(notString("not bad"));
console.log(notString("not"));
console.log(notString("is not"));

// Given a non-empty string and an int n, return a new string where the char at index n has been removed.

// The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

// Examples

// missingChar('kitten', 1) → ktten
// missingChar('kitten', 0) → itten
// missingChar('kitten', 4) → kittn

const missingChar = (str, n) => {
  let strToArr = str.split("");

  let result = strToArr.filter((chr) => chr !== str.charAt(n));

  return result.join("");
};

console.log(missingChar("kitten", 1));
console.log(missingChar("kitten", 0));
console.log(missingChar("kitten", 4));
