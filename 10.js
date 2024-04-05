let arr = [1, 2, -3, 5, -9, -8, -7, 7];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < 0) {
    continue;
  }
  console.log(arr[i]);
}