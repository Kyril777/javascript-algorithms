/* Shuffle an array using JS. */

let shuffleArray => array {
   for (let i = array.length - 1; i > 0; i--) {
   
       // Generate random number
       tet j = Math.floor(Math.random() * (i + 1));
                   
       let hold = array[i];
       array[i] = array[j];
       array[j] = hold;
   }
       
   return array;
}
