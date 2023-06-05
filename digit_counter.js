/* JS function that uses the while loop to count the number of digits in an integer. 
Not applicable for decimals.*/

function digitCounter(digit) {
  let count=0; 
  let abs_val = Math.abs(digit); // Takes into account negative entries.
  while(abs_val!=0){
    abs_val=Math.floor(abs_val/10);
    count++;
  }
  return count;
}
console.log(digitCounter(-354)); // 3
console.log(digitCounter(97531)) // 5
