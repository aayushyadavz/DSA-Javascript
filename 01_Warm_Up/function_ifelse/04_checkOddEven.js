// Create a function to check if the number is Even or Odd

function isEvenOdd(num) {
  let rem = num % 2;

  if (rem == 0) {
    console.log("Even Number");
  } else {
    console.log("Odd Number");
  }
}

checkOddEven(15);
