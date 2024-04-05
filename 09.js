const arr = [1, 2, 999, 56, "Mithun", 1234, "PW"];

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    console.log(`Found The First String: ${arr[i]}`);
    break;
  }
}