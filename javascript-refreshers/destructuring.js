/* Destructuring from Ryan Christiani 
Destructuring is a way for us to extract data from different structures like arrays and objects. It picks and chooses the values we want. 
*/
let person = { 
  name: "Ryan", 
  age: 30, 
  location: "Toronto" 
} 

person.age; 
person["age"]; 
let { age: personAge } = person; 

console.log(personAge); 

/*
let person = { 
  		name: "Ryan", 
  		age: 30, 
  		location: "Toronto" 
} 

person.age; 
person["age"]; 
let { age , location: currentLocation } = person; 

console.log(age, currentLocation); 

 

let person = { 
  name: "Ryan", 
  age: 30, 
  location: "Toronto" 
} 

let key = "age"; 
let { [key] : keyAge } = person; 

console.log(keyAge); 


Working with Arrays 
let numbers = [1,2,3,4]; 
let [first,second] = numbers;  

console.log(first,second); 


let numbers = [1,2,3,4]; 
let [first,second,,fourth] = numbers; 

console.log(first,second,fourth); 

 
let [first,second,...theRest] = numbers; 
console.log(first,second,theRest); 

