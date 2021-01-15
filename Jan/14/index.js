// Our problem assignment

// stores inventory

let store1Milk = { milk: true, cost: 0.7 };

let store1eggs = { eggs: true, cost: 1.29 };

let store1butter = { butter: true, cost: 1.5 };

let store1 = { store1Milk, store1eggs, store1butter };

let store2Milk = { milk: true, cost: 0.8 };

let store2eggs = { eggs: true, cost: 1.49 };

let store2butter = { butter: true, cost: 2 };

let store2 = { store2Milk, store2eggs, store2butter };

let store3Milk = { milk: true, cost: 0.6 };

let store3eggs = { eggs: true, cost: 1.15 };

let store3butter = { butter: true, cost: 1.3 };

let store3 = { store3Milk, store3eggs, store3butter };

console.log(store1, store2, store3);

// how much money I have after buying in each store

function culcStore1Left() {
  let myMoney = 5;
  let store1Cost = store1Milk.cost + store1eggs.cost + store1butter.cost;
  let result = myMoney - store1Cost;
  return result;
}

console.log(culcStore1Left());

function culcStore2Left() {
  let myMoney = 5;
  let store2Cost = store2Milk.cost + store2eggs.cost + store2butter.cost;
  let result = myMoney - store2Cost;
  return result;
}

console.log(culcStore2Left());

function culcStore3Left() {
  let myMoney = 5;
  let store3Cost = store3Milk.cost + store3eggs.cost + store3butter.cost;
  let result = myMoney - store3Cost;
  return result;
}

console.log(culcStore3Left());

// how much time I will have to make an omlet (2 hours in total for buying and cooking)

function culcTimeLeftStore1() {
  let totalTime = 120;

  let distanceToStore1 = 10;

  let myHome = 0;

  let distanceFromMeToStore1 = myHome + distanceToStore1 * 2 + 5;

  let result = totalTime - distanceFromMeToStore1;

  return result;
}

console.log(culcTimeLeftStore1());

function culcTimeLeftStore2() {
  let totalTime = 120;

  let distanceToStore2 = 20;

  let myHome = 0;

  let distanceFromMeToStore2 = myHome + distanceToStore2 * 2 + 5;

  let result = totalTime - distanceFromMeToStore2;

  return result;
}

console.log(culcTimeLeftStore2());

function culcTimeLeftStore3() {
  let totalTime = 120;

  let distanceToStore3 = 30;

  let myHome = 0;

  let distanceFromMeToStore3 = myHome + distanceToStore3 * 2 + 5;

  let result = totalTime - distanceFromMeToStore3;

  return result;
}

console.log(culcTimeLeftStore3());

let resultStore1 = `You will have ${culcStore1Left()} euros left and you will have ${culcTimeLeftStore1()} minutes to cook your omlet after visiting the first supermarket `;

let resultStore2 = `You will have ${culcStore2Left()} euros left and you will have ${culcTimeLeftStore2()} minutes to cook your omlet after visiting the first supermarket `;

let resultStore3 = `You will have ${culcStore3Left()} euros left and you will have ${culcTimeLeftStore3()} minutes to cook your omlet after visiting the first supermarket `;

console.log(resultStore1);
console.log(resultStore2);
console.log(resultStore3);
