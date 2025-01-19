class Shape {
  move() {
    console.log("move shape");
  }
}

class Circle extends Shape {
  move() {
    super.move();
    console.log("move circle");
  }
}

// observe object c in browser console
const c = new Circle();
