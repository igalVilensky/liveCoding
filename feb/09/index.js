/* List Properties. Create a function that returns an array of properties of a javascript object.
Example
let student = {
  name: "Mike", 
  class: "4A" 
  course: "English"
}
Expected output:
["name", "class", "course"]*/

let student = {
  name: "Mike",
  class: "4A",
  course: "English",
};

const propRet = (obj) => {
  return Object.entries(student);
};

console.log(student);
console.log(propRet(student));

/*Merge. Create a function that takes two objects as its parameters and merges them together into a new object.
Example
let first = {firstName: "John"}
let last = {lastName: "Smith"}
Expected output:
{firstName: "John", lastName: "Smith"} */

let first = { firstName: "John" };
let last = { lastName: "Smith" };

const mergeObj = (obj1, obj2) => {
  return Object.assign(first, last);
};

console.log(mergeObj(first, last));

// loop

let loopTil1 = () => {
  let result = "";
  for (let i = 1; i <= 256; i *= 2) {
    result += `${i} `;
  }

  return result;
};

console.log(loopTil1());

const triArea = (num1, num2) => {
  let result;
  let calc = (num1 * num2) / 2;

  result = `The area of the triangle is (${num1} * ${num2}) / 2 = ${calc} m`;

  return result;
};
console.log(triArea(3, 2));
console.log(triArea(51, 6));

function howManySeconds(hours) {
  let result;

  let oneMin = 60;
  let oneHour = 60;

  result = hours * oneMin * oneHour;

  return result;
}

console.log(howManySeconds(2));

function nextEdge(side1, side2) {
  let result;

  let maxRange = side1 + side2 - 1;

  result = maxRange;
  return result;
}

console.log(nextEdge(8, 10));

function findPerimeter(length, width) {
  let result;

  let per = length * 2 + width * 2;

  result = per;

  return result;
}

console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));

/* Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

Examples
lessThan100(22, 15) ➞ true
// 22 + 15 = 37

lessThan100(83, 34) ➞ false
// 83 + 34 = 117

lessThan100(3, 77) ➞ true */

const lessThan100 = (num1, num2) => {
  return num1 + num2 < 100;
};

console.log(lessThan100(3, 77));
console.log(lessThan100(83, 34));
