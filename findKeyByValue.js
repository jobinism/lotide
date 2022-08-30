const assertEqual = require('./assertEqual');





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


module.exports = findKeyByValue;