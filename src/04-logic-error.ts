export {};

function trimWord(word) {
  return word.trim(" ");
}

const result = trimWord("  CODING ");
console.log(result); // Expected output: "CODING"
