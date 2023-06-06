/* JS function that uses a foor loop to find the largest digit. */

const largest_digit = (arr) => {
	let largest = arr[0];
	for(var i=0;i<arr.length;i++){
		largest = arr[i]>largest ? arr[i]:largest; 
	}
	return largest;
}

let array = [4, 54, 33, 92, 14, 227, 101, 369, 64]; 
let result = largest_digit(array);
console.log(result) // 369
