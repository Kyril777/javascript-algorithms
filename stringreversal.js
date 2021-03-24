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
