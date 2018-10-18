const isNumberEven = function(number){
  return(number%2==0);
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
  return average;
}

exports.calculateAverage = calculateAverage;
exports.lowestNumber = lowestNumber;
exports.greatestNumber = greatestNumber;
exports.alternateNumbers = getAlternateNumbers;
exports.reversedNumbers = reverseElementOrder;
exports.evenNumbers = segregateEven;
exports.oddNumbers = segregateOdd;
exports.sumOfAllNumbers= addAllNumbers;
