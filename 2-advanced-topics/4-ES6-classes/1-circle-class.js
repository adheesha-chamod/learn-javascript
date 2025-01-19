/*
function Circle(radius) {
  this.radius = radius;

  this.draw = function () {
    console.log("draw");
  };
}
*/

class Circle {
  constructor(radius) {
    this.radius = radius;

    this.move = function () {
      console.log("move");
    };
  }

  draw() {
    console.log("draw");
  }
}

// inspect 'c' from browser console
const c = new Circle(10);
c.move();
c.draw();

console.log(typeof Circle);
