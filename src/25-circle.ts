export {};

function Circle(radius) {
  this.radius = radius;
  this.area = function (radius) {
    return Math.PI * this.radius * this.radius;
  };
  this.perimeter = function () {
    return 2 * Math.PI * this.radius;
  };
}

const c = new Circle(3);
console.log("Area =" + c.area().toFixed(2)); // Expected output: Area = 28.27
console.log("Perimeter =" + c.perimeter().toFixed(2)); // Expected output: Perimeter = 18.85
