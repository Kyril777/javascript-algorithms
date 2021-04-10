/* Shuffle an array. */

const arrayShuffle = (array) => {
   for (var i = array.length - 1; i > 0; i--) { 
    
       let a = Math.floor(Math.random() * (i + 1));
                    
       let holder = array[i];
       array[i] = array[a];
       array[a] = holder;
   }
        
   return array;
}
