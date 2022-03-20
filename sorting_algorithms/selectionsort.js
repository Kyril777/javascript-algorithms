let selectionSort = (arr) => {
  let min;

  // Start.
  for (let i = 0; i < arr.length; i++) {
    // Index of the smallest element to be the ith element.
    min = i;

    // Scour through the rest of the array for the lesser element. 
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // Compare indexes
    if (min !== i) {
      // Swap
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}
