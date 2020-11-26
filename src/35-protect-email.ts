export {};

/**
 * Create a function protectEmail which hides some symbols of the email
 */
function protectEmail(string) {
  var dog = string.indexOf("@"),
    arr = "",
    email = "",
    hiddenEmail = "",
    dots = "...";
  for (var i = 0; i < 3; i++) {
    arr = arr + string[i];
  }
  for (var j = dog; j < string.length; j++) {
    email = email + string[j];
  }
  hiddenEmail = arr + dots + email;
  return hiddenEmail;
}

console.log(protectEmail("secret123@coding.io")); // Expected result: sec...@coding.io
console.log(protectEmail("example@example.com")); // Expected result: exa...@example.com
