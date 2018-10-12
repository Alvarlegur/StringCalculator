//StringCalculator.js

var StringCalculator = {
  Add : function(numbers) {
    if (numbers == "") {
      return 0;
    }
    else {
      var numberArr = numbers.split(/,|\n/g);
      var sum = 0;
      if (numberArr.length == 1){
        sum = numberArr[0];
        return parseInt(sum);
        }
      else{
        for(i = 0; i < numberArr.length; i++){
        sum += parseInt(numberArr[i]);
        }
      }
    }
  return sum;
  }
};

module.exports = StringCalculator;
