// The do-while loop is just a variant of the while loop. The only difference is that the loop ill execute the code block at least once before checking if the condition is true,
const myArray = ["a", "b", "c"];

let i = 0;
do {
    console.log(`index: ${i}, value: ${myArray[i]}`);
        i++;
}
while(i<myArray.length);
 
