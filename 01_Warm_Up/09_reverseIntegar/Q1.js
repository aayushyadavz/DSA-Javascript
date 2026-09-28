// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.

function reverseIntegar(num) {
  let numCopy = num;
  let rev = 0;

  num = Math.abs(num); // Converting negative numbers into positive

  while (num > 0) {
    let rem = num % 10; // to find last digit
    rev = 10 * rev + rem;
    num = Math.floor(num / 10); // to remove the last digit
  }

  // Calculating the power 31 of 2
  let limit = Math.pow(2, 31); // OR let limit = 2**31
  if (rev < -limit || rev < limit) return 0; // for 32-bit integer range

  // Handling negative numbers
  return numCopy < 0 ? -rev : rev; // Ternary Operator
}

let number = -123;

let result = reverseIntegar(number);
console.log(result);
