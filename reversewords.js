/* Reverse words. */

let reverseWords = string => {
  let reversed = [];

  string.split(" ").forEach(word => {
    let reversed = "";
    for (let i = word.length - 1; i >= 0; i--) reversed += word[i];
    reversed.push(reversed);
  });

  return reversed.join(" ");
};
