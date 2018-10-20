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
const mapLengthOfNames = lib.mapLengthOfNames;
const countEvenNumbers = lib.countEvenNumbers;
const countOddNumbers = lib.countOddNumbers;
const countNumbersAboveThreshold = lib.countNumbersAboveThreshold;
const countNumbersBelowThreshold = lib.countNumbersBelowThreshold;
const findPositionOfNumber = lib.findPositionOfNumber;
const isInAscendingOrder = lib.isInAscendingOrder
const isInDescendingOrder = lib.isInDescendingOrder;
const extractDigits = lib.extractDigits;
const zipElements = lib.zipElements;
const rotate = lib.rotate;
const createPartition = lib.createPartition;

//two test for even number function.
assert.deepEqual(segregateEvenNumbers([]),[]);
assert.deepEqual(segregateEvenNumbers([6,7,8,9]),[6,8]);
console.log("tests for segregating even numbers passed");

//2odds.
assert.deepEqual(segregateOddNumbers([11,13,15,18]),[11,13,15]);
assert.deepEqual(segregateOddNumbers([1,5,3,4]),[1,5,3]);
console.log("tests for segregating odd numbers passed")

//sum of all number testing
assert.equal(sum([1,2,3,4,5]),15);
assert.equal(sum([1,2,3,4,5,6,7,8,9,10]),55);
console.log("tests for adding all numbers in list passed");

//reversed number array
assert.deepEqual(reverseOrderOfNumbers([1,2,3,4]),[4,3,2,1]);
assert.deepEqual(reverseOrderOfNumbers([11,12,13,14]),[14,13,12,11]);
console.log("tests for reversing numbers in list passed");

//alternate numbers testing
assert.deepEqual(alternateNumbers([1,2,3,4]),[1,3]);
assert.deepEqual(alternateNumbers([2,1,4,3]),[2,4]);
console.log("test for selecting alternate numbers in list passed");

//greatest number in array of number testing
assert.deepEqual(greatestNumber([]),undefined);
assert.deepEqual(greatestNumber([23,0,15,167]),167);
console.log("tests for finding greatest number in list passed");

//lowest number in array of number testing
assert.deepEqual(lowestNumber([]),undefined);
assert.deepEqual(lowestNumber([2,0,9,5,10]),0);
console.log("tests for finding lowest number in list passed");

//calculate average of all numbers in array
assert.deepEqual(calculateAverage([]),0);
assert.deepEqual(calculateAverage([1]),1);
console.log("tests for calculating average of list of numbers passed");

//testing lengths of names in given list of names
assert.deepEqual(mapLengthOfNames([]),[]);
assert.deepEqual(mapLengthOfNames(["a"]),[1]);
console.log("tests for lengths of names in list of names passed");

//testing even number counting function
assert.deepEqual(countEvenNumbers([]),0);
assert.deepEqual(countEvenNumbers([1,3]),0);
assert.deepEqual(countEvenNumbers([1,2,4]),2);
assert.deepEqual(countEvenNumbers([22,13,45,16,18,2]),4);
console.log("tests for counting even numbers in a given list passed");

// tests for countOddNumbers function
assert.deepEqual(countOddNumbers([]),0);
assert.deepEqual(countOddNumbers([2,4]),0);
assert.deepEqual(countOddNumbers([1,3]),2);
assert.deepEqual(countOddNumbers([22,13,45,23,16,19,2]),4);
console.log("tests for counting odd numbers in given list passed");

// test for counting numbers above threshold value
assert.deepEqual(countNumbersAboveThreshold([],1),0);
assert.deepEqual(countNumbersAboveThreshold([0],1),0);
assert.deepEqual(countNumbersAboveThreshold([1,3],1),1);
assert.deepEqual(countNumbersAboveThreshold([1,2,3],1),2);
assert.deepEqual(countNumbersAboveThreshold([2,3,4,5],1),4);
console.log("tests for counting numbers above threshold value in list");

