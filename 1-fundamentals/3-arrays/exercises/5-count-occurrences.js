const numbers = [1, 2, 3, 4, 1, 2];

const count = countOccurrences(numbers, 1);

console.log(count);

// function countOccurrences(array, searchElement) {
//   let count = 0;
//   array.forEach((value) => {
//     if (value === searchElement) {
//       count++;
//     }
//   });

//   return count;
// }

function countOccurrences(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    return accumulator + occurrence;
  }, 0);
}
