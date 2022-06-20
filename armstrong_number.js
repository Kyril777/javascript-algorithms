const armstrong = ()=> {
     var num = ;
     let sum = 0;
      
     // Temporarily stores the number.
     let temp = num;

     // Take out each digit from the number.
     while(num > 0){

          // Obtain the last digit.
          let d = parseInt(num % 10);
          
          // Find the cube.
          d = d ** 3;
          sum = sum + d;
          // Convert float to an integer.
          num = parseInt(num / 10);
     }

     if(tmp === sum){
          return "Armstrong number";
     } else {
     return "Not an armstrong number";
     }
}
