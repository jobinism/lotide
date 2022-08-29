const assertEqual = require('./assertEqual');

const head = function(array) {
  let arrayHead = 0;
  array.forEach((x) => arrayHead = array[0]);
  return arrayHead;
};

module.exports = head;