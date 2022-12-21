/* Print digit from 1 - 5 in ascending order.  */
for(let i=0; i<=5; i++){
   console.log(i);
}

/* Print digit from 1 - 5 in descending order.  */
for(let i=5; i>=0; i--){
   console.log(i);
}

/* Looping through the values of an array. */
const birds = ["canary", "osprey", "rook"];

for (const x of birds) {
  console.log(x)
}

/* Loop that displays the sum of natural numbers. */
let sum = 0;
const n = 50

// Loop from i = 1 to n.  In each iteration, i is increased by 1
for (let i = 1; i <= n; i++) {
    sum += i;  // sum = sum + i
}

console.log('sum:', sum);


/* Print a set of prime numbers from 1 to 100. */
let isPrime = true;
 
console.log("Prime numbers from 1 to 100 are: ");
let peak = 100;
for(let i=2; i <= peak; i++){
  for(let j=2; j < i - 1; j++){
    if(i % j == 0){
      isPrime = false;
      break;
    }
  }
  if(isPrime){
    console.log(i);
  }
  isPrime = true;
}

/* A nested loop. The inner loop will run all its iterations for each iteration of the outer loop. */
for (let outer = 0; outer < 2; outer += 1) {
  for (let inner = 0; inner < 3; inner += 1) {
    console.log(`${outer}-${inner}`);
  }
}
