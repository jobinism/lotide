const words = ["ground", "control", "to", "major", "tom"];


const myMap = (array, callback) => {
  const output = [];
  array.forEach((element) => {

    const returnVal = callback(element);


    output.push(returnVal);
  });



  return output;
};

console.log(myMap(words, (word) => {
  return word.toUpperCase();
}));