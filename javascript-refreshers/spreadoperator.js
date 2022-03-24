/*Combining Arrays 
We can also use spread syntax to create new arrays using existing arrays. For example, to combine two arrays we could do this: */

const parents = ["Mark", "Vanessa"]; 
const kids = ['Jake', "Annie", "Maggie"]; 
const fullFamily = [...parents, ...kids]; 


/* We can use spread as many times as we want in a given expression: */

const parents = ["Lorie", "Steve"]; 
const kids = ['Jake', "Annie", "Jess"]; 
const dogs = ['Olie', 'Cosmo']; 

const fullFamily = [...parents, ...kids, "Me", ...dogs, "Unnamed Turtle"]; 


/* we can use spread to combine existing objects. */ 

const mainColors = {brightRed: "#e55039", waterfallBlue: "#38ada9"}; 
const accentColors = {lightGrey: "#778ca3", swanWhite: "#f7f1e3"}; 

const fullPalette = {...mainColors, ...accentColors}; 


/* We can add in a property.  */

const lion = {hasTail: true, legs: 4}; 
const eagle = {canFly: true }; 

const hybrid = {name: "Gryphon", ...lion, ...eagle}; 


/* Rather than mutating the todos array directly, we should instead make a copy of the todos array that also contains the newTodo added at the end. Spread makes this relatively easy. */

const todos = [ 
        {user: "Brick", completed: false, task: "Upload Video"}, 
        {user: "Lilith", completed: true, task: "Rob Bank"} 
] 

function addTodo(newTodo){ 
  return [...todos, {...newTodo, completed: false}] 
} 

const newTodos = addTodo({user: "Mordecai", task: "Feed Bloodwing"}); 
