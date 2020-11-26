export {};

const removeFromArray = function (arr, num?: number, num2?: number) {
  return arr.filter(function (ele) {
    return ele != num && ele != num2;
  });
};
console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]
