const assertEqual = require('./assertEqual');


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


module.exports = findKey;