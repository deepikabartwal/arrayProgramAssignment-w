const assert = require("assert");
const lib= require("./arrayProgramLib.js");
const sum = lib.sumOfAllNumbers;
const segregateEvenNumbers = lib.evenNumbers;
const segregateOddNumbers = lib.oddNumbers;
const reverseOrderOfNumbers = lib.reversedNumbers;
const alternateNumbers = lib.alternateNumbers;
const greatestNumber = lib.greatestNumber;
const lowestNumber = lib.lowestNumber;
const calculateAverage = lib.calculateAverage;

//two test for even number function.
assert.deepEqual(segregateEvenNumbers([]),[]);
assert.deepEqual(segregateEvenNumbers([6,7,8,9]),[6,8]);

//2odds.
assert.deepEqual(segregateOddNumbers([11,13,15,18]),[11,13,15]);
assert.deepEqual(segregateOddNumbers([1,5,3,4]),[1,5,3]);

//sum of all number testing
assert.equal(sum([1,2,3,4,5]),15);
assert.equal(sum([1,2,3,4,5,6,7,8,9,10]),55);

//reversed number array
assert.deepEqual(reverseOrderOfNumbers([1,2,3,4]),[4,3,2,1]);
assert.deepEqual(reverseOrderOfNumbers([11,12,13,14]),[14,13,12,11]);

//alternate numbers testing
assert.deepEqual(alternateNumbers([1,2,3,4]),[1,3]);
assert.deepEqual(alternateNumbers([2,1,4,3]),[2,4]);

//greatest number in array of number testing
assert.deepEqual(greatestNumber([]),undefined);
assert.deepEqual(greatestNumber([23,0,15,167]),167);

//lowest number in array of number testing
assert.deepEqual(lowestNumber([]),undefined);
assert.deepEqual(lowestNumber([2,0,9,5,10]),0);

//calculate average of all numbers in array
assert.deepEqual(calculateAverage([]),0);
assert.deepEqual(calculateAverage([1]),1);
