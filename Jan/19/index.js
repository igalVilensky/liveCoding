/* let arr = [];
arr[0] = "Igal";
arr[1] = "Igeal";
arr[2] = "Itrgal";

let pos = arr.indexOf("Igal");
console.log(pos);
console.log(arr);
let remIt =  */

/* Create a program with two variables: “item” and “times”. Create a program that repeats the “item” as many times as specified by “times”. The first variable (“item”) is the item that needs repeating while the second argument (“times”) is the number of times the item is to be repeated. Print the result in an array. Examples:
(“example”, 3) ➞ [“example”, “example”, “example”]
 */

/* let items = 1;

let times = 3;

let text = " ";
for (i = 1; i <= times; i++) {
  text = "items";
  console.log(items);
}

console.log(text);
 */

// second

/* const findGreatest = (array, number) => {
  let greaterNum = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > number) {
      greaterNum.push(array[i]);
    }
    return greaterNum;
  }
};

console.log(findGreatest([1, 5, 9, 8], 7)); */

/* const findGreatest = (numberList, compareTo) => {
  let higherNumbers = [];
  for (i = 0; i < numberList.length; i++) {
    numberList[i] > compareTo ? higherNumbers.push(numberList[i]) : {};
  }
  return higherNumbers;
};
console.log(findGreatest([3, 4, 5, 7, 8, 9], 7));
 */

// Create a program with two variables: “item” and “times”.
// Create a program that repeats the “item” as many times as specified by “times”.
// The first variable (“item”) is the item that needs repeating while the second argument (“times”) is the number of times the item is to be repeated.
// Print the result in an array. Examples:
// (“example”, 3) ➞ [“example”, “example”, “example”]

const rep = (item, times) => {
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push(item);
  }
  return result;
};
console.log(rep("Igal", 5));

// The Greater Numbers.
//  Create a function which accepts two arguments:
// the first argument being an array of numbers,
//and the second argument being a number.
// The function should return the elements of the array which are greater than the second argument.
// i.e.
// findGreatest([3, 4, 5], 4) ➞ 5
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10
const findGreatest = (arr, num) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > num) {
      result.push(arr[i]);
    }
  }
  return result.join(", ");
};

console.log(findGreatest([3, 4, 12, 44], 3));

// Vowels. Create a function that takes a string in its parameters and counts the number of vowels (i.e. in English, “a, e, i, o, u”) in the string.
// i.e. findVowels(“this is a string”) ➞ 4

/* const vowels = ["a", "e", "i", "o", "u"];

const findVowels = (str) => {
    let result = 0;
    for (let i=0; i <= str; i++) {
        if (vowels.includes(str.charAt(i)) {

         result++
        }
    }
    return result;
}

console.log(findVowels("this is a string")); */

const vowels = ["a", "e", "i", "o", "u"];

const findVowels = (str) => {
  let result = 0;
  for (let i = 0; i <= str.length; i++) {
    if (vowels.includes(str.charAt(i))) {
      result++;
    }
  }
  return result;
};

console.log(findVowels("this is a string"));

// A set is a collection of unique items.
// A set can be formed from an array by removing all duplicate items.
// Create a program which transforms an array into a set of unique values.

const noDup = (numberList) => {
  let result = [];
  for (let i = 0; i < numberList.length; i++) {
    if (result.includes(numberList[i])) {
    } else {
      result.push(numberList[i]);
    }
  }
  return result;
};

console.log(noDup([1, 4, 4, 7, 7, 7]));
console.log(noDup([1, 6, 6, 9, 9]));
console.log(noDup([2, 2, 2, 2, 2, 2]));
console.log(noDup([5, 10, 15, 20, 25]));

// The Greater Numbers.
//  Create a function which accepts two arguments:
// the first argument being an array of numbers,
//and the second argument being a number.
// The function should return the elements of the array which are greater than the second argument.
// i.e.
// findGreatest([3, 4, 5], 4) ➞ 5
// findGreatest([10, 20, 30], 12) ➞ 20, 30
// findGreatest([0, 10, 3], 4) ➞ 10

const findGreatest1 = (arr, num) => {
  let result = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > num) {
      return result.push(arr[i]);
    }
  }
};

console.log(findGreatest1([1, 7, 9, 8], 3));

/* const lookUp = (keyword, stringList) => {
  let couples = [];

  for (i = 0; i < stringList.length; i++) {
    if (stringList[i].includes() == keyword) {
      couples.push(stringList[i]);
    }
  }
  if (couples.length == 0) {
    return `no words match the inital letter of ${keyword}`;
  }
  return couples;
};
var randomWords = [
  "Wale",
  "Super",
  "Bird",
  "Sonic",
  "Landscape",
  "travelling",
  "Tree",
  "Beach",
  "New York City",
  "Chicago",
];
var keyword = "Wa";
console.log(lookUp(keyword, randomWords)); */

// Create a function that takes an initial string and an array of words,
// and returns a filtered array of the words that start with the same letters as the initial string.
// Notes:
// If none of the words match, return an empty array.
// Keep the filtered array in the same relative order as the original array of words.
/* Examples:
dictionary(“bu”, [“button”, “breakfast”, “border”]) ➞ [“button”]
dictionary(“tri”, [“triplet”, “tries”, “trip”, “piano”, “tree”]) ➞ [“triplet”, “tries”, trip”]
dictionary(“beau”, [“pastry”, “delicious”, “name”, “boring”]) ➞ [] */

const dictionary = (str, arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes(str)) {
      result.push(arr[i]);
    }
  }

  return result;
};

var arr = ["pastry", "delicious", "name", "boring"];
var str = "me";
console.log(dictionary(str, arr));
