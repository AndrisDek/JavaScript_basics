export {};

function tidyUpString(str) {
  return str.trim().toLowerCase().replace("/", "");
}

// You are allowed to edit this function
function capitalise(arr) {
  var arr2 = arr.map(function (str) {
    return tidyUpString(str);
  });
  var arr3 = arr2.map(function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  });
  return arr3;
}

const mentors = ["/Daniel ", "irina ", " Gordon", "ashleigh "];
let mentorsTidy = capitalise(mentors); // You are allowed to edit this line

console.log(mentorsTidy); // Expected output: ["Daniel", "Irina", "Gordon", "Ashleigh"]
