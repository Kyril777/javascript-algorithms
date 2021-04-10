/* String scrambler. */

const stringShuffler = (string) => {
  let array = string.split('');          
  
  array.sort(function() {
    return 0.5 - Math.random();
  });  
  string = array.join('');               
}

let string = 'ABCDEF';

let shuffled = stringShuffler(string);

console.log(shuffled);
