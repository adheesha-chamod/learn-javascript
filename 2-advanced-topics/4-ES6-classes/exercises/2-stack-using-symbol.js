const _count = Symbol("count");
const _items = Symbol("items");

class Stack {
  constructor() {
    this[_count] = 0;
    this[_items] = [];
  }

  isEmpty() {
    return this[_count] === 0;
  }

  push(item) {
    this[_items].push(item);
    this[_count]++;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    this[_count]--;
    return this[_items].pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this[_items][this[_count] - 1];
  }

  get size() {
    return this[_count];
  }
}

// observe the object `s` in the browser console
const s = new Stack();
