/* Create an iterator. Loop into array and return result as an array. */

const createIterator = (array) => {
    let nexIndex = 0;

    return {
       next: function() {
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
    };
}
