const privateData = new WeakMap();

class Stack {
  constructor() {
    privateData.set(this, {
      count: 0,
      items: [],
    });
  }

  isEmpty() {
    return privateData.get(this).count === 0;
  }

  push(item) {
    const data = privateData.get(this);
    data.items.push(item);
    data.count++;
  }

  pop() {
    const data = privateData.get(this);
    if (data.count === 0) {
      throw new Error("Stack is empty");
    }
    data.count--;
    return data.items.pop();
  }

  peek() {
    const data = privateData.get(this);
    if (data.count === 0) {
      throw new Error("Stack is empty");
    }
    return data.items[data.count - 1];
  }

  get size() {
    return privateData.get(this).count;
  }
}

// observe the object `s` in the browser console
const s = new Stack();
