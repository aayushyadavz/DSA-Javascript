let n = 4;

for (let i = 0; i < n; i++) {
  // i is responsible for rows
  let row = " ";
  for (let j = 0; j < n; j++) {
    // j is responsible for column
    row = row + "*";
  }
  console.log(row);
}

/*
Output :
 ****
 ****
 ****
 ****
*/
