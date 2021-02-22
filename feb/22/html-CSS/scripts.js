console.log("Moon");
/* One is not like the others Create a function that takes an array of numbers and return the number that’s unique.

Examples:

unique(0[, 0, 0.77, 0, 0]) ➞ 0.77
unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
unique([3, 3, 3, 7, 3, 3]) ➞ 7 */

const unique2 = (arr) => {
  let result, val, firstVal;

  firstVal = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (firstVal !== arr[i]) {
      val = arr[i];
    }

    if (arr.indexOf(val) == 1) {
      if (arr[1] == arr[2]) {
        result = arr[0];
      } else {
        result = val;
      }
    } else {
      result = val;
    }
  }

  return result;
};

console.log(unique2([3, 3, 8, 3, 3, 3]));
console.log(unique2([1, 1, 1, 1, 5]));
console.log(unique2([0, 0, 0.77, 0, 0]));

console.log("-------------");

const unique = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
      // 0
      result.push(currentValue);
    }
  }
  return result.join(", ");
};
console.log(unique([3, 3, 3, 7, 3, 3]));

console.log(unique([0, 1, 1, 1, 1, 1, 1, 1]));

/* The Greater Numbers Create a function which accepts two arguments: the first argument being an array of numbers, and the second argument being a number. 
  The function should return the elements of the array which are greater than the second argument.
  
  Examples:
  
  findGreatest([3, 4, 5], 4) ➞ 5
  findGreatest([10, 20, 30], 12) ➞ 20, 30
  findGreatest([0, 10, 3], 4) ➞ 10 */

const findGreatest = (arr, int) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > int) {
      result.push(arr[i]);
    }
  }
  return result.join(" ");
};

console.log(findGreatest([3, 4, 5], 4));
console.log(findGreatest([10, 20, 30], 12));
console.log(findGreatest([0, 10, 3], 4));

/* The longest word Create a function to find the longest word in a given string.
  
  Example: longestWord("this is a web development course") ➞ "development" */

const longestWord = (str) => {
  const splStrArray = str.split(" "); //initialize a variable to store the longest word
  console.log(splStrArray);
  let result = "";
  for (let i = 0; i < splStrArray.length; i++) {
    if (splStrArray[i].length > result.length) {
      result = splStrArray[i];
    }
  }
  return result;
};

console.log(longestWord("this is a web development course"));

/* Reverse Create a function to reverse a number.
  
  Example: reverse(34532) ➞ 23543
   */

const reverse = (num) => parseInt(String(num).split("").reverse().join(""));

console.log(reverse(124323));

// second way

const reversedNum = (num) => {
  return parseInt(num.toString().split("").reverse().join(""));
};

console.log(reversedNum(124323));

/* Alphabetical Order Create a function to sort a string into alphabetical order. 
  NB: assume numbers, symbols and punctuation are not included in the string.
  
  Example: alphaOrder("webdev") ➞ "bdeevw" */

const alphaOrder = (str) => {
  let strToArray = str.split("").sort().join("");

  return strToArray;
};

console.log(alphaOrder("webdev"));

/* 
  c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string. 
  NB: for your program to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.
  
  Examples:
  
  hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"
  hackerSpeak("programming is fun") ➞ "pr0gr4mm1ng 15 fun"
  hackerSpeak("become a coder") ➞ "b3c0m3 4 c0d3r" */

const hackerSpeak = (str) => {
  let strToArray2 = str.split("");
  /* console.log(strToArray2); */
  for (let i = 0; i <= str.length; i++) {
    if (strToArray2[i] == "a") {
      strToArray2[i] = "4";
    } else if (strToArray2[i] == "i") {
      strToArray2[i] = "1";
    } else if (strToArray2[i] == "s") {
      strToArray2[i] = "5";
    } else if (strToArray2[i] == "o") {
      strToArray2[i] = "0";
    }
  }
  return strToArray2.join("");
};
console.log(hackerSpeak("javascript is cool"));

/* snake_case ➞ camelCase Create a function toCamelCase() that takes a single string in snake_case and converts it into camelCase.
  
  Examples:
  
  toCamelCase("hello_world") ➞ "helloWorld"
  toCamelCase("javascript_is_fun") ➞ "javaScriptIsFun" */

