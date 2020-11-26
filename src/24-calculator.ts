export {};

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function sum(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function multiply(arr) {
  var sum = 1;
  for (var i = 0; i < arr.length; i++) {
    sum = sum * arr[i];
  }
  return sum;
}

function power(num1, num2) {
  return Math.pow(num1, num2);
}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
