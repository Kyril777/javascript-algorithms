/* Staircase. */

const staircase = (num) => {
  let filledArray = new Array(num).fill(' ');    
  while (filledArray.indexOf(' ') !== -1) {
        filledArray.shift();
        filledArray.push('#');
        console.log(filledArray.join(""));
        num--;
    }
}

const steps = number => {
  let stairs = "";

  for (let row = 0; row < number; row++) {
    let stair = "";

    for (let column = 0; column < number; column++)
      stair += column <= row ? "#" : " ";

    stairs += stair + "\n";
  }

  return stairs;  
};

const _steps = (number, row = 0, stair = "", stairs = "") => {
  if (row === number) return stairs;

  if (stair.length === number)
    return _steps(number, row + 1, "", stairs + stair + "\n");

  return _steps(number, row, stair + (stair.length <= row ? "#" : " "), stairs);
};