/* const toCamelCase = (str) => {
    let strToArray3 = str.split("");
  
    for (let i = 1; i <= str.length; i++) {
      if (strToArray3[i] == "_") {
        strToArray3[i] = "";
        strToArray3[i + 1].toUpperCase();
      }
    }
  
    return strToArray3.join("");
  };
  
  console.log(toCamelCase("hello_world")); */

const toCamelCase = (str) => {
  let strToArr = str.toLowerCase().split("_");
  console.log(strToArr);
  for (let i = 1; i < strToArr.length; i++) {
    strToArr[i] = strToArr[i][0].toUpperCase() + strToArr[i].slice(1);
  }
  return strToArr.join("");
};
console.log(toCamelCase("hello_world_see"));

/* Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. 
  NB: A number is symmetrical when it is the same as its reverse.
  
  Examples:
  
  isSymmetrical(7227) ➞ true
  isSymmetrical(12567) ➞ false
  isSymmetrical(44444444) ➞ true
  isSymmetrical(9939) ➞ false
  isSymmetrical(1112111) ➞ true */

const isSymmetrical = (num) => {
  let result = false;
  for (let i = 0; num.length; i++) {
    if (parseInt(num[i].toString().split("").reverse().join("")) == num) {
      result = true;
    }
  }
  return result;
};

console.log(isSymmetrical(1112111));

/* Pig Latin Translation Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. 
  This is a basic form of "Pig Latin". Move the first letter of each word to the end of the word. Add "ay" to the end of the word. 
  Words starting with a vowel (A, E, I, O, U) append "way" to the end instead. Extra Practice
  
  Preserve proper capitalization as in the examples below. Examples:
  
  pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay."
  pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay."
  pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay." */

const pigLatin = (str) => {
  /* let dot = "";
    if (str.charAt(str.length - 1) == ".") dot = "."; */

  const lowerCase = str.toLowerCase().slice(0, -1);
  console.log(lowerCase);
  const splitStr = lowerCase.split(" ");
  console.log(splitStr);
  const vowels = ["a", "e", "i", "o", "u"];
  const pigTranslation = [];
  for (let i = 0; i < splitStr.length; i++) {
    let firstChar = splitStr[i][0];

    let remainder = splitStr[i].slice(1, splitStr[i].length);
    if (vowels.includes(firstChar)) {
      // checking if i is truthy or falsy.
      //If falsy, then it's the first word because it's 0.
      let firstCharVowel =
        (i ? firstChar : firstChar.toUpperCase()) + remainder + "way";
      pigTranslation.push(firstCharVowel);
    } else {
      if (i === 0) {
        let firstCharRem = remainder[0];
        let wordRemainder = remainder.slice(1, remainder.length);
        remainder = firstCharRem.toUpperCase() + wordRemainder;
      }
      let firstCharConsonant = remainder + firstChar + "ay";
      pigTranslation.push(firstCharConsonant);
    }
  }

  return pigTranslation.join(" ");
};
console.log(pigLatin("Tom got a small piece of pie."));

/* Count characters only Create a function will calculate how many times empty space occurred in a given string by the user and print out only the characters number

Example :

emptySpaces("Hi i") -> 3 */

const emptySpaces = (str) => {
  let strToArr = str.split("");

  for (let i = 0; i < str.length; i++)
    if (strToArr[i] == " ") {
      strToArr[i] = "";
    }
  return strToArr.join("").length;
};

console.log(emptySpaces("Hi i am"));

/* Need more money Create a function that will receive a (user name , salary and his/her kids names)

If the user has one kid subtract 30% taxes from the salary
For two kids subtract 25% and 20% for more than two.
If the user has no kids the taxes will be 55%
Print out the result in a good formated way.
Examples :

salaryCalculator("Fabi", 5000, "Zain", "Uschi");

salaryCalculator("Olga", 4055, "Zain"); */

const salaryCalculator = (name, salary, ...args) => {
  let result;
  let namePerson = name;
  let kids = args.length;

  if (kids == 1) {
    salary = salary - (salary / 100) * 30;
  } else if (kids == 2) {
    salary = salary - (salary / 100) * 25;
  } else if (kids > 2) {
    salary = salary - (salary / 100) * 20;
  }
  return `${namePerson}´s salary is ${salary} after paying taxes`;
};

