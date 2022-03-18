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