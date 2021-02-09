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