console.log(salaryCalculator("Fabi", 5000, "Zain", "Uschi"));
console.log(salaryCalculator("Olga", 4055, "Zain"));
console.log(salaryCalculator("Igal", 4055, "Zain", "Zain", "Zain"));

/* Call me Create a function that receive a text from user and check if the user has entered a phone number, and print that out.

Note : phone number should be within the German network starts with (030 or 017) only and has 7 digits after the prefix number

Examples :

phone("Hi, call me on 030221A398 "); -> This is not a valid phone number 030221A398

phone("Hi my number is 038 "); -> This is not a valid phone number 038 */

const phone = (str) => {
  let strToArr1 = str.split("");
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let phoneFirstNum = ["0", "3", "0"];
  let phoneFirstNum2 = ["0", "1", "7"];
  let phoneNumber = [];

  for (let i = 0; i < strToArr1.length; i++) {
    for (let j = 0; j < numbers.length; j++)
      if (strToArr1[i] == numbers[j]) {
        phoneNumber.push(strToArr1[i]);
      }
    if (phoneNumber.length > 7) {
      return `This is not a valid phone number ${phoneNumber}`;
    }
    if (
      phoneNumber[0] !== phoneFirstNum[0] ||
      phoneNumber[1] !== phoneFirstNum[1] ||
      phoneNumber[2] !== phoneFirstNum[2] ||
      phoneNumber[0] !== phoneFirstNum2[0] ||
      phoneNumber[1] !== phoneFirstNum2[1] ||
      phoneNumber[2] !== phoneFirstNum2[2]
    ) {
      return `This is not a valid phone number start ${phoneNumber}`;
    }
  }
  phoneNumber = phoneNumber.join("");
  return `Hi, call me on ${phoneNumber}`;
};

console.log(phone("Hi, call me on 030221200a "));

// no solution!!!

/* IsBank Write a function that checks whether the user has entered a valid German bank account.

Note: German bank accounts should starts with DE and has 20 number after that.

// DExxxxxxxxxxxxxxxxxxxx

Examples :

bankChecker("Hi, why you need my bank account? "); -> There was no bank account in the text

bankChecker("I delete, have bank DE"); -> This is not a valid bank account

bankChecker("DE12100110013000400011")); -> The bank account DE12100110013000400011 is valid */

const bankChecker = (str) => {
  let result;
  let accountDigit = [];

  let strToArray = str.split("");
  let accountNum = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  for (let i = 0; i < strToArray.length; i++) {
    for (let j = 0; j < accountNum.length; j++)
      if (strToArray[i] == accountNum[j]) {
        accountDigit.push(strToArray[i]);
        console.log(accountDigit);
      }
    if (strToArray.length > 20) {
      result = `This is not a valid bank account`;
    }
  }
  return result;
};

console.log(bankChecker("DE12100110013000400011"));

// for later!!!

/* This is crazy Create a function that looks inside a givin string if it has the word (JavaScript) if so print "I know it's crazy wink".

Examples :

checkStr("Hi my name is HADI");

checkStr("I like JavaScript"); */

const checkStr = (str) => {
  let result;
  let word = "JavaScript";

  for (let i = 0; i < str.length; i++) {
    if (str.includes(word)) {
      result = "I know it's crazy wink";
    } else {
      result = "There is no ´JavaScript´ word in thr sentence";
    }
  }
  return result;
};

console.log(checkStr("Hi my name is HADI"));
console.log(checkStr("I like JavaScript"));

/* Tell me my age Create a function that calculates the user age e.g. 2000 -> 20.

// tip try mdn for this one aka need some research

Examples :

age(1940) -> 81

age(2022)) -> Please enter a valid year */

const age = (int) => {
  let result;

  let currentYear = 2021;
  if (int > 2021) {
    result = `Please enter a valid year`;
  } else {
    result = currentYear - int;
  }

  return result;
};

console.log(age(1940));
console.log(age(2022));

