// Function that removes duplicate elements in an array.
const duplicateFree = (array) => {
  const uniqueArray = [];

  for (let i = 0; i <= array.length - 1; i++) {
    if (uniqueArray.indexOf(array[i]) == -1) {
      uniqueArray.push(array[i]);
    }
  }

  return uniqueArray;
}

console.log(duplicateFree([5, 6, 8, 0, 0, 1, 5])); // Output: (5) [5, 6, 8, 0, 1]
