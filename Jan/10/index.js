console.log("Hello World");

console.log(1 + 1);

let x = count(2);

let num = 1 + x;

console.log(num);

num <= 0 ? console.log("1000") : console.log("2000");

num <= 5 ? console.log("1000") : console.log("2000");

console.log(num + num);

//let x = 10;ls


let y = 4;

let sum = x + y;

console.log(sum);

let nu = x - 5;

console.log(4 > nu ? console.log("Yes") : console.log("No"));

function count(num) {
    return Math.ceil(num);

}

console.log(count(num));

/*var float2 = 3321.32321;
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
console.log(floatNumFlourCeil(43.342)); */

let str = function outer() {

  var fish = "🐟";
  var count = 1;
  let outcome = fish + count;
  return outcome;
  function inner(outcome) {
    count++;
    return count++;
  }
}
console.log(outcome);
