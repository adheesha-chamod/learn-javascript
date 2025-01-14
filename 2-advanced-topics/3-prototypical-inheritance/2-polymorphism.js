function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype.constructor = Child;
}

function HtmlElement() {}

HtmlElement.prototype.click = function () {
  console.log("clicked");
};

HtmlElement.prototype.focus = function () {
  console.log("focused");
};

function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function (item) {
    this.items.push(item);
  };

  this.removeItem = function (item) {
    this.items.splice(this.items.indexOf(item), 1);
  };

  this.render = function () {
    let element = `<select>`;
    for (let item of items) {
      element += `\n  <option>${item}</option>`;
    }
    element += `\n</select>`;
    return element;
  };
}

extend(HtmlSelectElement, HtmlElement);

function HtmlImageElement(src) {
  this.src = src;

  this.render = function () {
    return `<img src="${this.src}" />`;
  };
}

extend(HtmlImageElement, HtmlElement);

const elements = [
  new HtmlSelectElement([1, 2, 3]),
  new HtmlImageElement("http://image"),
];

for (let e of elements) {
  console.log(e.render());
}
