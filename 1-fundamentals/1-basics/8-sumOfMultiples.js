console.log(sum(10));

// multiples of 3: 3, 6, 9
// multiples of 5: 5, 10

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}
