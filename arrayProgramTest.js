let assert = require("assert");
let lib= require("./arrayProgramLib.js");
let sum = lib.sumOfAllNumbers;
let segregateEvenNumbers = lib.evenNumbers;
let segregateOddNumbers = lib.oddNumbers;
let reverseOrderOfNumbers = lib.reversedNumbers;
let alternateNumbers = lib.alternateNumbers;
let greatestNumber = lib.greatestNumber;
let lowestNumber = lib.lowestNumber;

//2 evens
assert.deepEqual(segregateEvenNumbers([1,2,3,4]),[2,4]);
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
