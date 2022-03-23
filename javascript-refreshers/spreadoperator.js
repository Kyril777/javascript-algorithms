/*Combining Arrays 
We can also use spread syntax to create new arrays using existing arrays. For example, to combine two arrays we could do this: */

const parents = ["Lorie", "Steve"]; 
const kids = ['Jake', "Annie", "Jess"]; 
const fullFamily = [...parents, ...kids]; 


/* We can use spread as many times as we want in a given expression: */
const parents = ["Lorie", "Steve"]; 
const kids = ['Jake', "Annie", "Jess"]; 
const dogs = ['Olie', 'Cosmo']; 

const fullFamily = [...parents, ...kids, "Me", ...dogs, "Unnamed Turtle"]; 
