module.exports = function toReadable (number) {
  
    let result;
    // let units = (number % 10);
    let decimal = (number%100);
    let hundreds = (Math.trunc(number/100));
  
    if(number == 0){
      result = reply(number);
    }else if(0 < number && number < 20){
          result = reply(number);
    } else if(20 <= number && number < 100){
      if(decimal%10 == 0){
        result = decim(Math.trunc(decimal/10));
      } else {
        result = decim(Math.trunc(decimal/10)) + ' ' + reply(decimal%10);
        }
      } else if(100 <= number && number < 1000){
        if(number%100 == 0){
          result = reply(hundreds) + ' hundred';
        } else if (0 < number%100 &&  number%100 < 20){
          result = reply(hundreds) + ' hundred' + ' ' + reply(number%100);
          } else if(decimal%10 == 0){
            result = reply(hundreds) + ' hundred' + ' ' + decim(Math.trunc(decimal/10));
            }else{
             result = reply(hundreds) + ' hundred' + ' ' + decim(Math.trunc(decimal/10)) + ' ' + reply(decimal%10);
             }
       }
    return result;
  }
  
  function reply(x){
      let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 
      'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
      return arr[x];
    };
  
  function decim(x){
    let arr = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    return arr[x];
  };

  
