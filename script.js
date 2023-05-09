
// first task
for (let i = 20; i < 30 ; i += 0.5 ){
  console.log(i)
}

// second task
const hrn = 27
let dollar = 10
for ( dollar ; dollar <=100; dollar +=10 ){
  console.log(hrn * dollar)
}

// third task 
const x = prompt("Write your number");
for (let i = 1; i <= 100; i++) {
  if (i * i <= x) {
    console.log(i);
  }
}

// fourth task 

const number = prompt("Write your number");

let check = true;

if (number > 1) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      check = false;
      break;
    }
  }
} else {
  check = false;
}

if (check) {
  console.log(`${number} is true number`);
} else {
  console.log(`${number} is not true number`);
}


// Fifth Task 

const num = prompt("Write your number");

function isPowerOfThree(num) {
  while (num > 1) {
    num = num / 3;
  }
  return num === 1;
}

if (isPowerOfThree(num)) {
  console.log(`${num} can be obtained by raising the number 3 to a certain power.`);
} else {
  console.log(`${num} CANNOT be obtained by raising the number 3 to some power.`);
}
