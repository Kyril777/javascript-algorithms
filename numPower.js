/* Function that uses the for loop in order to return the power of a number. */
function numPower(num,powr) {
  let res=1; // Return 1 if power is zero.
  for(var i=0;i<powr;i++){
     res=res*num;
  }
  return res;
}

result1 = numPower(3,2);
console.log(result1); // 9
result2 = numPower(2,4);
console.log(result2); // 16
result3 = numPower(2.4);
console.log(result3); // 1
