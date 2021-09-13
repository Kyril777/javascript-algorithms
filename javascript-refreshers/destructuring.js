Destructuring from Ryan Christiani 

 

Destructuring is a way for us to extract data from different structures like arrays and objects. It picks and chooses the values we want. 

 

Code @ 2:34. 

let person = { 

  name: "Ryan", 

  age: 30, 

  location: "Toronto" 

} 

 

person.age; 

person["age"]; 

let { age: personAge } = person; 

 

console.log(personAge); 

 

Result: 

30 

 

Detail: let{age:personAge} = person; 

Take a look at {age:personAge}. This here is our destructuring expression. First thing inside of that expression, on the left is the key that we want to grab the value from. On the right of that key is the new variable that we’re trying to create.  

 

And on the right hand side of the declaration, person, is the object that we’re trying to take the values from.  

 

All what we’re doing is extracting data from a previously-established object and create a new object with that extracted data. 

 

Code @ 4:11. 

let person = { 

  		name: "Ryan", 

  		age: 30, 

  		location: "Toronto" 

} 

 

person.age; 

person["age"]; 

let { age , location: currentLocation } = person; 

 

console.log(age, currentLocation); 

 

Result: 

30 

“Toronto” 

 

Same principle but we’re not assigning a variable to age. By the way, this is a bad practice as age is a global value inside of the browser. And when you assign something next to that, it affects the browser.  

 

Code @ 5:36. 

let person = { 

  name: "Ryan", 

  age: 30, 

  location: "Toronto" 

} 

 

let key = "age"; 

 

let { [key] : keyAge } = person; 

 

console.log(keyAge); 

 

Result: 

30 

 

We can actually assign a property within the square brackets. 

1. We’ve created an object with a string of age. 

2. We’ve created another object using our destructuring expression. 

- using the square brackets, the “age” string becomes a kind of “property-searching” element. 

- since we’ve assigned it to the person object, the destructuring expression will look for the ‘age’ property in the animal object. 

- finally, it will assign the ‘age’ value into the keyAge variable. 

 

Working with Arrays 

Code @ 7:26 

let numbers = [1,2,3,4]; 

 

let [first,second] = numbers; 

 

console.log(first,second); 

 

Result: 

1 

2 

 

In order to extract values from an array, we create an object, use the square brackets (which denote the array), identify the element we want to include in the array and assign keywords inside of the bracket. Remember that the keywords are just that: keywords. You can assign the word ‘second’ as the first element but it will still hold the first element from the original array.  

 

The neat thing about arrays in destructuring is that you can skip properties. Don’t put anything, just add another comma. 

Code @ 8:02. 

let numbers = [1,2,3,4]; 

let [first,second,,fourth] = numbers; 

console.log(first,second,fourth); 

 

Result: 

1 

2 

4 

 

If you have a pretty long array, just use the theRest operator. 

Code @ 8:32. 

 

let [first,second,...theRest] = numbers; 

console.log(first,second,theRest); 

 

Result: 

1 

2 

[3, 4] 
