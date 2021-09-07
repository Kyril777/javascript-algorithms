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

/*
Here, we have a simple person class that takes a name and the constructor. And sets this.name to name.  
And then we have two functions. One is called printNameArrow. It uses an arrow function inside of a timeout. It will print out a person’s name after ‘Arrow: ’ following a 100 millisecond delay. 

The printNameFunction will try to do the same thing except it uses the standard function syntax. 
We will assign a new person and give it the name of class. We will then run both the printNameArrow and the printNameFunction. 

You will then see that the printNameArrow produces the name while printNameFunction does not, 
Normal standard function for JavaScript redefines the this keyword. But when you use an arrow function, this is not re-defined.  
*/

let person = new Person(‘Bob’) 
person.printNameArrow() 
person.printNameFunction() 
console.log(this.name)  
