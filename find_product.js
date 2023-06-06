/* JS function that uses a for loop to find product of two arrays. If array is not of the same size, the unmatched values will not have be multiplied. */

function find_product(array1, array2) {
  let arr_product = array1.length>array2.length ? array1 : array2;
  for(let i=0; i < Math.min(array1.length, array2.length); i++){
     arr_product[i] = array1[i] * array2[i]; 
  }
  return arr_product;
}
let arr1 = [2,3,4,5,6];
let arr2 = [2,3,4,5,6,7];

console.log(find_product(arr1,arr2)); // [4, 9, 16, 25, 36, 7]
