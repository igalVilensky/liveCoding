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
  /* console.log(splStrArray); */
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
  let result = "";
  let strToArray2 = str.split("");
  /* console.log(strToArray2); */
  for (let i = 0; i <= str.length; i++) {
    if (strToArray2[i] == "a") {
      strToArray2[i] = "4";
    }
    if (strToArray2[i] == "i") {
      strToArray2[i] = "1";
    }
    if (strToArray2[i] == "s") {
      strToArray2[i] = "5";
    }
    if (strToArray2[i] == "o") {
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

const toCamelCase = (str) => {
  let strToArray3 = str.split("");

  for (let i = 0; i <= str.length; i++) {
    if (strToArray3[i] == "_") {
      strToArray3.splice(i, 1);
      strToArray3.splice(i, 1, strToArray3[i].toUpperCase());
    }
  }
  return strToArray3.join("");
};

console.log(toCamelCase("hello_world"));

/* Is it Symmetrical? Create a function that takes a number as an argument and returns true or false depending on whether the number is symmetrical or not. 
  NB: A number is symmetrical when it is the same as its reverse.
  
  Examples:
  
  isSymmetrical(7227) ➞ true
  isSymmetrical(12567) ➞ false
  isSymmetrical(44444444) ➞ true
  isSymmetrical(9939) ➞ false
  isSymmetrical(1112111) ➞ true */

/* const isSymmetrical = (num) => {
  let result;
  for (let i = 0; num.length; i++) {
    if (parseInt(num[i].toString().split("").reverse().join("")) == num) {
      result = true;
    }
    if (parseInt(num[i].toString().split("").reverse().join("")) !== num) {
      result = "false";
    }
  }
  return result;
};

console.log(isSymmetrical(1112111)); */

const isSymmetrical = (num) => {
  let reversedNum;
  let result;
  reversedNum = parseInt(num.toString().split("").reverse().join(""));
  if (reversedNum == num) {
    return (result = true);
  } else {
    return (result = false);
  }
};

console.log(isSymmetrical(7227));
console.log(isSymmetrical(12567));
console.log(isSymmetrical(9939));

/* Pig Latin Translation Create a function that takes a string of words and moves the first letter of each word to the end of it, then adds 'ay' to the end of the word. 
  This is a basic form of "Pig Latin". Move the first letter of each word to the end of the word. Add "ay" to the end of the word. 
  Words starting with a vowel (A, E, I, O, U) append "way" to the end instead. Extra Practice
  
  Preserve proper capitalization as in the examples below. Examples:
  
  pigLatin("Cats are great pets.") ➞ "Atscay areway reatgay etspay."
  pigLatin("Tom got a small piece of pie.") ➞ "Omtay otgay away allsmay iecepay ofway iepay."
  pigLatin("He told us a very exciting tale.") ➞ "Ehay oldtay usway away eryvay excitingway aletay." */

/* const pigLatin = () => {
  let result;

  return result;
};

console.log(pigLatin("Cats are great pets."));
 */
