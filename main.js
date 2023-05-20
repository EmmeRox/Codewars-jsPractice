// *Variables*
// Create a variable and console log the value
let thisVar = 23;
//console.log(thisVar);
// Create a variable, add 10 to it, and alert the value
let otherVar = 10;
otherVar += 10;
// alert(otherVar);
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
const num1 = 3;
const num2 = 4;
const num3 = 1;
const num4 = 10;
function sub() {
  let diff = num1 - num2 - num3 - num4;
  alert(diff);
}

// sub();
// Create a function that divides one number by another and returns the remainder
function dividing() {
  let answer = num4 % num2;
  return answer;
}
// dividing();
// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function addTwo(x, y) {
  let sum = x + y;
  if (sum > 50) {
    alert("Jumanji");
  }
}

// addTwo(22, 10);
// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multThree(x, y, z) {
  let multipli = x * y * z;
  if (multipli % 3 === 0) {
    alert("Zebra");
  }
}

//multThree(2, 2, 4);
//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function myFunc(word, x) {
  for (i = 0; i < x; i++) {
    console.log(word);
  }
}

//myFunc("hiya", 10);

// function digitize(n) {
//   let newArr = [];
//   let numtoSeperate = Array.from(n.toString());
//   numtoSeperate.reverse();
//   for (let i = 0; i < numtoSeperate.length; i++) {
//     arr.push(parseInt(numtoSeperate[i]));
//   }
//   return newArr;
// }

// console.log(digitize(35231));

function highAndLow(numbers) {
  let arr = numbers.split("");

  arr = arr.filter((e) => String(e).trim());
  let small = Number(arr[0]);
  let large = Number(arr[0]);
  let num;
  for (i = 0; i <= arr.length; i++) {
    num = Number(arr[i]);

    if (num > large) large = num;
    if (num < small) small = num;
  }
  // console.log(large);
}

function highAndLow2(numbers) {
  numbers = numbers.split(" ");
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

//Above two functions do the exact same

//highAndLow("1 2 3 4 5");

//Below to remove first and alst character of a string. slice(1, -1) would have worked.
function removeChar(str) {
  let newStr = str.split("");
  newStr.shift();
  newStr.pop();
  newStr = newStr.join("");
  return newStr;
}

removeChar("eloquent");

function largest(n, array) {
  // Find the n highest elements in a list
  return array.sort((a, b) => a - b).slice(array.length - n);
}

largest(3, [7, 6, 5, 4, 3, 2, 1]);

// Is n a square root?
function isTwo(n) {
  if (Math.sqrt(n) % 1 === 0 && n > 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isTwo(34));

//Create a function with two arguments that will return an array of the first n multiples of x.
function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

// console.log(countBy(1, 10));

// Sum a list but ignore any duplicates
function sumNoDuplicates(numList) {
  let sum = 0;
  numList.forEach((num) => {
    if (numList.indexOf(num) === numList.lastIndexOf(num)) {
      sum += num;
    }
  });

  return sum;
}

// console.log(sumNoDuplicates([1, 1, 2, 3]));

// Below is an example of an arrow function comparing (if... else if... else if... else) four elements in the array
const dogs = [
  "Hardly any",
  "More than a handful!",
  "Woah that's a lot of dogs!",
  "101 DALMATIANS!!!",
];

const howManyDalmatians = (number) =>
  number <= 10
    ? dogs[0]
    : number <= 50
    ? dogs[1]
    : number == 101
    ? dogs[3]
    : dogs[2];

function squareDigits(num) {
  let arr = String(num).split("");
  let newArr = [];
  let concat;
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Number(arr[i]) ** 2);
    concat = newArr.join("");
  }
  return concat;
}

//console.log(squareDigits(2112));

//Given a string, write a function that counts how many vowels (a, e, i, o, or u) that string contains
function getCount(str) {
  let count = 0;
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (
      arr[i] === "a" ||
      arr[i] === "e" ||
      arr[i] === "i" ||
      arr[i] === "o" ||
      arr[i] === "u"
    ) {
      count += 1;
    }
  }
  return Number(count);
}

//console.log(getCount("halloween"));

// Another(cleaner) way of doing above
//function getCount(str) {
// return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//}

var isSquare = function (n) {
  if (Number.isInteger(Math.sqrt(n))) {
    return true;
  }
  return false; // fix me
};

//Number.isInteger is same as coding Math.sqrt(n) % 1 === 0. Basically, is sqrt a whole number

//console.log(isSquare(0));

//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(n) {
  let arr = String(n).split("");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return Number(newArr.sort((a, b) => b - a).join(""));
}

//console.log(descendingOrder(1321));

//Your job is to implement a function which returns the last D digits of an integer N as a list.

function lastDigit(n, d) {
  if (d <= 0) {
    return [];
  } else {
    let arr = String(n).split("");
    let newArr = arr.slice(-d);
    newArr = newArr.map(Number);
    return newArr;
  }
}

//console.log(lastDigit(123767, 4));

function longest(s1, s2) {
  let first = s1.split("");
  let second = s2.split("");
  let long = new Set([...s1, ...s2]);
  let sorted = Array.from(long).sort();

  for (let j = 0; j < second.length; j++) {
    long.add(second[j]);
  }
  for (let i = 0; i < first.length; i++) {
    long.add(first[i]);
  }

  return sorted.join("");
}

//How many people still on the bus after ['gets on', 'gets off]
const number = function (busStops) {
  let remaining = 0;
  for (let i = 0; i < busStops.length; i++) {
    let peopleOnBus = busStops[i].shift();
    let getOff = busStops[i].pop();
    remaining += peopleOnBus - getOff;
  }
  return remaining;
};

function removeSmallest(numbers) {
  if (numbers.length !== 0) {
    let compare = numbers[0];
    let lowIndex = 0;

    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < compare) {
        compare = numbers[i];
        lowIndex = i;
      }
    }

    const newArr = [
      ...numbers.slice(0, lowIndex),
      ...numbers.slice(lowIndex + 1),
    ];
    return newArr;
  } else {
    return [];
  }
}

console.log(removeSmallest([5, 2, 3, 4, 1]));
