/* Palindrome. */
const palindrome = string => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  const stringCharacters = string
    .toLowerCase()
    .split("")
    .reduce(
      (characters, character) =>
        letters.indexOf(character) > -1
          ? characters.concat(character)
          : characters,
      []
    );
  return stringCharacters.join("") === stringCharacters.reverse().join("");
};

const splitChars = string =>
  string
    .split("")
    .every((character, index) => character === string[string.length - 1 - index]);

const cleanPalindrome = string => {
  const cleaned = string.replace(/\W/g, "").toLowerCase();

  return (
    cleaned ===
    cleaned
      .split("")
      .reverse()
      .join("")
  );
};
