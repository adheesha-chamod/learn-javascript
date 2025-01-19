class Circle {
  draw() {
    console.log(this);
  }
}

const c = new Circle();

const ref = c.draw;

console.log(ref);
// draw();	// error
