// Creat a constructor function that receive product details (productName,prise,inventory) thin build a method to display this data in clear outputted form
// build two product using your constructor function
// i.e : (Pepsi,2.33,2232) -> Form item Pepsi selling prise 2.33€. we have 2232 in our store

function Product(productName, prise, inventory) {
  this.productName = productName;
  this.prise = prise;
  this.inventory = inventory;
  this.printOut = function () {
    console.log(
      `Form item ${this.productName}, selling prise ${this.prise} we have ${this.inventory} in our store`
    );
  };
}

let pepsi = new Product("Pepsi", 2.33, 2232);
pepsi.printOut();

// get & set, create a car object that uses getter and setter method to get and set the following (modelName,modelNumber,enginCapacity)
// first get the data
// then set the data

const car = {
  modelName: "Volvo",
  modelNumber: "e25o55",
  enginCapacity: 1.6,
  get fullName() {
    console.log(`${this.modelName} ${this.modelNumber} ${this.enginCapacity}`);
  },
  set fullName(str) {
    let arr = str.split(" ");
    console.log(arr);
    this.modelName = arr[0];
    this.modelNumber = arr[1];
    this.enginCapacity = arr[2];
  },
};

car.fullName = "BMW a77999 2";

car.fullName;

function Family(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.printOut = function () {
    console.log(
      `Hi ${this.firstName} ${this.lastName}! You are ${this.age} years old`
    );
  };
}

let igal = new Family("Igal", "Vilensky", 35);
igal.printOut();

const vilensky = {
  name: "Igal",
  lastName: "Vilensky",
  age: 35,
  get fullName() {
    console.log(`${this.name} ${this.lastName} is ${this.age}`);
  },
  set fullName(str) {
    let arr = str.split(" ");
    (this.name = arr[0]), (this.lastName = arr[1]), (this.age = arr[2]);
  },
};

vilensky.fullName = "Yakov Vilensky 37";

vilensky.fullName;

// TV app
class Tv {
  constructor(_brand, _channel = 1, _volume = 10) {
    this.brand = _brand;
    this.channel = _channel;
    this.volume = _volume;
  }
  incVolume() {
    return (this.volume = this.volume + 1);
  }
  decVolume() {
    return (this.volume = this.volume - 1);
  }
  rest() {
    return (this.volume = this.volume) && (this.channel = this.channel);
  }
}

const samsung = new Tv("samsung", 100, 100);

console.log(samsung);

console.log(samsung.rest());
console.log(samsung.decVolume());
console.log(samsung.decVolume());
console.log(samsung.incVolume());

/* Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. 

For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

Examples
addUp(4) ➞ 10

addUp(13) ➞ 91

addUp(600) ➞ 180300 */

const addUp = (int) => {
  let result = 0;

  for (let i = 0; i <= int; i++) {
    result += i;
  }
  return result;
};

console.log(addUp(600));

function shiftToLeft(x, y) {
  let result;
  let calc = x * Math.pow(y);

  return calc;
}

console.log(shiftToLeft(5, 2));

/* Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

Examples
minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

minMax([2334454, 5]) ➞ [5, 2334454]

minMax([1]) ➞ [1, 1] */

/* const minMax = (arr) => {
  let arrToInt = parseInt(arr.length);
  console.log(arrToInt);
  let result;

  for (let i = 0; i < arr.length; i++) {
    result = Math.min(arr[i]);
  }

  return result;
};

console.log(minMax([1, 2, 3, 4, 5])); */

const minMax = (arr) => {
  console.log(arr);
  let result = [];
  let strToArr;
  for (let i in arr) {
    if (arr[i] == Math.min(...arr)) {
      result = Math.min(...arr) + " " + Math.max(...arr);
      strToArr = result.split(",`");
    }
  }
  return strToArr;
};

console.log(minMax([1, 2, 3, 4, 5]));

let arr = [1, 2, 3, 4, 5];

let max = Math.max(...arr);

console.log(max);