/* Seasons Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.

// I will be nice again to you and offer the arrays wink

const months = [ "december", "january", "february", "march", "april", "may", "jun", "july", "august", "september", "october", "november" ];

const seasons = ["Winter", "Spring", "Summer", "Autumn"];

Examples :

monthCheck("I love Jun"); -> Jun is in Summer

monthCheck("We need Kartoffel"); -> I couldn’t find any month in your text, sorry try again */

const months = [
  "december",
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
];
const seasons = ["Winter", "Spring", "Summer", "Autumn"];

const monthCheck = (str) => {
  let strToArr = str.split(" ");

  let result;
  for (let i = 0; i < strToArr.length; i++) {
    if (
      strToArr[i] == months[0] ||
      strToArr[i] == months[1] ||
      strToArr[i] == months[2]
    ) {
      result = `Winter`;
      /* switch (months) {
        case strToArr[i] == months[0]:
          return "december";
        case months[1]:
          return "january";
        case months[2]:
          return "february";
        default:
          return "sss";
      } */
    } else if (
      strToArr[i] == months[3] ||
      strToArr[i] == months[4] ||
      strToArr[i] == months[5]
    ) {
      result = "Spring";
    } else if (
      strToArr[i] == months[6] ||
      strToArr[i] == months[7] ||
      strToArr[i] == months[8]
    ) {
      result = "Summer";
    } else if (
      strToArr[i] == months[9] ||
      strToArr[i] == months[10] ||
      strToArr[i] == months[11]
    ) {
      result = "Autumn";
    } else {
      result = `I couldn’t find any month in your text, sorry try again`;
    }
  }

  return result;
};

console.log(monthCheck("I love march"));
console.log(monthCheck("We need Kartoffel"));

// not finished!!!

/* Student level check Create a function will calculate a student degrees for 6 subjects, if the average was less than 70 will print (F)

Over 70 and less than 80 (C)

Over than 80 and less than 85 (B)

Over than 85 and less than 90 (A)

And over 90 print (A+)

Example :

studentAverage(99, 44, 44, 80, 80, 98, 89); */

const studentAverage = (...nums) => {
  let summerize = 0;
  let result;
  for (let i = 0; i < nums.length; i++) {
    summerize += nums[i];
  }
  if (summerize / nums.length >= 90) {
    result = `Your grade is A+`;
  } else if (summerize / nums.length > 85 && nums.length < 90) {
    result = "Your grade is A";
  } else if (summerize / nums.length > 80 && nums.length < 85) {
    result = "Your grade is B";
  } else if (summerize / nums.length > 70 && nums.length < 80) {
    result = "Your grade is C";
  }

  return result;
};

console.log(studentAverage(99, 44, 44, 80, 80, 98, 89));

/* Tell me more Create a function that accepts the (user name, age, address and unlimited number of activities the user enjoy doing)

print all the user input adding the greeting part and more text turning that input into a readable text.

If one of his activities was dance or party add "you are cool" to your outputted text.

Examples :

userData("Zain", 22, "Kurfürstendamm", "dance", "party");

userData("Olga", 40, "potsdamer platz", "party");

userData("Nancy", 33, "viktoria luise platz", "swimming"); */

const userData = (user, age, address, ...args) => {
  let greet = `Hi`;
  let addText = "you are cool";
  let result = `${greet} ${user} ${age} ${address}`;
  {
    if (args.includes("dance") || args.includes("party")) {
      result = `${greet} ${user} ${age} ${address} ${addText}`;
    }
  }

  return result;
};

console.log(userData("Zain", 22, "Kurfürstendamm", "party"));

console.log(userData("Nancy", 33, "viktoria luise platz", "swimming"));

// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// Examples
// numberSplit(4) ➞ [2, 2]

// numberSplit(10) ➞ [5, 5]

// numberSplit(11) ➞ [5, 6]

// numberSplit(-9) ➞ [-5, -4]
// Notes
// All numbers will be integers.
// You can expect negative numbers too.

const numberSplit = (n) => {
  let result;
  if (n % 2 !== 0) {
    result = (n - 1) / 2;
    result = [result, result + 1];
  } else {
    result = n / 2;
    result = [result, result];
  }

  return result;
};

console.log(numberSplit(4));
console.log(numberSplit(11));
console.log(numberSplit(-9));
