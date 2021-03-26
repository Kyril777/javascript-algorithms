/* FizzBuzz. */
const fizzBuzz = num => {
  let output = [];
  for (let i = 1; i <= num; i++) {
    if (i % 6 === 0) output.push("Fizz Buzz");
    else if (i % 2 === 0) output.push("Fizz");
    else if (i % 3 === 0) output.push("Buzz");
    else output.push(i);
  }
  return output;
};


/* Shortest possible FizzBuzz. Source: https://codeburst.io/javascript-breaking-down-the-shortest-possible-fizzbuzz-answer-94a0ad9d128a */

for(let i=0;i<100;)console.log((++i%3?'':'fizz')+(i%5?'':'buzz')||i);
