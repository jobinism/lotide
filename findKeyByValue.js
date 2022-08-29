const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}✅`);
  } else {
    console.log(`🛑Asserion Failed: ${actual} !== ${expected}🛑`);
  }

};




const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};


const findKeyByValue = function(obj, show) {
  for (let key in obj) {

    if (show === obj[key]) {
      return key;
    }
  }
  //console.log('key', 'series', keys, value)
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));