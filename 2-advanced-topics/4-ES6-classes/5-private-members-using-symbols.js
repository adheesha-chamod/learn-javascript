const _radius = Symbol();
const _draw = Symbol();

class Circle {
  constructor(radius) {
    this[_radius] = radius;
  }

  [_draw]() {
    console.log("draw");
  }
}

// observe object c from browser console
const c = new Circle(10);

const properties = Object.getOwnPropertyNames(c);
console.log(properties);

const symbols = Object.getOwnPropertySymbols(c);
console.log(symbols);

const k1 = symbols[0];
console.log(c[k1]);
