export {};

/**
 * Create a function called fullName, which concatenates two strings together
 */
function fullName(firstName, lastName) {
  return firstName.concat(" ", lastName);
}

console.log(fullName("John", "Doe")); //Expected output: 'John Doe'
