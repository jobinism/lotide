const equalArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return `🛑Assertion Failed: ${array1} !== ${array2}🛑`
    } 
    }
    return `✅Assertion Passed: ${array1} === ${array2}✅`
  }

const middle = function(array) {
  let middleVal = [];
  if (array.length <= 2) {
    return middleVal
  } else if (array.length % 2 == 1) {
    middleVal.push(array[Math.floor(array.length /2)])
    return middleVal
  } else if (array.length % 2 == 0) {
    middleVal.push(array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length /2)])
    return middleVal;

  }

  // if array.length is <= 2 return []
// else if array.length % 2 == 1
// else if array.length % 2 == 0 ==> Math.floor && math.floor - 1
// array[Math.floor(array.length /2)];
}

console.log(middle(['word1', 'word2', 'word3', 'word4']))