const circule = {
  radius: 1,
  // area is read-only property
  get area() {
    return Math.PI * this.radius ** 2;
  },
};

console.log(circule.area);
