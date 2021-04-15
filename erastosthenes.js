/* Sieve of Erastosthenes. */

const primes = number => {
  const numbers = new Array(number + 1);
  numbers.fill(true);
  numbers[0] = numbers[1] = false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    for (let j = 2; i * j <= number; j++) numbers[i * j] = false;
  }

  return numbers.reduce(
    (primes, isPrime, prime) => (isPrime ? primes.concat(prime) : primes),
    []
  );
};




let primegenerator = (n) => {
    let array = [], upperLimit = Math.sqrt(n), primes = [];

    for (let i = 0; i < n; i++) {
        array.push(true);
    }

    for (let i = 2; i <= upperLimit; i++) {
        if (array[i]) {
            for (var j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    for (let i = 2; i < n; i++) {
        if(array[i]) {
            primes.push(i);
        }
    }

    return primes;
};
