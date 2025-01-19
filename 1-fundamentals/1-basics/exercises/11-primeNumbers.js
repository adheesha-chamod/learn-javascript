showPrimes(20);

function showPrimes(limit) {
  for (let i = 2; i <= limit; i++) {
    if (isPrime(i)) {
      console.log(i);
    }
  }
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}
