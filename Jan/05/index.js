let message;
message = "Vilensky";
console.log(message);
console.log(typeof message);
console.log(message[2]);
console.log(message[6]);
let name;
name = "Igal";
let age;
age = 35;
let year;
year = 1985;
console.log(name + " " + age +  year);
let isMarried;
isMarried = "true";
console.log(isMarried);
let programmingLanguage;
programmingLanguage = "JavaScript";
let isFun;
isFun = "true";
console.log(programmingLanguage +  + "isFun" + isFun);
console.log(programmingLanguage[0,4]);
console.log(programmingLanguage.length);

let isStudent = true;
isStudent == true ? console.log("Ticket costs €5,00") : console.log("Ticket costs €12,00");

let speedCheck = 50;
speedCheck > 50
  ? console.log("you’re going too fast!’.")
  : console.log("You’re driving below the speed limit, Oma");

  let str = "I can walk in the park all day!";
  console.log(str.substring(18, 22));

  let str1 = "Hello World";
  console.log(str1.toUpperCase());

  let str2 = "Earthlings";
  console.log(str2.toLowerCase());

  let str3 = "JavaScript";
  console.log(str3.substring(3, 6));

  let Sentence = "nice shoes";
  let text2 = Sentence.includes("nice");
  console.log(text2);

 // let str3 = "JavaScript";
  console.log("J" + str3 + "J");

  //second assignment

  let string = "some long sentence";
  let stringMod = string.substring(15, 18);
  console.log(stringMod);

  console.log(stringMod + string + stringMod);

  // 8.

/*  let JS = "JavaScript";
  console.log(JS.toUpperCase());
  let JSCheck = JS.includes("Java");
  console.log(JSCheck);

  // 9.

  let modJS = JS.substring(1) + JS[0];
  console.log(modJS);*/

  // 10.

  let firstName = "Igal";
  let lastName = "Vilensky";
  let adress = "Leipzig";
  console.log(`my name is ${firstName} ${lastName} and I live in ${adress}`);

  // 11.

  let strTest = "the quick brown fox";
  let strTest2 = strTest[0].toUpperCase() + strTest.substring(1);
  console.log(strTest2);


  let JS = "JavaScript";
  console.log(JS.toUpperCase());
  
  let JSCheck = JS.includes("Java");
  console.log(JS);
  console.log(JSCheck);

  // 05.01

  let valNum = 10;
  let valStr = "hi";

  console.log(valNum + valStr);

  isNaN(valNum) ? console.log("it is not a number") : console.log("it is a number");
  
  // second part

  let num1 = 33;
  let numx = num1 % 2;

  //console.log(numx);
  //console.log(num1 == 0 ? ´${num1} is even´ : ´${numx} is odd´);

  function oddOrEven(num) { 
    return num % 2 == 0 ? "even" : "odd";
  }

  console.log(oddOrEven(33));


let variable = 123;
let variable2 = 130.7;



// Homework 05.01.21

// 1)

console.log(Math.max(-1, 4));

console.log(Math.min(-1, 4));

// 2)

// float

var float = 3321.32321;
let fixedFloatNum = Math.floor(float);
console.log(fixedFloatNum);

// (shorter way)
function floatNumFlour(num) {
  return Math.floor(num) ;
}
console.log(floatNumFlour(3321.32321));
console.log(floatNumFlour(326.76));
console.log(floatNumFlour(76788.7));
console.log(floatNumFlour(-9.78));
console.log(floatNumFlour(43.342));

// ceil

var float2 = 3321.32321;
let fixedFloatNumCeil = Math.ceil(float2);
console.log(fixedFloatNumCeil);

// (shorter way)
function floatNumFlourCeil(num) {
  return Math.ceil(num) ;
}
console.log(floatNumFlourCeil(3321.32321));
console.log(floatNumFlourCeil(326.76));
console.log(floatNumFlourCeil(76788.7));
console.log(floatNumFlourCeil(-9.78));
console.log(floatNumFlourCeil(43.342));

// 3)

let introSentence = "Hi, my name is Nancy and I am";
let ageReal = 25;
let combinedStr = introSentence + " " + ageReal;
console.log(combinedStr);

//  the + operator concatenates the variables to one string

// 4)

let strToInt = "1005";
console.log(parseInt(strToInt));


let strToFloat = "10.05";
console.log(parseFloat(strToFloat));





