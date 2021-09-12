/*
“A closure is the local variables for a function – kept alive after the function has returned.” (javascript.com) 
“Closure is when a function is able to remember and access its lexical scope even when that function is executing outside its lexical scope.” (Kyle Simpson) 
“A closure is a function having access to the  parent scope, even after the parent function has closed” (W3C Schools) 
Source: All Things JavaScript.
*/

let exec = function exec() { 
  let a = 2, 
      b =3; 

  let exec2 = function exec2() { 
    console.log(a + b); 
  }; 

  setTimeout(exec2, 1000); 
}; 

exec(); 
