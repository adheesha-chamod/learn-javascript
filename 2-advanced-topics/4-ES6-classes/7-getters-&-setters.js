const _radius = new WeakMap();

class Circle {
  constructor(radius) {
    _radius.set(this, radius);
  }

  get radius() {
    return _radius.get(this);
  }

  set radius(value) {
    if (value <= 0) {
      throw new Error("Invalid radius");
    }

    _radius.set(this, value);
  }
}

// observe object c from browser console
const c = new Circle(10);
console.log(c.radius);

c.radius = 20;
console.log(c.radius);
