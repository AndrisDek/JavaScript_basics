export {};

function concatenate(firstWord, secondWord, thirdWord) {
  return firstWord.concat(" ").concat(secondWord).concat(" ").concat(thirdWord);
}

const result = concatenate("Hello", "from", "CODING");
console.log(result); // Expected output: "Hello from CODING"
