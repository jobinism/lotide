const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
//We want to find out which items are truthy and add them to
//results
//loop through itemsToCount
//find each item # of occurence

//add that item to our results object w/ its count

const countOnly = function(allItems, itemsToCount) {
  let results = {};
  Object.entries(itemsToCount).forEach(([key, value]) => {
    console.log(key, value);
    if (value === true) {
      let counter = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === key) {
          counter ++;
          console.log('counter', counter);
        }
      }
      if (counter > 0) {
        results[key] = counter;
      }
      
    }
  });

  
  

  console.log('results', results);
  return results;
};
module.exports = countOnly;