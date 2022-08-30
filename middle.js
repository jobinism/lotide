const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual')

const middle = function(array) {
  let middleVal = [];
  if (array.length <= 2) {
    return middleVal;
  } else if (array.length % 2 == 1) {
    middleVal.push(array[Math.floor(array.length / 2)]);
    return middleVal;
  } else if (array.length % 2 == 0) {
    middleVal.push(array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]);
    return middleVal;

  }

  // if array.length is <= 2 return []
// else if array.length % 2 == 1
// else if array.length % 2 == 0 ==> Math.floor && math.floor - 1
// array[Math.floor(array.length /2)];
};


module.exports = middle;