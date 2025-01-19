const numbers = [-1, 20, 3, 4];

const max = getMax(numbers);

console.log(max);

function getMax(array) {
  if (array.length === 0) {
    return undefined;
  }

  return array.reduce((a, b) => {
    return a > b ? a : b;
  }, array[0]);
}
