// Q1 Write a function that returns the largest number in an array.

// function findLargest(arr) {
//   let largest = -Infinity; // Keeping the value of largest as -Infinity because if we compare any number with -Infinity, it will always be greater, and my array will definitely not contain -Infinity.
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }

// let arr = [5, 0, 7, 10, 8, 17, 1];

// let result = findLargest(arr);
// console.log(result);

// Q2 Write a function that returns the largest number in an array.

function findLargest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

let arr = [5, 0, 7, 10, 8, 17, 1];

let result = findLargest(arr);
console.log(result);
