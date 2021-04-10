/* Returns a set of odd numbers between two numerals (from low to high). */

const oddNumbers = (low, high) => {
   let array = [],
        i = Math.floor(low / 2) * 2 + 1; 

    while(i <= high) {
        array.push(i);
        i += 2;
    };
    return array;        
}
