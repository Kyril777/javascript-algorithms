/* Palindrome. */

const palindromeChars = string => {
  const validChars = "abcdefghijklmnopqrstuvwxyz".split("");
  const stringChars = string
    .toLowerCase()
    .split("")
    .reduce(
      (chars, char) =>
        validChars.indexOf(char) > -1
          ? chars.concat(char)
          : chars,
      []
    );
  return stringChars.join("") === stringChars.reverse().join("");
};

const palindromeSplit = string =>
  string
    .split("")
    .every((char, index) => char === string[string.length - 1 - index]);

const palindromeCleaned = string => {
  const cleaned = string.replace(/\W/g, "").toLowerCase();

  return (
    cleaned ===
    cleaned
      .split("")
      .reverse()
      .join("")
  );
};
