const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const letterPositions = require('./letterPositions');
const myMap = require('./myMap');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue')
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const takeUntil = require('./takeUntil');
const without = require('./without');
const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');
const assertObjectsEqual = require('./assertObjectsEqual');

module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  countLetters: countLetters,
  countOnly: countOnly,
  letterPositions: letterPositions,
  myMap: myMap,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  takeUntil: takeUntil,
  without: without,
  assertEqual: assertEqual,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
};