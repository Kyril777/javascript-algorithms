/* Capitalization. */ 

const capitalizeOne = sentence => {
  const words = [];

  for (let word of sentence.split(" "))
    words.push(word[0].toUpperCase() + word.slice(1));

  return words.join(" ");
};

const capitalizeTwo = sentence => {
  let result = sentence[0].toUpperCase();

  for (let i = 1; i < sentence.length; i++)
    result += sentence[i - 1] === " " ? sentence[i].toUpperCase() : sentence[i];

  return result;
};
