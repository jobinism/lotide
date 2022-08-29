const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual} === ${expected}✅`);
  } else {
    console.log(`🛑Asserion Failed: ${actual} !== ${expected}🛑`);
  }

};
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

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


// // We have a list of names in our code
// //
// //We want to read all the names and pick out the
// // ones that are 'truthy'
// //
// //We want our code to make a count of all the truthy names and
// // ignore the falsey ones

