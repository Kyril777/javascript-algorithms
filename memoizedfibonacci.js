/* Memoized Fibonacci. */

const memoizedfibonacci = (element, cache = []) => {
  if (cache[element]) return cache[element];
  else {
    if (element < 3) return 1;
    else
      cache[element] =
        fibonacci(element - 1, cache) + fibonacci(element - 2, cache);
  }
  return cache[element];
};
