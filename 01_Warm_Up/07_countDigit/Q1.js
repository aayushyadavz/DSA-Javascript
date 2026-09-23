// Write a function that returns the count of digits in a number.

function countDigits(n) {
  // Corner cases: If number is 0 then return 1
  if (n == 0) return 1;

  // Corner cases: If the number is negative convert it to positive
  n = Math.abs(n);

  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

let num = -259;

let result = countDigits(num);

console.log(result); // 3

/*
    259 / 10 = 25.9
    25 / 10 = 2.59
    2 / 10 = 0.259

    Corner Cases:
    1. What if my n over here is 0.
    2. What is the number is negative.
*/
