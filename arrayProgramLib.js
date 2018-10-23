const isNumberEven = function(number){
  return(number%2==0);
}

const provideEven = function(number){
  if(isNumberEven(number)){
  return number;
  }
}

const provideOdd = function(number){
  if(!isNumberEven(number)){
    return number;
  }
}

const provideLength = function(text){
  return text.length;
}

const sum = function(number1,number2){
  return number1+number2;
}

const putInNewList = function(list){
  newList=[];
  for(let index = 0; index<list.length; index++){
    newList.push(list[index]);
  }
  return newList;
}

const isSmaller = function(number1,number2){
  return number1<number2;
}

const isGreater = function(number1,number2){
  if(number1>number2){
  return 1;
  }
  return 0;
}

const segregateEven = function(numbers){
  return numbers.filter(provideEven);
}

const segregateOdd = function(numbers){
  return numbers.filter(provideOdd);
}

const addAllNumbers = function(numbers){
  return numbers.reduce(sum,0);
}

const reverseElementOrder = function(numbers){
  let reverseOrderNUmber = [];
  for(let index = numbers.length-1;index>=0;index--){
    reverseOrderNUmber.push(numbers[index]);
  }
  return reverseOrderNUmber
}

const getAlternateNumbers = function(numbers){
  alternateNumbers = [];
  for(let index =0;index<numbers.length;index+=2){
    alternateNumbers.push(numbers[index]);
  }
  return alternateNumbers;
}

const greatestNumber = function(numbers){
  let greatestNumberCandidate = numbers[0];
  for(number of numbers){
    if(greatestNumberCandidate<number){
      greatestNumberCandidate=number;
    }
  }
  return greatestNumberCandidate;
}

const lowestNumber = function(numbers){
  let lowestNumberCandidate = numbers[0];
  for(number of numbers){
    if(lowestNumberCandidate>number){
      lowestNumberCandidate=number;
    }
  }
  return lowestNumberCandidate;
}

const calculateAverage = function(numbers){
  average = addAllNumbers(numbers)/numbers.length;
  if(numbers.length==0){
    return 0;
  }
  return average;
}

const mapLengthOfNames =function(names){
  lengths=[];
  for(name of names){
    lengths.push(name.length);
  }
  return lengths;
}

const countEvenNumbers = function(numbers){
  let numbersOfEvenNumbers = 0;
  for(number of numbers){
    if(isNumberEven(number)){
      numbersOfEvenNumbers++;
    }
  }
  return numbersOfEvenNumbers;
}

const countOddNumbers = function(numbers){
  let numbersOfOddNumbers = 0;
  for(number of numbers){
    if(!isNumberEven(number)){
      numbersOfOddNumbers++;
    }
  }
  return numbersOfOddNumbers;
}

const countNumbersAboveThreshold = function(numbers,thresholdValue){
  let numbersAboveThreshold = 0;
  for(number of numbers){
    if(number>thresholdValue){
      numbersAboveThreshold++;
    }
  }
  return numbersAboveThreshold;
}

const countNumbersBelowThreshold = function(numbers,thresholdValue){
  let numbersBelowThreshold = 0;
  for(number of numbers){
    if(number<thresholdValue){
      numbersBelowThreshold++;
    }
  }
  return numbersBelowThreshold;
}

const findPositionOfNumber = function(numberList,givenNumber){
  for(let position =0; position<numberList.length;position++){
    if(numberList[position]==givenNumber){
      return position;
    }
  }
  return -1;
}

const isInAscendingOrder = function(numberList){
  for( let index = 0;index<numberList.length-1;index++){
    if(numberList[index]>numberList[index+1]){
      return false;
    }
  }
  return true;
}

const isInDescendingOrder = function(numberList){
  for( let index =0; index<numberList.length-1; index++){
    if(numberList[index]<numberList[index+1]){
      return false;
    }
  }
  return true;
}


const extractDigits = function(number){
  givenNumber=number.toString();
  digits=[];
  for(let index =0; index<givenNumber.length;index++){
    digits.push(givenNumber[index]%10);
  }
  return digits;
}

const zipElements = function(list1,list2){
  limit = Math.min(list1.length,list2.length);
  zippingResult = [];
  for(let index =0; index<limit;index++){
    zippingResult.push([list1[index],list2[index]]);
  }
  return zippingResult;
}

const rotate = function(list,limit){
  listToBeRotated = putInNewList(list);
  rotatedArray = listToBeRotated.splice(limit);
  for(let count = 0; count < limit; count++){
    if(list.length>0){
      rotatedArray.push(list[count]);
    }
  }
  return rotatedArray;
}

const createPartition = function(numbers,limit){
  partitionList=[[],[]];
  for(let index = 0;index<numbers.length;index++){
    partitionList[isGreater(numbers[index],limit)].push(numbers[index]);
  }
  return partitionList;
}

const obtainIntersection = function(numberList1,numberList2){
  intersection =[];
  listForMatching = [];
  for(let number of numberList1){
    listForMatching[number] = number;
  }
  for(let number of numberList2){
    if(listForMatching[number]==number){
      intersection.push(number);
    }
  }
  return intersection;
}

const obtainDifference = function(list1,list2){
  difference =[];
  listUsedForMatching =[];
  for(let index = 0; index<list2.length; index++){
    listUsedForMatching[list2[index]]=list2[index];
  }
  for(let index = 0; index<list1.length; index++){
    if(listUsedForMatching[list1[index]]!=list1[index]){
      difference.push(list1[index]);
    }
  }
  return difference;
}

const isSubset = function(superset,subsetCandidate){
  for(let index = 0; index<subsetCandidate.length; index++){
    if(findPositionOfNumber(superset,subsetCandidate[index])==-1){
      return false;
    }
  }
  return true;
}

const obtainUnique = function(list){
  uniqueList = [];
  for( let index = 0;index<list.length;index++){
    if(findPositionOfNumber(uniqueList,list[index])==-1){
      uniqueList.push(list[index]);
    }
  }
  return uniqueList;
}

const createUnion = function(set1,set2){
  mergeOfTwoSets = set1.concat(set2);
  unionSet = [];
  for(index = 0;index<mergeOfTwoSets.length; index++){
    if(findPositionOfNumber(unionSet,mergeOfTwoSets[index])==-1){
      unionSet.push(mergeOfTwoSets[index]);
    }
  }
  return unionSet;
}

exports.createUnion = createUnion;
exports.obtainUnique = obtainUnique;
exports.obtainDifference = obtainDifference;
exports.isSubset = isSubset;
exports.obtainIntersection = obtainIntersection;
exports.createPartition = createPartition;
exports.rotate = rotate;
exports.zipElements = zipElements;
exports.extractDigits = extractDigits;
exports.isInAscendingOrder = isInAscendingOrder;
exports.isInDescendingOrder = isInDescendingOrder;
exports.findPositionOfNumber = findPositionOfNumber;
exports.countNumbersBelowThreshold = countNumbersBelowThreshold;
exports.countNumbersAboveThreshold = countNumbersAboveThreshold;
exports.countOddNumbers = countOddNumbers;
exports.countEvenNumbers = countEvenNumbers;
exports.mapLengthOfNames = mapLengthOfNames;
exports.calculateAverage = calculateAverage;
exports.lowestNumber = lowestNumber;
exports.greatestNumber = greatestNumber;
exports.alternateNumbers = getAlternateNumbers;
exports.reversedNumbers = reverseElementOrder;
exports.evenNumbers = segregateEven;
exports.oddNumbers = segregateOdd;
exports.sumOfAllNumbers= addAllNumbers;
