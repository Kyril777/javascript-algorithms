/* Ransom note. */

let ransom = (note, manuscript) => {
  let manuscriptWords = manuscript.split(" ");
  let manuscriptHash = {};

  manuscriptWords.forEach(word => {
    if (!manuscriptHash[word]) manuscriptHash[word] = 0;
    manuscriptHash[word]++;
  });

  let noteWords = note.split(" ");
  let possible = true;

  noteWords.forEach(word => {
    if (manuscriptHash[word]) {
      manuscriptHash[word]--;
      if (manuscriptHash[word] < 0) possible = false;
    } else possible = false;
  });

  return possible;
};
