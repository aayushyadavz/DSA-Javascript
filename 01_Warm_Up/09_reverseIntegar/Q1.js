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

  let limit = Math.pow(2, 31); // 2 to the power 31 = 2147483648
  if (rev < -limit || rev < limit) return 0;

  // Handling negative numbers
  return numCopy < 0 ? -rev : rev; // Ternary Operator
}

let number = -123;

let result = reverseIntegar(number);
console.log(result);
