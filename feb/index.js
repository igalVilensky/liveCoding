/* Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. 
The function should be self invoked and should have the following parameters:
The current age of the person // e.g. 40
The retirement age of the person // e.g. 60
The monthly wage the person earns // e.g. 1000
The percentage (as integer) that the person saves each month // e.g. 10%
If the person has already retired then the message ‘You’re already retired!’ should be printed. 
If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
Output: $30000 */

((age, retAge, wage, perc) => {
  if (age >= 65) {
    console.log("Old");
  } else {
    let yearsLeft = retAge - age;
    let moneyLeftToSave = yearsLeft * wage;
    let percCount = (moneyLeftToSave / 100) * perc;
    console.log(percCount);
  }
})(30, 65, 1500, 10);

// Seasons
// Create a function that accepts a text from user and check if the user has entered a month name, if so print out that month and in which season it is.
// I will be nice again to you and offer the arrays 😉
// const months = [ "december", "january", "february", "march", "april", "may", "jun", "july", "august", "september", "october", "november" ];
// const seasons = ["Winter", "Spring", "Summer", "Autumn"];
// Examples :
// monthCheck("I love Jun"); -> Jun is in Summer
// monthCheck("We need Kartoffel"); -> We couldn’t find any month in your text, sorry try again

/* const monthCheck = (str) => {
  let months = [
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
  let seasons = ["Winter", "Spring", "Summer", "Autumn"];
  const currentSe = seasons.find(
    (months) => months == "december",
    "january",
    "february"
  );
  let month = str
    .toLowerCase()
    .split(" ")
    .filter((word) => months.includes(word))
    .join("");
  return month == ""
    ? `We couldn’t find any month in your text, sorry try again`
    : `You have entered ${month}, which is in ${currentSe}`;
};
console.log(monthCheck("I love december"));
console.log(monthCheck("We need Kartoffel"));

console.log("____________________");
 */
const monthCheck = (str) => {
  let months = [
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
  let seasons = ["Winter", "Spring", "Summer", "Autumn"];

  let month = str
    .toLowerCase()
    .split(" ")
    .filter((word) => months.includes(word))
    .join("");

  const currentSe = (monthName) => {
    return seasons[Math.floor(months.indexOf(monthName)) / 3];
  };
  return month == ""
    ? `We couldn’t find any month in your text, sorry try again`
    : `You have entered ${month}, which is in ${currentSe(month)} `;
};
console.log(monthCheck("I love June"));
console.log(monthCheck("We need Kartoffel"));

console.log("____________________");
