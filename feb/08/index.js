// callbacks
function first(cb) {
  const funFunction = () => "Noooo";
  return cb;
}
function cb() {
  return "fun";
}

console.log(first(cb()));

// map
const names = ["Zain", "Olga", "Nancy", "Nancy2"];
//const heyNames = names.map((item, index) => `Hi ${item}, you live in ${index}`);
const heyNames = names.map((name) => `Hi ${name}`);

console.log(heyNames);
//console.log(names);
// reduce
const numArr = [2, 3, 4, 5, 6, 78, 8];
const reducer = (acc, cur) => acc + cur;
const totalArr = numArr.reduce(reducer, 0);
console.log(totalArr);
// filter
const filterArr = names.filter((item) => item.length == 7);
console.log(filterArr);

// find
const findVal = names.find((item) => item.length == 400);
console.log(findVal);

// fill
const numbers = [2, 4, 5, 67, 8, 8, 9, 5, 4];
//numbers.fill(3);
console.log(numbers);

// some
const isEven = (item) => item % 2 == 0;
console.log(numbers.some(isEven));

// every
const isBigger = (item) => item > 55;
console.log(numbers.every(isBigger));

// sort
const alpha = ["a", "c", "b", 2, "!", "ü"]; // UTF-16
console.log(alpha.sort());
const words = ["hi", "a", "web", "development"];
const sortedArr = words.sort((a, b) => b.length - a.length);
console.log(sortedArr);

console.log([11, 2, 1, 22].sort((a, b) => a - b));

// for in
const person = {
  userName: "Zain",
  age: 22,
  add: "Hamburg",
};

for (prop in person) {
  console.log(`${prop} : ${person[prop]}`);
}
// for of

const people = [
  {
    userName: "Zain",
    age: 22,
    add: "Düs",
  },
  {
    userName: "Olga",
    age: 21,
    add: "Berlin",
  },
  {
    userName: "Nancy",
    age: 40,
    add: "L",
  },
];

// loops,  ,SIAF,IIFE , closure, Array advanced methods(map,filter,reduce)

// ==       ===     !=       <=
//  &&   ||

let con1 = 1 < 23; // true
let con2 = 1 == 23; // false
let con3 = 1 <= 23; // true
console.log(con3);
// true && true = true
// true && false = false
// true || true = true
// false || true = true
// false || false = false
if (con1 && con2) {
  console.log("Nice you are the best person in the world");
}
const arr1 = [333, 333456, 777];
let box; // box is ready
for (let i = 0; i <= 5; i++) {
  // i = 2
  box = ""; // box is empty now
  for (let j = 0; j < i; j++) {
    // j = 3
    box += "+"; // box=  +
  }
  console.log(box); // ++
}

let text = "Hi";
console.log(text);
text += "something";
console.log(text);
text = "";
console.log(text);
text = "c";
text += "o";
text += "o";
text += "l";
text += " ";
console.log();
text = "c";
text += "o";
text += "o";
text += "l";
console.log(text);

/* Create a function that returns an object has following output.

Examples:

ABC -> { A: 1, B: 1, C: 1 } QQQ -> { Q: 3} */

const countObj = (str) => {
  let strToArr = str.split("");
  console.log(strToArr);
  let result = strToArr.reduce((acc, cur) => {
    acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
    return acc;
  }, {});

  return result;
};

console.log(countObj("igal vilensky"));

/* const countLettersAdc = (str) => {
    let arr = str.toLowerCase().split("");
    console.log(arr);
    let result = arr.reduce((acc, cur) => {
      acc[cur] = acc[cur] ? acc[cur] + 1 : 1;
      return acc;
    }, {});
    return result;
  };
  console.log(countLettersAdc("tree"));
 */

function zodiac(yearStr) {
  let arr = yearStr.split("-");
  console.log(arr);
  const result = {
    birthDay: arr[0],
    birthMonth: arr[1],
    birthYear: arr[2],
    yourZodiac: function () {
      data = [
        { signName: "Not real day!", from: "0000" },
        { signName: "Capricorn", from: "0101" },
        { signName: "Aquarius", from: "0120" },
        { signName: "Pisces", from: "0220" },
        { signName: "Aries", from: "0321" },
        { signName: "Taurus", from: "0420" },
        { signName: "Gemini", from: "0521" },
        { signName: "Cancer", from: "0621" },
        { signName: "Leo", from: "0723" },
        { signName: "Virgo", from: "0823" },
        { signName: "Libra", from: "0923" },
        { signName: "Scorpio", from: "1023" },
        { signName: "Sagittarius", from: "1123" },
        { signName: "Capricorn", from: "1222" },
        { signName: "Not real day!", from: "1232" },
      ];

      console.log(result);
      // Extra Protection
      // if (this.birthDay > 31 || this.birthMonth >12){
      //   return "this is not a valid date"
      // }
      let monthDay = this.birthMonth + this.birthDay;
      let i = 0;
      while (monthDay >= data[i].from && i < data.length) {
        i++;
      }
      console.log(data.from);
      let yourZodiacName = data[i - 1].signName;
      return `your Zodiac sign name ${yourZodiacName}`;
    },
  };
  return result.yourZodiac();
}
console.log(zodiac("10-06-1989"));
console.log(zodiac("14-02-2002"));

/* const zodiac1 = (birthDate) => {
  let strToArr1 = birthDate.split("");

  const result1 = {
    birthDay: strToArr1[0],
    birthMonth: strToArr1[1],
    birthYear: strToArr1[2],
    yourZodiac: function () {
      data = [
        { signName: "Not real day!", from: "0000" },
        { signName: "Capricorn", from: "0101" },
        { signName: "Aquarius", from: "0120" },
        { signName: "Pisces", from: "0220" },
        { signName: "Aries", from: "0321" },
        { signName: "Taurus", from: "0420" },
        { signName: "Gemini", from: "0521" },
        { signName: "Cancer", from: "0621" },
        { signName: "Leo", from: "0723" },
        { signName: "Virgo", from: "0823" },
        { signName: "Libra", from: "0923" },
        { signName: "Scorpio", from: "1023" },
        { signName: "Sagittarius", from: "1123" },
        { signName: "Capricorn", from: "1222" },
        { signName: "Not real day!", from: "1232" },
      ];

      let monthDay1 = this.birthMonth + this.birthDay;
      let i = 0;
      while (monthDay1 >= data[i].from && i < data.length) {
        i++;
      }

      let yourZod = data[i - 1].signName;
      return `${yourZod}`;
    },
  };
  return result1.yourZodiac();
};

console.log(zodiac1("10-06-1989"));
console.log(zodiac1("14-02-2002"));
 */

/* Create a function that takes a number as an argument, increments the number by +1 and returns the result.

Examples
addition(0) ➞ 1

addition(9) ➞ 10

addition(-3) ➞ -2 */

const addition = function (int) {
  let result = 0;

  result = int + 1;

  return result;
};

console.log(addition(-3));
