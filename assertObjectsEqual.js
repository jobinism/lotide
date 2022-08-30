const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

const assertObjectsEqual = function(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  // console.log(`keys1 = ${keys1} keys2 = ${keys2}`)
  if (keys1.length !== keys2.length) {
    console.log('false 0');
    return `🛑Assertion Failed: ${Object.entries(obj1)} !== ${Object.entries(obj2)}🛑`;
  }
  for (let property in obj1) {
    const prop1Value = obj1[property];
    const prop2Value = obj2[property];
    if (Array.isArray(prop1Value) && Array.isArray(prop2Value)) {
      if (!eqArrays(prop1Value, prop2Value)) {
        console.log('false 1');
        return `🛑Assertion Failed: ${Object.entries(obj1)} !== ${Object.entries(obj2)}🛑`;
      }
    } else if (prop1Value !== prop2Value) {
      console.log(prop1Value, prop2Value);
      console.log('false 2');
      return `🛑Assertion Failed: ${Object.entries(obj1)} !== ${Object.entries(obj2)}🛑`;
    }
  }
  return `✅Assertion Passed: ${Object.entries(obj1)} === ${Object.entries(obj2)}✅`;
};


module.exports = assertObjectsEqual;