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
