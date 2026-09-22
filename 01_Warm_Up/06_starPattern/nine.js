let n = 6;

let toggle = 1; // Moving this toggle outside means it doesn't get reset again and again. It is initialized only once, and now it keeps switching between 0 and 1.

for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;

    // Switch the toggle
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}
