/* Factorial. Simple function expression. */

const factorial = n => {
  let ans = 1;
  for (let i = 2; i< = n; i++){
    ans *= i;
  }
  return ans;
};


/* Factorial with recursion. */
const factorial = (n) => { 
  if (n === 0){
    return 1;
 } return n * factorial(n-1);       
};


/* Another factorial using recursion. */
let factorial = function fac(num) {
  if(num === 1){
    return 1;
  } 
  return num *fac(num - 1);
}

let final = factorial(5);


