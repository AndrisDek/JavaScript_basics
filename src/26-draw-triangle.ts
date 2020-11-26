export {};

function draw(num) {
  var string = "*";
  for (var i = 1; i <= num; i++) {
    console.log(string);
    string = string + "*";
  }
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
