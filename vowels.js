/* Vowels. */

const vowels = string => {
  let counter = 0;
  const choices = "aeiou"; // or ['a', 'e', 'i', 'o', 'u']
  
  for (let character of string.toLowerCase())
    if (choices.includes(character)) counter++;
  
  return count;
};

const _vowels = string => {
  matches = string.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
