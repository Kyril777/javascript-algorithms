const prime => (num) {
  let i;
  let flag = true;
  if (num == 1) {
    flag = false;
  } else {
    for(i = 2; i < num-1; i++) {
      if (num % i == 0) {
      flag = false;
     break;
      }
    }
   }
  if(flag == true) {
    console.log("It is a prime number.");
  } else {
    console.log("It is not a prime number");
  }
}
