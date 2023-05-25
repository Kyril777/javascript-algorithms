/* Function that splices an occurence in the array. */ 

function delete_occurence(array, occ) {
  for (var i=0;i<array.length;i++){
    if(array[i]==occ){
      array.splice(i,1); 
    }
  }
  return array;
}
var arr = [88, 7, 67, 13, 111, 9, 900, 62, 23, 111];
arr = delete_occurence(arr, 111)

console.log(arr); // 88, 7, 67, 13, 9, 900, 62, 23
