/* Factorial using Recusrion. */

	let factorial = function fac(num) {
	  if (num === 1) {
	    return 1;

	  }
  
	  return num * fac(num - 1);
	};

