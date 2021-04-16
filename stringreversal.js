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
