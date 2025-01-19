class Shape {
  constructor(colour) {
    this.colour = colour;
  }

  move() {
    console.log("move shape with colour", this.colour);
  }
}

class Circle extends Shape {
  constructor(radius, colour) {
    super(colour);
    this.radius = radius;
  }

  draw() {
    console.log(
      "draw circle with radius of",
      this.radius,
      "and colour with",
      this.colour
    );
  }
}

// observe object c in browser console
const c = new Circle(10, "red");
