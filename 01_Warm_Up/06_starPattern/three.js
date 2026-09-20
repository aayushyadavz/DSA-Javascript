let n = 5;

for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    // Here, instead of (j <= i), we can also write (j < i + 1).
    row = row + (j + 1);
  }
  console.log(row);
}

/* 
Output:
 1
 12
 123
 1234
 12345
*/
