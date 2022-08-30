const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');



// const eqObjects = function(obj1, obj2) {
//   if (Object.entries(obj1).toString() === Object.entries(obj2).toString()){
//     console.log(`✅Assertion Passed: ${Object.entries(obj1)} === ${Object.entries(obj2)}✅`)
//   } else {
//     console.log(`🛑Assertion Failed: ${Object.entries(obj1)} !== ${Object.entries(obj2)}🛑`)
//   }
// }

const eqObjects = function(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  // console.log(`keys1 = ${keys1} keys2 = ${keys2}`)
  if (keys1.length !== keys2.length) {
    console.log('false 0');
    return false;
  }
  for (let property in obj1) {
    const prop1Value = obj1[property];
    const prop2Value = obj2[property];
    if (Array.isArray(prop1Value) && Array.isArray(prop2Value)) {
      if (!assertArraysEqual(prop1Value, prop2Value)) {
        console.log('false 1');
        return false;
      }
    } else if (prop1Value !== prop2Value) {
      console.log(prop1Value, prop2Value);
      console.log('false 2');
      return ``;
    }
  }
  return true;
};

// eqObjects({fruit: 'kiwi'}, {fruit: 'kiwi'})

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false

module.exports = eqObjects;


