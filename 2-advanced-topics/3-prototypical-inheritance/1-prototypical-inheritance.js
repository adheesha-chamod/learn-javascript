function HtmlElement() {
  this.click = function () {
    console.log("clicked");
  };
}

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
}

HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement;

const e = new HtmlElement();
const s = new HtmlSelectElement([1, 2, 3]);

s.addItem(4);
s.removeItem(2);
console.log(s);

s.focus();
s.click();

/**
 * observe objects e and s from browser console
 */