// test for counting numbers below threshold value
assert.deepEqual(countNumbersBelowThreshold([],1),0);
assert.deepEqual(countNumbersBelowThreshold([4],1),0);
assert.deepEqual(countNumbersBelowThreshold([1,3],2),1);
assert.deepEqual(countNumbersBelowThreshold([1,2,3],2),1);
assert.deepEqual(countNumbersBelowThreshold([2,3,4,5],6),4);
console.log("tests for counting numbers below threshold value in list");

//test for finding position of number in given number list
assert.deepEqual(findPositionOfNumber([],0),-1)
assert.deepEqual(findPositionOfNumber([1],0),-1);
assert.deepEqual(findPositionOfNumber([1,2],1),0);
assert.deepEqual(findPositionOfNumber([1,3,2,5,],2),2);
assert.deepEqual(findPositionOfNumber([1,2,3,9,8,7,4,6,5],8),4);
console.log("tests for finding position of number in given list passed");

//tests for checking if given number list is in ascending order
assert.equal(isInAscendingOrder([]),true);
assert.equal(isInAscendingOrder([1,2]),true);
assert.equal(isInAscendingOrder([2,1]),false);
assert.equal(isInAscendingOrder([1,3,5,7]),true);
assert.equal(isInAscendingOrder([1,2,5,3,7]),false);
console.log("tests for checking if list is in ascending order");

//tests for checking if given number list is in descending order
assert.equal(isInDescendingOrder([]),true);
assert.equal(isInDescendingOrder([1,2]),false);
assert.equal(isInDescendingOrder([2,1]),true);
assert.equal(isInDescendingOrder([4,3,2,1,0]),true);
console.log("tests for checking if the given list is in descending order passed");

//tests for extractingDigits from a given number
assert.deepEqual(extractDigits([]),[]);
assert.deepEqual(extractDigits(1),[1]);
assert.deepEqual(extractDigits(14),[1,4]);
assert.deepEqual(extractDigits(123),[1,2,3]);
assert.deepEqual(extractDigits(2468),[2,4,6,8]);
console.log("tests for extracting digits out of numbers passed");

//tests for zipping elements of two lists
assert.deepEqual(zipElements([],[]),[]);
assert.deepEqual(zipElements([],[1]),[]);
assert.deepEqual(zipElements([1],[2]),[[1,2]]);
assert.deepEqual(zipElements([1],[2,3]),[[1,2]]);
assert.deepEqual(zipElements([1,2],[3,4]),[[1,3],[2,4]]);
assert.deepEqual(zipElements([1,2,3],[4,5]),[[1,4],[2,5]]);
assert.deepEqual(zipElements([1,2,3],[4,5,6]),[[1,4],[2,5],[3,6]]);
console.log("tests for zipping elements of two arrays passed");

//tests for rotating list 
assert.deepEqual(rotate([],1),[]);
assert.deepEqual(rotate([1],1),[1]);
assert.deepEqual(rotate(["a","b","c"],2),["c","a","b"]);
assert.deepEqual(rotate([1,2,3,4,5],2),[3,4,5,1,2]);
assert.deepEqual(rotate(["ram","shyam","sita","radha"],1),["shyam","sita","radha","ram"]);
assert.deepEqual(rotate(["this","is","an","array","i","made","right","now"],2),["an","array","i","made","right","now","this","is"]);
console.log("test for rotating list elements are passing");

//test for function to create partition for numbers above and below a given value
assert.deepEqual(createPartition([],1),[[],[]]);
assert.deepEqual(createPartition([1,2],1),[[1],[2]]);
assert.deepEqual(createPartition([1],1),[[1],[]]);
assert.deepEqual(createPartition([1,2,3,4,5],3),[[1,2,3],[4,5]]);
assert.deepEqual(createPartition([22,13,41,56,87,95,79,68,2,102],50),[[22,13,41,2],[56,87,95,79,68,102]]);
console.log("test for partitioning passed");
