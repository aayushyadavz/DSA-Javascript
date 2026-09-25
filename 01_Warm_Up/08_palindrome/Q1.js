// Given an integer x, return true if x is a palindrome, and false otherwise.

function isPalindrome(num) {
  if (num < 0) return false; // if the number is negative

  let numCopy = num; // keeping the copy of num so that we can use it later on
  let rev = 0;

  while (num > 0) {
    let rem = num % 10; // to find last digit
    rev = 10 * rev + rem;
    num = Math.floor(num / 10); // to remove the last digit
  }

  if (rev === numCopy) {
    return true;
  } else {
    return false;
  }
}

let number = 1234;

let result = isPalindrome(number);

console.log(result); // false

/*
  Inside While Loop: 
  num       → take last digit → put it into rev → remove last digit
  1234      →       4         →       4         → 123
  123       →       3         →      43         → 12
  12        →       2         →     432         → 1
  1         →       1         →    4321         → 0
*/
