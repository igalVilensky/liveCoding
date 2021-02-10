// Scrabble. Write a program that, given an array of scrabble tiles, counts the maximum score that a player can earn from the tiles in their hand. Example:
//  [ { tile: “N”, score: 1 },
//    { tile: “K”, score: 5 },
//    { tile: “Z”, score: 10 },
//    { tile: “X”, score: 8 },
//    { tile: “D”, score: 2 },
//    { tile: “A”, score: 1 },
//    { tile: “E”, score: 1 }

const tiles = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 },
];

const sumScrabble = (arr) => {
  return arr.reduce((acc, cur) => acc + cur.score, 0);
};
console.log(sumScrabble(tiles));

// 4. Switch Keys and Values. Create a function to get a copy of an object. The copy must switch the keys and values.
// Example:
// let person = {
//   name: “John”,
//   job: “teacher”
// }
// Expected Output:
// {“John”: name, “teacher”: job}

/* let person = {
  name: "John",
  job: "teacher",
};
const valKeySwitch = (obj) => {
  let copiedPerson = person;
  copiedPerson["John"] = obj["name"];
  copiedPerson["job"] = obj["teacher"];
  copiedPerson.name = "name";
  copiedPerson.job = "job";

  return copiedPerson;
};

console.log(valKeySwitch(person)); */

let person = {
  name: "John",
  job: "teacher",
};
/* const valKeySwitch = (obj) => {
  let copiedPerson = Object.entries(person);
  console.log(copiedPerson);
  return copiedPerson[0].reverse().reduce(
    (acc, cur) => ({
      ...acc,
      [(this.name = person.name)]: (this.name = person.name),
      [(this.job = person.job)]: (this.job = person.job),
    }),
    {}
  );
};

console.log(valKeySwitch(person)); */

const valKeySwitch1 = (obj) => {
  let objEnd = {};
  for (let prop in obj) {
    objEnd[obj[prop]] = prop;
  }
  return objEnd;
};

console.log(valKeySwitch1(person));

// 5. Return Keys and Values. Write a program that takes an object and returns an array which contains two arrays: one for the keys of the object and the other for the values of the object.
// Examples:
// { a: 1, b: 2, c: 3 } ➞ [[“a”, “b”, “c”], [1, 2, 3]]
// {key: true} ➞ [[“key”], [true]]

const keysValues = (obj) => {
  const newObj = { a: 1, b: 2, c: 3 };
  const keyArr = Object.keys(obj);
  const valsArr = Object.values(newObj);
  function valKeySwitch1(obj) {
    let objEnd = {};
    for (let prop in obj) {
      objEnd[obj[prop]] = prop;
    }
    return valKeySwitch1();
  }
  return [keyArr, valsArr];
};

console.log(keysValues(valKeySwitch1(person)));

/* In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species. 

You have to implement a function that returns the total number of legs of all the animals.

Examples
animals(2, 3, 5) ➞ 36

animals(1, 2, 3) ➞ 22

animals(5, 2, 8) ➞ 50
Notes
Don't forget to return the result.
The order of animals passed is animals(chickens, cows, pigs).
Remember that the farmer wants to know the total number of legs and not the total number of animals. */

const chickens = {
  name: "chicken",
  legs: 2,
};

const cows = {
  name: "cow",
  legs: 4,
};

const pigs = {
  name: "pig",
  legs: 4,
};

const animals = { chickens, cows, pigs };

console.log(animals);

const legsCount = (chick, co, pi) => {
  return (
    `${chickens.legs} ` * `${chick}` +
    `${cows.legs}` * `${co}` +
    `${pigs.legs}` * `${pi}`
  );
};

console.log(legsCount(5, 2, 8));

/* You are counting points for a basketball game, given the amount of 2-pointers scored and 3-pointers scored, find the final points for the team and return that value.

Examples
points(1, 1) ➞ 5

points(7, 5) ➞ 29

points(38, 8) ➞ 100 */

const points = (two, three) => {
  return two * 2 + three * 3;
};

console.log(points(38, 8));
