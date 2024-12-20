function myFunc(a, b) {
  if (a == null || b == null) {
    return 0; // Handle null or undefined values
  }
  return a + b;
}

console.log(myFunc(null, 5)); // Output: 0
console.log(myFunc(5, null)); // Output: 0
console.log(myFunc(5, 5));   // Output: 10
console.log(myFunc(undefined, 5)); // Output: 0
console.log(myFunc(5, undefined)); // Output: 0