/* 
Arrow functions are not that useful when you have to narrow down the code that you have to write. The arrow functions really shine when you have to write anonymous functions that have no name. 
But what makes arrow functions really great is that they re-define the ‘this’ keyword inside of them as opposed to the other way. 
*/
 
class Person { 
  constructor(name) { 
  this.name = name 
  } 

  printNameArrow() { 
    setTimeout(() => { 
      console.log(‘Arrow:’ + this.name )  
    }, 1000) 
  } 

  printNameFunction() { 
      setTimeout(function() { 
      console.log(‘Function: ‘ + this.name) 
    }. 100) 
  } 
} 