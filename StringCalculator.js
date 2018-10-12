//StringCalculator.js

function NegNum(theresANegativeNumber){
  if(theresANegativeNumber == true){
    throw new RangeError("Negatives not allowed: " + negStringList.ToString());
  }
}

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
          else{
            sum += parseInt(numberArr[i]);
          }
        }
        if(theresANegativeNumber){
          for(i = 0; i < negArr.length - 1; i++){
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
