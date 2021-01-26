const array = ["hi", "bye", "hello"];
const copyArray = [true, ...array, "wow"];
copyArray[6] = "new";
console.log(array);
console.log(copyArray);

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

//const exponent = (x * y) => {};

/* Write a function that it returns the total amount of arguments passed to it.
e.g
console.log(howManyArgs()) ---> 0
console.log(howManyArgs(1, false, "hello")) ---> 3
console.log(howManyArgs("better")) ---> 1 */

function howManyArgs(...arg) {
  console.log(arguments.length);
}

console.log(howManyArgs());
console.log(howManyArgs(1, false, "hello"));
console.log(howManyArgs("better"));

/* Write a function which accepts any amount of numbers and return the sum of their addition
e.g
console.log(sum(1)) ---> 1
console.log(sum(1, 15)) ---> 16
console.log(sum(25, 25, 20)) ---> 70 */

function sum() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

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

  console.log(result);
};

console.log(average(2, 4, 5, 67, 7, 8, 3));
console.log(average(0));
console.log(average(1, 2));
console.log(average(1, 3, 6, 10));
console.log(average(12, 14, 16));
