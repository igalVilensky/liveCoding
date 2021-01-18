/* for (let i = 0; i < 3; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(`This is the multiply by ${i}`);
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log("---------------");
}
 */
let drawShape = "";

for (let i = 0; i <= 4; i++) {
  for (let j = 0; j <= i; j++) {
    drawShape += "+";
  }
  console.log(drawShape);
  drawShape = "";
}

const names = ["Igal", "Moshe", "Dana"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

/* Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / (height * height). (mass in kg, i.e. 72.5, and height in metres, i.e. 1.65).
Store Mark’s and John’s mass and height in variables.
Calculate both their BMIs and store their BMIs in variables.
Create a boolean variable containing information about whether Mark has a higher BMI than John.
Print a string to the console containing the variable from step 3 using string interpolation. (e.g. “Is Mark’s BMI higher than John’s? Why yes, it’s [boolean], it is”).
Create an if statement which prints the name and BMI of the person with the highest BMI.


Send a message to coding */

let markHeight = 1.7;
let johnHeight = 1.65;

let markWeight = 72;
let johnWeight = 60;

let markBmi = markWeight / (markHeight * markHeight);

let johnBmi = johnWeight / (johnHeight * johnHeight);

console.log(markBmi);
console.log(johnBmi);

let compare = markBmi > johnBmi;

console.log(compare);

console.log(
  `Is Mark’s BMI higher than John’s? Why yes, it’s ${compare}, it is`
);

if (markBmi > johnBmi) {
  console.log(true);
}

if (markBmi > johnBmi) {
  console.log(`Mark has ${markBmi} which is bigger then John´s `);
} else {
  console.log(`John has ${johnBmi} which is bigger then Markś `);
}

/* 
Make a variable for firstName and age and give each variable values. 
Create an if/else statement to check whether the person’s age is less than 13. 
If so, print “firstName is a child”. If the age is equal to or more than 13 and less than 20, print “firstName is a teenager”. 
If the person’s age is equal to and more than 20 and less than 30, then print “firstName is a young adult”. 
If none of these conditions apply, print “firstName is a adult”. */

/* let firstName = "Igal";
let age = 35;

if (age < 13) {
  console.log("firstName is a child");
} else if (age >= 13 && age < 20) {
  console.log(`${firstName} is a teenager`);
} else if (age >= 20 && age < 30) {
  console.log(`${firstName} is a young adult`);
} else console.log(`${firstName} is older than 30`); */

const lifeStatus = (firstName1, age1) => {
  let status = "";
  if (age1 < 13) {
    status = "firstName is a child";
  } else if (age1 >= 13 && age1 < 20) {
    status = `${firstName1} is a teenager`;
  } else if (age1 >= 20 && age1 < 30) {
    status = `${firstName1} is a young adult`;
  } else status = `${firstName1} is older than 30`;

  return `${firstName1} is ${status}`;
};

let firstName1 = "Igal";
let age1 = 35;

console.log(lifeStatus("Hadi", 35));

let x = 2;
let y = 3;
let z = 5;
switch (z) {
  case (z = x + y):
    console.log("yes");
    break;

  case (z = y + x):
    console.log("no");
    break;
}

/* const mySentence = "It is niCe to pRaCtIcE my JavaScript SKILLS";
const words = mySentence.split(" ");
console.log(words);
for (let i = 0; i < words.length; i++) {
  words[i] = words[i].toLowerCase();
}
for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
console.log(words.join(" ").toString()); */

//  Capitalize

// first

let arr1 = ["matt", "sara", "lara"];

for (let i = 0; i < arr1.length; i++) {
  arr1[i] = arr1[i][0].toUpperCase() + arr1[i].substr(1);
}

console.log(arr1.toString());

// second

let arr2 = ["samuel", "MARIA", "luke", "mary"];

for (let i = 0; i < arr2.length; i++) {
  arr2[i] = arr2[i].toLowerCase();
}
for (let i = 0; i < arr2.length; i++) {
  arr2[i] = arr2[i][0].toUpperCase() + arr2[i].substr(1);
}

console.log(arr2.toString());

// third

let arr3 = ["Cynthia", "Karen", "Jane", "Carrie"];

for (let i = 0; i < arr3.length; i++) {
  arr3[i] = arr3[i].toLowerCase();
}
for (let i = 0; i < arr3.length; i++) {
  arr3[i] = arr3[i][0].toUpperCase() + arr3[i].substr(1);
}

console.log(arr3.toString());

// City Names.

let arr4 = ["Berlin", "leipzig", "Paris", "Casablanca."];

console.log(arr4.toString());

// Hello

let arr5 = ["Maria", "Mike", "Paul", "Doven"];

console.log(
  `Hello ${arr5[0]}, Hello ${arr5[1]}, Hello ${arr5[2]}, Hello ${arr5[3]}`
);

let arr6 = ["Susan", "Rezvane", "Mark"];

console.log(
  `${arr6[0]} is at index 0 of my friends and family array, ${arr6[1]} is at index 0 of my friends and family array,  ${arr6[2]} is at index 0 of my friends and family array, ${arr6[3]} is at index 0 of my friends and family array,`
);

// Odds and Evens

/* const arr77 = () => {
  let arr7 = [3, 5, 2, 4];
  let text = "";
  for (let i = 0; i <= arr7.length; i++)
    if (arr7[i] % 2 == 0) {
      return text + 1;
    } else {
      return text - 1;
    }

  console.log(arr77(arr7));
};

let arr8 = [3, 5, 2, 4];
for (let i = 0; i <= arr8.length; i++)
  if (arr8[i] % 2 == 0) {
    console.log(arr8[i]++);
  } else {
    console.log(arr8[i] - 1); 
  }*/
/* console.log(arr8); */

const arr78 = () => {
  let arr9 = [3, 5, 2, 4];
  let text1 = "";
  for (let i = 0; i <= arr9.length; i++)
    if (arr9[i] % 2 == 0) {
      return text1 + 1;
    } else {
      return text1 - 1;
    }
  console.log(arr78(arr9.length));
};
