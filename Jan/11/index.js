/*const hobbies = ["soccer", "music", "photo"];

let i = 0;
console.log(hobbies[i]);
i++;
console.log(hobbies[i]);
i++;
console.log(hobbies[i]);
i++;



const Name = (str) => {
  console.log(str);
}

const LastName = (str) => {
  console.log(str);
}

Name("Igal");
LastName("Vilensky");

//console.log(´${Name} ${LastName}´)
//console.log(name() + LastName());


const arr = ["igal", "vilensky"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i][0].toUpperCase()+ arr[i].substring(1)); 

}







for (i = 0; i <= 20; i++) {
  if ( i % 2 == 0) {
    console.log(`${i} is even`);
} else {
    console.log(`${i} is odd`);
}}



for (y = 100; y <= 1000; y*10) {

console.log(y);
} 

for (let i = 0; i <=10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

for (let i = 1; i <=15; i++) {
  if (i % 3 == 0) {
    console.log(i);
  }
}

text = "";
for (let i = 9; i => 9; i--)
{
  text += g + " ";
}

console.log(text); */

text = "";
for (let i = 1; i <= 4; i++) {
  for (let j = 0; j < 3; j++) {
    text += i + " ";
  }
}
console.log(text);
console.log("--------");



for (let i = 1; i <= 4; i++) {
   for (let j = 0; j < 3; j++)

  console.log(i);}


  for (let i = 1; i <= 4; i++) {
    
  }


  let countNum = 0;
text = "";
for (let i = 1; i <= 4; ) {
  text += i + " ";
  if (countNum !== 0 && countNum % 3 === 0) {
    i++;
    countNum = 0;
  }
  countNum++;
}
console.log(text);

// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).


for (i = 0; i <= 20; i++) {
  if ( i % 2 == 0) {
    console.log(`${i} is even`);
} else {
    console.log(`${i} is odd`);
  }
}


// 100 200 300 400 500 600 700 800 900 1000

text = "";

for (let i = 100; i <= 1000; i+=100) {
  text += i + "" + " ";
}

console.log(text);

// 0 2 4 6 8 10

text = "";
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    // text = text + i + " ";
    text += i + " ";
  }
}
text = "";
for (let i = 0; i <= 10; i += 2) {
  text += i + " ";
}
console.log(text);

// 3 6 9 12 15

text = "";
for (i=1; i<=15; i++) {
  if (i % 3 == 0) {
    text += i + " ";
  }
}
console.log(text);


// 9 8 7 6 5 4 3 2 1 0

text = "";

for (let i = 9; i >=0; i--) {
  text += i + "" + " ";
}

console.log(text);

// 1 1 1 2 2 2 3 3 3 4 4 4

text = "";
for (let i = 1; i<=4; i++) {
  for (let j = 0; j<3; j++) {
  text += i + "" + " ";
  }
}

console.log(text);

// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

text = "";
for (let i = 1; i <= 3; i++) {
  // i =2
  for (let j = 0; j <= 4; j++) {
    // j = 0
    text += j + " ";
  }
}
console.log(text);

