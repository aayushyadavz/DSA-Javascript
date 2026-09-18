// Find the second largest number in an array

function secondLargest(arr) {
  if (arr.length < 2) {
    // Corner cases: If my array has less than 2 elements
    return "Array should have atleast 2 elements.";
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest; // Updating secondLargest before firstLargest
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && secondLargest != firstLargest) {
      // Corner cases: Ignore duplicates when finding the second largest.
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}

let arr = [10, 20, 8, 20, 9, 3, 5, 20, 20];

let result = secondLargest(arr);

console.log(result);

/* 
  Some Corner Cases: 
  1. What if array is empty.
  2. What if array has negative numbers.
  3. What if array has duplicates.
*/
