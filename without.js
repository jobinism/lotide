const assertEqual = require('./assertEqual');

const without = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        array1.splice(array2[j]);
        return array1;
      }
    }
  }
};

console.log(without(['1', '2', '3'], [1, 2, '2']));

module.exports = without;