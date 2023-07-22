/* Function (using memoization) that calculates the fibonacci sum. */
const cache = {}
const fib = (n) => {
  if (n < 2) return n
  cache[n] ||= fib(n - 1) + fib(n - 2)
  return cache[n]
}

console.log(fib(20)) // 6765
