/* Fibonacci using recursion */

let fiboseries = (entry) => {
  if (entry===1) {
    return [0, 1];
  } else {
  let sum = fiboseries(entry - 1);
  sum.push(sum[sum.length - 1] + sum[sum.length - 2]);
  return sum;
  }
};
