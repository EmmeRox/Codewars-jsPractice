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

//console.log(removeSmallest([5, 2, 3, 4, 1]));

function filter_list(l) {
  let numbersOnly = l.filter((el) => typeof el === "number");
  return numbersOnly;
}

//console.log(filter_list([1, 2, "a", "b"]));

//You have a list of integers. The task is to return the maximum sum of the elements located between two negative elements.

function maxSumBetweenTwoNegatives(a) {
  let sum = 0;
  let maxSum = -1;
  let negative = false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      if (negative && sum > maxSum) {
        maxSum = sum;
      }
      sum = 0;
      negative = true;
    } else {
      sum += a[i];
    }
  }

  return maxSum === -1 ? -1 : maxSum;
}
//console.log(maxSumBetweenTwoNegatives([-1,6,-2,3,5,-7]));
//console.log(maxSumBetweenTwoNegatives(-1, 2))

//Write a function that removes the spaces from the values and returns an array showing the space decreasing

function spacey(array) {
  let newArr = [];
  let word = "";
  for (let i = 0; i < array.length; i++) {
    word = word + array[i];
    newArr.push(word);
  }
  return newArr;
}

//console.log(spacey(["kevin", "has", "no", "space"]));

//implement the function which takes an array containing the names of people that like an iteme

function likes(names) {
  if (names.length === 0) {
    return `no one likes this`;
  } else if (names.length === 1) {
    return `${names[0]} likes this`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  } else {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
  console.log(names.length);
}

//console.log(likes(['Jacob', 'Alex', 'Joe', 'Mary', 'Tammy']));
//console.log(likes([]))

//Write a function that takes a single string as arg. Return an ordered list containing the indexes of all caps.

const capitals = function (word) {
  let stringArr = word.split("");
  let newArr = [];
  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === stringArr[i].toUpperCase()) {
      newArr.push(i);
    }
  }
  return newArr;
};

//console.log(capitals("CodeWarS"));

//Your function receives one side of DNA and you need to return the other complementary side

function DNAStrand(dna) {
  let arr = [];
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] === "A") {
      arr.push("T");
    } else if (dna[i] === "T") {
      arr.push("A");
    } else if (dna[i] === "C") {
      arr.push("G");
    } else {
      arr.push("C");
    }
  }
  return arr.join("");
}

//console.log(DNAStrand("AAAA"));
//console.log(DNAStrand("TTCC"));
//Better solution found on codewars
function DNAStrand(dna) {
  //your code here
  let res = "";
  for (let i = 0; i < dna.length; i++) {
    switch (dna[i]) {
      case "A":
        res += "T";
        break;
      case "T":
        res += "A";
        break;
      case "G":
        res += "C";
        break;
      case "C":
        res += "G";
        break;
    }
  }
  return res;
}

//write a function that takes an array of nums and a target and returns the indices of the addends of that target num

function twoSum(num, target) {
  // num is an array
  for (let i = 0; i < num.length; i++) {
    for (let j = 1; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        return [i, j];
      }
    }
  }
  //target is the sum you are trying to reach from nums in array
  return indices;
}

//console.log(twoSum([1, 2, 3], 4));

//remove dupllicates from a list of integers keeping the last occurrence of each

function solve(arr) {
  let newArr = [];

  arr.reverse();
  for (let i of arr) {
    if (!newArr.includes(i)) {
      newArr.push(i);
    }
  }

  return newArr.reverse();
}

//console.log(solve([3, 4, 4, 3, 6, 3]));

Array.prototype.last = function () {
  if (this.length === 0) {
    return -1;
  } else {
    return this[this.length - 1];
  }
};

const arr = [1, 2, 3, 4];
//console.log(arr.last());

//Check to see if palindrome.

function isPalindrome(arg) {
  let word;

  if (typeof arg === "string") {
    word = arg.split("").reverse().join("");
    if (word.toLowerCase() === arg.toLowerCase()) {
      return true;
    } else {
      return false;
    }
  }
}

//console.log(isPalindrome("Abba"));
//console.log(isPalindrome("hello"));

//An isogram is a word with no reapeating letters. Write a function that determines if isogram or not

function isIsogram(str) {
  str = str.toLowerCase().split("");
  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    for (let j = 1; j < str.length; j++) {
      if (current === str[j]) {
        return false;
      }
    }
    return true;
  }
}

//console.log(isIsogram("isogram"));
//console.log(isIsogram("abA"));

//Return the middle character of a word. If # of chars is even, return the middle 2

function getMiddle(word) {
  let middle;

  if (word.length % 2 === 0) {
    console.log(typeof word);
    middle = word.slice(word.length / 2 - 1, word.length / 2 + 1);
  } else {
    middle = word[Math.floor(word.length / 2)];
  }
  return middle;
}

//console.log(getMiddle("test"));
//console.log(getMiddle("testing"));

//write a function that finds a needle in a haystack

function findNeedle(haystack) {
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${i}`;
    }
  }
}

let haystack_1 = [
  "283497238987234",
  "a dog",
  "a cat",
  "some random junk",
  "a piece of hay",
  "needle",
  "something somebody lost a while ago",
];
//console.log(findNeedle(haystack_1));

//write a function that accepts an array of 10 integers and returns them in phone number form

function createPhoneNumber(numbers) {
  let areaCode = numbers.slice(0, 3).join("");
  let firstThree = numbers.slice(3, 6).join("");
  let finalFour = numbers.slice(6).join("");

  console.log(firstThree);
  return `(${areaCode}) ${firstThree} - ${finalFour}`;
}

//Below does the exact same but cleaner with the Reduce method
function createPhoneNumber2(numbers) {
  return numbers.reduce((p, c) => p.replace("x", c), "(xxx) xxx-xxxx");
}

//console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

//Create a function taht takes in a list of button inputs and returns the final state

function likeOrDislike(buttons) {
  let likeState = false;
  let dislikeState = false;

  for (const element of buttons) {
    //working on new kata
    if (element === "Like") {
      if (likeState) {
        likeState = false;
        dislikeState = false;
      } else {
        likeState = true;
        dislikeState = false;
      }
    } else if (element === "Dislike") {
      if (dislikeState) {
        dislikeState = false;
        likeState = false;
      } else {
        dislikeState = true;
        likeState = false;
      }
    }
  }

  return likeState ? "Like" : dislikeState ? "Dislike" : "Nothing";
}

//console.log(likeOrDislike(["Disl1ike", "Like"]));

//knowing m (num of posters), knowing n (num of colors), search for x (num of colors for each poster so that each has a unique color combination). In other words: n choose x = m(1) using the formula m = n! / (x! * (n - x)!)

function factorial(num) {
 for (let i = 1; i <= num; i++) {
 num *= num;
return num;
}
}
; //separate the bottom function into two functions. first one being the one that does the math of factorial and then calling the function inside the checkchoose function, using it in lieu of the (!) from the original problem

function checkchoose(m, n) { 
  let colorCombo = 1;
  
  for (let i = 0; i <= m; i++) {
    colorCombo = factorial(n) / (factorial (i) * factorial(n - i);
  }

  if (m === colorCombo) {
    return ;
  }

}

return -1;
}
console.log(checkchoose(6, 4));