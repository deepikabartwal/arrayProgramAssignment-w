const isNumberEven = function(number){
  return(number%2==0);
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
  let evenNumbers = [];
  for(let index = 0; index<numbers.length; index++){
    if(isNumberEven(numbers[index])){
      evenNumbers.push(numbers[index]);
    }
  }
  return evenNumbers;
}

const segregateOdd = function(numbers){
  let oddNumbers = [];
  for(let index = 0; index<numbers.length; index++){
    if(!isNumberEven(numbers[index])){
      oddNumbers.push(numbers[index]);
    }
  }
  return oddNumbers;
}

const addAllNumbers = function(numbers){
  let sum = 0;
  for(let number of numbers){
    sum+=number;
  }
  return sum;
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
