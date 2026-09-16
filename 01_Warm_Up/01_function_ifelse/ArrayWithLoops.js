let arr = [10, 6, 2, 0, 8];

let length = arr.length; // 5

for (let i = 0; i < length; i++) {
  console.log(arr[i]);
}

/*
When `i = 0`, then `0 < 5` (True). `arr[0]`, which is `10`, will be printed to the console, then `i++`.
When `i = 1`, then `1 < 5` (True). `arr[1]`, which is `6`, will be printed to the console, then `i++`.
When `i = 2`, then `2 < 5` (True). `arr[2]`, which is `2`, will be printed to the console, then `i++`.
When `i = 3`, then `3 < 5` (True). `arr[3]`, which is `0`, will be printed to the console, then `i++`.
When `i = 5`, then `5 < 5` (False), so the loop will end.
*/
