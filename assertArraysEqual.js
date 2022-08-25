const equalArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return `🛑Assertion Failed: ${array1} !== ${array2}🛑`;
    }
  }
  return `✅Assertion Passed: ${array1} === ${array2}✅`;
};

console.log(equalArrays([1, 2, 3], [1, 2, '3']));