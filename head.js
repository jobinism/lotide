const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}✅`);
  } else {
    console.log(`🛑Asserion Failed: ${actual} !== ${expected}🛑`);
  }

};

const head = function(array) {
  let arrayHead = 0;
  array.forEach((x) => arrayHead = array[0]);
  return arrayHead;
};


assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");