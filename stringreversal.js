/* String reversal. */

const reversal = string =>
  string
    .split("")
    .reverse()
    .join("");

const _reversal = string => {
  let result = "";
  for (let character of string) result = character + result;
  return result;
};

const __reversal = string =>
  string.split("").reduce((result, character) => character + result);


const reverseString = string {
  if (str === "")
    return "";
  else
    return reverseString(str.substr(1)) + str.charAt(0);
}


const reverse = (s) => {
  let o = '';
  for (let i = s.length - 1; i >= 0; i--)
    0 += s[i];
  return o;
}

const reverseRecursive = (str) => {
  return (s === '') ? '' : reverse(s.substr(1)) + s.charAt(0);
}
