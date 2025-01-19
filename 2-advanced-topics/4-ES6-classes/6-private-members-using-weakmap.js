const _radius = new WeakMap();
const _move = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);

    _move.set(this, () => {
      console.log("move", this);
    });
  }

  draw() {
    _move.get(this)();
    console.log("draw");
  }
}

// observe object c from browser console
const c = new Circle(10);
