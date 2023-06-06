/* JS function that uses nested "for" loops and increment operation to search for number for zeros in 2d matrix. */

const find_zeroes = (array) => {
	let zeroCount = 0;
	for(var i=0;i<arr.length;i++){
		for(var j=0;j<arr[0].length;j++){
			zeroCount = arr[i][j]==0 ? zeroCount+1 : zeroCount; 
		}
	}
  return zeroCount;
}
var arr = [[0,0,1],[1,1,1],[1,0,1]];
const result = find_zeroes(arr);

console.log(result) // 3
