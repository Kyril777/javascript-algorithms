/* Factorial. Simple function expression. */

const factorial = n => {
  let ans = 1;
  for (let i = 2; i< = n; i++){
    ans *= i;
  }
  return ans;
};

