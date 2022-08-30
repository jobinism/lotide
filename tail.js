const assertEqual = require('./assertEqual');

const tail = function(array) {
  let newArray;
  newArray = array.slice(1);
  console.log(newArray);
  // console.log(typeof newArray)
  return newArray;
};

module.exports = tail;
