const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}✅`);
  } else {
    console.log(`🛑Asserion Failed: ${actual} !== ${expected}🛑`);
  }

};

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