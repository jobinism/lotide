const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}✅`);
  } else {
    console.log(`🛑Asserion Failed: ${actual} !== ${expected}🛑`);
  }

};


const findKey = function(obj, callback) {
  for (let key in obj) {
    let target = obj[key];
    // console.log(target)
    let compResult = callback(target);
    console.log;
    if (compResult) {
      return key;
    }

  }
  //console.log('key', 'series', keys, value)
};


console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2));