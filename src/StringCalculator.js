//StringCalculator.js
var StringCalculator = {
  Add : function(numbers) {
    if (numbers == "") {
      return 0;
    }
    else {
      var numberArr = numbers.split(/,|\n/g);
      var sum = 0;
      var theresANegativeNumber = false;
      var negCounter = 0;
      var negStringList = [];
      var negArr = [];
      if (numbers.startsWith("//"))
      {
        var delimiter = numbers.charAt(2);
        var skip = numbers.substring(4);
        var numArr = skip.split(delimiter);
        var numSum = 0;
        for(i = 0; i < numArr.length; i++){
          numSum += parseInt(numArr[i]);
        }
        return numSum;
      }
      if (numberArr.length == 1){
        sum = numberArr[0];
        return parseInt(sum);
        }
      else{
        for(i = 0; i < numberArr.length; i++){
          if(numberArr[i] < 0){
            negArr[negCounter] = numberArr[i];
            negCounter++;
            theresANegativeNumber = true;
            }
          else if(numberArr[i] < 1000){
            sum += parseInt(numberArr[i]);
          }
        }
        if(theresANegativeNumber){
          for(i = 0; i < negArr.length -1 ; i++){
            negStringList[i] += negArr[i] + ",";
            }
          negStringList += negArr[negArr.length - 1];
          return "Negatives not allowed: " + negStringList;
        }
      }
    }
  return sum;
  }
};

module.exports = StringCalculator;
