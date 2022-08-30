const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

const countLetters = function(letters) {
  sentence = {};
  counter = 0;
  for (let i = 0; i < letters.length; i++) {
    let character = letters.charAt(i);
    if (sentence[character] && letters[i] !== ' ') {
      sentence[character]++;
    } else {
      sentence[character] = 1;

    }
  }
  return sentence;
};

console.log(countLetters("lighthouse labs is great"));

module.exports = countLetters;