/* Create a function to return the amount of potatoes there are in a string.

Examples
potatoes("potato") ➞ 1

potatoes("potatopotato") ➞ 2

potatoes("potatoapple") ➞ 1 */

const potatoes1 = (str) => {
  let resultO = "";
  let result = "";
  let strToArr = str.split("");
  let word = "potato";
  let wordToArr = word.split("");

  for (let i = 0; i < strToArr.length; i++) {
    for (let j = 0; j < wordToArr.length; j++) {
      if (strToArr[i] == wordToArr[j]) {
        resultO += strToArr[i];
        result = resultO;
      }
    }
  }
  return result;
  // console.log(strToArr);
  // console.log(wordToArr);
};

console.log(potatoes1("potato"));
/* console.log(potatoes1("potatopotato"));
  console.log(potatoes1("potatoapple")); */

// Create a function to return the amount of potatoes there are in a string.

// Examples
// potatoes("potato") ➞ 1

// potatoes("potatopotato") ➞ 2

// potatoes("potatoapple") ➞ 1

const potatoes = (str) => {
  let result = "";
  let strToArr = str.spl;

  if (str.includes("potato")) {
    result = 1;
  } else if (str.includes("potato")) {
    result = 1;
  }

  return result;
};

console.log(potatoes("potato"));
console.log(potatoes("potatopotato"));
console.log(potatoes("potatoapple"));
console.log("***************************");
/* 
var wordCounts = {};
var words = str.split(/\b/);

for (var i = 0; i < words.length; i++)
  wordCounts["_" + words[i]] = (wordCounts["_" + words[i]] || 0) + 1; */

// const potatoes = (str) => {
//   let word = "potato";
//   let wordToArr = word.split("");
//   let strToArr = str.split("");
//   let result = 0;
//   for (let i = 0; i < strToArr.length; i++) {
//     for (let j = 0; j < wordToArr.length; j++)
//       if (strToArr[i] == wordToArr[j]) {
//         result++;
//       }
//   }

//   return result;
// };

// console.log(potatoes("potato"));
// console.log(potatoes("potatopotato"));
// console.log(potatoes("potatoapple"));

// const potatoes = (str) => {
//   let result = 0;
//   let word = "potato";
//   let strToArr = str.split("");
//   console.log(strToArr);
//   let wordToArr = word.split("");
//   console.log(wordToArr);
//   for (let i = 1; i < strToArr.length; i++) {
//     for (let j = 1; j < wordToArr.length; j++) {
//       if (strToArr[i] == wordToArr[j]) {
//         result = 1;
//       }
//     }
//   }

//   /*  if (str.indexOf(word) !== -1) {
//     result = 1;
//   } */

//   return result;
// };

// console.log(potatoes("potato"));
// console.log(potatoes("potatopotato"));
// console.log(potatoes("potatoapple"));

/* const vowelCount = (str) => {
  let vowelList = "aeiouAEIOU";
  let vcount = 0;
  for (var i = 0; i < str.length; i++) {
    if (vowelList.indexOf(str[i]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
};

console.log(vowelCount("hello"));
console.log(vowelCount("fbw")); */

// Create a function to return the amount of potatoes there are in a string.

// Examples
// potatoes("potato") ➞ 1

// potatoes("potatopotato") ➞ 2

// potatoes("potatoapple") ➞ 1

const potatoes10 = (str) => {
  let word = "potato";
  let continueStr;
  let potatoBox = 0;
  continueStr = str.substring(word.length);
  if (str.includes(word)) {
    potatoBox++;

    console.log(continueStr);
  } else if (continueStr.includes(word)) {
    potatoBox += 1;
    console.log(potatoBox);
  } else {
    return false;
  }

  return potatoBox;
};

console.log(potatoes10("potatoapple"));
console.log(potatoes10("potatopotato"));

/* According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.

This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

Examples
dropRight([1, 2, 3]) ➞ [1, 2]

dropRight([1, 2, 3], 2) ➞ [1]

dropRight([1, 2, 3], 5) ➞ []

dropRight([1, 2, 3], 0) ➞ [1, 2, 3] */

/* const dropRight = (arr, num = 1) => {
  let result;
  let const poping = (arr) => {const dropRight = (arr, num = 1) => {
  let result;
  let const poping = (arr) => {
    return arr.pop();
} 


  

  return num;
};

console.log(dropRight([1, 2, 3]));
console.log(dropRight([1, 2, 3], 2));
console.log(dropRight([1, 2, 3], 5));
console.log(dropRight([1, 2, 3], 0));
    return arr.pop();
} 


  

  return num;
};

console.log(dropRight([1, 2, 3]));
console.log(dropRight([1, 2, 3], 2));
console.log(dropRight([1, 2, 3], 5));
console.log(dropRight([1, 2, 3], 0)); */

/* const dropRight = (arr, num = 1) => {
  let result = arr.map((x) => arr.shift());

  return result;
};

console.log(dropRight([1, 2, 3]));
console.log(dropRight([1, 2, 3], 2));
console.log(dropRight([1, 2, 3], 5));
console.log(dropRight([1, 2, 3], 0)); */

// Examples
// dropRight([1, 2, 3]) ➞ [1, 2]

// dropRight([1, 2, 3], 2) ➞ [1]

// dropRight([1, 2, 3], 5) ➞ []

// dropRight([1, 2, 3], 0) ➞ [1, 2, 3] */

/* The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. 

We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.

Examples

sleepIn(true, true) → true
sleepIn(true, false) → false
sleepIn(false, true) → true
 */

function sleepIn(weekday, vacation) {
  let result;
  if ((weekday == true && vacation == true) || weekday == false) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(sleepIn(false, true));

/* We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each is smiling.

We are in trouble if they are both smiling or if neither of them is smiling. Return true if we are in trouble.

Examples

monkeyTrouble(true, true) → true
monkeyTrouble(false, false) → true
monkeyTrouble(true, false) → false */

const monkeyTrouble = (a, b) => {
  let result;

  if (a == true && b == true) {
    result = true;
  } else if (a == false && b == false) {
    result = true;
  } else {
    result = false;
  }
  return result;
};

console.log(monkeyTrouble(true, true));

/* 
Given two int values, return their sum. Unless the two values are the same, then return double their sum.

Examples

sumDouble(1, 2) → 3
sumDouble(3, 2) → 5
sumDouble(2, 2) → 8 */

const sumDouble = (int1, int2) => {
  let result;
  if (int1 !== int2) {
    result = int1 + int2;
  } else {
    result = int1 * int2;
  }

  return result;
};

console.log(sumDouble(2, 2));

function diff21(n) {
  let absolute = 21;
  let difference = absolute - n;

  if (n <= 21) {
    result = n - absolute;
  } else {
    result = difference * 2;
  }

  return Math.abs(result);
}

console.log(diff21(50));

// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23.

// We are in trouble if the parrot is talking and the hour is before 7 or after 20. Return true if we are in trouble.

// Examples

// parrotTrouble(true, 6) → true
// parrotTrouble(true, 7) → false
// parrotTrouble(false, 6) → false

function parrotTrouble(talking, hour) {}

// 20 -> 10100
// 10-> 1010
// 44-> 101100

const convert = (int) => int.toString(2);

console.log(convert(20));

const dropRight = (arr, num = 1) => arr.reverse().slice(num).reverse();

console.log("*****************************************************");
console.log(dropRight([1, 2, 3])); // 12
console.log(dropRight([1, 2, 3], 2)); // 1
console.log(dropRight([1, 2, 3], 5)); // empty
console.log(dropRight([1, 2, 3], 0)); // full
