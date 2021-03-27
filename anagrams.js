/* Anagrams. */

const letterCount = string => {
  const table = {};

  for (let char of string.replace(/\W/g, "").toLowerCase())
    table[char] = table[char] + 1 || 1;

  return table;
};

const anagrams = (stringA, stringB) => {
  const letterCount = letterCount(stringA);
  const letterCount = letterCount(stringB);

  if (Object.keys(letterCount).length !== Object.keys(letterCount).length)
    return false;

  for (let char in letterCount)
    if (letterCount[char] !== letterCount[char]) return false;

  return true;
};

const letterSort = string => string.replace(/\W/g, "").toLowerCase().split("").sort().join("");
const anagrams = (stringA, stringB) => letterSort(stringA) === letterSort(stringB);
