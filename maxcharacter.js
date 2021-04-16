/* Maximum Character. */

const max = string => {
  const chars = {};

  for (let char of string)
    chars[char] = chars[char] + 1 || 1;

  let maxCount = 0;
  let maxChar = null;

  for (let char in chars) {
    if (chars[char] > maxCount) {
      maxCount = chars[char];
      maxChar = char;
    }
  }

  return maxChar;
};


/* Source: codegrepper.com/code-examples/javascript/javascript+max+characters+string+function*/
const maxChar = str => {
  let charCountObj = {};
  let maxChar = "";
  let maxCount = 0;

  //  Fill out CharCountObj
  //  Updates new MaxCount

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    charCountObj[char] = charCountObj[char] + 1 || 1;

    if (charCountObj[char] > maxCount) {
      maxChar = char;
      maxCount = charCountObj[char];
    }
  }

  return maxChar;
}

