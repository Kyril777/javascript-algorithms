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



/* Anagrams. Source: dailysmarty.com. */

const stringCleaner = str => {
  const strWithoutCharacters = str.replace(/[^A-Z0-9]/gi, "");
  return strWithoutCharacters.toLowerCase();
};

const buildCharacterMap = str => {
  const chars = str.split("");

  const charMap = chars.reduce((obj, char) => {
    obj[char] ? obj[char]++ : (obj[char] = 1);
    return obj;
  }, {});

  return charMap;
};

const isEqual = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  for (let objKey of obj1Keys) {
    if (obj1[objKey] !== obj2[objKey]) {
      return false;
    }
  }

  return true;
};

const str1 = buildCharacterMap(stringCleaner("Jim Morrison"));
const str2 = buildCharacterMap(stringCleaner("Mr. Mojo Risin'"));

isEqual(str1, str2); //?

const isAnagram = (str, comparisonStr) => {
  const strObj = buildCharacterMap(stringCleaner(str));
  const comparisonStrObj = buildCharacterMap(stringCleaner(comparisonStr));

  return strObj === comparisonStrObj;
};
