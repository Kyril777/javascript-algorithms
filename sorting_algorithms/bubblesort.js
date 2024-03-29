/* Bubblesort */

let bubbleSort = (inputArray) => {
    let lngth = inputArray.length;
    for (let i = 0; i < lngth; i++) {
        for (let j = 0; j < lngth; j++) {
            if (inputArray[j] > inputArray[j + 1]) {
                let temp = inputArray[j];
                inputArray[j] = inputArray[j + 1];
                inputArray[j + 1] = temp;
            }
        }
    }
    return inputArray;
};

/* Bubble Sort. */ 
const bubbleSort = array => { 
  let swapped; 
  do { 
    swapped = false; 
    array.forEach((number, index) => { 
      if (number > array[index + 1]) { 
        [array[index], array[index + 1]] = [array[index + 1], array[index]]; 
        swapped = true; 
      } 
    }); 
  } while (swapped); 
  return array; 
}; 


function _bubbleSort(array) { 
  for (let i = 0; i < array.length; i++) { 
    for (let j = 0; j < array.length - i - 1; j++) { 
      if (array[j] > array[j + 1]) { 
        const less = array[j + 1]; 
        array[j + 1] = array[j]; 
        array[j] = less; 
      } 
    } 
  } 
  return array; 
} 

 
