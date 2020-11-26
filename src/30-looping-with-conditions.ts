export {};

function onlyTheAces(arr) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Ace") {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}

console.log(onlyTheAces(["Ace", "King", "Queen", "Jack", "Ace"])); // Expected result: ['Ace', 'Ace']
