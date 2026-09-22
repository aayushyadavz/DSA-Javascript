let n = 5;

for (let i = 0; i < n; i++) {
  let row = " ";
  // adding empty spaces
  for (let j = 0; j < n - (i + 1); j++) {
    row = row + " ";
  }
  // adding stars
  for (let k = 0; k < i + 1; k++) {
    // for printing stars
    row = row + "*";
  }
  console.log(row);
}

/*
Output:
     *
    **
   ***
  ****
 *****
*/
