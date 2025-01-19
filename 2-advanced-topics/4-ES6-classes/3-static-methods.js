class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  // instance method
  draw() {
    console.log("draw circle with radius:", this.radius);
  }

  // static method
  static parse(str) {
    const radius = JSON.parse(str).radius;
    return new Circle(radius);
  }
}

const c1 = new Circle(1);
c1.draw();
// c1.parse();	// error -> not accessible

const c2 = Circle.parse('{ "radius": 2 }');
c2.draw();
