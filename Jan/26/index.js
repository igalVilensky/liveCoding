/* const array = ["hi", "bye", "hello"];
const copyArray = [true, ...array, "wow"];
copyArray[6] = "new";
console.log(array);
console.log(copyArray); */

/* Write a function that it returns  “Two for me and one for you” when no arguments are passed
e.g
console.log(twofer("Fran")) ---> "Two for me and one for Fran"
console.log(twofer()) ---> "Two for me and one for you" */

function twofer(userName) {
  console.log(
    userName
      ? `Two for me and one for ${userName}`
      : `Two for me and one for you`
  );
}

console.log(twofer("Fran"));
console.log(twofer());

/* Write a function  that it still calculates the power of a number even if the exp argument is not passed to it. The default exp should be set to 2.
e.g
console.log(exponent(3, 3)) ---> 27
console.log(exponent(3)) ---> 9 */

const exponent = (x, y = 2) => x ** y;
console.log("-----------");
console.log(exponent(3, 3));

/* Write a function that it returns the total amount of arguments passed to it.
e.g
console.log(howManyArgs()) ---> 0
console.log(howManyArgs(1, false, "hello")) ---> 3
console.log(howManyArgs("better")) ---> 1 */

function howManyArgs(...arg) {
  console.log(arguments.length);
}

console.log("-----------");
console.log(howManyArgs());
console.log(howManyArgs(1, false, "hello"));
console.log(howManyArgs("better"));

/* Write a function which accepts any amount of numbers and return the sum of their addition
e.g
console.log(sum(1)) ---> 1
console.log(sum(1, 15)) ---> 16
console.log(sum(25, 25, 20)) ---> 70 */

function sum(int, int2) {
  /* int = 0;
  int2 = 0; */
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log("-----------");
console.log(sum(1));
console.log(sum(1, 15));
console.log(sum(25, 25, 20));

/* Bonus: Write a function which accepts any amount of numbers and returns the average.
e.g
console.log(average(0)) ---> 0
console.log(average(1, 2)) ---> 1.5
console.log(average(1, 3, 6, 10)) ---> 5
console.log(average(12, 14, 16)) ---> 14
 */

/*  const average = (...nums) => {

 } */

const average = (...nums) => {
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    result += nums[i] / nums.length;
  }
  console.log("-----------");
  console.log(result);
};

console.log(average(0));
console.log(average(1, 2));
console.log(average(1, 3, 6, 10));
console.log(average(12, 14, 16));

// find()

let arr1 = ["1", "2", "3", "4"];

let found = arr1.map((x) => x + 2);

console.log(found);

// hackerSpeak
// Odds and Evens.
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]
// [6, 9, 10, 20] ➞ expected output: [5, 10, 9, 19]
// how many chr in a str(not case sens)
// howManyStr(“I like pizza”,“p”) -> 1

/* c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. NB: 
for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

Examples:

hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r" */

const hackerSpeak = (str) => {
  return str
    .toLowerCase()
    .split("")
    .map((chr) => {
      switch (chr) {
        case "a":
          return "4";
        case "e":
          return "3";
        case "i":
          return "1";
        case "o":
          return "0";
        case "s":
          return "5";
        default:
          return chr;
      }
    })
    .join("");
};

console.log(hackerSpeak("javascript is cool"));

//Odds and Evens.
// Create a program that changes a given array by adding 1 to each odd integer and subtracting 1 from each even integer. Examples:
// [3, 5, 2, 4] ➞ expected output: [4, 6, 1, 3]

const oddOrEven = (...args) => {
  return args.map((item) => (item % 2 == 0 ? item++ : item--));
};

console.log(oddOrEven(2, 4, 7));
