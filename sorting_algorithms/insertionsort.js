/* Insertion Sort. */

let insertionSort = (array) {
    // Commence from second element.
    for(let i = 1; i < array.length;i++){

        // Go over elements.
        for(let j = i - 1; j > -1; j--){
            
            // Compare values using ascending order.
            if(array[j + 1] < array[j]){

                // Swap elements.
                [array[j+1],array[j]] = [array[j],array[j + 1]];

            }
        }
    };

  return array;
}
