export {};
function stringToArray(arr) {
  var arr2 = arr[0].split(" ");
  return arr2;
}
console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe']
