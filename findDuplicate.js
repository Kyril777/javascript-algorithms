/* Function that searches for duplicate value(s) in an array. */

let findDuplicate = (array) => {
  let arrDuplicate=[]
  for(let i=0; i<array.length; i++){
     if(array.indexOf(array[i])!=i&&arrDuplicate.indexOf(array[i])==-1){
       arrDuplicate.push(array[i]);
     }
  }
  return arrDup;
}

let arr = [6,7,13,6,54,80,54,6];

console.log(findDuplicate(array)); //[6, 54]
