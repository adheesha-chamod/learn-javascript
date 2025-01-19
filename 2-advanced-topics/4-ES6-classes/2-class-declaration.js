// const c2 = new Circle(10);	  // error -> not hoisted
// const s2 = new Squre(10);		// error -> not hoisted

// class declaration
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  draw() {
    console.log("draw circle");
  }
}

// class expression
const Squre = class {
  constructor(length) {
    this.length = length;
  }

  draw() {
    console.log("draw squre");
  }
};

// inspect below objects from browser console
const c1 = new Circle(10);
const s1 = new Squre(10);

c1.draw();
s1.draw();
