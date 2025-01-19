try {
  const numbers = true; // passing a non-array value to test error handling
  const count = countOccurrences(numbers, 1);
  console.log(count);
} catch (e) {
  console.error(e.message);
}

function countOccurrences(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("First argument is not an array");
  }

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}
