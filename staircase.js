/* Staircase. */

const staircase = (num) => {
  let filledArray = new Array(num).fill(' ');    
  while (filledArray.indexOf(' ') !== -1) {
        filledArray.shift();
        filledArray.push('#');
        console.log(filledArray.join(""));
        num--;
    }
}
