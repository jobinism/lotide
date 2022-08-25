const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}✅`);
  } else {
    console.log(`🛑Asserion Failed: ${actual} !== ${expected}🛑`);
  }

};

const tail = function(array) {
  newArray = [];
  newArray.push(array.slice(1));
  return newArray;
};

console.log(tail([6, 7, 8]));