const elements = [1, "Hi", "#", true, 0, "", undefined, null, NaN, false];
console.log(countTruthy(elements));

function countTruthy(array) {
  let count = 0;
  for (let value of elements) {
    if (value) {
      count++;
    }
  }

  return count;
}
