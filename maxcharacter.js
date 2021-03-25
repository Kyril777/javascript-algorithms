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
