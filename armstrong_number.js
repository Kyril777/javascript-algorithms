         function armstrong()
         {
             var num = ;
             let sum = 0;
             //store the number to check later
             let tmp = num;
             //Extract each digit from the number
             while(num > 0){
                  //retrieve the last digit
                  let d = parseInt(num % 10);
                  //find the cube
                  d = d ** 3;
                  sum = sum + d;
                  //convert float to Integer
                  num = parseInt(num / 10);
             }
             if(tmp === sum)
             {
                  alert("Armstrong number");
             }
             else
             {
                  alert("Not an armstrong number");
             }
         }
